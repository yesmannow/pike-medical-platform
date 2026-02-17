import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";

  // For local testing: urgent.localhost:3000 vs primary.localhost:3000
  // In production: urgentcareindy.com vs primarycareindy.com
  const isPrimary = host.includes("primary");
  const tenant = isPrimary ? "primary-care" : "urgent-care";

  // Rewrite the internal path to the correct tenant folder.
  url.pathname = `/${tenant}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
