/*____   
 route : /api/signup  
 method : POST
 body : {
 "name":"username",
 "email":"email",
 "password":"password""
 }
*/

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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

export const POST = async (req: NextRequest) => {
  const requestBody: SignupFormData = await req.json();

  // _____ Sanitize and check for validation errors ...
  const sanitize = SanitizeData(requestBody, SignupSchema);
  if (sanitize.success) {
    return NextResponse.json(
      {
        message: sanitize.message,
      },
      {
        status: 400,
      }
    );
  }

  /* ____ Check if account already exists ... */
  const { exists } = await VerifyUser(requestBody.email);
  if (exists) {
    return NextResponse.json(
      {
        message: "Account already exists, please login to procedd furthur",
      },
      {
        status: 400,
      }
    );
  }

  /* ____ hash user's password ... */
  const hashedPassword = await bcrypt.hash(requestBody.password, 10);

  try {
    /* _____ Create payload ... */
    const user: AccountPayload = {
      _type: "Accounts",
      userName: requestBody.name,
      userPassword: hashedPassword,
      userEmail: requestBody.email,
      isAdmin: false,
      isBlocked: false,
      invited: false,
    };

    const createdAccount = await CreateAccount(user);
    await AttachToken(false, {
      accountId: createdAccount._id,
      email: createdAccount.userEmail,
    });
    return NextResponse.json({
      message: `Welcome to manzarri ${user.userName}`,
      redirect: "/profile",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "An error occured while creating account",
      },
      {
        status: 500,
      }
    );
  }
};
