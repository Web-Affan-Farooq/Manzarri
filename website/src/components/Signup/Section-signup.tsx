"use client";

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ZodError } from 'zod';
import SignupSchema from '@/validations/SignupSchema';

const Section_signup = () => {
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            SignupSchema.parse(userData);
            // redirect or further logic...
        } catch (err) {
            if (err instanceof ZodError) {
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
