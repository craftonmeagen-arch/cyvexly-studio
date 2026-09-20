"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button";
import { PackageIcon } from "@/components/package-icon";
import { pricingPackages } from "@/lib/site-config";

type PricingCarouselProps = {
  idPrefix: string;
  packageHeadingLevel?: "h2" | "h3";
  regionLabel: string;
};

export function PricingCarousel({
  idPrefix,
  packageHeadingLevel = "h3",
  regionLabel,
}: PricingCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateRailState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>("[data-pricing-card]"),
    );
    if (!cards.length) return;

    const railRect = rail.getBoundingClientRect();
    const tolerance = 8;
    const visible = cards
      .map((card, index) => ({ index, rect: card.getBoundingClientRect() }))
      .filter(({ rect }) => {
        const visibleWidth =
          Math.min(rect.right, railRect.right) - Math.max(rect.left, railRect.left);
        return visibleWidth >= Math.min(rect.width * 0.5, 120);
      });

    setVisibleRange({
      start: visible[0]?.index ?? 0,
      end: visible.at(-1)?.index ?? 0,
    });
    setCanScrollBack(rail.scrollLeft > tolerance);
    setCanScrollForward(
      rail.scrollLeft < rail.scrollWidth - rail.clientWidth - tolerance,
    );
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let animationFrame = 0;
    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateRailState);
    };

    updateRailState();
    const resizeObserver = new ResizeObserver(updateRailState);
    resizeObserver.observe(rail);
    rail
      .querySelectorAll<HTMLElement>("[data-pricing-card]")
      .forEach((card) => resizeObserver.observe(card));
    rail.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      rail.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [updateRailState]);

  const scrollToPackage = useCallback((index: number, behavior?: ScrollBehavior) => {
    const rail = railRef.current;
    const cards = rail
      ? Array.from(rail.querySelectorAll<HTMLElement>("[data-pricing-card]"))
      : [];
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    if (!rail || !target) return;

    const railLeft = rail.getBoundingClientRect().left;
    const targetLeft =
      target.getBoundingClientRect().left - railLeft + rail.scrollLeft;
    rail.scrollTo({
      left: targetLeft,
      behavior:
        behavior ??
        (window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth"),
    });
  }, []);

  useEffect(() => {
    const revealHashTarget = () => {
      const anchor = window.location.hash.slice(1);
      const index = pricingPackages.findIndex((pkg) => pkg.anchor === anchor);
      if (index >= 0) {
        scrollToPackage(index, "auto");
        document.getElementById(anchor)?.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest",
        });
      } else if (idPrefix === "home" && anchor === "pricing-preview") {
        document.getElementById(anchor)?.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    revealHashTarget();
    const delayedReveals = [120, 400, 900].map((delay) =>
      window.setTimeout(revealHashTarget, delay),
    );
    window.addEventListener("load", revealHashTarget);
    window.addEventListener("hashchange", revealHashTarget);
    return () => {
      delayedReveals.forEach((timeout) => window.clearTimeout(timeout));
      window.removeEventListener("load", revealHashTarget);
      window.removeEventListener("hashchange", revealHashTarget);
    };
  }, [idPrefix, scrollToPackage]);

  const moveRail = useCallback(
    (direction: -1 | 1) => scrollToPackage(visibleRange.start + direction),
    [scrollToPackage, visibleRange.start],
  );

  const positionLabel =
    visibleRange.start === visibleRange.end
      ? `Package ${visibleRange.start + 1} of ${pricingPackages.length}`
      : `Packages ${visibleRange.start + 1}–${visibleRange.end + 1} of ${pricingPackages.length}`;
  const railId = `${idPrefix}-pricing-rail`;
  const instructionsId = `${idPrefix}-pricing-instructions`;
  const mobileInstructionsId = `${idPrefix}-pricing-instructions-mobile`;
  const PackageHeading = packageHeadingLevel;

  return (
    <div>
      <div className="mb-2 grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 sm:mb-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
        <div className="sm:mr-auto">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyber-blue">
            Browse every starting point
          </p>
          <p id={instructionsId} className="mt-1 hidden text-sm text-cool-graphite sm:block">
            Swipe, scroll, use the arrow keys, or choose a direction.
          </p>
        </div>
        <p
          className="min-w-[8.5rem] text-right font-mono text-xs font-semibold uppercase tracking-[0.12em] text-midnight-slate"
          aria-live="polite"
          aria-atomic="true"
        >
          {positionLabel}
        </p>
        <p id={mobileInstructionsId} className="text-xs text-cool-graphite sm:hidden">
          Swipe or use arrows.
        </p>
        <div className="flex justify-end gap-2" aria-label="Pricing carousel controls">
          <button
            type="button"
            className="work-rail-control"
            onClick={() => canScrollBack && moveRail(-1)}
            aria-disabled={!canScrollBack}
            aria-label="Previous packages"
            aria-controls={railId}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="work-rail-control"
            onClick={() => canScrollForward && moveRail(1)}
            aria-disabled={!canScrollForward}
            aria-label="Next packages"
            aria-controls={railId}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        id={railId}
        ref={railRef}
        className="pricing-package-rail"
        role="region"
        aria-roledescription="carousel"
        aria-label={regionLabel}
        aria-describedby={`${instructionsId} ${mobileInstructionsId}`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveRail(-1);
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            moveRail(1);
          } else if (event.key === "Home") {
            event.preventDefault();
            scrollToPackage(0);
          } else if (event.key === "End") {
            event.preventDefault();
            scrollToPackage(pricingPackages.length - 1);
          }
        }}
      >
        {pricingPackages.map((pkg, index) => (
          <article
            key={pkg.name}
            id={pkg.anchor}
            data-pricing-card
            className={`glass-panel pricing-package-card flex flex-col rounded-2xl p-7 ${
              pkg.featured ? "pricing-package-card-featured" : ""
            } ${pkg.promotional ? "pricing-package-card-promotional" : ""} scroll-mt-24`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${pkg.name}, package ${index + 1} of ${pricingPackages.length}`}
          >
            {pkg.badge && (
              <span
                className={`mb-3 w-fit rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                  pkg.promotional
                    ? "bg-cyber-blue/10 text-cyber-blue"
                    : "bg-signal-emerald/15 text-signal-emerald"
                }`}
              >
                {pkg.badge}
              </span>
            )}
            <PackageIcon name={pkg.name} />
            <PackageHeading className="mt-3 font-display text-lg font-semibold text-midnight-slate">
              {pkg.name}
            </PackageHeading>
            <p className="mt-1 text-sm font-medium text-midnight-slate">{pkg.plainName}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-cool-graphite">
              {pkg.priceLabel}
            </p>
            <p className="mt-1 font-display text-3xl font-semibold text-cyber-blue">
              {pkg.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cool-graphite">{pkg.bestFor}</p>
            {pkg.eligibility && (
              <p className="mt-3 rounded-xl border border-cyber-blue/15 bg-white/45 px-3 py-2 text-xs leading-relaxed text-midnight-slate">
                {pkg.eligibility}
              </p>
            )}
            <ul className="mt-4 flex-1 space-y-2 text-sm text-midnight-slate">
              {pkg.compactScope.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-cool-graphite">
              {pkg.timeline}
            </p>
            {pkg.promotional && (
              <div className="mt-4 rounded-xl bg-ice-field/75 px-3 py-3 text-xs leading-relaxed text-cool-graphite">
                Optional technical management is available for eligible Launch Offer sites at{" "}
                <ButtonLink href="/contact?interest=starter-management" variant="text" className="text-xs">
                  $50/month →
                </ButtonLink>
              </div>
            )}
            <ButtonLink
              href={`/contact?interest=${pkg.inquiryKey}`}
              variant={pkg.featured || pkg.promotional ? "primary" : "secondary"}
              className="mt-6 w-full"
            >
              Ask about {pkg.name}
            </ButtonLink>
          </article>
        ))}
      </div>
    </div>
  );
}
