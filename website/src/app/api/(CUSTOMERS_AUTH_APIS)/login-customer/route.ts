/*____   

 route : /api/login-customer  
 method : POST
 body : {
 "email":"email",
 "password":"password"
 }
*/
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const data:{
        email:string;
        password:string;
    } = await req.json();

    return NextResponse.json({message:`Recieved login request from ${data.email}`})
}