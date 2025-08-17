import z from "zod";

const LoginSchema = z.object({
    email: z
        .string({ message: "Email with correct format is required" })
        .email({ message: "Invalid email address" }),

    password: z
        .string({ message: "Please Enter password" })
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password must be shorter than 20 characters")

        // _____ Validate lowercase characters 
        .refine((val) => /[a-z]/.test(val), {
            message: "Password must include lowercase characters"
        })

        // _____ Validate uppercase characters 
        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must include lowercase characters"
        })

        // _____ Validate numbers characters 
        .refine((val) => /\d/.test(val), {
            message: "Password must include digits"
        })

        // _____ Validate lowercase characters 
        .refine((val) => /[@$!%*?&]/.test(val), {
            message: "Password must include special characters"
        })

}).strict();

export default LoginSchema;
