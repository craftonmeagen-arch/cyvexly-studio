"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";

type SubmissionFallbackProps = {
  message: string;
};

export function SubmissionFallback({ message }: SubmissionFallbackProps) {
  const fallbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fallback = fallbackRef.current;
    if (!fallback) return;

    window.requestAnimationFrame(() => {
      fallback.focus({ preventScroll: true });
      fallback.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center",
      });
    });
  }, [message]);

  return (
    <div
      ref={fallbackRef}
      role="alert"
      tabIndex={-1}
      data-submission-fallback
      className="scroll-mt-28 rounded-xl border border-warning-coral/40 bg-warning-coral/10 px-4 py-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-blue"
    >
      <p className="text-sm leading-relaxed text-warning-coral">{message}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-warning-coral/45 bg-white/35 px-4 py-2 text-sm font-semibold text-midnight-slate transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-blue"
        >
          Email {siteConfig.email}
        </a>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-warning-coral/45 bg-white/35 px-4 py-2 text-sm font-semibold text-midnight-slate transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-blue"
        >
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
