import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const INDEXNOW_KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();

  if (!key || !INDEXNOW_KEY_PATTERN.test(key)) {
    return new NextResponse("Not found\n", {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return new NextResponse(`${key}\n`, {
    headers: {
      "Cache-Control": "public, max-age=300",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
