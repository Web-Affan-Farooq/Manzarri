"use client";

/* _____ Hooks ... */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* _____ Types and schemas... */
import SignupSchema from "@/validations/SignupSchema";

/* _____ Libraries... */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import * as z from "zod";

/* _____ Components... */
import { PasswordInput } from "@/components/common";

type SignupFormData = z.infer<typeof SignupSchema>;

const Section_signup = () => {
  const router = useRouter();
  /* _____ For controlling button ... */
  const [disabled, setdisabled] = useState(false);
  /* _____ React hook form... */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
  });
  /* _____ Handle signup... */
  const Signup = async (data: SignupFormData) => {
    setdisabled(true);
    try {
      const response = await axios.post("/api/signup", data);
      toast.success(response.data.message);
      router.push(response.data.redirect);
    } catch (err) {
      console.log(err);
      toast.error("An error occured while creating account");
    }
    setdisabled(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--faun-dark)] px-4 py-20">
      {/* ____ Box containing form ... */}
      <div className="w-full max-w-md bg-[var(--faun-light)] rounded-2xl shadow-lg p-8 space-y-6">
        {/* ____ Heading ... */}
        <h1 className="text-3xl font-semibold text-white text-center">
          Sign Up
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit(Signup)}>
          {/* ____ input for name ... */}
          <div>
            <div className="flex flex-row flex-nowrap items-center gap-[10px]">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                User name
              </label>
              {errors.name && (
                <p className="text-sm text-black mb-1">{errors.name.message}</p>
              )}
            </div>
            <input
              type="text"
              id="username"
              placeholder="Your username"
              {...register("name")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          {/* ____ Input for email ... */}
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
              placeholder="you@example.com"
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          {/* ____ Input for password ... */}
          <div>
            <div className="flex flex-row flex-nowrap items-center gap-[10px]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-1"
              >
                password
              </label>
              {errors.password && (
                <p className="text-sm text-black mb-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <PasswordInput
              id="password"
              placeholder="********"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          {/* ____ Signup button ... */}
          <button
            type="submit"
            className={`${disabled ? "bg-white/50 cursor-not-allowed" : "bg-white cursor-pointer"} w-full text-[var(--faun-dark)] font-medium py-2 rounded-md shadow-md hover:bg-gray-100 transition`}
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
