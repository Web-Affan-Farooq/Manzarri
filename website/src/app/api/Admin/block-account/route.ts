import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const {id} = await req.json();
    await sanityClient.patch(id).set({isBlocked:true}).commit();
    return NextResponse.json({message:"Account blocked successfully"});
}