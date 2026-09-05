import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <svg width="112" height="112" viewBox="0 0 32 32" fill="none">
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
    { ...size }
  );
}
