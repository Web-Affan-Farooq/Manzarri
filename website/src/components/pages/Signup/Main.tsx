"use client";

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ZodError } from 'zod';
import SignupSchema from '@/validations/SignupSchema';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Section_signup = () => {
    /* ___ Router instance... */
    const router = useRouter();

    /* ___ State for handling form data ... */
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    /* ___ State for activate error... */
    const [error, seterror] = useState({
        active: false,
        message: ""
    });

    /* ___ UseEffect handling error ... */
    useEffect(() => {
        if (error.active) {
            toast.error(error.message);
        }
    }, [error]);

    /* ___ Submit event for form ... */
    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const SignupUser = async (signupData: {
            username: string;
            email: string;
            password: string;
        }) => {
            const response = await axios.post("/api/signup", signupData);
            const data = response.data;

            if (!data.success) {
                seterror({ active: true, message: data.message });
            } else {
                toast.success("Signup successful!");
                router.push(data.redirect);
            }
        };

        try {
            const sanitizedData = SignupSchema.parse(userData);
            const signupPayload = {
                username: sanitizedData.name,
                email: sanitizedData.email,
                password: sanitizedData.password,
            };
            SignupUser(signupPayload);
        } catch (err) {
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message);
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
            {/* ____ Box containing form ... */}
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg p-8 space-y-6">

                {/* ____ Heading ... */}
                <h1 className="text-3xl font-semibold text-white text-center">Sign Up</h1>

                <form className="space-y-5" onSubmit={handleSignup}>
                    {/* ____ input for name ... */}
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
                    {/* ____ Input for email ... */}
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
                    {/* ____ Input for password ... */}
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
                    {/* ____ Signup button ... */}

                    <button
                        type="submit"
                        className="w-full bg-white text-[var(--faun-dark)] font-medium py-2 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Sign Up
                    </button>
                </form>
                {/* ____ Short paragraph asking for login ... */}
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
