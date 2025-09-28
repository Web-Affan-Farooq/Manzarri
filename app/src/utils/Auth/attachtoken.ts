import { TokenPayload } from "@/@types/jwt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Logger from "../Logger";
const logger = new Logger("/utils/attachToken")
const AttachToken = async (isAdmin: boolean, payload: TokenPayload) => {
    const clientCookies = await cookies();
      logger.log(7, "------------------- Getting cookies  -------------------",clientCookies)
    const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN!);
      logger.log(10, "------------------- Create dtoken  -------------------",token)
    if (isAdmin) {
      logger.log(49, "------------------- Attahced admin token  -------------------","")

        clientCookies.set("manzarri-admin-authorization-token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "lax"
        })
    }
    else {
      logger.log(49, "------------------- Attached token  -------------------","")
        clientCookies.set("manzarri-authorization-token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "lax"
        });
    }
}
export default AttachToken;