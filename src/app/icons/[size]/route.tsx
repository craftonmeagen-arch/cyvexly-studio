import { ImageResponse } from "next/og";

const VALID_SIZES = [192, 512] as const;
type ValidSize = (typeof VALID_SIZES)[number];

function isValidSize(value: number): value is ValidSize {
  return (VALID_SIZES as readonly number[]).includes(value);
}

export function generateStaticParams() {
  return VALID_SIZES.map((size) => ({ size: String(size) }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size: sizeParam } = await params;
  const size = Number(sizeParam);

  if (!isValidSize(size)) {
    return new Response("Not Found", { status: 404 });
  }

  const markSize = Math.round(size * 0.62);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F66E0",
        }}
      >
        <svg width={markSize} height={markSize} viewBox="0 0 32 32" fill="none">
          <path
            d="M14.47 8.69A9 9 0 1 1 12.22 21.06"
            stroke="#F8FBFF"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
          <path
            d="M3.22 12.06L8.09 17.31L14.47 8.69"
            stroke="#F8FBFF"
            strokeWidth="3.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { width: size, height: size }
  );
}
