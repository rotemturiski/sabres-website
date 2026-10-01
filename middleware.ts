import { NextResponse, type NextRequest } from "next/server";

// The root layout cannot read searchParams, so the language is passed to it as a
// request header. Without this the server always renders <html lang="en">, and
// crawlers file the Hebrew page as English content.
export function middleware(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lng") === "he" ? "he" : "en";

  const headers = new Headers(request.headers);
  headers.set("x-lang", lang);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Page routes only - skip static assets and files with an extension.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
