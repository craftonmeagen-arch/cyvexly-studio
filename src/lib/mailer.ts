import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

/**
 * Server-only mail helper for Contact and Project Planner submissions.
 * Never import this from a "use client" file — RESEND_API_KEY must stay
 * on the server.
 */

const DEFAULT_FROM = "Cyvexly Studio <notifications@cyvexly.com>";

export function isMailerConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
}

type SendArgs = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendMail({ to, subject, html, text, replyTo }: SendArgs): Promise<{
  ok: boolean;
  error?: string;
}> {
  const client = getClient();
  if (!client) {
    return { ok: false, error: "not-configured" };
  }

  try {
    const result = await client.emails.send({
      from: getFromAddress(),
      to,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "unknown-error" };
  }
}

export const NOTIFICATION_RECIPIENT = siteConfig.email;

/** Strips control characters and enforces a max length on free-text input. */
export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  const stripped = value
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "")
    .trim();
  return stripped.slice(0, maxLength);
}

/** Single-line variant for values that must never contain a newline (email header injection defense). */
export function sanitizeLine(value: unknown, maxLength: number): string {
  return sanitizeText(value, maxLength).replace(/[\r\n]+/g, " ").trim();
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Renders sanitized multi-line text as safe HTML paragraphs/line breaks. */
export function textToHtml(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

// Simple in-memory sliding-window rate limiter. Resets on server restart and
// is per-instance only (no shared store) — a proportionate defense-in-depth
// layer alongside the honeypot for a single-instance Render deployment, not
// a substitute for a real distributed limiter if the service is later
// scaled to multiple instances.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
// Every key this limiter ever sees gets a permanent Map entry unless swept —
// with no sweep, a caller that keys off a client-controlled value (the
// x-forwarded-for fallback in getClientIp below is exactly this) can grow
// the map without bound simply by varying that header on each request, a
// pure in-process memory-exhaustion DoS with no rate limit of its own to
// stop it (found round 61 alongside the round-60 IP-spoofing fix — same
// spoofable input, a different consequence). Sweep periodically and after
// any burst that pushes the map past a hard cap, whichever comes first.
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
const MAX_TRACKED_KEYS = 5000;
let lastCleanup = Date.now();

function pruneStaleEntries(now: number): void {
  for (const [key, timestamps] of submissionLog) {
    const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      submissionLog.delete(key);
    } else if (active.length !== timestamps.length) {
      submissionLog.set(key, active);
    }
  }
}

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  if (now - lastCleanup >= CLEANUP_INTERVAL_MS || submissionLog.size > MAX_TRACKED_KEYS) {
    pruneStaleEntries(now);
    lastCleanup = now;
  }
  const timestamps = (submissionLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissionLog.set(key, timestamps);
    return false;
  }
  timestamps.push(now);
  submissionLog.set(key, timestamps);
  return true;
}

/**
 * Client-IP resolution for the rate limiter above. Production traffic to
 * cyvexly.com passes through Cloudflare in front of Render (verified round
 * 53), so `cf-connecting-ip` — set by Cloudflare's edge and overwritten on
 * every request, never passed through from the client — is the trustworthy
 * source and is checked first. `x-forwarded-for` is kept only as a fallback
 * for environments with no Cloudflare hop (local dev, direct-to-origin
 * access); reading its *first* hop there is a real, known bypass, since a
 * client can freely set that header and a proxy conventionally appends
 * rather than replaces it (found and fixed round 60 — confirmed
 * exploitable: 7 requests each carrying a unique spoofed `X-Forwarded-For`
 * all passed the 5-per-15-minute limiter that correctly rejected a 6th
 * request sharing one real key). This does not by itself stop an attacker
 * who bypasses Cloudflare entirely via the direct Render origin hostname
 * (`cyvexly-studio.onrender.com`) and forges `cf-connecting-ip` there too —
 * closing that residual path needs a Render/Cloudflare account-level
 * control (Cloudflare Authenticated Origin Pulls, or restricting the Render
 * origin to Cloudflare's IP ranges) that requires dashboard access this
 * role does not have; see CYVEXLY_APP_DEBT.md.
 */
export function getClientIp(request: Request): string {
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

/**
 * Dormant scaffolding for the residual direct-Render-origin bypass named in
 * round 60/61: an attacker hitting `cyvexly-studio.onrender.com` directly
 * skips Cloudflare and can forge `cf-connecting-ip` themselves, since
 * nothing between the attacker and Render's origin overwrites it. Fully
 * closing that needs a Cloudflare-side control (a Transform Rule injecting
 * a shared-secret header on every proxied request, or Authenticated Origin
 * Pulls) that only Cloudflare-dashboard access can configure — this role
 * does not have that access, so this check stays dormant (always passes)
 * until `CF_ORIGIN_SECRET` is set. Once the Owner adds a Cloudflare
 * Transform Rule that sets the `x-cf-origin-secret` request header to a
 * chosen value for all requests, and sets that same value as
 * `CF_ORIGIN_SECRET` in Render, this starts rejecting any request that
 * skipped Cloudflare (direct-origin traffic won't carry the header at
 * all, and an attacker hitting the origin directly has no way to learn
 * the secret). See CYVEXLY_APP_DEBT.md for the exact steps.
 */
export function isTrustedOrigin(request: Request): boolean {
  const secret = process.env.CF_ORIGIN_SECRET;
  if (!secret) return true;
  return request.headers.get("x-cf-origin-secret") === secret;
}

export function formatTimestamp(date: Date): string {
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  }) + " ET";
}
