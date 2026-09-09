import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { CaseStudyScopeGuide } from "@/components/case-study-scope-guide";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  {
    number: "01",
    title: "Seasonal menu discovery",
    copy: "Editorial dish stories become a menu guests can scan, filter, and explore without losing the sense of occasion.",
    proof: "Menu tabs + dish details",
  },
  {
    number: "02",
    title: "Reservation journey",
    copy: "A complete date, time, party-size, and guest-details flow demonstrates validation, correction, and confirmation states.",
    proof: "Guided form + confirmation",
  },
  {
    number: "03",
    title: "Private dining inquiry",
    copy: "Room selection and event details give special-occasion guests a focused path from inspiration to a prepared inquiry.",
    proof: "Room choice + event brief",
  },
  {
    number: "04",
    title: "Gifting experience",
    copy: "Gift-card choices, recipient details, and a clear demo checkout boundary show how commerce can feel native to the brand.",
    proof: "Gift flow + safe demo state",
  },
  {
    number: "05",
    title: "Responsive navigation",
    copy: "Desktop and mobile navigation preserve direct routes to the menu, story, private dining, visit details, and reservation action.",
    proof: "Desktop + phone patterns",
  },
  {
    number: "06",
    title: "Accessible interaction",
    copy: "Native dialogs, keyboard tabs, visible focus, reduced-motion support, and Escape return behavior are part of the experience.",
    proof: "Keyboard + 320px reflow",
  },
] as const;

const decisions = [
  {
    label: "Brand atmosphere",
    title: "Editorial, but never ornamental",
    copy: "Cormorant Garamond carries the dining voice while Manrope keeps navigation, forms, and practical details crisp. Forest, warm paper, antique gold, and muted wine create a distinct evening mood without obscuring utility.",
  },
  {
    label: "Guest confidence",
    title: "The next action stays obvious",
    copy: "Menu discovery, reservation, private dining, gifting, and visit details each have a clear path. Validation and correction states explain what guests need without breaking the visual rhythm.",
  },
  {
    label: "Inclusive craft",
    title: "Polish continues through the edge cases",
    copy: "Semantic landmarks, a skip link, visible keyboard focus, native dialogs, reduced-motion support, and tested small-screen reflow make the demonstration usable beyond its strongest screenshot.",
  },
] as const;

function ArrowMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PreviewChrome({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center justify-center bg-[#172019] py-2" : "flex items-center gap-2 border-b border-[#d6bd8f]/20 bg-[#172019] px-4 py-3"}>
      {compact ? (
        <span className="h-1.5 w-12 rounded-full bg-[#f6f3ec]/30" />
      ) : (
        <>
          <span className="h-2 w-2 rounded-full bg-[#d6bd8f]/35" />
          <span className="h-2 w-2 rounded-full bg-[#d6bd8f]/20" />
          <span className="h-2 w-2 rounded-full bg-[#d6bd8f]/20" />
          <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#f6f3ec]/45">Velora · live concept</span>
        </>
      )}
    </div>
  );
}

export function VeloraCaseStudy({ breadcrumbJsonLd }: { breadcrumbJsonLd: Record<string, unknown> }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="relative isolate overflow-hidden border-b border-[#d6bd8f]/25 bg-[#111713] text-[#f6f3ec]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(214,189,143,0.18),transparent_34rem),radial-gradient(circle_at_12%_86%,rgba(73,51,46,0.46),transparent_32rem),linear-gradient(125deg,#111713_0%,#20271f_56%,#2d2521_100%)]" />
          <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(214,189,143,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(214,189,143,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />

          <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
            <ButtonLink href="/work" variant="text" className="!text-[#d6bd8f] hover:!text-[#f6f3ec]">
              ← All work
            </ButtonLink>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d6bd8f]/35 bg-[#f6f3ec]/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.17em] text-[#d6bd8f]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d6bd8f]" />
                  Built concept demo · fictional
                </div>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#d6bd8f]">Hospitality website · strategy, design &amp; build</p>
                <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  A restaurant experience guests can feel—and use.
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-[#f6f3ec]/72 sm:text-lg sm:leading-8">
                  Cyvexly designed and built Velora to show how a hospitality brand can pair cinematic storytelling with clear paths to the menu, reservations, private events, and gifting.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[#d6bd8f]/82">
                  Velora is a fictional restaurant concept; the interactive experience is real, while its restaurant details and transactions are demonstrations.
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <ButtonLink href="/velora" className="!bg-[linear-gradient(135deg,#d6bd8f,#ead5ad)] !text-[#172019] hover:!bg-[linear-gradient(135deg,#ead5ad,#f3e2bf)]">
                    Open the interactive website <ArrowMark />
                  </ButtonLink>
                  <a href="#capabilities" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-[#f6f3ec] underline decoration-[#d6bd8f]/60 underline-offset-8 hover:text-[#d6bd8f]">
                    See what was built
                  </a>
                </div>
              </div>

              <div className="relative pb-12 sm:pb-16 lg:pl-4">
                <div className="overflow-hidden rounded-[1.7rem] border border-[#d6bd8f]/35 bg-[#0d120f] shadow-[0_38px_100px_-35px_rgba(0,0,0,0.92),0_0_60px_-36px_rgba(214,189,143,0.75)]">
                  <PreviewChrome />
                  <Image
                    src="/media/velora-capability-demo.webp"
                    alt="Complete desktop view of the Velora restaurant concept homepage"
                    width={1200}
                    height={675}
                    priority
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 58vw, 94vw"
                  />
                </div>
                <div className="absolute bottom-0 right-3 w-[28%] min-w-[112px] max-w-[168px] overflow-hidden rounded-[1.7rem] border-[5px] border-[#111713] bg-[#111713] shadow-[0_25px_60px_-22px_rgba(0,0,0,0.95),0_0_0_1px_rgba(214,189,143,0.36)] sm:right-7">
                  <PreviewChrome compact />
                  <Image
                    src="/media/velora-capability-demo-mobile.webp"
                    alt="Complete mobile view of the Velora restaurant concept homepage"
                    width={480}
                    height={844}
                    loading="eager"
                    className="h-auto w-full"
                    sizes="168px"
                  />
                </div>
                <div className="absolute -bottom-2 left-5 rounded-full border border-[#d6bd8f]/25 bg-[#111713]/90 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#d6bd8f] backdrop-blur-md">
                  Complete responsive presentation
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="glass-section scroll-mt-24 border-y border-smoke-glass/70">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-blue">Guest journeys, fully considered</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate sm:text-4xl">
                  Capability you can see in the experience.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-cool-graphite sm:text-base">
                  Velora is more than a polished landing page. The working demo connects the moments a restaurant guest expects, including the states that usually get left behind in a visual mockup.
                </p>
                <ButtonLink href="/velora" variant="secondary" className="mt-7">
                  Explore every journey <ArrowMark />
                </ButtonLink>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <article key={item.number} className="group overflow-hidden rounded-2xl border border-[#d6bd8f]/35 bg-[linear-gradient(145deg,rgba(32,39,31,0.98),rgba(73,51,46,0.92))] p-5 text-[#f6f3ec] shadow-[0_22px_50px_-34px_rgba(15,24,18,0.95)] sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d6bd8f]">{item.number}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-[#d6bd8f]/45 to-transparent" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#f6f3ec]/68">{item.copy}</p>
                    <div className="mt-6 rounded-xl border border-[#d6bd8f]/20 bg-[#111713]/55 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#d6bd8f]">
                      {item.proof}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto my-10 max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-blue">Designed across the whole journey</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-midnight-slate sm:text-4xl">One atmosphere. Every screen size.</h2>
            <p className="mt-5 text-sm leading-7 text-cool-graphite sm:text-base">
              The desktop composition gives the brand room to breathe. The mobile experience protects that same hierarchy while keeping the reservation and menu paths close at hand.
            </p>
          </div>

          <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cool-graphite">Desktop experience · 1440px</p>
                <a href="/velora" className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-cyber-blue hover:text-[#0b4fb0]">Open live <ArrowMark /></a>
              </div>
              <div className="overflow-hidden rounded-2xl border border-smoke-glass bg-[#111713] shadow-[0_34px_80px_-46px_rgba(7,31,67,0.84)]">
                <PreviewChrome />
                <Image src="/media/velora-capability-demo.webp" alt="Uncropped desktop proof of the built Velora homepage" width={1200} height={675} className="h-auto w-full" sizes="(min-width: 1024px) 72vw, 94vw" />
              </div>
            </div>
            <div className="mx-auto w-full max-w-[300px]">
              <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-cool-graphite">Mobile experience · 390px</p>
              <div className="overflow-hidden rounded-[2.4rem] border-[8px] border-[#172019] bg-[#172019] shadow-[0_32px_70px_-36px_rgba(7,31,67,0.9)]">
                <PreviewChrome compact />
                <Image src="/media/velora-capability-demo-mobile.webp" alt="Uncropped mobile proof of the built Velora homepage" width={480} height={844} loading="eager" className="h-auto w-full" sizes="300px" />
              </div>
            </div>
          </div>
        </section>

        <section className="glass-section border-y border-smoke-glass/70">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-5 lg:grid-cols-3">
              {decisions.map((item) => (
                <article key={item.label} className="glass-content-field rounded-3xl px-6 py-8 sm:px-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-cyber-blue">{item.label}</p>
                  <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-midnight-slate">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-cool-graphite">{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-[#d6bd8f]/35 bg-[linear-gradient(135deg,#172019,#20271f_56%,#49332e)] px-6 py-8 text-[#f6f3ec] sm:px-10 sm:py-10">
              <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d6bd8f]">Concept disclosure</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-white">The work is real. The restaurant is not.</h2>
                </div>
                <div className="space-y-3 text-sm leading-7 text-[#f6f3ec]/72">
                  <p>Velora is a Cyvexly-built fictional capability demonstration, not a client engagement or an operating restaurant. Its name, address, phone, email, menus, chef, rooms, availability, policies, and offers are sample content.</p>
                  <p>Reservation, private-event, newsletter, gifting, message, purchase, and payment moments run as local demonstration flows. They validate and confirm the experience without placing a real booking, sending a message, charging a card, or transmitting personal data to a restaurant service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseStudyScopeGuide
          eyebrow="From example to estimate"
          heading="A connected hospitality site usually starts with the commerce path."
          summary="Commerce begins at $8,500 when booking, checkout, gifting, or connected customer actions are part of the build. A simpler information-led restaurant site may fit a smaller package; the written recommendation confirms the right scope."
          items={[
            {
              label: "What changes the quote",
              value:
                "Booking or payment providers, menu and content volume, event inquiry logic, and other integrations.",
            },
            {
              label: "What to bring",
              value:
                "Your guest goals, current tools, and final copy and imagery—or a plan for creating them together.",
            },
            {
              label: "What you receive first",
              value:
                "A written recommendation with deliverables, timing, price, and the decisions needed before work begins.",
            },
          ]}
          inquiryHref="/contact?interest=hospitality-website"
          inquiryLabel="Ask about a hospitality website"
          serviceHref="/services/ecommerce-websites"
          serviceLabel="Explore commerce websites"
          pricingHref="/pricing#commerce-package"
          pricingLabel="Review Commerce pricing"
          plannerHref="/start?service=ecommerce-websites"
        />
      </main>

      <SiteFooter />
    </>
  );
}
