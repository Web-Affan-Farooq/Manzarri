"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/* ___ Valiation schema and error types ...*/
import LoginSchema from '@/validations/LoginSchema';
import { ZodError } from 'zod';

/* ___ Libraries ...*/
import toast from 'react-hot-toast';
import axios from 'axios';

const Section_login = () => {
    /* ___ Router ...*/
    const router = useRouter();

    /* ___ State for input control ...*/
    const [userData, setuserData] = useState({
        email: "",
        password: "",
    });

    /* ___ State for error ...*/
    const [error, seterror] = useState({
        active: false,
        message: "",
    });

    /* ___ Event on form ...*/
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const clientLogin = async () => {
            const response = await axios.post("/api/login", {
                email: userData.email,
                password: userData.password
            });
            const { data } = response;
            // console.log("Data : ",data);


            /* ___ Add error to the state when occured ...*/
            if (!data.success) {
                toast.error(response.data.message);
                // return seterror({ active: true, message: response.data.message });
            }
            console.log("Data : ", data);


            /* ___ If user is Admin ...*/
            if (data.user.isAdmin) {
                toast.success(response.data.message);
                window.localStorage.setItem("userID", data.user.user_id)
                return router.push(`/Admin/`);
            }
            /* ___ redirect to profile page ...*/
            else if (!data.user.isAdmin) {
                toast.success(response.data.message);
                window.localStorage.setItem("userID", data.user.user_id)
                return router.push(`/profile/`);
            }
        }

        try {
            /* ___ Parse the data and  Toogle the state if no validation errors found ...*/
            LoginSchema.parse(userData);
            await clientLogin();
        } catch (err) {
            /* ___ Show validation error ...*/
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message);
            }
        }
    };

    /* ____Show error if any ... */
    useEffect(() => {
        if (error.active) {
            toast.error(error.message);
            seterror({
                active: false,
                message: "",
            });
        }
    }, [error]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
            {/* Box */}
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg max-sm:px-4 max-sm:py-8 p-8 space-y-6">
                {/* Heading */}
                <h1 className="text-3xl font-semibold text-white text-center">Log In</h1>
                <form className="space-y-5" onSubmit={handleLogin}>

                    {/* _____ input for email ... */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setuserData({ ...userData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>

                    {/* _____ input for password ... */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setuserData({ ...userData, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>
                    {/* _____ submit button ... */}
                    <button
                        type="submit"
                        className="w-full bg-white text-[var(--faun-dark)] font-medium py-2 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Log In
                    </button>
                </form>
                {/* _____ Small paragraph asking for signup... */}
                <p className="text-center text-sm text-white">
                    Don’t have an account?{" "}
                    <a href="/signup" className="underline hover:text-gray-200">
                        Sign up
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Section_login;