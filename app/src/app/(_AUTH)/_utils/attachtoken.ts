  /* ______ Return success response .... */

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { TokenPayload } from "@/@types/Auth";
import Logger from "@/utils/Logger";
import { token as t} from "@/constants";

const logger = new Logger("/utils/attachToken")

export const AttachToken = async (isAdmin: boolean, payload: TokenPayload) => {
    const clientCookies = await cookies();
      logger.log(7, "------------------- Getting cookies  -------------------",clientCookies)
    const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN!);
      logger.log(10, "------------------- Create dtoken  -------------------",token)
    if (isAdmin) {
      logger.log(49, "------------------- Attahced admin token  -------------------","")

        clientCookies.set(t.admin, token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "lax"
        })
    }
    else {
      logger.log(49, "------------------- Attached token  -------------------","")
        clientCookies.set(t.user, token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "lax"
        });
    }
}
