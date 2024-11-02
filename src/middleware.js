import { NextResponse } from "next/server";
import { authStatus } from "./services/api/auth/status";

const authUrl = "/";

export async function middleware(request) {
  const url = request.nextUrl;
  const isAuthUrl = authUrl === url.pathname;

  const response = await authStatus();
  const { isAuthenticated } = response;

  switch (isAuthenticated) {
    case true:
      if (isAuthenticated && isAuthUrl) {
        return NextResponse.redirect(new URL("/dashboard", url.origin));
      }
      break;
    default:
      if (!isAuthenticated && !isAuthUrl) {
        return NextResponse.redirect(new URL("/", url.origin));
      }
      break;
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
