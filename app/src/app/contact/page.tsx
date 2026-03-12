"use client";
// ___ Hooks ...
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// ___ Types and schemas ...
import ContactFormSchema from "./_validations";

// ___ Libraries ...
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ContactFormHandler from "./_actions";

/* _____ Interface for contact data ... */
type ContactFormData = z.infer<typeof ContactFormSchema>;

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });
  /* _____ For controlling submit button... */
  const [disabled, setdisabled] = useState<boolean>(false);

  const handleContactFormSubmission = async (data: ContactFormData) => {
    setdisabled(true);
    /* _____ Submit the data to api route and show error/ success popup... */
    const { message, success } = await ContactFormHandler(data);

    if (!success) {
      console.log(message);
      toast.error("Error while submitting your message");
    }
    toast.success(message);
    setdisabled(false);
  };
  return (
    
        <main>
          <article>
            <div className={"py-[100px] sm:px-[30px] max-sm:px-[10px]"}>
<form
      onSubmit={handleSubmit(handleContactFormSubmission)}
      className="flex flex-col gap-4 h-[70vh] px-[30px] max-sm:px-[5px] py-[40px]"
    >
      {/* Name Input */}
      <div className="flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]">
        <label htmlFor="Name" className="font-bold text-sm text-gray-600">
          Your name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="px-4 py-2 rounded-md border border-gray-400"
          placeholder="Enter your name"
          required
        />
        {errors.name && <p className="text-sm">{errors.name.message}</p>}
      </div>
      {/* Email Input */}
      <div className="flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]">
        <label htmlFor="email" className="font-bold text-sm text-gray-600">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="px-4 py-2 rounded-md border border-gray-400"
          placeholder="Enter your email"
          {...register("email")}
          required
        />
        {errors.email && <p className="text-sm">{errors.email.message}</p>}
      </div>
      {/* Phone Number Input */}
      <div className="flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]">
        <label htmlFor="phone" className="font-bold text-sm text-gray-600">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="px-4 py-2 rounded-md border border-gray-400"
          placeholder="Enter your active phone number"
          {...register("phonenumber")}
          required
        />
        {errors.phonenumber && (
          <p className="text-sm">{errors.phonenumber.message}</p>
        )}
      </div>

      {/* Message Input */}
      <div className="flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]">
        <label htmlFor="Message" className="font-bold text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          required
          className="px-4 py-2 rounded-md border border-gray-400 h-[100px]"
          {...register("message")}
        ></textarea>
        {errors.message && <p className="text-sm">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={disabled}
          className={`${disabled ? "cursor-not-allowed bg-faun-dark" : "cursor-pointer"} mt-6 bg-faun-light hover:bg-faun-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[16px] `}
        >
          <span>Submit</span> &nbsp; &nbsp;
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>            </div>
          </article>
        </main>
  );
};

export default Main;
