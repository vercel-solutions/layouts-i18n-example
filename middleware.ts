import {NextRequest, URLPattern} from "next/server";
import {NextResponse} from "next/server";

export const config = {
  matcher: ["/", "/:locale"],
};

const pattern = new URLPattern({pathname: "/:locale"});

export default function handler(req: NextRequest) {
  const locale =
    pattern.exec(req.nextUrl.href)?.pathname?.groups?.locale ||
    req.headers.get("accept-language")?.split(",")?.[0] ||
    "es-AR";

  req.nextUrl.pathname = locale + req.nextUrl.pathname;

  return NextResponse.rewrite(req.nextUrl);
}
