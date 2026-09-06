import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Shared per-route Open Graph image grammar: brand mark, eyebrow, a short
 * page name (large), and the page's own shipped metadata description
 * (smaller, wrapped). Reuses the Home opengraph-image.tsx palette/mark so
 * every route's social-preview image reads as the same Cyvexly system
 * instead of the single generic Home image every route previously shared.
 */
export function renderRouteOgImage(pageName: string, description: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#0B1730",
          backgroundImage:
            "radial-gradient(1100px circle at 88% -10%, rgba(54,199,255,0.30), transparent 60%), radial-gradient(900px circle at -10% 115%, rgba(15,102,224,0.35), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <svg
          width="72"
          height="72"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M14.47 8.69A9 9 0 1 1 12.22 21.06"
            stroke="#36C7FF"
            strokeWidth="3.75"
            strokeLinecap="round"
          />
          <path
            d="M3.22 12.06L8.09 17.31L14.47 8.69"
            stroke="#36C7FF"
            strokeWidth="3.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 6,
            color: "#9FD9FF",
            marginBottom: 18,
          }}
        >
          CYVEXLY STUDIO
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -1,
            color: "#F8FBFF",
            marginBottom: 26,
          }}
        >
          {pageName}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 940,
            fontSize: 30,
            lineHeight: 1.4,
            color: "#B9C6DA",
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
