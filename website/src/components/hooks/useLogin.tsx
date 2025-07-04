"use client"
import LoginSchema from "@/validations/LoginSchema";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ZodError } from "zod";

const useLogin = () => {
    /* ___ Router ...*/
    const router = useRouter();

    /* ___ State for input control ...*/
    const [userData, setuserData] = useState({
        email: "",
        password: "",
    });

    /* _____ event on email input ... */
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserData({ ...userData, email: e.target.value });
    }

    /* _____ event on password input ... */
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserData({ ...userData, password: e.target.value });
    }

    /* ______ Event on form submission ...*/
    const handleLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const Login = async () => {
            const response = await axios.post("/api/login", {
                email: userData.email,
                password: userData.password
            });
            const { data } = response;
            /* ____ Error tracking ... */
            // console.log("login api response : ", data);

            /* _____ Throw client side error ...*/
            if (!data.success) {
                return toast.error(response.data.message);
            }

            /* ____ Show success popup and store userId in localstorage ... */
            toast.success(response.data.message);
            window.localStorage.setItem("userID", data.user.user_id);
            window.localStorage.setItem("isBlocked", data.user.isBlocked);

            /* ___ Redirect to dashhboard if user is admin ...*/
            if (data.user.isAdmin) {
                return router.push(`/Admin/`);
            }
            else {
                return router.push(`/profile/`);
            }
        }

        try {
            /* _____ Validate and call the login function ... */
            LoginSchema.parse(userData);
            await Login();

        } catch (err) {
            /* ___ Show validation error ...*/
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message);
            }
        }
    };

    return {
        handleEmailInput,
        handlePasswordInput,
        handleLoginForm,
    }
}
export default useLogin;