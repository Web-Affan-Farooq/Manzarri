/* _____ Utilities ... */
import { cookies } from "next/headers";
import GenerateString from "../Token/Generatetoken";

/* _____ library functions */
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

/* _____ library functions */
import sanityClient from "@/lib/sanity";

/* _____ Validation schemas ... */
import SignupSchema from "@/validations/SignupSchema";
import LoginSchema from "@/validations/LoginSchema";

/* _____ Type of authentication system ... */
import { Authentication } from "@/@types/auth";

/* _____ Auth class 
 -- contains nessessasy authentication functions for jwt token based authentication ...
*/

dotenv.config();

/* ______ Interface for AUTH class ... */
class AUTH implements Authentication {
    name?: string;
    email: string;
    password: string;
    private secret: string | undefined;
    constructor(email: string, password: string, name?: string) {
        dotenv.config();
        this.name = name;
        this.email = email;
        this.password = password;
        this.secret = process.env.jWT_SECRET_TOKEN;
    }

    /*
    -----------------  For verifying user from database ...
    */
    VerifyUser = async () => {
        if (!this.email) {
            throw new Error("Email and password must be provided to use VerifyUser ")
        }
        const q = `*[_type == "Accounts" && userEmail == "${this.email}"] {
        _id,
        userEmail,
        userPassword,
        userName,
        isAdmin
        }`;
        const response = await sanityClient.fetch(q);

        if (response.length === 0) {
            return { success: false, message: "User not found" };
        }

        // user found
        const user = response[0];
        // console.log(`user from database : `, user)

        return { success: true, user: user, };
    }

    /* Async function for generating authorization token */
    GenerateToken = async () => {
        const clientCookies = await cookies();
        if (this.secret) {
            const token = GenerateString(100);
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


    GenerateAdminToken = async () => {
        const clientCookies = await cookies();
        if (this.secret) {
            const token = GenerateString(100);
            clientCookies.set("manzarri-admin-authorization-token", token, {
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

    /* ______ Signup method for user ... */
    Signup = async () => {
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
                isAdmin: false,
            }
            // console.log("Final user : ", user);

            try {
                const data = await sanityClient.create(user);
                // console.log("User after signup : ",data);

                return {
                    success: true,
                    redirect: "/profile",
                    message: "Account created successfully",
                    user: {
                        name: data.userName,
                        email: data.userEmail,
                        isAdmin: data.isAdmin,
                        password: data.userPassword,
                    }
                }
            }
            catch (err) {
                console.log("Error : ", err);

                return {
                    success: false,
                    message: "Error while processing user signup ",
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

    /* _____ Login method ... */
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
                    message: ErrorMessage || "Validation error",
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
            console.log("__________Password not matched___________");
            console.log("Actual Password in instance : ", this.password);
            console.log("Hashed password from database : ", user.user.userPassword);
            console.log("is admin : ", user.user.isAdmin);

            return {
                message: "Invalid password",
                success: false,
            }
        }

        if (user.user.isAdmin) {
            return {
                message: "Welcome Admin",
                success: true,
                user: {
                    user_id: user.user._id,
                    email: user.user.userEmail,
                    name: user.user.userName,
                    isAdmin: true
                    // Dont return the passwords to client
                },
            }
        }

        return {
            message: "Login successfull",
            success: true,
            user: {
                user_id: user.user._id,
                email: user.user.userEmail,
                name: user.user.userName,
                isAdmin: false,
                // Dont return the passwords to client
            },
        }
    }

}

/* ______ Logout method ... */

const Logout = async (): Promise<{
    success: boolean;
    redirect: string;
    message: string;
}> => {
    const clientCookies = await cookies();
    const userToken = clientCookies.get("manzarri-authorization-token")?.value;
    const adminToken = clientCookies.get("manzarri-admin-authorization-token")?.value;
    if (userToken) {
        clientCookies.delete("manzarri-authorization-token");
    }
    else if (adminToken) {
        /* Admin has two tokens ... one for viewing his profile as user and other for admin authorization */
        clientCookies.delete("manzarri-authorization-token");
        clientCookies.delete("manzarri-admin-authorization-token");
    }

    return {
        success: true,
        message: "Logout successfull",
        redirect: "/marketplace"
    }
}
export {
    Logout,
}
export default AUTH;