import { NextResponse } from "next/server";
import { getSession, updateSession } from "./utils/lib";

export async function middleware(request) {
  //   const pathname = request.nextUrl.pathname;
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return await updateSession(request);
}

export const config = {
  matcher: ["/add-expenses", "/dashboard", "/analytics"],
};
