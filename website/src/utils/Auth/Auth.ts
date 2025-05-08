import sanityClient from "@/lib/sanity";
import LoginSchema from "@/validations/LoginSchema";
import SignupSchema from "@/validations/SignupSchema";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

interface Authentication {
    name?: string;
    email: string;
    password: string;
    Signup(): Promise<{ message?: string; success: boolean }>;
}

class AUTH implements Authentication {
    name?: string;
    email: string;
    password: string;

    constructor(email: string, password: string, name?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    /* ______ Signup method ... */
    async Signup() {
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
            [name,email,password] = [name, email, hashed]

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
    Login() {

    }
}
export default AUTH