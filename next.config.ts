import type { NextConfig } from "next";

// script-src/style-src must allow 'unsafe-inline': most routes are prerendered
// statically at build time (see CYVEXLY_APP_DEBT.md item 3), so there is no
// per-request value available to nonce Next's own inline hydration scripts —
// a nonce + 'strict-dynamic' policy would silently strand those scripts
// without a nonce and break hydration on every static page. Every other
// directive is locked to 'self' since the site has no third-party
// scripts/frames/embeds (verified round 31 by grepping src/ for external
// URLs: only the local /media/*.mp4 video and self-hosted next/font files).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  // AGENTS.md in this sandbox is Owner-authored role-system guidance;
  // Next.js must never append its own agent-rules block to it.
  agentRules: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
