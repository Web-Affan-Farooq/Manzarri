import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { id, block } = await req.json();
    await sanityClient.patch(id).set({ isBlocked: block }).commit();
    if (block) {
        return NextResponse.json({ message: "Account blocked successfully" });
    }
    else {
        return NextResponse.json({ message: "Account unblocked successfully" });
    }
}