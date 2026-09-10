"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button";
import { ConceptPreview } from "@/components/concept-preview";
import { selectedWork } from "@/lib/site-config";

const realProjectPreviews: Record<string, { src: string; alt: string }> = {
  eduailenz: {
    src: "/media/eduailenz-live-desktop.png",
    alt: "Current public EduAILenz teacher-workspace homepage",
  },
  mudoinkle: {
    src: "/media/mudoinkle-live-desktop.png",
    alt: "Current public Mudoinkle staging homepage",
  },
};

export function WorkGrid() {
  const railRef = useRef<HTMLDivElement>(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateRailState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>("[data-work-card]"),
    );
    if (!cards.length) return;

    const railRect = rail.getBoundingClientRect();
    const tolerance = 2;
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
      .querySelectorAll<HTMLElement>("[data-work-card]")
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

  const scrollToProject = useCallback((index: number) => {
    const rail = railRef.current;
    const cards = rail
      ? Array.from(rail.querySelectorAll<HTMLElement>("[data-work-card]"))
      : [];
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    if (!rail || !target) return;

    const railLeft = rail.getBoundingClientRect().left;
    const targetLeft =
      target.getBoundingClientRect().left - railLeft + rail.scrollLeft;
    rail.scrollTo({
      left: targetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  const moveRail = useCallback(
    (direction: -1 | 1) => {
      scrollToProject(visibleRange.start + direction);
    },
    [scrollToProject, visibleRange.start],
  );

  const positionLabel =
    visibleRange.start === visibleRange.end
      ? `Project ${visibleRange.start + 1} of ${selectedWork.length}`
      : `Projects ${visibleRange.start + 1}–${visibleRange.end + 1} of ${selectedWork.length}`;

  return (
    <div>
      <div className="mb-2 grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 sm:mb-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
        <div className="sm:mr-auto">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyber-blue">
            Browse the collection
          </p>
          <p id="work-rail-instructions" className="mt-1 hidden text-sm text-cool-graphite sm:block">
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
        <p id="work-rail-instructions-mobile" className="text-xs text-cool-graphite sm:hidden">
          Swipe or use arrows.
        </p>
        <div className="flex justify-end gap-2" aria-label="Work carousel controls">
          <button
            type="button"
            className="work-rail-control"
            onClick={() => canScrollBack && moveRail(-1)}
            aria-disabled={!canScrollBack}
            aria-label="Previous projects"
            aria-controls="work-project-rail"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="work-rail-control"
            onClick={() => canScrollForward && moveRail(1)}
            aria-disabled={!canScrollForward}
            aria-label="Next projects"
            aria-controls="work-project-rail"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        id="work-project-rail"
        ref={railRef}
        className="work-project-rail"
        role="region"
        aria-roledescription="carousel"
        aria-label="Cyvexly work projects"
        aria-describedby="work-rail-instructions work-rail-instructions-mobile"
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
            scrollToProject(0);
          } else if (event.key === "End") {
            event.preventDefault();
            scrollToProject(selectedWork.length - 1);
          }
        }}
      >
        {selectedWork.map((project, index) => {
          const realPreview = realProjectPreviews[project.slug];
          return (
            <article
              key={project.name}
              data-work-card
              className="glass-panel flex flex-col overflow-hidden rounded-2xl"
              role="group"
              aria-roledescription="slide"
              aria-label={`${project.name}, project ${index + 1} of ${selectedWork.length}`}
            >
              <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                {realPreview ? (
                  <Image
                    src={realPreview.src}
                    alt={realPreview.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 34rem, 88vw"
                  />
                ) : (
                  <div aria-hidden="true" className="h-full">
                    <ConceptPreview slug={project.slug} />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="w-fit rounded-full bg-ice-field px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                  {project.kind}
                </span>
                <h2 className="font-display text-lg font-semibold text-midnight-slate">
                  {project.name}
                </h2>
                <p className="text-sm text-cool-graphite">{project.summary}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-midnight-slate">
                  {project.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue"
                        aria-hidden="true"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-arctic-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-cool-graphite"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                  <ButtonLink
                    href={project.href}
                    variant="secondary"
                    className="px-4 py-2 text-xs"
                  >
                    View case study
                  </ButtonLink>
                  <ButtonLink
                    href={project.demoHref}
                    className="px-4 py-2 text-xs"
                    target={project.demoExternal ? "_blank" : undefined}
                    rel={project.demoExternal ? "noreferrer" : undefined}
                  >
                    {project.demoLabel}{project.demoExternal ? " ↗" : ""}
                  </ButtonLink>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
