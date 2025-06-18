"use client";

import React from 'react';
import { useLogin } from '@/components/hooks';

const Section_login = () => {
    /* ______ Custom hook for handling client side login ... */
    const { handleEmailInput, handlePasswordInput, handleLoginForm } = useLogin();
    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
            {/* Box */}
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg max-sm:px-4 max-sm:py-8 p-8 space-y-6">
                {/* Heading */}
                <h1 className="text-3xl font-semibold text-white text-center">Log In</h1>
                <form className="space-y-5" onSubmit={handleLoginForm}>

                    {/* _____ input for email ... */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={handleEmailInput}
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
                            onChange={handlePasswordInput}
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