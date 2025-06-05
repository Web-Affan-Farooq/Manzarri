import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import ContactFormSchema from "@/validations/ContactSchema";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    phonenumber: string;
}

export const POST = async (req: NextRequest) => {
    /* _____ get data from request ... */
    const data: ContactFormData = await req.json();

    try {
        /* ____ Parse data and throw error if any .Then send message in sanity ... */
        const sanitizedData = ContactFormSchema.parse(data);

        await sanityClient.create({
            _type: "FormSubmissions",
            customerName: sanitizedData.name,
            customerEmail: sanitizedData.email,
            userPhonenumber: sanitizedData.phonenumber,
            customerMessage: sanitizedData.message,
        }).catch(() =>
            NextResponse.json({ message: "Error while sending message" }, { status: 500 })
        );

        return NextResponse.json({ message: "Message sent" }, { status: 200 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error while sending message" }, { status: 500 });
    }
};
