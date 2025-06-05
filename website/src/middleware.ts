// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const userToken = req.cookies.get("manzarri-authorization-token")?.value;
  const adminToken = req.cookies.get("manzarri-admin-authorization-token")?.value;

  const pathname = req.nextUrl.pathname;

  // Protect Admin Routes
  if (pathname.startsWith("/Admin")) {
    if (!adminToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect User Profile Routes
  else if (pathname.startsWith("/profile")) {
    if (!userToken) {
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