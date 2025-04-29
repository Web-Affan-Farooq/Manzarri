"use client";

import React, { useState } from 'react';
import LoginSchema from '@/validations/LoginSchema';
import toast from 'react-hot-toast';
import { ZodError } from 'zod';

const Section_login = () => {
    const [userData, setuserData] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { ...userData };

        try {
            LoginSchema.parse(data);
            // Add your login logic here (e.g., redirect)
        } catch (err) {
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message);
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-semibold text-white text-center">Log In</h1>

                <form className="space-y-5" onSubmit={handleLogin}>
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

                    <button
                        type="submit"
                        className="w-full bg-white text-[var(--faun-dark)] font-medium py-2 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Log In
                    </button>
                </form>

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
