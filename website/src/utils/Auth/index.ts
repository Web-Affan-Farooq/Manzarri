/* _____ Utilities ... */
import { cookies } from "next/headers";
import GenerateString from "@/utils/GenerateString";

/* _____ library functions */
import bcrypt from "bcryptjs";

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

/* ______ Interface for AUTH class ... */
class AUTH implements Authentication {
    name?: string;
    email: string;
    password: string;
    constructor(email: string, password: string, name?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    VerifyUser = async () => {
        /* ____ For verifying user in databse ... */
        if (!this.email) {
            throw new Error("Email and password must be provided to use VerifyUser ")
        }
        const q = `*[_type == "Accounts" && userEmail == "${this.email}"] {
        _id,
        userEmail,
        userPassword,
        userName,
        isAdmin,
        isBlocked,
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

    SendAuthToken = async (forAdmin: boolean) => {
        /* ____ For sending auth tokens ... */

        /* _____ Main logic ... */
        const sendToken = async (token: string) => {
            const clientCookies = await cookies();
            clientCookies.set("manzarri-authorization-token", token, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
                sameSite: "lax"
            });
            if (forAdmin) {
                clientCookies.set("manzarri-admin-authorization-token", token, {
                    httpOnly: true,
                    path: "/",
                    maxAge: 60 * 60 * 24 * 30,
                    sameSite: "lax"
                });
            }
        }
        await sendToken(GenerateString(100));
        return {
            success: true,
        }

    }
    SanitizeData = (data: { name?: string; email: string; password: string }): { success: false, message: string } | { success: true } => {
        /* ______ parse the data and return false if validation error found ... */
        if (data.name) {
            const result = SignupSchema.safeParse(data);
            if (result.success) {
                return { success: true, };
            } else {
                // console.log("All errors : ", result.error.errors);      
                return {
                    message: result.error.errors[0]?.message || "Validation error",
                    success: false,
                };
            }
        }
        else {
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
            }
        }
    }

    Signup = async () => {
        /* ____ Check if account already exists ... */
        const userAlreadyExists = await this.VerifyUser();
        if (userAlreadyExists.success) {
            return {
                message: "User already exists",
                success: false,
            }
        }

        /* _____ Create account function ... */
        const createAccount = async ({ name, email, password }: { name: string; email: string; password: string }) => {

            const data = this.SanitizeData({
                name: name,
                email: email,
                password: password,
            })

            // console.log("Data after sanitization : ", data);
            if (!data.success) {
                return {
                    success: false,
                    message: data.message,
                }
            }

            /* _____ Run password hashing ... */
            const hashed = await bcrypt.hash(this.password, 10);

            /* replacing password with hash */
            [name, email, password] = [name, email, hashed]

            /* _____ Create payload ... */
            const user = {
                _type: "Accounts",
                userName: name,
                userPassword: password,
                userEmail: email,
                isAdmin: false,
                isBlocked: false,
                invited: false,
            }

            // console.log("Final user : ", user);

            try {
                // Create account
                const date = new Date();
                const data = await sanityClient.create(user);

                const userAccountActivity = {
                    _type: "AccountActivity",
                    userId: data._id,
                    lastLogin: date.toISOString(),
                    orders: []
                }
                const successNotification = {
                    _type: "Notifications",
                    userId: data._id,
                    notificationTitle: "Welcome onboard",
                    notificationText: `Welcome ${name} , browse products and explore our marketplace`,
                    notificationType: "Success",
                    isSeen: false,
                }

                // console.log("utils/Auth  line:166   Created Account : ",
                // data
                // );

                // Create corresponding account activity
                // console.log("utils/Auth  line:171 Created document AccountActivity on signup : ",
                await sanityClient.create(userAccountActivity)
                // );

                // Push success notification
                // console.log(`utils/Auth  line:176  Pushed notification on account with id : ${data._id}`,
                await sanityClient.create(successNotification);
                // );

                return {
                    success: true,
                    redirect: "/profile",
                    message: "Account created successfully",
                    user: {
                        user_id: data._id,
                        name: data.userName,
                        email: data.userEmail,
                        isAdmin: data.isAdmin,
                        isBlocked: data.isBlocked
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
        /* _____ Important ! Only call Signup() is instance has name attribute ... */
        /* _____ Run createAccount() if name is found ... */
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

        /* sanitize data and check for errors */
        const data = this.SanitizeData({ email: this.email, password: this.password });

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
        /* ____ Error tracking ... */
        // console.log("User in datasets : ",user);

        /* ____ Update user's account activity ... */
        // const getAccountActivity = await sanityClient.fetch(`*[_type == "AccountActivity" && userId == "${user.user._id}"] {_id}`);
        const date = new Date();

        // console.log("utils/Auth  line:269  updated lastLogin : ", 
        await sanityClient.patch(user.user._id).set(
            {
                lastLogin: date.toISOString(),
            }
        ).commit();
        // );

        if (user.user.isAdmin) {
            return {
                message: "Welcome Admin",
                success: true,
                user: {
                    user_id: user.user._id,
                    email: user.user.userEmail,
                    name: user.user.userName,
                    isAdmin: true,
                    isBlocked: user.user.isBlocked,
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
                isBlocked: user.user.isBlocked,
                // Dont return the passwords to client
            },
        }
    }

}

/* ______ Logout method ... */
/* ______ Logout() is outside the class because it requires no AUTH instance ... */
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
    if (adminToken) {
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