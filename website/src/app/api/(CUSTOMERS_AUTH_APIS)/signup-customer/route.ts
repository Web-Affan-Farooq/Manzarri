/*____   

 route : /api/signup-customer  
 method : POST
 body : {
 "username":"username",
 "email":"email",
 "password":"password""
 }
*/

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const data:{
        username:string;
        email:string;
        password:string;
    } = await req.json();

    return NextResponse.json({message:`Recieved signup request from ${data.username}`})
}