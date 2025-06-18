/*____ Hooks ... */
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

/*____ Libraries ... */
import axios from 'axios';

/*____ Types nad schema ... */
import { ZodError } from 'zod';
import SignupSchema from '@/validations/SignupSchema';

/*____ Functions ... */
import toast from 'react-hot-toast';

/* _____ Type of signup form data */

interface ISignupData {
    name: string;
    email: string;
    password: string;
}

const useSignup = () => {
    /* ___ Router instance... */
    const router = useRouter();

    /* ___ State for handling form data ... */
    const [userData, setuserData] = useState<ISignupData>({
        name: "",
        email: "",
        password: "",
    });

    /* ______ Event on name input ... */
    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserData({ ...userData, name: e.target.value });
    }

    /* ______ Event on email input ... */
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserData({ ...userData, email: e.target.value });
    }

    /* ______ Event on password input ... */
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserData({ ...userData, password: e.target.value });
    }

    /* ___ Submit event for form ... */
    const handleSignupForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const Signup = async (signupData: {
            username: string;
            email: string;
            password: string;
        }) => {
            const response = await axios.post("/api/signup", signupData);
            const data = response.data;

            if (!data.success) {
                toast.error(data.message);
            } else {
                toast.success("Signup successful!");
                router.push(data.redirect);
            }
        };

        try {
            /* ____ Sanitize the data ... */
            const sanitizedData = SignupSchema.parse(userData);

            /* _____ Prepare payload ... */
            const signupPayload = {
                username: sanitizedData.name,
                email: sanitizedData.email,
                password: sanitizedData.password,
            };
            /* _____ Call signup function ... */
            Signup(signupPayload);
        } catch (err) {
            /* _____ Handle validation errors  ... */
            if (err instanceof ZodError) {
                toast.error(err.errors[0].message);
            }
        }
    };

    return {
        handleNameInput,
        handleEmailInput,
        handlePasswordInput,
        handleSignupForm,
    }
}

export default useSignup;