"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en-US">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eef4fa",
          color: "#111827",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "32rem", textAlign: "center" }}>
          <p style={{ color: "#0f66e0", fontFamily: "monospace", fontSize: "0.875rem" }}>
            Error
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 600, marginTop: "1rem" }}>
            Cyvexly Studio hit an unexpected error.
          </h1>
          <p style={{ marginTop: "1rem", lineHeight: 1.6, color: "#374151" }}>
            Please try again, or reload the page.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                background: "#0f66e0",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1px solid #0f66e0",
                color: "#0f66e0",
                textDecoration: "none",
              }}
            >
              Back to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
