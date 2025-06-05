import z from "zod";

const ContactFormSchema = z.object({
    name: z.string({ message: "Invalid name" }).min(5, { message: "Name must contain atleast 5 characters" }).max(25, { message: "Name can only contains 25 characters" }),
    email: z
        .string({ message: "Email with correct format is required" })
        .email({ message: "Invalid email address" }),
    phonenumber: z.string()
        .transform((val) => val.replace(/[^\d]/g, "")) // Remove non-digit characters
        .refine((val) => val.length >= 10 && val.length <= 15, {
            message: "Phone number must be between 10 and 15 digits long",
        }),
    message: z.string().min(30, { message: "Message must be atleast 30 characters", }).max(300, { message: "Message can maximum contains 300 characters" })
});

export default ContactFormSchema;