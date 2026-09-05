import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PlannerForm } from "@/components/planner/planner-form";
import { getServicePlannerSelection } from "@/lib/planner-config";

export const metadata: Metadata = {
  title: "Project Planner — Cyvexly Studio",
  description:
    "Tell us what you need. A calm, nine-step brief that shapes the right scope for your website — no payment required.",
  alternates: {
    canonical: "/start",
  },
};

const whatHappensNext = [
  {
    title: "We plan your project",
    description: "We review your answers and create a tailored project plan.",
  },
  {
    title: "You review & refine",
    description: "We share the plan for your feedback and confirmation.",
  },
  {
    title: "We build & launch",
    description: "Once approved, we design, build, and launch your site.",
  },
];

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const query = await searchParams;
  const service = typeof query.service === "string" ? query.service : undefined;
  const initialSelection = getServicePlannerSelection(service);

  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="page-intro-stage border-b border-smoke-glass/70 px-4 py-12 sm:px-6 sm:py-16">
          <div className="page-intro-shell mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cool-graphite">
              Project Planner
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight-slate sm:text-5xl">
              Tell us what you need. We&apos;ll shape the right route.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cool-graphite sm:text-lg">
              A calm, conversational brief in nine short steps. Choose &ldquo;not sure —
              recommend it&rdquo; anywhere technical knowledge would otherwise be required.
              No payment is requested here.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <PlannerForm initialSelection={initialSelection} />

            <aside className="glass-panel h-fit rounded-2xl p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-sm font-semibold text-midnight-slate">
                What happens next
              </h2>
              <ol className="mt-5 space-y-5">
                {whatHappensNext.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyber-blue/10 font-mono text-xs font-semibold text-cyber-blue">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-midnight-slate">
                        {step.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-cool-graphite">
                        {step.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
