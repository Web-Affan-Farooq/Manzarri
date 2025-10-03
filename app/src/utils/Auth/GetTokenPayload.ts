import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { TokenPayload } from "@/@types/jwt";
import { token as t } from "@/constants";

const GetTokenPayload = async (isAdmin: boolean) => {
  const clientCookies = await cookies();
  if (isAdmin) {
    const token = clientCookies.get(
      t.admin
    )?.value;
    if (!token) {
      return null;
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET_TOKEN!);
    return payload as TokenPayload;
  } else {
    const token = clientCookies.get(t.user)?.value;
    if (!token) {
      return null;
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET_TOKEN!);
    return payload as TokenPayload;
  }
};
export default GetTokenPayload;
