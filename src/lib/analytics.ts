export const ANALYTICS_CONSENT_STORAGE_KEY = "cyvexly:analytics-consent:v1";

export type AnalyticsConsent = "granted" | "denied";
export type InquiryType = "contact" | "planner" | "consultation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isValidGaMeasurementId(value: string | undefined): value is string {
  return Boolean(value && /^G-[A-Z0-9]{6,20}$/.test(value));
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function trackSuccessfulInquiry(inquiryType: InquiryType) {
  if (typeof window === "undefined") return;
  if (readAnalyticsConsent() !== "granted" || typeof window.gtag !== "function") return;

  window.gtag("event", "generate_lead", {
    lead_source: "website",
    inquiry_type: inquiryType,
  });
}
