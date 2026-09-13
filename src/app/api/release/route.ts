import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const commit = process.env.RENDER_GIT_COMMIT?.trim();

  return NextResponse.json(
    { commit: commit || null },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
