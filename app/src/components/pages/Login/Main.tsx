"use client";

/* _____ Hooks ... */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

/* _____ Libraries... */
import axios from "axios";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

/* _____ Types and schemas... */
import LoginSchema from "@/validations/LoginSchema";

/* _____ Components... */
import { PasswordInput } from "@/components/common";

type LoginFormData = z.infer<typeof LoginSchema>;

const Section_login = () => {
  const router = useRouter();
  /* _____ React hook form... */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  /* _____ For controlling button... */
  const [disabled, setdisabled] = useState(false);

  const Login = async (data: LoginFormData) => {
    /* _____ Handles form submission... */
    setdisabled(true);
    try {
      const response = await axios.post("/api/login", data);
      toast.success(response.data.message);
      router.push(response.data.redirect);
    } catch (err) {
      toast.error("An error occured while login");
      console.log(err);
    }
    setdisabled(false);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
      {/* Box */}
      <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg max-sm:px-4 max-sm:py-8 p-8 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-white text-center">
          Log In
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit(Login)}>
          {/* _____ input for email ... */}
          <div>
            <div className="flex flex-row flex-nowrap items-center gap-[10px]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email
              </label>
              {errors.email && (
                <p className="text-sm text-black mb-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>

          {/* _____ input for password ... */}
          <div>
            <div className="flex flex-row flex-nowrap items-center gap-[10px]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-1"
              >
                Password
              </label>
              {errors.password && (
                <p className="text-sm text-black mb-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <PasswordInput
              id="password"
              placeholder="••••••••"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          {/* _____ submit button ... */}
          <button
            type="submit"
            className={`${disabled ? "cursor-not-allowed bg-white/50" : "cursor-pointer bg-white"} w-full text-[var(--faun-dark)] font-medium py-2 rounded-md shadow-md hover:bg-gray-100 transition`}
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
