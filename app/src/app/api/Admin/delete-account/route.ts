import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const {id} = await req.json();
    const deletedAccount = await sanityClient.delete(id);
    return NextResponse.json({message:"Account deleted successfully", user:{
        email:deletedAccount.results[0].document.userEmail,
        name:deletedAccount.results[0].document.userName,
    }});
}