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
import AUTH from "@/utils/Auth/Auth";

export const POST = async (req:NextRequest) => {
    const {username, email, password}:{
        username:string;
        email:string;
        password:string;
    } = await req.json();

    
    const Authmodel = new AUTH(email, password, username);
    console.log("Auth model object : ", Authmodel);
    
    // ____ Calling signup method from auth class
    const {message, success } = await Authmodel.Signup();
    if(!success) {
        return NextResponse.json({message:message, success:success});
    }
    
    return NextResponse.json({success:success,message:message})
}