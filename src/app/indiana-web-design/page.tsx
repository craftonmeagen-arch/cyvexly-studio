import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd, indianaServiceJsonLd } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Indiana Web Design — Bloomington, Evansville & Jasper | Cyvexly",
  description: "Custom web design for Indianapolis, Bloomington, Evansville, and Jasper businesses. Explore work, pricing, and appointment-based consultations, with U.S. remote service.",
  path: "/indiana-web-design",
});

const choices = [
  { name: "Business websites", href: "/services/business-websites", copy: "Explain your offer, build credibility, and help customers make an inquiry. Start with a clear page plan and a mobile-friendly customer journey." },
  { name: "Website redesigns", href: "/services/website-redesigns", copy: "Improve a confusing or dated site while planning what to keep, how existing URLs will move, and how customers will reach you after launch." },
  { name: "Commerce and booking", href: "/services/ecommerce-websites", copy: "Help customers browse, book, or buy through a carefully scoped workflow. Provider setup, integrations, and operational responsibilities are agreed before work starts." },
  { name: "Custom web applications", href: "/services/custom-web-applications", copy: "Plan dashboards, memberships, or operational tools around real roles and tasks. Discovery establishes the right scope before a complex system is quoted." },
];

export default function IndianaWebDesignPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(indianaServiceJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Indiana web design", path: "/indiana-web-design" }])) }} />
    <SiteHeader />
    <main id="main-content" className="flex-1">
      <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-7 sm:px-6 sm:py-10">
        <div className="page-intro-shell mx-auto max-w-4xl rounded-3xl px-6 py-8 text-center sm:px-10 sm:py-10">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">Indiana web design & development</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">Built for your business. Connected across Indiana.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-cool-graphite sm:text-lg">Cyvexly Studio serves businesses in Indianapolis, Bloomington, Evansville, and Jasper with custom websites, redesigns, and web applications. Meet by appointment when useful, or complete your project remotely from anywhere in the United States.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><ButtonLink href="/contact?interest=custom-project">Discuss your Indiana project</ButtonLink><ButtonLink href="/work" variant="secondary">Explore working examples</ButtonLink></div>
          <p className="mt-4 text-xs leading-relaxed text-cool-graphite">Indiana-based studio · No public walk-in storefront · Remote U.S. service remains available</p>
        </div>
      </section>
      <section className="glass-continuation border-y border-smoke-glass/70">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">Where we work with Indiana businesses</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cool-graphite sm:text-base">These are service areas, not separate offices. Tell us your city, the outcome you need, and whether you prefer an in-person conversation or a video call. Meeting availability and location are confirmed together before an appointment.</p>
          <ul className="mt-7 flex flex-wrap gap-3" aria-label="Confirmed Indiana service areas">
            {["Indianapolis", "Bloomington", "Evansville", "Jasper"].map(city => <li key={city} className="glass-panel rounded-xl px-5 py-3 font-semibold text-midnight-slate">{city}, Indiana</li>)}
          </ul>
          <Link href="/indianapolis-web-design" className="mt-6 inline-flex min-h-11 items-center font-semibold text-cyber-blue">Explore Indianapolis consultations →</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">Choose the customer problem, not just a package</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">{choices.map(item => <article key={item.name} className="glass-panel rounded-2xl p-7"><h3 className="font-display text-xl font-semibold text-midnight-slate">{item.name}</h3><p className="mt-3 text-sm leading-relaxed text-cool-graphite">{item.copy}</p><Link href={item.href} className="mt-4 inline-flex min-h-11 items-center font-semibold text-cyber-blue">Explore {item.name.toLowerCase()} →</Link></article>)}</div>
      </section>
      <section className="glass-section border-y border-smoke-glass/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2">
          <div><h2 className="font-display text-2xl font-semibold text-midnight-slate">See the work before choosing a studio</h2><p className="mt-4 text-sm leading-relaxed text-cool-graphite sm:text-base">Explore how Cyvexly approaches customer journeys and responsive design. These examples demonstrate capabilities; they are not claims of paid Indiana client engagements.</p><div className="mt-6 space-y-4"><Link href="/work/velora-dining" className="glass-panel block rounded-2xl p-6"><h3 className="font-display text-lg font-semibold text-midnight-slate">Velora — built hospitality concept</h3><p className="mt-2 text-sm text-cool-graphite">Explore menus, visit planning, and safe reservation demo flows.</p></Link><Link href="/work/nexora-systems" className="glass-panel block rounded-2xl p-6"><h3 className="font-display text-lg font-semibold text-midnight-slate">Nexora — built application concept</h3><p className="mt-2 text-sm text-cool-graphite">Explore an interactive dashboard and release-investigation workflow.</p></Link></div></div>
          <div className="glass-panel rounded-3xl p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-midnight-slate">What to prepare for a first conversation</h2><ol className="mt-5 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-cool-graphite"><li>Your current website, if you have one, and what needs to change.</li><li>What a visitor should do: contact you, book, buy, or complete another task.</li><li>Your city, timing, budget range, and who will approve the work.</li><li>Any existing content, booking tools, or systems the new site must connect to.</li></ol><p className="mt-5 text-sm leading-relaxed text-cool-graphite">You do not need technical specifications. Cyvexly recommends scope, timing, responsibilities, and a written price before work begins.</p><ButtonLink href="/start" variant="secondary" className="mt-6">Use the detailed project planner</ButtonLink></div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-midnight-slate">Practical questions before you start</h2>
        <div className="mt-7 space-y-7 text-sm leading-relaxed text-cool-graphite">
          <div><h3 className="font-semibold text-midnight-slate">What does a website cost?</h3><p className="mt-2">Website projects start at $1,800; the final price depends on scope. Your city does not turn a starting point into a fixed quote. <Link className="font-semibold text-cyber-blue underline" href="/pricing">Review published pricing</Link> and the <Link className="font-semibold text-cyber-blue underline" href="/resources/small-business-website-cost">website cost guide</Link>.</p></div>
          <div><h3 className="font-semibold text-midnight-slate">Do we need to meet in person?</h3><p className="mt-2">No. Planning, design reviews, approvals, launch, and support can happen remotely. Appointment-based meetings are an option, not a requirement.</p></div>
          <div><h3 className="font-semibold text-midnight-slate">Can you help after launch?</h3><p className="mt-2">Yes. <Link className="font-semibold text-cyber-blue underline" href="/services/website-care">Website care</Link> can cover updates, troubleshooting, and planned improvements. The agreed scope establishes ongoing responsibilities.</p></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20"><div className="cyber-focal-panel rounded-3xl px-8 py-14 text-center sm:px-16"><h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Tell us where you are and what you want to build</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B9C6DA]">Mention Bloomington, Evansville, Jasper, Indianapolis, or your other U.S. location in your project description. Expect a reply within two business days.</p><ButtonLink href="/contact?interest=custom-project" className="mt-7">Ask about your project</ButtonLink></div></section>
    </main><SiteFooter />
  </>;
}
