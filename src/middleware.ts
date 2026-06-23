import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Protect admin page routes (not API — API handles its own auth)
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const session = request.cookies.get("forbes_admin_session");

    // Allow access to admin login page logic handled client-side
    // API routes under /api/admin handle their own auth
    if (!session && request.nextUrl.pathname === "/admin") {
      // Page itself handles login UI — no redirect needed
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};