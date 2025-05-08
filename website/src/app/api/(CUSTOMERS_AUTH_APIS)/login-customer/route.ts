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
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import sanityClient from '@/lib/sanity'

import { cookies } from 'next/headers'
import LoginSchema from '@/validations/LoginSchema'

export async function POST(req: NextRequest) {

  try {
    const body = await req.json()
    const parsed = LoginSchema.safeParse(body)
    const clientCookie = await cookies();

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error}, { status: 400 })
    }

    const { email, password } = parsed.data;

    // Query Sanity to find the user by email
    const query = `*[_type == "Accounts" && email == ${email}`
    const account = await sanityClient.fetch(query, { email })

    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 401 })
    }

    const passwordMatches = await bcrypt.compare(password, account.hashedPassword)

    if (!passwordMatches) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    // Sign a JWT token
    const token = jwt.sign(
      { id: account._id, email: account.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    )

    // Optionally set cookie here if needed
    clientCookie.set("manzarri-authorization-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
        maxAge: 3600, // 7 days
    });
    
    return NextResponse.json({ message: 'Login successful'}, { status: 200 })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
