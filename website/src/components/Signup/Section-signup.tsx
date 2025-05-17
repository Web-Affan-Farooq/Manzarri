"use client";

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ZodError } from 'zod';
import SignupSchema from '@/validations/SignupSchema';

const Section_signup = () => {
    /* ___ State for handling form data ... */
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    /* ___ State for activate signup ... */
    const [loading, setloading] = useState(false);

    /* ___ State for activate error... */
    const [error, seterror] = useState({
        active: false,
        message: ""
    });

    /* ___ UseEffect for running signup request ... */
    useEffect(() => {
        const SignupUser = async () => {
            const signupData = {
                username: userData.name,
                email: userData.email,
                password: userData.password
            }

            const response = await fetch("/api/signup-customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupData)
            });
            const data = await response.json();
            if (!data.success) {
                seterror({
                    active: true,
                    message: data.message
                })
            }
            if (data.success) {
                toast.success("Signup successfull !");
            }

        }
        if (loading) {
            SignupUser()
            setloading(false)
        }
    }, [loading]);

    /* ___ UseEffect handling error ... */
    useEffect(() => {
        if (error.active) {
            toast.error(error.message);
        }
    }, [error]);

    /* ___ Event listener on form ... */
    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            //  ____ Parse the data then activate signup state ...
            const signupData = SignupSchema.parse(userData);
            setloading(true);

        } catch (err) {
            if (err instanceof ZodError) {
                // ____ Show validation errors ...
                toast.error(err.errors[0].message);
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-semibold text-white text-center">Sign Up</h1>

                <form className="space-y-5" onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Your username"
                            onChange={(e) => setuserData({ ...userData, name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            onChange={(e) => setuserData({ ...userData, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            onChange={(e) => setuserData({ ...userData, password: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-[var(--faun-dark)] font-medium py-2 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-white">
                    Already have an account?{" "}
                    <a href="/login" className="underline hover:text-gray-200">
                        Log in
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Section_signup;
