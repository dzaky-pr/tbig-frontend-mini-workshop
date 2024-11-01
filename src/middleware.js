import { NextResponse } from "next/server";

const authUrl = "/";

export async function middleware(request) {
  const url = request.nextUrl;
  const isAuthUrl = authUrl === url.pathname;

  const response = { status: 401, data: { isAuthenticated: false } };
  const status = response.status;
  const isAuthenticated = response.data.isAuthenticated;

  switch (status) {
    case 200:
      if (isAuthenticated && isAuthUrl) {
        return NextResponse.redirect(new URL("/dashboard", url.origin));
      }
      break;
    case 401:
      if (!isAuthenticated && !isAuthUrl) {
        return NextResponse.redirect(new URL("/", url.origin));
      }
      break;
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
