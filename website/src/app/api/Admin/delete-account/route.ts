import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const {id} = await req.json();
    await sanityClient.delete(id);
    return NextResponse.json({message:"Account deleted successfully"});
}