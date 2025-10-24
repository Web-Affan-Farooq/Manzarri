"use server";

/* _____ Utilities... */
import {
  VerifyUser,
  SanitizeData,
  CreateAccount,
  AttachToken,
} from "@/utils/Auth";

/* _____ Libraries... */
import { z } from "zod";
import bcrypt from "bcryptjs";

/* _____ Types and schemas... */
import { AccountPayload } from "@/@types/auth";
import SignupSchema from "@/validations/SignupSchema";

type SignupFormData = z.infer<typeof SignupSchema>;

const SignupAction = async (
  formData: SignupFormData
): Promise<{
  message: string;
  success: boolean;
  redirect?: string;
}> => {
  // _____ Sanitize and check for validation errors ...
  const sanitize = SanitizeData(formData, SignupSchema);
  if (!sanitize.success) {
    return {
      message: sanitize.message!,
      success: false,
    };
  }

  /* ____ Check if account already exists ... */
  const { exists } = await VerifyUser(formData.email);
  if (exists) {
    return {
      message: "Account already exists, please login to proceed further",
      success: false,
    };
  }

  /* ____ hash user's password ... */
  const hashedPassword = await bcrypt.hash(formData.password, 10);

  try {
    /* _____ Create payload ... */
    const user: AccountPayload = {
      _type: "Accounts",
      userName: formData.name,
      userPassword: hashedPassword,
      userEmail: formData.email,
      isAdmin: false,
      isBlocked: false,
      phoneNumber:"",
      city:"",
      country:"",
      postalCode:"",
      address:"",
      lastLogin: new Date().toISOString(),
      orders: [],
    };

    const createdAccount = await CreateAccount(user);
    await AttachToken(false, {
      accountId: createdAccount._id,
      email: createdAccount.userEmail,
    });
    return {
      message: `Welcome to manzarri ${user.userName}`,
      success: true,
      redirect: "/profile",
    };
  } catch (err) {
    console.log(err);
    return {
      message: "An error occurred while creating account",
      success: false,
    };
  }
};

export default SignupAction;
