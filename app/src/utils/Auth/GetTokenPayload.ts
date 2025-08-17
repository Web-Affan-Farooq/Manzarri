import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { TokenPayload } from "@/@types/jwt";

const GetTokenPayload = async (isAdmin: boolean) => {
  const clientCookies = await cookies();
  if (isAdmin) {
    const token = clientCookies.get(
      "manzarri-admin-authorization-token"
    )?.value;
    if (!token) {
      return null;
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET_TOKEN!);
    return payload as TokenPayload;
  } else {
    const token = clientCookies.get("manzarri-authorization-token")?.value;
    if (!token) {
      return null;
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET_TOKEN!);
    return payload as TokenPayload;
  }
};
export default GetTokenPayload;
