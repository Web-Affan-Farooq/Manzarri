import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const {id,quantity} = await req.json();
    const updatedQuantity = await sanityClient.patch(id).set({stockQuantity:quantity}).commit();
    return NextResponse.json({message:`Updated quantity ${updatedQuantity.stockQuantity}`}); 
}