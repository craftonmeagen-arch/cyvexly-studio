"use client";

import { useEffect, useRef } from "react";
import { plannerSteps } from "@/lib/planner-config";

export function PlannerProgress({
  currentStep,
  onStepClick,
  maxReachedStep,
}: {
  currentStep: number;
  onStepClick: (step: number) => void;
  maxReachedStep: number;
}) {
  const activeStepRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Keep the active step visible inside the rail's own horizontal scroll
    // container at narrow viewports, where all nine circles don't fit —
    // otherwise the rail can sit scrolled away from the current step with
    // no visual cue a user would find without discovering the hidden
    // scroll themselves (found by the Council, CYC-R2-F001).
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeStepRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentStep]);

  return (
    <nav aria-label="Project Planner progress" className="overflow-x-auto pb-2">
      <ol className="flex min-w-max items-center gap-1">
        {plannerSteps.map((step, index) => {
          const isComplete = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          const isReachable = step.number <= maxReachedStep;

          return (
            <li key={step.id} className="flex items-center">
              {index > 0 && (
                <div
                  className={`h-px w-6 sm:w-10 ${
                    step.number <= maxReachedStep ? "bg-cyber-blue/50" : "bg-smoke-glass"
                  }`}
                  aria-hidden="true"
                />
              )}
              <button
                ref={isCurrent ? activeStepRef : undefined}
                type="button"
                onClick={() => isReachable && onStepClick(step.number)}
                disabled={!isReachable}
                aria-current={isCurrent ? "step" : undefined}
                aria-label={`Step ${step.number}: ${step.label}${isComplete ? " (complete)" : ""}`}
                title={step.label}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium transition-colors duration-150 ${
                  isCurrent
                    ? "border-cyber-blue bg-cyber-blue text-white"
                    : isComplete
                      ? "border-cyber-blue/60 bg-cyber-blue/10 text-cyber-blue"
                      : "border-smoke-glass bg-frosted-glass text-cool-graphite"
                } ${isReachable ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
              >
                {isComplete ? (
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M5 10.5 8.5 14 15 6.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </button>
            </li>
          );
        })}
      </ol>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-cool-graphite">
        Step {currentStep} of {plannerSteps.length}
      </p>
    </nav>
  );
}
