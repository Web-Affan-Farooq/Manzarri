import { TokenPayload } from "@/@types/jwt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const AttachToken = async (isAdmin: boolean, payload: TokenPayload) => {
    const clientCookies = await cookies();

    const token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN!);

    if (isAdmin) {
        clientCookies.set("manzarri-admin-authorization-token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "lax"
        })
    }
    else {
        clientCookies.set("manzarri-authorization-token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "lax"
        });
    }
}
export default AttachToken;