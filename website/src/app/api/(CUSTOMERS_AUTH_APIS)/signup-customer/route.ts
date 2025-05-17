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

export const POST = async (req: NextRequest) => {
    const { username, email, password }: {
        username: string;
        email: string;
        password: string;
    } = await req.json();


    const Authmodel = new AUTH(email, password, username);
    console.log("Auth model object : ", Authmodel);

    // ____ Calling signup method from auth class
    const SignupUser = await Authmodel.Signup();
    const setAuthorizationToken = await Authmodel.GenerateToken();

    if (!SignupUser.success) {
        return NextResponse.json({ message: SignupUser.message, success: SignupUser.success });
    }
    else if (!setAuthorizationToken.success) {
        return NextResponse.json({message:setAuthorizationToken.message, success:setAuthorizationToken.success});
    }
    
    return NextResponse.json({ success: SignupUser.success, message: SignupUser.message })
}