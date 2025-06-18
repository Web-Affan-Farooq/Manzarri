"use client";

import { useSignup } from "@/components/hooks";

const Section_signup = () => {
    const { handleEmailInput, handleNameInput, handlePasswordInput, handleSignupForm } = useSignup();
    return (
        <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
            {/* ____ Box containing form ... */}
            <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg p-8 space-y-6">

                {/* ____ Heading ... */}
                <h1 className="text-3xl font-semibold text-white text-center">Sign Up</h1>

                <form className="space-y-5" onSubmit={handleSignupForm}>
                    {/* ____ input for name ... */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Your username"
                            onChange={handleNameInput}
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
                            onChange={handleEmailInput}
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
                            onChange={handlePasswordInput}
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
