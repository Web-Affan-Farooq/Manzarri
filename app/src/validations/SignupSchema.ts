import { z } from "zod";

// Define a TypeScript type for signup data (optional but recommended)
export type SignupData = z.infer<typeof SignupSchema>;

const SignupSchema = z
  .object({
    name: z
      .string({ message: "Username is required" })
      .min(10, { message: "Name must contain minimum 10 characters" })
      .max(30, { message: "Name can contain a maximum of 30 characters" }),

    email: z
      .string({ message: "Email with correct format is required" })
      .email({ message: "Invalid email address" }),

    password: z
      .string({ message: "Please enter password" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password must be shorter than 20 characters" })

      // Validate lowercase characters
      .refine((val) => /[a-z]/.test(val), {
        message: "Password must include lowercase characters",
      })

      // Validate uppercase characters
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must include uppercase characters",
      })

      // Validate numeric digits
      .refine((val) => /\d/.test(val), {
        message: "Password must include digits",
      })

      // Validate special characters
      .refine((val) => /[@$!%*?&]/.test(val), {
        message: "Password must include special characters",
      }),
  })
  .strict();

export default SignupSchema;
