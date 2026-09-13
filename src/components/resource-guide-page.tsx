import Link from "next/link";
import { ButtonLink } from "@/components/button";
import type { ResourceGuide } from "@/lib/resource-guides";

function GuideTable({ table }: { table: NonNullable<ResourceGuide["table"]> }) {
  return (
    <section aria-labelledby="guide-comparison" className="mt-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
        At a glance
      </p>
      <h2 id="guide-comparison" className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
        {table.title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cool-graphite sm:text-base">
        {table.intro}
      </p>

      <div className="mt-7 space-y-4 lg:hidden">
        {table.rows.map((row) => (
          <dl key={row[0]} className="glass-panel rounded-2xl p-5">
            {table.columns.map((column, index) => (
              <div
                key={column}
                className={`grid grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-4 py-2 ${
                  index > 0 ? "border-t border-cyber-blue/10" : ""
                }`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.11em] text-cool-graphite">
                  {column}
                </dt>
                <dd className={`text-sm ${index === 0 ? "font-semibold text-midnight-slate" : "text-cool-graphite"}`}>
                  {row[index]}
                </dd>
              </div>
            ))}
          </dl>
        ))}
      </div>

      <div className="mt-7 hidden overflow-hidden rounded-2xl border border-smoke-glass bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] lg:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-ice-field/65">
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col" className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} className="border-t border-smoke-glass/80">
                {row.map((cell, index) => (
                  <td key={cell} className={`px-5 py-4 ${index === 0 ? "font-semibold text-midnight-slate" : "text-cool-graphite"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-cool-graphite">{table.note}</p>
    </section>
  );
}

export function ResourceGuidePage({ guide }: { guide: ResourceGuide }) {
  return (
    <>
      <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-7 sm:px-6 sm:py-10">
        <div className="page-intro-shell mx-auto max-w-4xl rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <Link href="/resources" className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue hover:text-[#0b4fb0]">
            ← Buyer resources
          </Link>
          <p className="mt-7 text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
            {guide.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cool-graphite sm:text-lg">
            {guide.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.11em] text-cool-graphite">
            <span>{guide.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {guide.updated}</span>
            <span aria-hidden="true">·</span>
            <span>Cyvexly Studio</span>
          </div>
        </div>
      </section>

      <section className="glass-continuation border-b border-smoke-glass/70">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="cyber-focal-panel rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ion-cyan">
              The short answer
            </p>
            <p className="mt-4 max-w-4xl font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              {guide.quickAnswer}
            </p>
            <ul className="mt-7 grid gap-3 lg:grid-cols-3">
              {guide.quickPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-white/15 bg-white/[0.07] p-4 text-sm leading-relaxed text-[#D7E2F2]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(240px,0.28fr)] lg:gap-14 lg:py-20">
        <article className="min-w-0">
          {guide.table && <GuideTable table={guide.table} />}

          <div className="mt-16 space-y-16">
            {guide.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28" aria-labelledby={`${section.id}-title`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
                  {section.eyebrow}
                </p>
                <h2 id={`${section.id}-title`} className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-cool-graphite">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.points && (
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <div key={point.title} className="glass-panel rounded-2xl p-5 sm:p-6">
                        <h3 className="font-display text-base font-semibold text-midnight-slate">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-cool-graphite">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <p className="mt-7 rounded-2xl border border-cyber-blue/15 bg-ice-field/60 px-5 py-4 text-sm leading-relaxed text-midnight-slate">
                    <span className="font-semibold">Keep in mind:</span> {section.note}
                  </p>
                )}
              </section>
            ))}
          </div>
        </article>

        <aside className="lg:order-last" aria-label="Guide navigation">
          <div className="glass-panel rounded-2xl p-6 lg:sticky lg:top-28">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cool-graphite">
              In this guide
            </p>
            <ol className="mt-4 space-y-3">
              {guide.table && (
                <li>
                  <a href="#guide-comparison" className="text-sm font-medium text-midnight-slate hover:text-cyber-blue">
                    At-a-glance comparison
                  </a>
                </li>
              )}
              {guide.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-sm font-medium text-midnight-slate hover:text-cyber-blue">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-cyber-blue/10 pt-6">
              <p className="text-sm leading-relaxed text-cool-graphite">
                Have a real project in mind? A short description is enough to ask whether Cyvexly fits.
              </p>
              <ButtonLink href={`/contact?interest=${guide.inquiryInterest}`} className="mt-4 w-full">
                Ask about your project
              </ButtonLink>
            </div>
          </div>
        </aside>
      </div>

      <section className="glass-section border-y border-smoke-glass/70">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyber-blue">
            Continue the decision
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-midnight-slate sm:text-3xl">
            Related resources and next steps
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {guide.related.map((item) => (
              <Link key={item.href} href={item.href} className="glass-panel group rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
                <h3 className="font-display text-lg font-semibold text-midnight-slate group-hover:text-cyber-blue">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cool-graphite">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-cyber-blue">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="cyber-focal-panel rounded-3xl px-8 py-14 text-center sm:px-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ion-cyan">
            Your scope, in plain language
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
            You do not need to diagnose the project first.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#B9C6DA] sm:text-base">
            Tell Cyvexly what the business needs the website to accomplish. We&apos;ll recommend a practical starting scope and explain what belongs now, later, or outside the project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`/contact?interest=${guide.inquiryInterest}`}>Ask about a project</ButtonLink>
            <ButtonLink href="/start" variant="secondary">Share a detailed brief</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
