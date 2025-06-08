/*____   

 route : /api/signup  
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
    /* ____ Error tracking ... */
    // console.log("Auth instance signup : ", Authmodel);

    // console.log("Auth model object : ", Authmodel);

    // ____ Calling signup method from auth class
    const SignupUser = await Authmodel.Signup();
    /* ____ Error tracking ... */
    // console.log("Auth.Signup() => ", SignupUser);

    if (!SignupUser.success) {
        return NextResponse.json({ message: SignupUser.message, success: SignupUser.success });
    }

    await Authmodel.SendAuthToken(false); // because user is not admin at the time of signup 

    /* ____ Error tracking ... */
    // console.log("Auth.SendAuthToken() => ", generateTokenReturnValue)
    return NextResponse.json({ success: SignupUser.success, message: SignupUser.message, redirect: SignupUser.redirect })
} 