"use server";

/* ____ Libraries ... */
import bcrypt from "bcryptjs";
import { z } from "zod";

/* ____ local utils  ... */
import {SanitizeData ,VerifyUser ,UpdateActivity , AttachToken }from "../_utils";

/* ____ shared utility  ... */
import Logger from "@/utils/Logger";

/* ____ Types and schemas ... */
import { TokenPayload } from "@/@types/Auth";
import LoginSchema from "./_validations";

/* ____Instantiating global logger ... */ 
const logger = new Logger("LoginAction");

export const LoginAction = async (
  formData: z.infer<typeof LoginSchema>
): Promise<{
  message: string;
  success: boolean;
  redirect?: string;
}> => {
  logger.log(10, "Received login request", formData);

  /* _____ Sanitize and validate input data ... */
  logger.log(12, "Running data sanitization and validation", "");
  const sanitize = SanitizeData(formData, LoginSchema);
  if (!sanitize.success) {
    logger.log(15, "Validation failed", sanitize.message);
    return {
      message: sanitize.message!,
      success: false,
    };
  }

  /* ____ Verify user exists ... */
  logger.log(22, "Verifying user existence", "");
  const { exists, user, message } = await VerifyUser(formData.email);
  if (!exists || !user) {
    logger.log(25, "User verification failed", message);
    return {
      message,
      success: false,
    };
  }

  /* ____  Verify password ... */
  logger.log(32, "Verifying password", "");
  const isPasswordValid = await bcrypt.compare(
    formData.password,
    user.userPassword
  );
  if (!isPasswordValid) {
    logger.log(37, "Invalid password", "");
    return {
      message: "Invalid password",
      success: false,
    };
  }
  logger.log(42, "Password verified successfully", "");

  /* _____ Create token payload ... */
  const payload: TokenPayload = {
    accountId: user._id,
    email: user.userEmail,
  };
  logger.log(48, "Created token payload", payload);

  /* _____ Attach token ... */
  await AttachToken(user.isAdmin, payload);

  /* _____ Update login activity ... */
  try {
    await UpdateActivity(user._id);
    logger.log(55, "Login activity updated", "");
  } catch (err) {
    logger.log(57, "Failed to update login activity", err);
    return {
      message: "Unable to update activity",
      success: false,
    };
  }

  /* ______ Return success response .... */
  const isAdmin = user.isAdmin;
  return {
    message: isAdmin ? "Welcome Admin" : "Login successful",
    success: true,
    redirect: isAdmin ? "/Admin" : "/profile",
  };
};