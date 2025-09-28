import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import LoginSchema from '@/validations/LoginSchema';
import SanitizeData from '@/utils/Auth/validate';
import VerifyUser from '@/utils/Auth/verifyUser';
import UpdateActivity from '@/utils/Auth/updateActivity';
import { z } from "zod";
import { TokenPayload } from '@/@types/jwt';
import AttachToken from '@/utils/Auth/attachtoken';
import Logger from '@/utils/Logger';

const logger = new Logger("/api/login/route.ts")
export async function POST(req: NextRequest) {
  const requestData: z.infer<typeof LoginSchema> = await req.json();
  logger.log(16, "Get body : ",requestData)
  // _____ Sanitize and check for validation errors ...
  logger.log(18, "------------------- Running SanitizeData -------------------","")
  const sanitize = SanitizeData(requestData, LoginSchema);
  if (!sanitize.success) {
    return NextResponse.json(
      {
        message: sanitize.message,
      },
      {
        status: 400,
      }
    )
  }

  // _____ Verify user in sanity ...
  const { exists, user, message } = await VerifyUser(requestData.email);

  if (!exists && !user) {
    return NextResponse.json(
      {
        message: message
      },
      {
        status: 404
      }
    )
  }
  const requiredUser = user!;

  // _____ Verify password ...
  const checkPassword = await bcrypt.compare(requestData.password, requiredUser.userPassword);
  if (!checkPassword) {
      logger.log(49, "------------------- Invalid password  -------------------","")
    return NextResponse.json(
      {
        message: "Invalid password"
      },
      {
        status: 4000,
      }
    )
  }
      logger.log(49, "-------------------  password matched  -------------------",checkPassword)
  // _____ Assign tokens ...
  const payload: TokenPayload = {
    accountId: requiredUser._id,
    email: requiredUser.userEmail
  }
      logger.log(49, "------------------- Created Token payload  -------------------",payload)
  await AttachToken(requiredUser.isAdmin, payload);

  // _____ Update login activity...
  await UpdateActivity(requiredUser._id).catch((err) => {
    console.log(err);
    return NextResponse.json(
      {
        message: "Unable to update activity"
      },
      {
        status: 500
      }
    )
  });

  return requiredUser.isAdmin ? NextResponse.json(
    {
      message: "Welcome Admin",
      redirect: "/Admin",
    },
    {
      status: 200
    }
  ) :
    NextResponse.json(
      {
        message: "Login successfull",
        redirect: "/profile"
      },
      {
        status: 200
      })

}
// if (user.user.isAdmin) {
//   return {
//     message: "Welcome Admin",
//     success: true,
//     user: {
//       user_id: user.user._id,
//       email: user.user.userEmail,
//       name: user.user.userName,
//       isAdmin: true,
//       isBlocked: user.user.isBlocked,
//       // Dont return the passwords to client
//     },
//   }
// }

// return {
//   message: "Login successfull",
//   success: true,
//   user: {
//     user_id: user.user._id,
//     email: user.user.userEmail,
//     name: user.user.userName,
//     isAdmin: false,
//     isBlocked: user.user.isBlocked,
//   },
// }