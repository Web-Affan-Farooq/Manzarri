/*____   

 route : /api/login-customer  
 method : POST
 body : {
 "email":"email",
 "password":"password"
 }
*/
// pages/api/login.ts

// app/api/auth/login/route.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import AUTH from '@/utils/Auth/Auth'

export async function POST(req: NextRequest) {
  const {email, password} = await req.json();
  const Authmodel = new AUTH(email, password);
  console.log("Authmodel : ", Authmodel);
  
  const response = await Authmodel.Login();
  console.log("Login function response : ", response);

  /* generate and sent token using generate token method i auth class */

  return NextResponse.json({
    message:"Login success"
  })
}
