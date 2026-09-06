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

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
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

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

export function formatTimestamp(date: Date): string {
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  }) + " ET";
}
