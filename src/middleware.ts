import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Fix wrong URL: /congratulations&code=TOKEN -> /congratulations?code=TOKEN
  const match = pathname.match(/^\/congratulations&code=(.+)$/);
  if (match) {
    const token = match[1];
    const url = new URL("/congratulations", request.url);
    url.searchParams.set("code", token);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
