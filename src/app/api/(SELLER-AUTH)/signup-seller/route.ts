/*____   

 route : /api/login-seller  
 method : POST
 body : {
 "email":"email",
 "password":"password"
 }
*/
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    return NextResponse.json({message:`Recieved login request from ${req.url}`})
}