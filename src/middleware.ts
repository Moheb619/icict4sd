import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    const url = new URL(`/Admin`, request.url);
    url.searchParams.set("callbackUrl ", encodeURI(request.url));
    return NextResponse.redirect(url);
  } else if (token && token.role !== "ADMIN") {
    const url = new URL(`/`, request.url);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/UserMessages"],
};
