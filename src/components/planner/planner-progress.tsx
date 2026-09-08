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
    // The numbered rail is a desktop/tablet enhancement. Phones use the
    // compact named-step control below, so never let its hidden rail affect
    // page scroll when a step changes.
    if (!window.matchMedia("(min-width: 640px)").matches) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeStepRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentStep]);

  return (
    <nav aria-label="Project Planner progress" className="pb-2">
      <div className="sm:hidden">
        <div className="flex items-end justify-between gap-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-cool-graphite">
            Step {currentStep} of {plannerSteps.length}
          </p>
          <p className="text-right text-sm font-semibold text-midnight-slate">
            {plannerSteps[currentStep - 1].label}
          </p>
        </div>
        <div
          role="progressbar"
          aria-label={`Planner progress: step ${currentStep} of ${plannerSteps.length}`}
          aria-valuemin={1}
          aria-valuemax={plannerSteps.length}
          aria-valuenow={currentStep}
          className="mt-3 h-1.5 overflow-hidden rounded-full bg-smoke-glass"
        >
          <div
            className="h-full rounded-full bg-cyber-blue transition-[width] duration-200"
            style={{ width: `${(currentStep / plannerSteps.length) * 100}%` }}
          />
        </div>
        <label htmlFor="planner-step-jump" className="sr-only">
          Go to a reached Planner step
        </label>
        <select
          id="planner-step-jump"
          value={currentStep}
          onChange={(event) => onStepClick(Number(event.target.value))}
          className="mt-4 min-h-11 w-full rounded-xl border border-smoke-glass bg-white/60 px-3 py-2.5 text-sm font-medium text-midnight-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-blue"
        >
          {plannerSteps.map((step) => (
            <option key={step.id} value={step.number} disabled={step.number > maxReachedStep}>
              Step {step.number}: {step.label}
            </option>
          ))}
        </select>
      </div>

      <ol className="hidden items-center gap-1 sm:flex">
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
      <p className="mt-2 hidden text-xs font-medium uppercase tracking-[0.1em] text-cool-graphite sm:block">
        Step {currentStep} of {plannerSteps.length}
      </p>
    </nav>
  );
}
