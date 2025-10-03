import { z } from "zod";
import { AuthPayload, SanitizeResult } from "@/@types/auth";
import Logger from "../Logger";

const logger = new Logger("/utils/validate.ts")
const SanitizeData = (
    data: AuthPayload,
    schema: z.ZodSchema<AuthPayload>
): SanitizeResult => {
      logger.log(9, "------------------- Running SanitizeData -------------------","")
    const result = schema.safeParse(data);
      logger.log(11, "------------------- Parsed data-------------------","")

    if (result.success) {
      logger.log(14, "------------------- Validation successfull  -------------------","")
        return { success: true, message: null };
    } else {
        // Grab first error message (optional: join all errors)
        const errorMessage = result.error.errors[0]?.message || "Validation error";
      logger.log(14, "------------------- Validation error  -------------------",errorMessage)
        return { success: false, message: errorMessage };
    }
};

export default SanitizeData;