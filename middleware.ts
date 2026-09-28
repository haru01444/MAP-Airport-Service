import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Ignore static files, API routes, Sanity Studio, and files with extensions (.png, .jpg, .svg, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Detect training center subdomain (e.g. trainingcenter.map-airportservices.id or training.localhost)
  const isTrainingSubdomain =
    hostname.startsWith("trainingcenter.") ||
    hostname.startsWith("training.");

  if (isTrainingSubdomain) {
    // If request explicitly includes /training prefix, redirect to clean subdomain path
    // e.g. trainingcenter.map-airportservices.id/training/about -> trainingcenter.map-airportservices.id/about
    if (pathname === "/training") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (pathname.startsWith("/training/")) {
      const cleanPath = pathname.replace(/^\/training/, "");
      return NextResponse.redirect(new URL(cleanPath, request.url));
    }

    // Rewrite clean paths to internal /training routes
    // e.g. / -> /training, /about -> /training/about, /programs -> /training/programs
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/training", request.url));
    }
    return NextResponse.rewrite(new URL(`/training${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
