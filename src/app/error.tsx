"use client";

import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";

export default function Error({
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
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage flex min-h-[60vh] items-center border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-2xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="font-mono text-sm text-cyber-blue">Error</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Something went wrong.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cool-graphite sm:text-lg">
              This page hit an unexpected error. You can try again, or head
              back to a page that works.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => reset()}
                className="glass-panel inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-midnight-slate transition-colors duration-200 hover:border-cyber-blue/60 hover:text-cyber-blue"
              >
                Try again
              </button>
              <ButtonLink href="/">Back to home</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
