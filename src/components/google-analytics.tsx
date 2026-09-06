"use client";

import Script from "next/script";

/**
 * Loads Google Analytics 4 only when a real Measurement ID is configured
 * (NEXT_PUBLIC_GA_MEASUREMENT_ID) — never renders a placeholder tag, so the
 * site never claims analytics that aren't actually running. Uses privacy-
 * conscious defaults: no ad-personalization signals, no Google-signals
 * cross-device linking. GA4 anonymizes IPs by default (no config needed).
 */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
