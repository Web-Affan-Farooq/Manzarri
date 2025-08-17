import { z } from "zod";
import { AuthPayload, SanitizeResult } from "@/@types/auth";

const SanitizeData = (
    data: AuthPayload,
    schema: z.ZodSchema<AuthPayload>
): SanitizeResult => {
    const result = schema.safeParse(data);
    if (result.success) {
        return { success: true, message: null };
    } else {
        // Grab first error message (optional: join all errors)
        const errorMessage = result.error.errors[0]?.message || "Validation error";
        return { success: false, message: errorMessage };
    }
};

export default SanitizeData;