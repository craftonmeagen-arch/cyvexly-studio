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
      "!bg-[#f6eedf] !text-[#08264b] hover:!bg-white focus-visible:!outline-[#72dfba]",
    journeys: [
      {
        number: "01",
        eyebrow: "Plan → review",
        title: "Carry one idea through the teaching cycle",
        copy: "A teacher begins with a topic, text, or photo, chooses the class context and supported standards, reviews the draft, and keeps that context as the work moves into teaching and evidence.",
        result: "Capability: a connected workflow instead of seven disconnected tools.",
        image: "/media/eduailenz-tour-workflow.png",
        alt: "Public EduAILenz product tour showing Plan, Teach, Check, and Document stages",
        proofLabel: "Public guided-tour illustration",
      },
      {
        number: "02",
        eyebrow: "Teach → participate",
        title: "Turn a reviewed lesson into the right classroom format",
        copy: "Teachers can choose an interactive lesson, digital quiz, group activity, live game, or printable practice rather than forcing every class into the same delivery model.",
        result: "Capability: one source can support individual, collaborative, live, and printable moments.",
        image: "/media/eduailenz-tour-classroom.png",
        alt: "Public EduAILenz product tour showing classroom resource formats",
        proofLabel: "Public guided-tour illustration",
      },
      {
        number: "03",
        eyebrow: "Notice → document",
        title: "Bring the work between meetings into view",
        copy: "BloomED groups daily priorities, student evidence, services, family follow-up, dates, and teacher-reviewed reports so the next support decision is easier to see.",
        result: "Capability: role-aware information design for dense, sensitive operational work.",
        image: "/media/eduailenz-tour-bloomed.png",
        alt: "Public EduAILenz product tour showing the illustrative BloomED Teacher Today workspace",
        proofLabel: "Public guided-tour illustration",
      },
    ],
  },
  mudoinkle: {
    eyebrow: "Party games · host, player & shared-display experiences",
    headline: "Game night starts with less setup—and more play.",
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
      "!bg-[#ffbd45] !text-[#071b39] hover:!bg-[#ffd477] focus-visible:!outline-[#ffbd45]",
    journeys: [
      {
        number: "01",
        eyebrow: "Host → room → phones",
        title: "Explain a multi-screen game in three steps",
        copy: "The host launches the shared view, friends join with a room code or QR path, and their phones become the controls for the round.",
        result: "Capability: different device roles stay understandable before anyone has to sign in.",
        image: "/media/mudoinkle-tour-setup.png",
        alt: "Public Mudoinkle tour showing host launch, friend join, and phone-controller steps",
        proofLabel: "Public staging product tour",
      },
      {
        number: "02",
        eyebrow: "Try → choose → react",
        title: "Let visitors sample the games before hosting",
        copy: "A public interactive preview demonstrates the tone and decision pattern of Awmuhog, Witigglies, and List Off without asking for an account or a live room.",
        result: "Capability: a low-friction product preview that helps people understand the fun first.",
        image: "/media/mudoinkle-tour-preview.png",
        alt: "Interactive Mudoinkle staging preview with sample Awmuhog responses",
        proofLabel: "Live public interactive preview",
      },
      {
        number: "03",
        eyebrow: "Choose the play model",
        title: "Give three games three distinct reasons to play",
        copy: "Pass-the-phone word play, room-based caption judging, and rapid-fire categories each have their own promise, audience, and interaction model inside one brand system.",
        result: "Capability: a shared platform that does not flatten different products into one generic flow.",
        image: "/media/mudoinkle-tour-games.png",
        alt: "Mudoinkle staging game shelf with Witigglies, Awmuhog, and List Off",
        proofLabel: "Public staging game catalog",
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

        <section id="product-tour" className="glass-section scroll-mt-24 border-y border-smoke-glass/70">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-blue">
                  {slug === "eduailenz" ? "A connected teacher journey" : "Three games, clear roles"}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate sm:text-4xl">
                  See what people are trying to accomplish—not just the system behind it.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-cool-graphite sm:text-base">
                  Each view below pairs a user task with the action, visible result, and product capability it demonstrates. Public tour illustrations are labeled; they do not stand in for authenticated acceptance.
                </p>
                <ButtonLink href={study.demoHref} target="_blank" rel="noreferrer" variant="secondary" className="mt-7">
                  Open the current public experience <ArrowMark />
                </ButtonLink>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {story.journeys.map((journey) => (
                  <article key={journey.number} className="glass-content-field rounded-3xl px-5 py-6 sm:px-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-cyber-blue">{journey.number}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-cyber-blue/35 to-transparent" />
                    </div>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-cool-graphite">{journey.eyebrow}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-midnight-slate">{journey.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-cool-graphite">{journey.copy}</p>
                    <p className="mt-5 rounded-xl bg-cyber-blue/8 px-4 py-3 text-sm font-medium leading-6 text-midnight-slate">{journey.result}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-blue">Inspect the product story</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate sm:text-4xl">
              Three moments. One understandable experience.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cool-graphite sm:text-base">
              These views come from the current public product page. They make the product easier to understand without requiring an account, private data, or an unguided trip through the application.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {story.journeys.map((journey, index) => (
              <article key={journey.image} className="grid items-center gap-7 lg:grid-cols-[1.28fr_0.72fr] lg:gap-10">
                <div className={`overflow-hidden rounded-3xl border border-smoke-glass bg-white shadow-[0_34px_80px_-46px_rgba(7,31,67,0.84)] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={journey.image} alt={journey.alt} width={1200} height={720} className="h-auto w-full" sizes="(min-width: 1024px) 65vw, 94vw" />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-blue">{journey.proofLabel}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-midnight-slate sm:text-3xl">{journey.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-cool-graphite sm:text-base">{journey.copy}</p>
                  <p className="mt-5 text-sm font-medium leading-6 text-midnight-slate">{journey.result}</p>
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
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate">A product system, shaped around its users.</h2>
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
