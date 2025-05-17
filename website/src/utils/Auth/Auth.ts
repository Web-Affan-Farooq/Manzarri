import sanityClient from "@/lib/sanity";
import SignupSchema from "@/validations/SignupSchema";
import { cookies } from "next/headers";

/* ___Importing packages  ... */
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";
import LoginSchema from "@/validations/LoginSchema";

/* ___ Interface for auth class */
interface Authentication {
    name?: string;
    email: string;
    password: string;
    secret?: string | undefined;
    VerifyUser(): Promise<{ message: string; success: boolean } | {
        success: boolean, user: {
            userName: string;
            userPassword: string;
            userEmail: string;
            _id: string;
        }
    }>;
    Signup(): Promise<{ message?: string; success: boolean } | {
        message?: string;
        success: string;
        autoLogin: true;
    }>;

    Login(): Promise<
        { message?: string; success: boolean } |
        {
            message: string;
            success: true;
            user: {
                _id: string;
                userName: string;
                userPassword: string;
                userEmail: string;
            };
        }
    >;
}

/* ____ Auth class 
 -- contains nessessasy authentication functions for jwt token based authentication ...
*/

class AUTH implements Authentication {
    name?: string;
    email: string;
    password: string;
    secret?: string | undefined;

    constructor(email: string, password: string, name?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.secret = process.env.jWT_SECRET_TOKEN;
    }
    VerifyUser = async () => {
        const q = `*[_type == "Accounts" && userEmail == "${this.email}"] {
        _id,
        userEmail,
        userPassword,
        userName,
        }`;
        const response = await sanityClient.fetch(q);

        if (response.length === 0) {
            return { success: false, message: "User not found" };
        }

        // user found
        const user = response[0];
        return { success: true, user: user.user, };
    }

    /* Async function for verifying token */
    // async VerifyToken() {
    //     const clientCookies = await cookies();
    //     const token = clientCookies.get("manzarri-authorization-token")?.value;
    //     if (token && this.secret) {
    //         const result = jwt.verify(token, this.secret);
    //         console.log("line 54 (Auth.ts) .  Extracted result from token : ", result);
    //     }
    // }

    /* Async function for generating authorization token */
    async GenerateToken() {
        const clientCookies = await cookies();
        if (this.secret) {
            const token = jwt.sign({ email: this.email, }, this.secret, { expiresIn: '1h' });
            clientCookies.set("manzarri-authorization-token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
                sameSite: "lax"
            });
            return {
                message: "Successfully authorized",
                success: true,
            }
        }
        else {
            return {
                message: "Missing enviroment variable JWT_SECRET_TOKEN",
                success: false,
            }
        }
    }

    /* ______ Signup method ... */
    async Signup() {

        /* ____ First verify user from database ... */
        const userAlreadyExists = await this.VerifyUser();
        if (userAlreadyExists.success) {
            return {
                message: "User already exists",
                success: false,
            }
        }

        /* ____Function for hashing password ... */
        const HashPassword = async () => {
            const hashPassword = bcrypt.hash(this.password, 10);
            return hashPassword;
        }

        /* Function for sanitization of data ... */
        const sanitize = async (data: { name: string; email: string; password: string }) => {
            const result = SignupSchema.safeParse(data);
            if (result.success) {
                return { success: true };
            } else {
                // console.log("All errors : ", result.error.errors);      
                return {
                    message: result.error.errors[0]?.message || "Validation error",
                    success: false,
                };
            }
        };

        /* _____ Funcion for creating account ... */
        const createAccount = async ({ name, email, password }: { name: string; email: string; password: string }) => {
            const data = await sanitize({ name: name, email: email, password: password });
            // console.log("Data after sanitization : ", data);

            if (!data?.success) {
                return {
                    success: false,
                    message: data?.message,
                }
            }

            /* _____ hashing password ... */
            const hashed = await HashPassword();

            /* replacing password with hashed password */
            [name, email, password] = [name, email, hashed]

            const user = {
                _type: "Accounts",
                userName: name,
                userPassword: password,
                userEmail: email,
            }
            // console.log("Final user : ", user);            

            try {
                await sanityClient.create(user);
                return {
                    success: true,
                    message: "Account created successfully",
                }
            }
            catch (err) {
                return {
                    success: false,
                    message: "Error while processing signup ",
                }
            }
        }

        if (this.name) {
            return createAccount(
                {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }
            )
        }

        else {
            return {
                success: false,
                message: "Name is required to use signup function"
            }
        }

    }

    Login = async () => {

        /* Function for sanitization of data ... */
        const sanitize = async (data: { email: string; password: string }) => {
            const result = LoginSchema.safeParse(data);
            if (result.success) {
                return { success: true };
            } else {
                // console.log("All errors : ", result.error.errors);     
                const ErrorMessage = result.error.errors[0].message;
                return {
                    message: result.error.errors[0]?.message || "Validation error",
                    success: false,
                };
                /* no return on else case */
            }
        };

        /* sanitize data and check for errors */
        const data = await sanitize({ email: this.email, password: this.password });

        if (!data.success && data.message) {
            return {
                message: data.message,
                success: false,
            }
        }

        /* Find user from database  */
        const user = await this.VerifyUser();
        if (!user.success) {
            return {
                message: user.message,
                success: false
            }
        }

        /* Compare password */
        const passwordMatched = await bcrypt.compare(this.password, user.user.userPassword);

        if (!passwordMatched) {
            return {
                message: "Invalid password",
                success: false,
            }
        }

        return {
            message: "Login successfull",
            success: true,
            user: user.user,
        }
    }
}
export default AUTH