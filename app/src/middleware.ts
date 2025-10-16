// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { token } from "./constants";
import Logger from "@/utils/Logger";

const logger = new Logger("./middleware.ts");

export const middleware = async (req: NextRequest) => {
  logger.log(9,"Running middleware ...", "--------------------------------------------");
  
  const userToken = req.cookies.get(token.user)?.value;
  const adminToken = req.cookies.get(token.admin)?.value;
  const pathname = req.nextUrl.pathname;

  // Protect Admin Routes
  if (pathname.startsWith("/Admin")) {
    if (!adminToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect User Profile Routes
  else if (pathname.startsWith("/profile")) {
    if (!adminToken && !userToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }  

  // Protect checkout Routes
  else if (pathname.startsWith("/checkout")) {
    if (!adminToken && !userToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }  
    return NextResponse.next();

};

export const config = {
  matcher: [
    "/Admin/:path*",
    "/profile/:path*",
    "/checkout/:path*"
  ],
};
