import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Cyvexly Studio — Websites built to make your business unmistakable.";

export default function OpengraphImage() {
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
          width="88"
          height="88"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: 40 }}
        >
          <path
            d="M24.5 8.5A12 12 0 1 1 21.5 25"
            stroke="#36C7FF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M9.5 13L16 20L24.5 8.5"
            stroke="#36C7FF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 6,
            color: "#9FD9FF",
            marginBottom: 22,
          }}
        >
          CYVEXLY STUDIO
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 920,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: -1,
            color: "#F8FBFF",
          }}
        >
          Websites built to make your business unmistakable.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 28,
            color: "#B9C6DA",
          }}
        >
          Independent web studio · Available worldwide
        </div>
      </div>
    ),
    { ...size }
  );
}
