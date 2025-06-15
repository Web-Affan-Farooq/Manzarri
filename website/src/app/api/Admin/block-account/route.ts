import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { id, isBlocked } = await req.json();
    await sanityClient.patch(id).set({ isBlocked: !isBlocked }).commit();
    if (isBlocked) {
        return NextResponse.json({ message: "Account unblocked successfully" });
    }
    else {
        return NextResponse.json({ message: "Account blocked successfully" });
    }
}