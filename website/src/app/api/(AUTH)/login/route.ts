/*____   

 route : /api/login
 method : POST
 body : {
 "email":"email",
 "password":"password"
 }
*/
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import AUTH from "@/utils/Auth/Auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const Authmodel = new AUTH(email, password);
  // console.log("Authmodel : ", Authmodel);

  const response = await Authmodel.Login();
  if (!response.success) {
    return NextResponse.json(response);
  }

  if (response.user?.isAdmin) {
    await Authmodel.SendAuthToken(true); // because user can be admin at the time of login ...
    return NextResponse.json({
      message: "Welcome Admin",
      user: response.user,
      success: true,
      redirect: "/Admin"
    });
  }
  else {
    const setAuthorizationToken = await Authmodel.SendAuthToken(false);
    if (!setAuthorizationToken.success) {
      return NextResponse.json(response);
    }

    return NextResponse.json({
      message: `Welcome ${response.user?.name} `,
      user: response.user,
      success: true,
      redirect: "/profile"
    });
  }

  // console.log("Login function response : ", response);
  /* generate and sent token using generate token method i auth class */
}
