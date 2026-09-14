import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { CaseStudyScopeGuide } from "@/components/case-study-scope-guide";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies } from "@/lib/site-config";

type ExternalProductStudy =
  | (typeof caseStudies)["eduailenz"]
  | (typeof caseStudies)["mudoinkle"];

type ProductSlug = "eduailenz" | "mudoinkle";

const productStories = {
  eduailenz: {
    eyebrow: "Teacher workflow · planning, participation & evidence",
    headline: "One teaching idea. A whole classroom workflow.",
    tourEyebrow: "Three educator tasks, followed end to end",
    tourHeading: "Plan the lesson, record the evidence, review the progress.",
    tourSummary:
      "These accepted validation captures make three protected teacher jobs inspectable without exposing student information. Learner-facing lesson, player, and display routes are source-verified, but they are not presented here as accepted learner journeys.",
    contributionHeading: "Education software that keeps the teacher in control.",
    summary:
      "EduAILenz connects lesson planning, classroom resources, reading support, assignments, and special-education documentation without taking judgment away from the teacher.",
    contribution:
      "Cyvexly organized a broad education platform into recognizable teacher jobs, designed its responsive interface system, and built connected public, protected, player, and display experiences around clear responsibility boundaries.",
    desktopImage: "/media/eduailenz-live-desktop.png",
    mobileImage: "/media/eduailenz-live-mobile.png",
    desktopAlt: "Desktop view of the current public EduAILenz teacher-workspace homepage",
    mobileAlt: "Phone view of the current public EduAILenz teacher-workspace homepage",
    heroClass:
      "border-[#b7d8cc]/45 bg-[radial-gradient(circle_at_88%_12%,rgba(111,190,165,0.3),transparent_34rem),linear-gradient(135deg,#071f40_0%,#0a3652_46%,#0a7f68_100%)]",
    accentClass: "text-[#72dfba]",
    badgeClass: "border-[#72dfba]/40 bg-[#72dfba]/10 text-[#baf6df]",
    buttonClass:
      "!bg-[linear-gradient(135deg,#f6eedf_0%,#ffffff_100%)] !text-[#08264b] hover:!bg-[linear-gradient(135deg,#ffffff_0%,#f6eedf_100%)] focus-visible:!outline-[#72dfba]",
    journeys: [
      {
        number: "01",
        eyebrow: "Topic → constraints → workspace",
        title: "Shape a quick lesson around the class in front of you",
        copy: "The authenticated setup starts with the teaching need, then makes grade, subject, and available time explicit before a workspace can be created.",
        result: "Visible result: a focused lesson setup that keeps classroom constraints attached to the request.",
        capability: "Capability demonstrated: turning a broad request into a clear, constraint-aware planning flow.",
        image: "/media/eduailenz-proof-quick-lesson.png",
        mobileImage: "/media/eduailenz-proof-quick-lesson-mobile.png",
        alt: "Authenticated EduAILenz Quick Lesson setup on desktop with topic, grade, subject, and time controls",
        mobileAlt: "Authenticated EduAILenz Quick Lesson setup arranged for a phone",
        proofLabel: "Accepted authenticated validation · no student data",
        screenLabel: "Quick Lesson setup",
        desktopSize: [1440, 900],
      },
      {
        number: "02",
        eyebrow: "Student → goal → observation",
        title: "Record progress while the evidence is still useful",
        copy: "BloomED gives an educator a deliberate path from student and goal selection to the dated value and optional observation, with a faster quick-log path alongside it.",
        result: "Visible result: structured progress evidence that can support the next teacher-reviewed decision.",
        capability: "Capability demonstrated: structured data entry with deliberate and quick-log paths for different moments of use.",
        image: "/media/eduailenz-proof-progress-log.png",
        mobileImage: "/media/eduailenz-proof-progress-log-mobile.png",
        alt: "Authenticated BloomED progress log on desktop with student, goal, value, date, and notes fields",
        mobileAlt: "Authenticated BloomED progress log arranged for a phone",
        proofLabel: "Accepted authenticated validation · synthetic test account",
        screenLabel: "BloomED progress log",
        desktopSize: [1440, 900],
      },
      {
        number: "03",
        eyebrow: "Range → goals → editable narrative",
        title: "Turn accumulated evidence into a reviewable report",
        copy: "The report workspace keeps the student, time period, goal selection, and optional comparison context visible before generating an editable progress narrative.",
        result: "Visible result: a bounded reporting step that keeps educator review in the workflow.",
        capability: "Capability demonstrated: assembling structured evidence into an editable, human-reviewed reporting workflow.",
        image: "/media/eduailenz-proof-reports.png",
        mobileImage: "/media/eduailenz-proof-reports-mobile.png",
        alt: "Authenticated BloomED report generator on desktop with student, date range, and report controls",
        mobileAlt: "Authenticated BloomED report generator arranged for a phone",
        proofLabel: "Accepted authenticated validation · synthetic test account",
        screenLabel: "BloomED reports",
        desktopSize: [1440, 900],
      },
    ],
  },
  mudoinkle: {
    eyebrow: "Party games · host, player & shared-display experiences",
    headline: "Game night starts with less setup—and more play.",
    tourEyebrow: "Three games, three different play patterns",
    tourHeading: "Compare the prompt, pass-the-phone, and rapid-fire loops.",
    tourSummary:
      "These live public previews make each game model easy to compare without an account. Accepted source includes separate host, player, and shared-display routes; complete multi-device room acceptance is still pending and is not represented by these preview captures.",
    contributionHeading: "A playful product system built for several screens at once.",
    summary:
      "Mudoinkle brings three original party games into one playful browser experience, with clear paths for the host, each player, and the screen everyone shares.",
    contribution:
      "Cyvexly developed the product identity, responsive public experience, game catalog, and distinct host, player, display, account, and room-state surfaces needed by a multi-device party platform.",
    desktopImage: "/media/mudoinkle-live-desktop.png",
    mobileImage: "/media/mudoinkle-live-mobile.png",
    desktopAlt: "Desktop view of the current public Mudoinkle staging homepage",
    mobileAlt: "Phone view of the current public Mudoinkle staging homepage",
    heroClass:
      "border-[#ffb83e]/45 bg-[radial-gradient(circle_at_78%_24%,rgba(255,183,62,0.28),transparent_31rem),linear-gradient(135deg,#071b39_0%,#19304d_48%,#7d2548_100%)]",
    accentClass: "text-[#ffbd45]",
    badgeClass: "border-[#ffbd45]/45 bg-[#ffbd45]/10 text-[#ffe09b]",
    buttonClass:
      "!bg-[linear-gradient(135deg,#ffbd45_0%,#ff8f36_100%)] !text-[#071b39] hover:!bg-[linear-gradient(135deg,#ffd477_0%,#ffad3d_100%)] focus-visible:!outline-[#ffbd45]",
    journeys: [
      {
        number: "01",
        eyebrow: "Prompt → captions → reaction",
        title: "Understand Awmuhog before opening a room",
        copy: "The live public sample presents the image prompt, competing captions, and next-prompt action in the same visual rhythm a player will meet during the game.",
        result: "Visible result: the caption-battle decision pattern is understandable without an account.",
        capability: "Capability demonstrated: translating a social prompt-and-response game into a branded, self-explanatory interaction loop.",
        image: "/media/mudoinkle-proof-awmuhog.png",
        mobileImage: "/media/mudoinkle-proof-awmuhog-mobile.png",
        alt: "Live Mudoinkle Awmuhog preview on desktop with an image prompt and two sample captions",
        mobileAlt: "Live Mudoinkle Awmuhog preview arranged for a phone",
        proofLabel: "Live public staging preview",
        screenLabel: "Awmuhog sample round",
        desktopSize: [1200, 720],
      },
      {
        number: "02",
        eyebrow: "Secret word → taboo clues → pass",
        title: "Make a one-phone game legible at a glance",
        copy: "Witigglies exposes the timer, secret word, forbidden clues, and next-card action together so the person holding the phone knows what to protect and what to do next.",
        result: "Visible result: a pass-and-play round with a distinct information hierarchy and control model.",
        capability: "Capability demonstrated: touch-first information hierarchy for a private, single-device play pattern.",
        image: "/media/mudoinkle-proof-witigglies.png",
        mobileImage: "/media/mudoinkle-proof-witigglies-mobile.png",
        alt: "Live Mudoinkle Witigglies preview on desktop with timer, secret word, and forbidden clues",
        mobileAlt: "Live Mudoinkle Witigglies preview arranged for a phone",
        proofLabel: "Live public interactive preview",
        screenLabel: "Witigglies sample round",
        desktopSize: [1200, 720],
      },
      {
        number: "03",
        eyebrow: "Category → answers → score",
        title: "Keep a rapid-fire group round moving",
        copy: "List Off puts the active topic, accepted answer, next-answer action, and new-category control into one fast scan for players following the round.",
        result: "Visible result: a real-time category loop that reads differently from the other two games.",
        capability: "Capability demonstrated: keeping topic, accepted input, score, and round controls understandable in one fast-moving state.",
        image: "/media/mudoinkle-proof-list-off.png",
        mobileImage: "/media/mudoinkle-proof-list-off-mobile.png",
        alt: "Live Mudoinkle List Off preview on desktop with topic, accepted answer, and scoring controls",
        mobileAlt: "Live Mudoinkle List Off preview arranged for a phone",
        proofLabel: "Live public interactive preview",
        screenLabel: "List Off sample round",
        desktopSize: [1200, 720],
      },
    ],
  },
} as const;

function ArrowMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PreviewChrome({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center justify-center bg-[#071b39] py-2" : "flex items-center gap-2 border-b border-white/15 bg-[#071b39] px-4 py-3"}>
      {compact ? (
        <span className="h-1.5 w-12 rounded-full bg-white/30" />
      ) : (
        <>
          <span className="h-2 w-2 rounded-full bg-white/35" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">{label}</span>
        </>
      )}
    </div>
  );
}

export function ExternalProductCaseStudy({
  slug,
  study,
  breadcrumbJsonLd,
}: {
  slug: ProductSlug;
  study: ExternalProductStudy;
  breadcrumbJsonLd: object;
}) {
  const story = productStories[slug];
  const liveLabel = slug === "eduailenz" ? "Live public product page" : "Public staging product page";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className={`external-product-hero-stage relative isolate overflow-hidden border-b text-white ${story.heroClass}`}>
          <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
            <ButtonLink href="/work" variant="text" className={`!min-h-11 !px-2 ${story.accentClass}`}>
              ← All work
            </ButtonLink>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
              <div>
                <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.17em] ${story.badgeClass}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {study.status}
                </div>
                <p className={`mt-7 font-mono text-[11px] uppercase tracking-[0.18em] ${story.accentClass}`}>
                  {story.eyebrow}
                </p>
                <h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  {story.headline}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
                  {story.summary}
                </p>
                <p className={`mt-4 max-w-xl text-sm leading-6 ${story.accentClass}`}>
                  {slug === "eduailenz"
                    ? "Active development. Protected educator workflows require an account; the public tour below uses no student data."
                    : "Public staging. The preview explains the games without claiming completed multi-device room acceptance or a production launch."}
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <ButtonLink href={study.demoHref} target="_blank" rel="noreferrer" className={story.buttonClass}>
                    {study.externalLabel} <ArrowMark />
                  </ButtonLink>
                  <a href="#product-tour" className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium underline decoration-white/35 underline-offset-8 hover:text-white ${story.accentClass}`}>
                    Tour the work on this page
                  </a>
                </div>
              </div>

              <div className="relative pb-14 sm:pb-20 lg:pl-4">
                <div className="overflow-hidden rounded-[1.7rem] border border-white/30 bg-[#071b39] shadow-[0_38px_100px_-35px_rgba(0,0,0,0.92),0_0_65px_-38px_rgba(255,255,255,0.55)]">
                  <PreviewChrome label={`${study.name} · current public view`} />
                  <Image
                    src={story.desktopImage}
                    alt={story.desktopAlt}
                    width={1440}
                    height={900}
                    priority
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 60vw, 94vw"
                  />
                </div>
                <div className="absolute bottom-0 right-2 w-[27%] min-w-[112px] max-w-[176px] overflow-hidden rounded-[1.7rem] border-[5px] border-[#071b39] bg-[#071b39] shadow-[0_25px_60px_-22px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.3)] sm:right-7">
                  <PreviewChrome label={study.name} compact />
                  <Image
                    src={story.mobileImage}
                    alt={story.mobileAlt}
                    width={390}
                    height={844}
                    loading="eager"
                    className="h-auto w-full"
                    sizes="176px"
                  />
                </div>
                <div className="absolute -bottom-1 left-5 rounded-full border border-white/20 bg-[#071b39]/90 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/72 backdrop-blur-md">
                  {liveLabel} · desktop + phone
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product-tour" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-blue">
              {story.tourEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate sm:text-4xl">
              {story.tourHeading}
            </h2>
            <p className="mt-5 text-sm leading-7 text-cool-graphite sm:text-base">
              {story.tourSummary}
            </p>
            <ButtonLink href={study.demoHref} target="_blank" rel="noreferrer" variant="secondary" className="mt-7">
              Open the current public experience <ArrowMark />
            </ButtonLink>
          </div>

          <div className="mt-12 space-y-10">
            {story.journeys.map((journey, index) => (
              <article key={journey.image} className="grid items-center gap-7 lg:grid-cols-[1.28fr_0.72fr] lg:gap-10">
                <div className={`relative pb-12 sm:pb-16 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-3xl border border-smoke-glass bg-[#071b39] shadow-[0_34px_80px_-46px_rgba(7,31,67,0.84)]">
                    <PreviewChrome label={`${study.name} · ${journey.screenLabel}`} />
                    <Image
                      src={journey.image}
                      alt={journey.alt}
                      width={journey.desktopSize[0]}
                      height={journey.desktopSize[1]}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 65vw, 94vw"
                    />
                  </div>
                  <div className="absolute bottom-0 right-3 w-[27%] min-w-[106px] max-w-[168px] overflow-hidden rounded-[1.45rem] border-[4px] border-[#071b39] bg-[#071b39] shadow-[0_24px_56px_-20px_rgba(0,0,0,0.88),0_0_0_1px_rgba(255,255,255,0.28)] sm:right-6">
                    <PreviewChrome label={study.name} compact />
                    <Image
                      src={journey.mobileImage}
                      alt={journey.mobileAlt}
                      width={390}
                      height={844}
                      className="h-auto w-full"
                      sizes="168px"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-blue">{journey.proofLabel}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-midnight-slate sm:text-3xl">{journey.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-cool-graphite sm:text-base">{journey.copy}</p>
                  <p className="mt-5 text-sm font-medium leading-6 text-midnight-slate">{journey.result}</p>
                  <p className="mt-3 text-sm leading-6 text-cyber-blue">{journey.capability}</p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                    <a
                      href={journey.image}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full text-midnight-slate underline decoration-cyber-blue/40 underline-offset-8 hover:text-cyber-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-blue"
                    >
                      Inspect desktop proof <ArrowMark />
                    </a>
                    <a
                      href={journey.mobileImage}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full text-midnight-slate underline decoration-cyber-blue/40 underline-offset-8 hover:text-cyber-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-blue"
                    >
                      Inspect phone proof <ArrowMark />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-blue">Cyvexly contribution</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate">{story.contributionHeading}</h2>
                <p className="mt-5 text-sm leading-7 text-cool-graphite sm:text-base">{story.contribution}</p>
                <p className="mt-4 text-xs leading-6 text-cool-graphite">
                  This is a built product-system capability example, not a client engagement or a claim of revenue, adoption, or measured business results.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-signal-emerald/25 bg-signal-emerald/10 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-emerald">Shown and supported</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-midnight-slate">
                    {study.verifiedCapabilities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-signal-emerald" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-smoke-glass bg-frosted-glass/75 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cool-graphite">Current limits</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-midnight-slate">
                    {study.proofPending.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cool-graphite" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {study.decisions.map((decision, index) => (
                <article key={decision} className="glass-content-field rounded-3xl px-6 py-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cyber-blue">Design decision 0{index + 1}</span>
                  <p className="mt-4 text-sm leading-7 text-cool-graphite">{decision}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CaseStudyScopeGuide
          eyebrow="From product complexity to a clear scope"
          heading="Custom systems are mapped before they are priced."
          summary="Roles, states, data, integrations, security, migration, and proof requirements shape the build. Cyvexly confirms the right path and pricing in writing after discovery."
          items={[
            {
              label: "Best fit",
              value: "Applications with connected workflows, protected roles, structured data, or real-time participation.",
            },
            {
              label: "What to bring",
              value: "The users, current workflow, pain points, example data, and systems that may need to connect.",
            },
            {
              label: "First decision",
              value: "Discovery maps the minimum useful release and the evidence required to accept it.",
            },
          ]}
          inquiryHref={study.inquiryHref}
          inquiryLabel="Ask about a custom application"
          serviceHref="/services/custom-web-applications"
          serviceLabel="Explore custom applications"
          pricingHref="/pricing#custom-system-package"
          pricingLabel="Review custom-app pricing"
          plannerHref={study.plannerHref}
        />
      </main>

      <SiteFooter />
    </>
  );
}
