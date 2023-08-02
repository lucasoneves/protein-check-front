import { NextResponse } from "next/server"

export function middleware(req, next) {
  const nextUrl = req.nextUrl
  if (nextUrl.pathname === '/dashboard') {
    console.log(req.cookies.authToken)
    // if (req.cookies.get("authToken")) {
    //   return NextResponse.rewrite(new URL('/dashboard', req.url))
    // } else {
    //   return NextResponse.redirect(new URL('/signin', req.url))
    // }
  }

  if (nextUrl.pathname === '/signup' || nextUrl.pathname === '/signin') {
    if (req.cookies.get('authToken')) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }
}