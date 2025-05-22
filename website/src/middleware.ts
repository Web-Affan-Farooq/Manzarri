import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (req: NextRequest) => {
  const clientCookies = await cookies();
  const token = clientCookies.get("manzarri-authorization-token")?.value;

  if (token) {
    // console.log(`User authenticated. Received request with token: ${token}`);
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
    matcher: [
      "/profile/:path*",
    ],
  }