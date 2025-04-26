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
        e.preventDefault()
        const data = {
            name: userData.name,
            email: userData.email,
            password: userData.password,
        }

        try {
            SignupSchema.parse(data);
            // toast.success("No errors found ")
  
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
                    Create Your Account
                </h1>

                <form action="" className="space-y-5" onSubmit={handleSignup}>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-white font-lato mb-2">
                            Enter your username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={(e) => {
                                setuserData({ ...userData, name: e.target.value })
                            }}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white font-lato mb-2">
                            Enter your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={(e) => {
                                setuserData({ ...userData, email: e.target.value })
                            }}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-white font-lato mb-2">
                            Create a strong password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={(e) => {
                                setuserData({ ...userData, password: e.target.value })
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-[var(--faun-dark)] font-rye py-2 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-white font-lato">
                    Already have an account? <a href="/login" className="text-faun-dark">Login To your account</a>
                </p>
            </div>
        </section>
    );
};

export default Section_signup;
