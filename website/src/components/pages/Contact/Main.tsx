"use client";
import React, { useState } from 'react';
import ContactFormSchema from '@/validations/ContactSchema';
import toast from 'react-hot-toast';
import { ZodError } from 'zod';
import axios from 'axios';

/* _____ Interface for contact data ... */
interface ContactFormData {
    name: string;
    email: string;
    message: string;
    phonenumber: string;
}

const Main = () => {

    const [data, setdata] = useState<ContactFormData>({
        /* _____ State for two way form input data binding... */
        name: "",
        email: "",
        message: "",
        phonenumber: "",
    });

    const handleContactFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        /* _____ Triggered on form submission  ... */
        e.preventDefault();

        const SubmitForm = async (data: ContactFormData) => {
            /* _____ Submit the data to api route and show error/ success popup... */
            const response = await axios.post("/api/contact", data);
            if (response.status !== 200) {
                return toast.error("Error while submitting your message");
            }
            return toast.success("Message sent successfully ");
        }

        try {
            /* _____ Sanitize data ... */
            const sanitizedData = ContactFormSchema.parse(data);
            await SubmitForm(sanitizedData);
        } catch (err) {
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message);
            }
        }
    }
    return (
        <form onSubmit={handleContactFormSubmission} className="flex flex-col gap-4 h-[70vh] px-[30px] max-sm:px-[5px] py-[40px]">
            {/* Name Input */}
            <div className='flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]'>
                <label htmlFor="Name" className='font-bold text-sm text-gray-600'>
                    Your name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className='px-4 py-2 rounded-md border border-gray-400'
                    placeholder="Enter your name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setdata({ ...data, name: e.target.value });
                    }}
                    required
                />
            </div>
            {/* Email Input */}
            <div className='flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]'>
                <label htmlFor="email" className='font-bold text-sm text-gray-600'>
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className='px-4 py-2 rounded-md border border-gray-400'
                    placeholder="Enter your email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setdata({ ...data, email: e.target.value });
                    }}
                    required
                />
            </div>
            {/* Phone Number Input */}
            <div className='flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]'>
                <label htmlFor="phone" className='font-bold text-sm text-gray-600'>
                    Phone Number
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className='px-4 py-2 rounded-md border border-gray-400'
                    placeholder="Enter your active phone number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setdata({ ...data, phonenumber: e.target.value });
                    }}
                    required
                />
            </div>

            {/* Message Input */}
            <div className='flex flex-col gap-2 sm:w-[400px] max-sm:w-[75vw]'>
                <label htmlFor="Message" className='font-bold text-sm text-gray-600'>
                    Message
                </label>
                <textarea name="message" id="message" placeholder='Your message' required className='px-4 py-2 rounded-md border border-gray-400 h-[100px]' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setdata({ ...data, message: e.target.value });
                }}></textarea>

            </div>

            {/* Submit Button */}
            <div>
                <button className="mt-6 bg-faun-light hover:bg-faun-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[16px] ">
                    <span>Submit</span> &nbsp; &nbsp;<i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </form>
    )
}

export default Main;