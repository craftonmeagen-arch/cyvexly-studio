"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const ranges = {
  "24h": { events: "2.4M", issues: 3, accuracy: "99.94%", latency: "182ms", delta: "+18%" },
  "7d": { events: "15.8M", issues: 11, accuracy: "99.91%", latency: "194ms", delta: "+12%" },
  "30d": { events: "68.2M", issues: 27, accuracy: "99.88%", latency: "211ms", delta: "+9%" },
} as const;

type Range = keyof typeof ranges;
type Service = "All services" | "Checkout" | "Search" | "API";

const incidents = [
  {
    id: "NX-2481",
    service: "Checkout" as const,
    title: "Payment completion dropped below baseline",
    severity: "High",
    change: "−14.8%",
    explanation: "The decline began 11 minutes after release 3.18.2 and is concentrated on mobile Safari sessions.",
    next: "Compare the release cohort with the previous stable version.",
  },
  {
    id: "NX-2478",
    service: "Search" as const,
    title: "No-result queries increased",
    severity: "Medium",
    change: "+8.2%",
    explanation: "Three newly indexed product categories account for most of the change; response time remains within target.",
    next: "Review query vocabulary for the affected categories.",
  },
  {
    id: "NX-2472",
    service: "API" as const,
    title: "P95 response time is recovering",
    severity: "Watching",
    change: "−21ms",
    explanation: "Latency returned toward the seven-day baseline after the cache policy adjustment at 14:20 UTC.",
    next: "Keep the service under observation through the next traffic peak.",
  },
];

const chartPoints = {
  "24h": "0,72 40,68 80,71 120,58 160,61 200,46 240,49 280,30 320,38 360,24 400,29 440,17 480,22 520,12",
  "7d": "0,64 40,70 80,60 120,65 160,51 200,55 240,39 280,48 320,31 360,34 400,22 440,28 480,16 520,20",
  "30d": "0,76 40,69 80,72 120,62 160,66 200,55 240,58 280,45 320,49 360,38 400,42 440,31 480,35 520,26",
} satisfies Record<Range, string>;

export function NexoraDemo() {
  const [range, setRange] = useState<Range>("24h");
  const [service, setService] = useState<Service>("All services");
  const [compare, setCompare] = useState(true);
  const [selectedId, setSelectedId] = useState(incidents[0].id);

  const visibleIncidents = useMemo(
    () => incidents.filter((incident) => service === "All services" || incident.service === service),
    [service],
  );
  const selected =
    visibleIncidents.find((incident) => incident.id === selectedId) ?? visibleIncidents[0] ?? incidents[0];

  function chooseService(nextService: Service) {
    setService(nextService);
    const nextIncident = incidents.find(
      (incident) => nextService === "All services" || incident.service === nextService,
    );
    if (nextIncident) setSelectedId(nextIncident.id);
  }

  return (
    <div className="relative z-[1] min-h-screen bg-[#070d1a] text-[#e7edf7]">
      <a
        href="#nexora-main"
        className="sr-only rounded-md bg-white px-4 py-3 text-[#071224] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to dashboard
      </a>
      <div className="border-b border-[#25334c] bg-[#0c1425] px-4 py-2 text-center text-xs leading-relaxed text-[#b7c6db]">
        Fictional product demonstration by Cyvexly Studio. Sample data only; no monitoring, alert, or demo request is sent.
      </div>

      <header className="border-b border-[#25334c] bg-[#0a1120]/95">
        <div className="mx-auto flex max-w-[92rem] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#6ee7d8] font-mono text-sm font-bold text-[#071224]">
              NX
            </span>
            <div>
              <p className="font-display text-base font-semibold">Nexora Systems</p>
              <p className="text-xs text-[#8190a8]">Release intelligence</p>
            </div>
          </div>
          <nav aria-label="Demo navigation" className="flex items-center gap-2 text-sm">
            <a className="rounded-lg bg-[#17233a] px-3 py-2 text-white" href="#overview" aria-current="page">
              Overview
            </a>
            <a className="rounded-lg px-3 py-2 text-[#aab8cc] hover:bg-[#131e32] hover:text-white" href="#issues">
              Issues
            </a>
            <Link className="rounded-lg border border-[#31425f] px-3 py-2 text-[#c7d3e4] hover:border-[#6ee7d8] hover:text-white" href="/work/nexora-systems">
              Case study
            </Link>
          </nav>
        </div>
      </header>

      <main id="nexora-main" className="mx-auto max-w-[92rem] px-4 py-8 sm:px-6 lg:py-10">
        <section id="overview" aria-labelledby="overview-title">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6ee7d8]">Production overview · sample workspace</p>
              <h1 id="overview-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Find the release behind the change.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#9aaac0] sm:text-base">
                Nexora connects product signals to deployments so engineering teams can investigate changes without stitching together five dashboards.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Time range">
              {(Object.keys(ranges) as Range[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={range === item}
                  onClick={() => setRange(item)}
                  className={`min-h-11 rounded-lg border px-4 text-sm font-medium transition ${
                    range === item
                      ? "border-[#6ee7d8] bg-[#6ee7d8] text-[#071224]"
                      : "border-[#31425f] bg-[#111b2d] text-[#c3cee0] hover:border-[#6681a8]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Events analyzed", ranges[range].events, "Across 12 sample services"],
              ["Active issues", String(ranges[range].issues), "2 require attention"],
              ["Healthy signals", ranges[range].accuracy, "Availability and data quality"],
              ["P95 latency", ranges[range].latency, `${ranges[range].delta} vs previous period`],
            ].map(([label, value, note]) => (
              <article key={label} className="rounded-2xl border border-[#25334c] bg-[#0e1728] p-5">
                <p className="text-sm text-[#91a1b8]">{label}</p>
                <p className="mt-3 font-display text-3xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs text-[#708198]">{note}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)]">
            <section className="rounded-2xl border border-[#25334c] bg-[#0e1728] p-5 sm:p-6" aria-labelledby="signal-title">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 id="signal-title" className="font-display text-lg font-semibold">Signal health</h2>
                  <p className="mt-1 text-sm text-[#8798b0]">Composite service score for the selected period</p>
                </div>
                <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-[#2b3b57] px-3 text-sm text-[#b9c7da]">
                  <input
                    type="checkbox"
                    checked={compare}
                    onChange={(event) => setCompare(event.target.checked)}
                    className="h-4 w-4 accent-[#6ee7d8]"
                  />
                  Compare baseline
                </label>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-[#24324a] bg-[#09111f] p-3 sm:p-5">
                <svg viewBox="0 0 520 100" className="h-48 w-full" role="img" aria-labelledby="chart-title chart-desc">
                  <title id="chart-title">{`Signal health trend for ${range}`}</title>
                  <desc id="chart-desc">The current signal rises overall with a visible release marker. {compare ? "A muted baseline is also shown." : "Baseline comparison is hidden."}</desc>
                  {[20, 40, 60, 80].map((y) => (
                    <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="#1b2940" strokeWidth="1" />
                  ))}
                  {compare ? <polyline points="0,68 80,66 160,63 240,61 320,58 400,56 520,54" fill="none" stroke="#53637a" strokeWidth="2" strokeDasharray="6 6" /> : null}
                  <line x1="318" y1="8" x2="318" y2="92" stroke="#f3b95f" strokeWidth="1.5" strokeDasharray="4 4" />
                  <polyline points={chartPoints[range]} fill="none" stroke="#6ee7d8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="318" cy={range === "24h" ? "38" : range === "7d" ? "31" : "49"} r="5" fill="#f3b95f" />
                </svg>
                <div className="mt-1 flex flex-wrap justify-between gap-2 text-xs text-[#71839c]">
                  <span>Earlier</span>
                  <span className="text-[#f3c579]">Release 3.18.2</span>
                  <span>Now</span>
                </div>
              </div>
            </section>

            <aside className="rounded-2xl border border-[#35506a] bg-[linear-gradient(155deg,#14273a,#0d1829)] p-6" aria-labelledby="brief-title">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#6ee7d8]">Plain-language brief</p>
              <h2 id="brief-title" className="mt-3 font-display text-xl font-semibold">What needs attention</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#b5c3d6]">
                Checkout completion changed after the latest release. The issue is concentrated enough to investigate without pausing unrelated services.
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-[#2b4057] pb-3">
                  <dt className="text-[#8395ae]">Confidence</dt>
                  <dd className="font-medium text-[#f3c579]">High</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#2b4057] pb-3">
                  <dt className="text-[#8395ae]">First observed</dt>
                  <dd className="font-medium">14:31 UTC</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#8395ae]">Likely owner</dt>
                  <dd className="font-medium">Payments team</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="issues" className="mt-8 scroll-mt-6" aria-labelledby="issues-title">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 id="issues-title" className="font-display text-2xl font-semibold">Investigate active issues</h2>
              <p className="mt-2 text-sm text-[#8fa0b7]">Filter by service, then open an issue for the evidence and next step.</p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter issues by service">
              {(["All services", "Checkout", "Search", "API"] as Service[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={service === item}
                  onClick={() => chooseService(item)}
                  className={`min-h-11 rounded-full border px-4 text-sm transition ${
                    service === item
                      ? "border-[#6ee7d8] bg-[#17313b] text-[#8ff2e5]"
                      : "border-[#2a3a55] bg-[#0e1728] text-[#a9b7ca] hover:border-[#526b8e]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)]">
            <div className="space-y-3">
              {visibleIncidents.map((incident) => (
                <button
                  key={incident.id}
                  type="button"
                  aria-pressed={selected.id === incident.id}
                  onClick={() => setSelectedId(incident.id)}
                  className={`min-h-24 w-full rounded-2xl border p-4 text-left transition ${
                    selected.id === incident.id
                      ? "border-[#6ee7d8] bg-[#122536]"
                      : "border-[#263650] bg-[#0e1728] hover:border-[#4b6284]"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7e91aa]">{incident.service} · {incident.id}</span>
                    <span className="text-sm font-semibold text-[#f3c579]">{incident.change}</span>
                  </span>
                  <span className="mt-2 block text-sm font-medium text-white sm:text-base">{incident.title}</span>
                </button>
              ))}
            </div>

            <article className="rounded-2xl border border-[#2f425f] bg-[#101b2e] p-6" aria-live="polite">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-[#f3b95f]/15 px-3 py-1 text-xs font-medium text-[#f5cb8a]">{selected.severity}</span>
                <span className="font-mono text-xs text-[#8294ad]">{selected.id}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{selected.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#b2c0d2]">{selected.explanation}</p>
              <div className="mt-6 rounded-xl border border-[#2d4560] bg-[#0a1424] p-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#6ee7d8]">Recommended next check</p>
                <p className="mt-2 text-sm leading-relaxed text-[#c8d3e2]">{selected.next}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#31506b] bg-[linear-gradient(135deg,#11233a,#102e3a)] p-6 sm:p-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#6ee7d8]">End of demonstration</p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Need a clearer way to explain a complex product?</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#afbdd0]">
                Return to Cyvexly to discuss a product site or custom web application. This demo has not collected or transmitted anything.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex min-h-11 items-center rounded-full bg-[#6ee7d8] px-5 text-sm font-semibold text-[#071224] hover:bg-[#97f2e7]" href="/contact?interest=custom-system">
                Ask about a web application
              </Link>
              <Link className="inline-flex min-h-11 items-center rounded-full border border-[#4a6686] px-5 text-sm font-medium text-white hover:border-[#6ee7d8]" href="/work/nexora-systems">
                Read the case study
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#25334c] px-4 py-7 text-center text-xs text-[#788aa3]">
        Nexora Systems is fictional. Product names, metrics, releases, incidents, and organizations are sample content created for this demonstration.
      </footer>
    </div>
  );
}
