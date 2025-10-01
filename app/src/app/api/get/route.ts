import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

export const GET = async () => {
    const response = await sanityClient.fetch(`*[_type == "Product"] {
        productName,
        material,
productDescription
        }`)
    return NextResponse.json(
        {
            data:response
        }
    )
}