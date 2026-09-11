"use client";

import { useState, useSyncExternalStore } from "react";
import Script from "next/script";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  type AnalyticsConsent,
  readAnalyticsConsent,
} from "@/lib/analytics";

const ANALYTICS_CONSENT_CHANGE_EVENT = "cyvexly:analytics-consent-change";

function subscribeToAnalyticsConsent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

function getAnalyticsConsentSnapshot(): AnalyticsConsent | "unset" {
  return readAnalyticsConsent() ?? "unset";
}

function clearGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name && (name === "_ga" || name.startsWith("_ga_"))));
  const domains = [undefined, window.location.hostname, `.${window.location.hostname}`];

  for (const name of cookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

/**
 * Implements Google's basic consent mode: no Google tag or request is made
 * until a visitor explicitly allows analytics. The site stores only the
 * visitor's allow/decline choice before that point.
 */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const storedConsent = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    getAnalyticsConsentSnapshot,
    () => "loading",
  );
  const [currentPageChoice, setCurrentPageChoice] = useState<AnalyticsConsent | null>(null);
  const [isChoosing, setIsChoosing] = useState(false);
  const consent = currentPageChoice ?? (
    storedConsent === "granted" || storedConsent === "denied" ? storedConsent : null
  );

  function saveConsent(nextConsent: AnalyticsConsent) {
    const wasGranted = consent === "granted";
    let storedChoice = false;

    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, nextConsent);
      storedChoice = true;
      window.dispatchEvent(new Event(ANALYTICS_CONSENT_CHANGE_EVENT));
    } catch {
      // The current page still honors the choice if storage is unavailable.
    }

    if (nextConsent === "denied") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      clearGoogleAnalyticsCookies();
    }

    setCurrentPageChoice(storedChoice ? null : nextConsent);
    setIsChoosing(false);

    // Fully unload an already-running Google tag after a visitor withdraws consent.
    if (wasGranted && nextConsent === "denied") window.location.reload();
  }

  if (storedConsent === "loading") return null;

  const showChoice = consent === null || isChoosing;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script id="ga4-consent-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){dataLayer.push(arguments);};
              window.gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              window.gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              window.gtag('js', new Date());
              window.gtag('config', ${JSON.stringify(measurementId)}, {
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
          <Script
            id="ga4-library"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {showChoice ? (
        <section
          aria-labelledby="analytics-consent-title"
          className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-3xl border border-white/20 bg-[#071526]/95 p-5 text-white shadow-[0_24px_80px_rgba(2,8,20,0.45)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ion-cyan">
            Your privacy choice
          </p>
          <h2 id="analytics-consent-title" className="mt-2 font-display text-xl font-semibold">
            Help us understand what works?
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/75">
            With your permission, Google Analytics will measure page visits and successful inquiry types.
            We never send your name, contact details, or project notes. Declining will not change the site.
          </p>
          {consent && (
            <p className="mt-2 text-xs text-white/65">
              Analytics is currently {consent === "granted" ? "allowed" : "declined"} on this browser.
            </p>
          )}
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              data-analytics-consent="denied"
              onClick={() => saveConsent("denied")}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ion-cyan"
            >
              Decline analytics
            </button>
            <button
              type="button"
              data-analytics-consent="granted"
              onClick={() => saveConsent("granted")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-ion-cyan px-5 py-2.5 text-sm font-semibold text-[#071526] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ion-cyan"
            >
              Allow analytics
            </button>
            <a
              href="/privacy#cookies-and-analytics"
              className="min-h-11 py-3 text-center text-sm text-white/75 underline decoration-white/35 underline-offset-4 hover:text-white sm:ml-auto"
            >
              Privacy details
            </a>
          </div>
        </section>
      ) : (
        <button
          type="button"
          data-analytics-settings
          onClick={() => setIsChoosing(true)}
          className="fixed bottom-3 left-3 z-[70] inline-flex min-h-11 items-center rounded-full border border-white/25 bg-[#071526]/92 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-lg hover:border-ion-cyan/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ion-cyan sm:bottom-5 sm:left-5"
        >
          Analytics settings
        </button>
      )}
    </>
  );
}
