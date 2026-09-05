"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ButtonLink } from "@/components/button";
import { siteConfig } from "@/lib/site-config";
import {
  assetCategories,
  assetStatusOptions,
  budgetRanges,
  businessStages,
  contentReadinessOptions,
  featuresNeedingDetail,
  geographicMarkets,
  plannerFeatures,
  plannerSteps,
  possiblePages,
  primaryGoals,
  type ServicePlannerSelection,
  timingOptions,
  visualSpectrums,
  websiteTypes,
} from "@/lib/planner-config";
import {
  CheckboxCardGroup,
  NotSureToggle,
  RadioCardGroup,
  SelectField,
  SpectrumRow,
  StatusRow,
  TextAreaField,
  TextField,
} from "./planner-fields";
import { PlannerProgress } from "./planner-progress";

type PlannerData = {
  fullName: string;
  workEmail: string;
  contactMethod: string;
  roleTitle: string;
  companyName: string;
  country: string;
  otherApprovers: string;
  businessDescription: string;
  productsServices: string;
  currentWebsite: string;
  businessStage: string;
  geographicMarket: string;
  customerGroups: string;
  competitors: string;
  differentiation: string;
  primaryGoal: string;
  primaryGoalOther: string;
  secondaryGoals: string;
  importantAction: string;
  currentProblems: string;
  successMeasure: string;
  trafficAnalytics: string;
  websiteType: string;
  pages: string[];
  pagesOther: string;
  pageCount: string;
  essentialPages: string;
  needsMigration: string;
  multipleLanguages: string;
  notSureSitemap: boolean;
  features: string[];
  notSureFeatures: boolean;
  featureDetails: string;
  assetStatus: Record<string, string>;
  assetLink: string;
  personalityAdjectives: string;
  spectrum: Record<string, number>;
  colorsToUse: string;
  colorsToAvoid: string;
  sitesAdmired: string;
  competitorsToAvoid: string;
  accessibilityNotes: string;
  openNotes: string;
  budgetRange: string;
  launchDate: string;
  launchDateReason: string;
  timingFlexibility: string;
  contentReadiness: string;
  careInterest: string;
  acknowledgeNotQuote: boolean;
  consent: boolean;
  followUpEmails: boolean;
  honeypot: string;
};

const emptyData: PlannerData = {
  fullName: "",
  workEmail: "",
  contactMethod: "",
  roleTitle: "",
  companyName: "",
  country: "",
  otherApprovers: "",
  businessDescription: "",
  productsServices: "",
  currentWebsite: "",
  businessStage: "",
  geographicMarket: "",
  customerGroups: "",
  competitors: "",
  differentiation: "",
  primaryGoal: "",
  primaryGoalOther: "",
  secondaryGoals: "",
  importantAction: "",
  currentProblems: "",
  successMeasure: "",
  trafficAnalytics: "",
  websiteType: "",
  pages: [],
  pagesOther: "",
  pageCount: "",
  essentialPages: "",
  needsMigration: "",
  multipleLanguages: "",
  notSureSitemap: false,
  features: [],
  notSureFeatures: false,
  featureDetails: "",
  assetStatus: {},
  assetLink: "",
  personalityAdjectives: "",
  spectrum: {},
  colorsToUse: "",
  colorsToAvoid: "",
  sitesAdmired: "",
  competitorsToAvoid: "",
  accessibilityNotes: "",
  openNotes: "",
  budgetRange: "",
  launchDate: "",
  launchDateReason: "",
  timingFlexibility: "",
  contentReadiness: "",
  careInterest: "",
  acknowledgeNotQuote: false,
  consent: false,
  followUpEmails: false,
  honeypot: "",
};

const STORAGE_KEY = "cyvexly-planner-draft-v1";

type Errors = Partial<Record<keyof PlannerData, string>>;

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function PlannerForm({
  initialSelection,
}: {
  initialSelection?: ServicePlannerSelection;
}) {
  const initialSelectionRef = useRef(initialSelection);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const previousStepRef = useRef(1);
  const [data, setData] = useState<PlannerData>(() =>
    initialSelection
      ? {
          ...emptyData,
          websiteType: initialSelection.websiteType,
          primaryGoal: initialSelection.primaryGoal,
          careInterest: initialSelection.careInterest,
          openNotes: initialSelection.openNotes,
        }
      : emptyData,
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [maxReachedStep, setMaxReachedStep] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"form" | "submitted">("form");
  const [isStorageReady, setIsStorageReady] = useState(false);
  const [restored, setRestored] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | null>(null);
  const [savedNote, setSavedNote] = useState(false);

  useEffect(() => {
    // Deliberate one-time sync from a browser-only external store
    // (localStorage) after mount, not derived state: reading it during the
    // lazy useState initializer instead would make the client's first render
    // diverge from the server-rendered (storage-less) HTML and produce a
    // real hydration mismatch. See https://react.dev/learn/you-might-not-need-an-effect#fetching-data.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { data: PlannerData; step: number };
        setData({ ...emptyData, ...parsed.data });
        setCurrentStep(parsed.step ?? 1);
        setMaxReachedStep(parsed.step ?? 1);
        setRestored(true);
      } else if (initialSelectionRef.current) {
        setPrefilledService(initialSelectionRef.current.serviceName);
      }
    } catch {
      // Corrupt or unavailable storage — start fresh rather than block the Planner.
    } finally {
      setIsStorageReady(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function set<K extends keyof PlannerData>(key: K, value: PlannerData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function clearError(key: keyof PlannerData) {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validateStep(step: number): Errors {
    const next: Errors = {};
    if (step === 1) {
      if (!data.fullName.trim()) next.fullName = "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail)) {
        next.workEmail = "Please enter a valid email address.";
      }
      if (!data.contactMethod.trim()) next.contactMethod = "Please share a phone or preferred contact method.";
    }
    if (step === 2) {
      if (!data.businessDescription.trim()) {
        next.businessDescription = "Please describe your business in a sentence or two.";
      }
    }
    if (step === 3) {
      if (!data.primaryGoal) next.primaryGoal = "Please choose your primary goal.";
      if (data.primaryGoal === "other" && !data.primaryGoalOther.trim()) {
        next.primaryGoalOther = "Please describe your goal.";
      }
    }
    if (step === 4) {
      if (!data.websiteType) next.websiteType = "Please choose a website type.";
      if (data.pages.length === 0 && !data.notSureSitemap) {
        next.pages = "Select at least one page, or choose \"not sure — recommend the sitemap.\"";
      }
    }
    if (step === 5) {
      if (data.features.length === 0 && !data.notSureFeatures) {
        next.features = "Select at least one feature, or choose \"not sure — recommend the right features.\"";
      }
    }
    if (step === 8) {
      if (!data.budgetRange) next.budgetRange = "Please choose a budget range.";
      if (!data.timingFlexibility) next.timingFlexibility = "Please choose a timing preference.";
    }
    if (step === 9) {
      if (data.honeypot.trim()) next.honeypot = "Submission blocked.";
      if (!data.acknowledgeNotQuote) {
        next.acknowledgeNotQuote = "Please acknowledge this isn't a final quote.";
      }
      if (!data.consent) next.consent = "Please confirm you'd like Cyvexly to respond.";
    }
    return next;
  }

  function focusFirstError(stepErrors: Errors) {
    const firstKey = Object.keys(stepErrors)[0];
    if (!firstKey) return;
    window.requestAnimationFrame(() => {
      const target =
        document.getElementById(firstKey) ??
        document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      target?.focus();
    });
  }

  function goToStep(step: number) {
    setCurrentStep(step);
    setMaxReachedStep((prev) => Math.max(prev, step));
  }

  useEffect(() => {
    // Only react to an actual step change, not the initial mount (or a
    // restored draft's initial step) — comparing against a ref (rather than
    // a one-shot "have I run yet" flag) stays correct under React Strict
    // Mode's development-only double-invoke of mount effects, since neither
    // duplicate pass ever sees currentStep differ from previousStepRef here.
    if (previousStepRef.current === currentStep) return;
    previousStepRef.current = currentStep;
    // Deferred to a frame after this render commits: calling scrollTo/focus
    // synchronously inside goToStep raced the new step's DOM/layout update,
    // so the browser's scroll-anchoring silently kept the old scroll
    // position and focus never left the Continue/Back button — sighted
    // users weren't returned to the top of the new step, and keyboard/
    // screen-reader users got no indication the step had changed at all.
    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      // preventScroll: focusing the heading would otherwise jump/scroll it
      // into view on its own and fight the scrollTo(0) call above.
      stepHeadingRef.current?.focus({ preventScroll: true });
    });
  }, [currentStep]);

  function handleNext() {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusFirstError(stepErrors);
      return;
    }
    setErrors({});
    goToStep(Math.min(currentStep + 1, plannerSteps.length));
  }

  function handleBack() {
    setErrors({});
    goToStep(Math.max(currentStep - 1, 1));
  }

  function handleSaveForLater() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step: currentStep }));
      setSavedNote(true);
      window.setTimeout(() => setSavedNote(false), 4000);
    } catch {
      // Storage unavailable — the button simply has no persistent effect.
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const stepErrors = validateStep(9);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusFirstError(stepErrors);
      return;
    }

    const subject = `Project Planner: ${data.companyName || data.fullName}`;
    const body = buildSummaryText(data);
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing to clean up if storage was never available.
    }

    window.location.href = mailto;
    setStatus("submitted");
  }

  const goalLabel = useMemo(() => {
    const match = primaryGoals.find((goal) => goal.id === data.primaryGoal);
    if (!match) return "";
    return match.id === "other" ? data.primaryGoalOther || "Other" : match.label;
  }, [data.primaryGoal, data.primaryGoalOther]);

  const websiteTypeLabel = useMemo(
    () => websiteTypes.find((type) => type.id === data.websiteType)?.label ?? "",
    [data.websiteType],
  );

  if (!isStorageReady) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-busy="true"
        className="glass-panel flex min-h-[22rem] min-w-0 items-center justify-center rounded-2xl p-6 text-center sm:p-8"
      >
        <div className="max-w-md">
          <span
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-cyber-blue/10 shadow-[0_10px_30px_-16px_rgba(15,102,224,0.8)]"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-cyber-blue shadow-[0_0_16px_rgba(54,199,255,0.9)]" />
          </span>
          <h2 className="mt-5 font-display text-xl font-semibold text-midnight-slate">
            Preparing your Planner
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
            Checking this device for a saved draft before you begin.
          </p>
        </div>
      </div>
    );
  }

  if (status === "submitted") {
    return (
      <div role="status" className="glass-panel rounded-2xl px-6 py-10 text-center">
        <h2 className="font-display text-xl font-semibold text-midnight-slate">
          Your email app should be open now.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cool-graphite">
          We&apos;ve pre-filled a full summary of your answers to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-cyber-blue">
            {siteConfig.email}
          </a>{" "}
          — just press send from there. We respond within two business days. This interim step
          sends from your own mail client; it does not yet send an automatic confirmation email
          from Cyvexly.
        </p>
        <ButtonLink href="/" variant="secondary" className="mt-6">
          Back to home
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="glass-panel min-w-0 rounded-2xl p-6 sm:p-8">
      <PlannerProgress
        currentStep={currentStep}
        maxReachedStep={maxReachedStep}
        onStepClick={(step) => {
          setErrors({});
          goToStep(step);
        }}
      />

      {restored && currentStep === 1 && (
        <p className="mt-4 rounded-xl border border-cyber-blue/30 bg-cyber-blue/5 px-4 py-3 text-xs text-midnight-slate">
          We restored a saved draft from this device. Continue where you left off, or start over
          by clearing individual fields.
        </p>
      )}

      {prefilledService && !restored && currentStep === 1 && (
        <p className="mt-4 rounded-xl border border-signal-emerald/30 bg-signal-emerald/5 px-4 py-3 text-xs text-midnight-slate">
          <span className="font-medium">Starting point added: {prefilledService}.</span>{" "}
          We selected the closest Planner options for you. You can change every answer before
          sending.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-6">
        {/* Honeypot: spam protection without a visual puzzle. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="planner-company-website">Leave this field blank</label>
          <input
            id="planner-company-website"
            name="planner-company-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.honeypot}
            onChange={(event) => set("honeypot", event.target.value)}
          />
        </div>

        <p role="status" aria-live="polite" className="sr-only">
          Step {plannerSteps[currentStep - 1].number} of {plannerSteps.length}:{" "}
          {plannerSteps[currentStep - 1].label}
        </p>
        <h2
          ref={stepHeadingRef}
          tabIndex={-1}
          className="font-display text-lg font-semibold text-midnight-slate sm:text-xl"
        >
          {String(plannerSteps[currentStep - 1].number).padStart(2, "0")}{" "}
          {plannerSteps[currentStep - 1].label}
        </h2>

        <div className="mt-6 space-y-6">
          {currentStep === 1 && (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="fullName"
                  label="Full name"
                  value={data.fullName}
                  onChange={(v) => {
                    set("fullName", v);
                    clearError("fullName");
                  }}
                  autoComplete="name"
                  required
                  error={errors.fullName}
                />
                <TextField
                  id="workEmail"
                  label="Work email"
                  type="email"
                  value={data.workEmail}
                  onChange={(v) => {
                    set("workEmail", v);
                    clearError("workEmail");
                  }}
                  autoComplete="email"
                  required
                  error={errors.workEmail}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="contactMethod"
                  label="Phone or preferred contact method"
                  value={data.contactMethod}
                  onChange={(v) => {
                    set("contactMethod", v);
                    clearError("contactMethod");
                  }}
                  required
                  error={errors.contactMethod}
                />
                <TextField
                  id="roleTitle"
                  label="Role / title"
                  value={data.roleTitle}
                  onChange={(v) => set("roleTitle", v)}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="companyName"
                  label="Company name"
                  value={data.companyName}
                  onChange={(v) => set("companyName", v)}
                  autoComplete="organization"
                />
                <TextField
                  id="country"
                  label="Country and time zone"
                  value={data.country}
                  onChange={(v) => set("country", v)}
                  placeholder="e.g. United States, ET"
                />
              </div>
              <TextField
                id="otherApprovers"
                label="Who else will approve the project?"
                value={data.otherApprovers}
                onChange={(v) => set("otherApprovers", v)}
                placeholder="Optional"
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <TextAreaField
                id="businessDescription"
                label="Short description of the business"
                value={data.businessDescription}
                onChange={(v) => {
                  set("businessDescription", v);
                  clearError("businessDescription");
                }}
                required
                error={errors.businessDescription}
              />
              <TextAreaField
                id="productsServices"
                label="Products / services offered"
                value={data.productsServices}
                onChange={(v) => set("productsServices", v)}
                rows={3}
              />
              <TextField
                id="currentWebsite"
                label="Current website URL, if any"
                value={data.currentWebsite}
                onChange={(v) => set("currentWebsite", v)}
                placeholder="https://"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  id="businessStage"
                  label="Business stage"
                  value={data.businessStage}
                  onChange={(v) => set("businessStage", v)}
                  options={businessStages}
                />
                <SelectField
                  id="geographicMarket"
                  label="Geographic market"
                  value={data.geographicMarket}
                  onChange={(v) => set("geographicMarket", v)}
                  options={geographicMarkets}
                />
              </div>
              <TextField
                id="customerGroups"
                label="Main customer groups"
                value={data.customerGroups}
                onChange={(v) => set("customerGroups", v)}
              />
              <TextField
                id="competitors"
                label="Primary competitors or alternatives"
                value={data.competitors}
                onChange={(v) => set("competitors", v)}
              />
              <TextAreaField
                id="differentiation"
                label="What makes the business meaningfully different?"
                value={data.differentiation}
                onChange={(v) => set("differentiation", v)}
                rows={3}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <RadioCardGroup
                legend="Primary website goal"
                name="primaryGoal"
                value={data.primaryGoal}
                onChange={(v) => {
                  set("primaryGoal", v);
                  clearError("primaryGoal");
                }}
                options={primaryGoals}
                required
                error={errors.primaryGoal}
              />
              {data.primaryGoal === "other" && (
                <TextField
                  id="primaryGoalOther"
                  label="Describe your primary goal"
                  value={data.primaryGoalOther}
                  onChange={(v) => {
                    set("primaryGoalOther", v);
                    clearError("primaryGoalOther");
                  }}
                  required
                  error={errors.primaryGoalOther}
                />
              )}
              <CheckboxCardGroup
                legend="Desired secondary goals"
                name="secondaryGoals"
                values={data.secondaryGoals ? data.secondaryGoals.split("|").filter(Boolean) : []}
                onToggle={(id) => {
                  const list = data.secondaryGoals ? data.secondaryGoals.split("|").filter(Boolean) : [];
                  set("secondaryGoals", toggleValue(list, id).join("|"));
                }}
                options={primaryGoals.filter((goal) => goal.id !== data.primaryGoal)}
              />
              <TextField
                id="importantAction"
                label="The single most important visitor action"
                value={data.importantAction}
                onChange={(v) => set("importantAction", v)}
              />
              <TextAreaField
                id="currentProblems"
                label="Current website problems"
                value={data.currentProblems}
                onChange={(v) => set("currentProblems", v)}
                rows={3}
              />
              <TextField
                id="successMeasure"
                label="How should success be measured after launch?"
                value={data.successMeasure}
                onChange={(v) => set("successMeasure", v)}
              />
              <TextField
                id="trafficAnalytics"
                label="Expected traffic or known analytics, if available"
                value={data.trafficAnalytics}
                onChange={(v) => set("trafficAnalytics", v)}
                placeholder="Optional"
              />
            </>
          )}

          {currentStep === 4 && (
            <>
              <RadioCardGroup
                legend="What kind of website do you need?"
                name="websiteType"
                value={data.websiteType}
                onChange={(v) => {
                  set("websiteType", v);
                  clearError("websiteType");
                }}
                options={websiteTypes}
                required
                error={errors.websiteType}
                columns="sm:grid-cols-2 lg:grid-cols-3"
              />
              <CheckboxCardGroup
                legend="Which pages should it include?"
                name="pages"
                values={data.pages}
                onToggle={(id) => {
                  set("pages", toggleValue(data.pages, id));
                  clearError("pages");
                }}
                options={possiblePages.map((page) => ({ id: page, label: page }))}
                error={errors.pages}
                columns="sm:grid-cols-3"
              />
              {data.pages.includes("Other") && (
                <TextField
                  id="pagesOther"
                  label="Describe the other page(s) you need"
                  value={data.pagesOther}
                  onChange={(v) => set("pagesOther", v)}
                />
              )}
              <NotSureToggle
                id="notSureSitemap"
                label="Not sure — recommend the sitemap. We'll suggest the right pages for your goals."
                checked={data.notSureSitemap}
                onChange={(checked) => {
                  set("notSureSitemap", checked);
                  clearError("pages");
                }}
              />
              {data.pages.length > 1 && !data.notSureSitemap && (
                <TextAreaField
                  id="essentialPages"
                  label="Which pages are essential for launch?"
                  hint="Optional — helps us prioritize if the full list can't all ship at once."
                  value={data.essentialPages}
                  onChange={(v) => set("essentialPages", v)}
                  rows={2}
                />
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="pageCount"
                  label="Approximate page count (optional)"
                  type="number"
                  value={data.pageCount}
                  onChange={(v) => set("pageCount", v)}
                  hint="This helps us plan the right structure."
                />
                <SelectField
                  id="needsMigration"
                  label="Does an existing site need content migration?"
                  value={data.needsMigration}
                  onChange={(v) => set("needsMigration", v)}
                  options={["Yes", "No", "Not sure"]}
                />
              </div>
              <SelectField
                id="multipleLanguages"
                label="Are multiple languages needed?"
                value={data.multipleLanguages}
                onChange={(v) => set("multipleLanguages", v)}
                options={["Yes", "No", "Not sure"]}
              />
            </>
          )}

          {currentStep === 5 && (
            <>
              <CheckboxCardGroup
                legend="Features and integrations"
                name="features"
                values={data.features}
                onToggle={(id) => {
                  set("features", toggleValue(data.features, id));
                  clearError("features");
                }}
                options={plannerFeatures}
                error={errors.features}
                columns="sm:grid-cols-2 lg:grid-cols-3"
              />
              <NotSureToggle
                id="notSureFeatures"
                label="Not sure — recommend the right features."
                checked={data.notSureFeatures}
                onChange={(checked) => {
                  set("notSureFeatures", checked);
                  clearError("features");
                }}
              />
              {data.features.some((id) => featuresNeedingDetail.has(id)) && (
                <TextAreaField
                  id="featureDetails"
                  label="Tell us more about the features you selected"
                  hint="Provider, number of products/locations/users, or any special workflow."
                  value={data.featureDetails}
                  onChange={(v) => set("featureDetails", v)}
                  rows={3}
                />
              )}
            </>
          )}

          {currentStep === 6 && (
            <>
              <p className="text-sm text-cool-graphite">
                For each item, tell us where things stand. Share links to a shared asset folder
                below — please don&apos;t include passwords or sensitive credentials in this form.
              </p>
              <div className="rounded-xl border border-smoke-glass bg-frosted-glass/60 px-4">
                {assetCategories.map((category) => (
                  <StatusRow
                    key={category.id}
                    categoryLabel={category.label}
                    value={data.assetStatus[category.id] ?? ""}
                    onChange={(value) =>
                      set("assetStatus", { ...data.assetStatus, [category.id]: value })
                    }
                    options={assetStatusOptions}
                  />
                ))}
              </div>
              <TextField
                id="assetLink"
                label="Link to a shared asset folder"
                value={data.assetLink}
                onChange={(v) => set("assetLink", v)}
                placeholder="Optional — Drive, Dropbox, etc."
              />
            </>
          )}

          {currentStep === 7 && (
            <>
              <TextField
                id="personalityAdjectives"
                label="Three to five adjectives for the desired personality"
                value={data.personalityAdjectives}
                onChange={(v) => set("personalityAdjectives", v)}
                placeholder="e.g. confident, warm, precise"
              />
              <div className="space-y-5">
                {visualSpectrums.map((spectrum) => (
                  <SpectrumRow
                    key={spectrum.id}
                    left={spectrum.left}
                    right={spectrum.right}
                    value={data.spectrum[spectrum.id] ?? 2}
                    onChange={(value) => set("spectrum", { ...data.spectrum, [spectrum.id]: value })}
                  />
                ))}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="colorsToUse"
                  label="Colors to use"
                  value={data.colorsToUse}
                  onChange={(v) => set("colorsToUse", v)}
                  placeholder="Optional"
                />
                <TextField
                  id="colorsToAvoid"
                  label="Colors to avoid"
                  value={data.colorsToAvoid}
                  onChange={(v) => set("colorsToAvoid", v)}
                  placeholder="Optional"
                />
              </div>
              <TextAreaField
                id="sitesAdmired"
                label="Websites you admire, and what specifically you like"
                value={data.sitesAdmired}
                onChange={(v) => set("sitesAdmired", v)}
                rows={3}
              />
              <TextField
                id="competitorsToAvoid"
                label="Direct competitors you don't want to resemble"
                value={data.competitorsToAvoid}
                onChange={(v) => set("competitorsToAvoid", v)}
                placeholder="Optional"
              />
              <TextAreaField
                id="accessibilityNotes"
                label="Accessibility or audience considerations"
                value={data.accessibilityNotes}
                onChange={(v) => set("accessibilityNotes", v)}
                rows={3}
              />
              <TextAreaField
                id="openNotes"
                label="Open notes or sketches"
                value={data.openNotes}
                onChange={(v) => set("openNotes", v)}
                rows={3}
              />
            </>
          )}

          {currentStep === 8 && (
            <>
              <RadioCardGroup
                legend="Budget range"
                name="budgetRange"
                value={data.budgetRange}
                onChange={(v) => {
                  set("budgetRange", v);
                  clearError("budgetRange");
                }}
                options={budgetRanges.map((range) => ({ id: range, label: range }))}
                required
                error={errors.budgetRange}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="launchDate"
                  label="Desired launch date"
                  type="date"
                  value={data.launchDate}
                  onChange={(v) => set("launchDate", v)}
                />
                <TextField
                  id="launchDateReason"
                  label="Why that date matters"
                  value={data.launchDateReason}
                  onChange={(v) => set("launchDateReason", v)}
                  placeholder="Optional"
                />
              </div>
              <RadioCardGroup
                legend="Timing"
                name="timingFlexibility"
                value={data.timingFlexibility}
                onChange={(v) => {
                  set("timingFlexibility", v);
                  clearError("timingFlexibility");
                }}
                options={timingOptions.map((option) => ({ id: option, label: option }))}
                required
                error={errors.timingFlexibility}
                columns="sm:grid-cols-3"
              />
              <SelectField
                id="contentReadiness"
                label="Can content and decision-makers meet that timing?"
                value={data.contentReadiness}
                onChange={(v) => set("contentReadiness", v)}
                options={contentReadinessOptions}
              />
              <SelectField
                id="careInterest"
                label="Interest in ongoing care after launch?"
                value={data.careInterest}
                onChange={(v) => set("careInterest", v)}
                options={["Yes", "No", "Not sure yet"]}
              />
            </>
          )}

          {currentStep === 9 && (
            <PlannerReview
              data={data}
              goalLabel={goalLabel}
              websiteTypeLabel={websiteTypeLabel}
              onEdit={goToStep}
              errors={errors}
              onChange={set}
              clearError={clearError}
            />
          )}
        </div>

        <div className="mt-8 flex flex-col-reverse items-stretch gap-3 border-t border-smoke-glass/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-smoke-glass px-6 py-3 text-sm font-medium text-midnight-slate transition-colors duration-200 hover:border-cyber-blue/60 hover:text-cyber-blue disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Back
          </button>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleSaveForLater}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-smoke-glass px-6 py-3 text-sm font-medium text-midnight-slate transition-colors duration-200 hover:border-cyber-blue/60 hover:text-cyber-blue"
            >
              Save &amp; continue later
            </button>

            {currentStep < plannerSteps.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyber-blue px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(15,102,224,0.55)] transition-colors duration-200 hover:bg-[#0b4fb0] focus-visible:bg-[#0b4fb0]"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyber-blue px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(15,102,224,0.55)] transition-colors duration-200 hover:bg-[#0b4fb0] focus-visible:bg-[#0b4fb0]"
              >
                Submit
              </button>
            )}
          </div>
        </div>

        {savedNote && (
          <p role="status" className="mt-3 text-xs text-cyber-blue">
            Saved on this device. Come back to this page any time to continue.
          </p>
        )}
      </form>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-cool-graphite">
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true">●</span> No payment required
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true">●</span> We respond within two business days
        </span>
      </div>
    </div>
  );
}

function PlannerReview({
  data,
  goalLabel,
  websiteTypeLabel,
  onEdit,
  errors,
  onChange,
  clearError,
}: {
  data: PlannerData;
  goalLabel: string;
  websiteTypeLabel: string;
  onEdit: (step: number) => void;
  errors: Errors;
  onChange: <K extends keyof PlannerData>(key: K, value: PlannerData[K]) => void;
  clearError: (key: keyof PlannerData) => void;
}) {
  const groups: { title: string; step: number; rows: [string, string][] }[] = [
    {
      title: "About you",
      step: 1,
      rows: [
        ["Name", data.fullName],
        ["Email", data.workEmail],
        ["Contact method", data.contactMethod],
        ["Role", data.roleTitle],
        ["Company", data.companyName],
        ["Country / time zone", data.country],
      ],
    },
    {
      title: "The business",
      step: 2,
      rows: [
        ["Description", data.businessDescription],
        ["Stage", data.businessStage],
        ["Market", data.geographicMarket],
      ],
    },
    {
      title: "Goals",
      step: 3,
      rows: [
        ["Primary goal", goalLabel],
        ["Most important action", data.importantAction],
      ],
    },
    {
      title: "Website & pages",
      step: 4,
      rows: [
        ["Website type", websiteTypeLabel],
        ["Pages", data.notSureSitemap ? "Not sure — recommend the sitemap" : data.pages.join(", ") || "—"],
      ],
    },
    {
      title: "Features",
      step: 5,
      rows: [
        [
          "Selected features",
          data.notSureFeatures
            ? "Not sure — recommend the right features"
            : data.features
                .map((id) => plannerFeatures.find((f) => f.id === id)?.label ?? id)
                .join(", ") || "—",
        ],
      ],
    },
    {
      title: "Brand & content",
      step: 6,
      rows: [["Asset link", data.assetLink || "—"]],
    },
    {
      title: "Visual direction",
      step: 7,
      rows: [["Personality", data.personalityAdjectives || "—"]],
    },
    {
      title: "Budget & timing",
      step: 8,
      rows: [
        ["Budget", data.budgetRange],
        ["Timing", data.timingFlexibility],
        ["Launch date", data.launchDate || "—"],
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-smoke-glass bg-frosted-glass/60 px-4 py-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold text-midnight-slate">{group.title}</h3>
              <button
                type="button"
                onClick={() => onEdit(group.step)}
                aria-label={`Edit ${group.title}`}
                className="text-xs font-medium text-cyber-blue hover:text-[#0b4fb0]"
              >
                Edit
              </button>
            </div>
            <dl className="mt-3 space-y-1.5 text-sm">
              {group.rows.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                  <dt className="w-40 shrink-0 text-xs font-mono uppercase tracking-[0.08em] text-cool-graphite">
                    {label}
                  </dt>
                  <dd className="text-midnight-slate">{value || "—"}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t border-smoke-glass/70 pt-6">
        <div className="flex items-start gap-3">
          <input
            id="acknowledgeNotQuote"
            type="checkbox"
            checked={data.acknowledgeNotQuote}
            onChange={(event) => {
              onChange("acknowledgeNotQuote", event.target.checked);
              clearError("acknowledgeNotQuote");
            }}
            aria-invalid={Boolean(errors.acknowledgeNotQuote)}
            aria-describedby={errors.acknowledgeNotQuote ? "acknowledgeNotQuote-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
          />
          <label htmlFor="acknowledgeNotQuote" className="text-sm text-cool-graphite">
            I understand this Planner is not a final quote.
          </label>
        </div>
        {errors.acknowledgeNotQuote && (
          <p id="acknowledgeNotQuote-error" role="alert" className="text-xs text-warning-coral">
            {errors.acknowledgeNotQuote}
          </p>
        )}

        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={data.consent}
            onChange={(event) => {
              onChange("consent", event.target.checked);
              clearError("consent");
            }}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
          />
          <label htmlFor="consent" className="text-sm text-cool-graphite">
            I&apos;d like Cyvexly to use this information to respond.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" role="alert" className="text-xs text-warning-coral">
            {errors.consent}
          </p>
        )}

        <div className="flex items-start gap-3">
          <input
            id="followUpEmails"
            type="checkbox"
            checked={data.followUpEmails}
            onChange={(event) => onChange("followUpEmails", event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-smoke-glass text-cyber-blue focus-visible:outline-2 focus-visible:outline-cyber-blue"
          />
          <label htmlFor="followUpEmails" className="text-sm text-cool-graphite">
            It&apos;s okay to send me occasional useful follow-up emails (separate from replying to
            this submission).
          </label>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-cool-graphite">
        Submitting opens your own email app with a complete summary pre-filled to{" "}
        {siteConfig.email} — this interim step does not yet send an automatic confirmation email
        from Cyvexly.
      </p>
    </div>
  );
}

function buildSummaryText(data: PlannerData): string {
  const lines: string[] = [];
  const add = (label: string, value: string | number | boolean | string[] | undefined) => {
    if (value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) return;
    const printable = Array.isArray(value) ? value.join(", ") : String(value);
    lines.push(`${label}: ${printable}`);
  };

  lines.push("PROJECT PLANNER SUBMISSION", "");
  lines.push("-- About you --");
  add("Name", data.fullName);
  add("Email", data.workEmail);
  add("Contact method", data.contactMethod);
  add("Role", data.roleTitle);
  add("Company", data.companyName);
  add("Country / time zone", data.country);
  add("Other approvers", data.otherApprovers);

  lines.push("", "-- The business --");
  add("Description", data.businessDescription);
  add("Products / services", data.productsServices);
  add("Current website", data.currentWebsite);
  add("Stage", data.businessStage);
  add("Market", data.geographicMarket);
  add("Customer groups", data.customerGroups);
  add("Competitors", data.competitors);
  add("Differentiation", data.differentiation);

  lines.push("", "-- Goals --");
  add("Primary goal", data.primaryGoal === "other" ? data.primaryGoalOther : data.primaryGoal);
  add("Secondary goals", data.secondaryGoals?.split("|").filter(Boolean));
  add("Most important action", data.importantAction);
  add("Current problems", data.currentProblems);
  add("Success measure", data.successMeasure);
  add("Traffic / analytics", data.trafficAnalytics);

  lines.push("", "-- Website & pages --");
  add("Website type", data.websiteType);
  add("Pages", data.notSureSitemap ? "Not sure — recommend the sitemap" : data.pages);
  add("Other page(s)", data.pagesOther);
  add("Essential for launch", data.essentialPages);
  add("Approx. page count", data.pageCount);
  add("Needs migration", data.needsMigration);
  add("Multiple languages", data.multipleLanguages);

  lines.push("", "-- Features --");
  add("Features", data.notSureFeatures ? "Not sure — recommend the right features" : data.features);
  add("Feature details", data.featureDetails);

  lines.push("", "-- Brand & content --");
  for (const category of Object.entries(data.assetStatus)) {
    add(category[0], category[1]);
  }
  add("Asset link", data.assetLink);

  lines.push("", "-- Visual direction --");
  add("Personality adjectives", data.personalityAdjectives);
  add("Colors to use", data.colorsToUse);
  add("Colors to avoid", data.colorsToAvoid);
  add("Sites admired", data.sitesAdmired);
  add("Competitors to avoid resembling", data.competitorsToAvoid);
  add("Accessibility notes", data.accessibilityNotes);
  add("Open notes", data.openNotes);

  lines.push("", "-- Budget & timing --");
  add("Budget range", data.budgetRange);
  add("Desired launch date", data.launchDate);
  add("Why that date matters", data.launchDateReason);
  add("Timing", data.timingFlexibility);
  add("Content readiness", data.contentReadiness);
  add("Care interest", data.careInterest);

  lines.push("", "-- Consent --");
  add("Follow-up emails okay", data.followUpEmails ? "Yes" : "No");

  return lines.join("\n");
}
