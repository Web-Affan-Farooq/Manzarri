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
        e.preventDefault()
        const data = {
            email: userData.email,
            password: userData.password,
        }

        try {
            LoginSchema.parse(data);

            //_____ redirect logic ...
        } catch (err) {
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message)
            }
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] py-16 px-4">
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-xl shadow-2xl p-8 space-y-6">
                <h1 className="text-[36px] font-bold font-rye text-white text-center">
                    Welcome Back
                </h1>

                <form action="" className="space-y-5" onSubmit={handleLogin}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white font-lato mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, email: e.target.value })
                            }}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-white font-lato mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, password: e.target.value })
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-[var(--faun-dark)] font-rye py-2 rounded-md shadow-md hover:bg-gray-100 transition">
                        Log In
                    </button>
                </form>

                <p className="text-center text-sm text-white font-lato">
                    Don{"'"}t have account? <a href="/signup" className="text-faun-dark">Signup</a>
                </p>

            </div>
        </section>
    );
};

export default Section_login;
