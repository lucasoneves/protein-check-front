import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const AUTH_TOKEN = request.cookies.get('authToken');
  const currentPage = (page: string) => {
    return request.nextUrl.pathname.startsWith(page)
  }
  if (currentPage('/dashboard')) {
    if (!AUTH_TOKEN) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  } else if (currentPage('/signin') || currentPage('/signup')) {
    if (!AUTH_TOKEN) {
      return
    } else {
      return NextResponse.redirect(new URL('/dashboard/home', request.url))
    }
  }
}