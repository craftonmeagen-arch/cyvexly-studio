# Cyvexly Active Chunk

**Chunk:** 2 — Core marketing pages
**Status:** Opened; `/process` complete, remaining pages pending.
**Prior chunk:** Chunk 1 — Foundation & Home, closed this same round. See
"Round 1 report" below for its full record.

**Why Chunk 2 exists:** Chunk 1 established the technical foundation, design
system, and Home page. Every other sitemap page (vision §5) reuses that same
foundation and `src/lib/site-config.ts`.

**Broad outcome:** Services, Work/Portfolio (+ case-study template), Pricing,
Process, About, and general Contact pages.

**What belongs inside it:** page-level content and layout for each of those
routes, extending `src/lib/site-config.ts` where content is shared with Home
(e.g. `processSteps`), reusing `SiteHeader`/`SiteFooter`/`ButtonLink`.

**Non-goals:** the Project Planner (Chunk 3), utility/legal pages (Chunk 4),
real client case-study imagery (needs Chunk 2's own case-study work first).

**Closure boundary:** all six pages exist, match their vision sections and
mockups, pass build/typecheck/lint, and are verified through real dev-server
rendering and interaction; the About page's Owner-identity gap (see
`CYVEXLY_APP_DEBT.md`) is either resolved or explicitly and honestly bounded.

## Round 1 report — global round 1

### Round Plan

Establish the actual repository/source baseline (none existed), scaffold a
standard Next.js + TypeScript + Tailwind v4 app (the common, current stack for
this class of marketing/service-studio website), implement the cyber-arctic
design system as reusable tokens/components, and build the Home page as the
first coherent, provable slice (Chunk 1). With time remaining in the required
work window, open Chunk 2 and build one further real, fully verified page
(`/process`) rather than pad the round with documentation alone.

### Methodology check

Next.js (App Router) + TypeScript + Tailwind CSS is the current standard
choice for this class of product (marketing/service site with forms, motion,
future CMS/commerce integrations) and matches the vision's technical
implications. Chose Tailwind v4's CSS-first `@theme` token approach over a JS
config file since that is the framework's current documented pattern.

### What changed — Chunk 1 (Foundation & Home)

- Initialized the Git repository (`git init`) — none existed.
- Scaffolded a Next.js 16 / React 19 / TypeScript / Tailwind v4 app (via
  `create-next-app`, merged into the sandbox root without touching the
  Owner-authored root `AGENTS.md` — see Audibles).
- `src/app/globals.css` — cyber-arctic color tokens (arctic mist, ice field,
  frosted/smoke glass, midnight slate, cool graphite, cyber blue, ion cyan,
  signal emerald, warning coral), `.glass-panel`/`.signal-grid-bg` utilities,
  reduced-motion and focus-visible handling.
- `src/app/layout.tsx` — Space Grotesk (display), Inter (body), JetBrains
  Mono (utility/labels) via `next/font/google`; real page metadata.
- `src/lib/site-config.ts` — shared nav, footer, credibility points, selected
  work (concept projects), capabilities, process steps, pricing preview, and
  FAQ preview content, so later chunks reuse one source instead of
  duplicating copy.
- `src/components/button.tsx`, `site-header.tsx` (with mobile menu),
  `site-footer.tsx`, `orbit-graphic.tsx`, `faq-accordion.tsx`.
- `src/app/page.tsx` — full Home page: hero + credibility strip, selected
  work, capabilities, "not a DIY builder" statement, process preview, pricing
  preview, FAQ preview, final CTA, footer — matching vision §6.1's section
  order and `mockups/01-home.png`'s art direction.
- `eslint.config.mjs` — added `.codex/**` to ignores (was linting another
  role's disposable runtime output).
- `next.config.ts` — `agentRules: false` (see Audibles).
- `.claude/launch.json` — dev-server config for attended-session preview.
- `.gitignore` — merged Next.js entries into the existing role-system
  gitignore.
- `package.json` name corrected from the scaffold tool's default
  (`scaffold-tmp`) to `cyvexly-studio-website`.
- Committed as git source truth (commit `d256298`).

### What changed — Chunk 2 start (Process page)

- `src/lib/site-config.ts` — extended `processSteps` with `clientInput`,
  `deliverable`, `approval`, and `timeframe` per stage (vision §6.7 requires
  showing all four per stage; the Home preview only used
  `number`/`title`/`description`, so this is additive and did not change the
  Home page's rendering).
- `src/app/process/page.tsx` — new page: hero, five detailed stage cards
  (each showing "From you" / "From Cyvexly" / "Approval point" / timeframe),
  the trust-panel statement, and a final CTA.
- `src/components/site-header.tsx` — fixed a real tablet-width (768px)
  defect found from Auditor evidence (see Audibles): moved the header's
  mobile/desktop nav switch from Tailwind's `md` (768px) to `lg` (1024px)
  breakpoint, since five nav links + logo + CTA button do not fit at 768px.
- `src/app/globals.css`, `src/components/button.tsx`, `src/app/page.tsx` —
  fixed a real WCAG AA text-contrast failure the Auditor's contrast probe
  found in the vision's suggested "Cyber blue" (`#1478FF` measured 4.07:1 as
  button text, 3.67:1 as link text; both need 4.5:1). Darkened
  `--color-cyber-blue` to `#0F66E0` (now 5.25:1 / 4.74:1) and its hover/focus
  shade to `#0B4FB0`; while checking for the same class of defect,
  independently found and fixed `--color-signal-emerald` (`#16B777` measured
  2.35:1, below even the 3:1 floor) by darkening it to `#0A6B45` (now
  5.4–6.6:1 across the light backgrounds it's used on). See Audibles and
  `CYVEXLY_CHUNK_DEBT.md` for the full contrast math.
- Committed as git source truth (see the round-1 commit history for the
  exact second commit).

### Audibles

- **`.codex/roles/scripts/Claim-BuilderLock.ps1` could not parse** on this
  machine (both `powershell.exe` and `pwsh`) due to a missing UTF-8 BOM
  combined with an em-dash in a string literal — this was failing the literal
  first required command of every Builder round, not lock contention. Added
  a UTF-8 BOM to the file (content otherwise byte-identical) and the claim
  then succeeded normally. Recorded in `CYVEXLY_WATCH.md`.
- **`next dev` auto-appended a `<!-- BEGIN:nextjs-agent-rules -->` block into
  the Owner-authored root `AGENTS.md`** the first time the dev server ran.
  Removed the appended block (root `AGENTS.md` is now byte-identical to its
  pre-round content) and set `agentRules: false` in `next.config.ts` to
  prevent recurrence; verified across two later dev-server restarts that
  `AGENTS.md` stayed untouched.
- **This is an unattended/scheduled session**, so `preview_start({name:
  ...})` refused to launch the dev server. Started it manually via the shell
  tool instead, then attached the Browser pane with
  `preview_start({url: "http://localhost:5173"})`, which worked.
  Screenshot/click `computer` actions still failed ("the Browser pane is not
  displayed, so the page is not compositing frames"); used `get_page_text`,
  `read_page`, `read_console_messages`, `read_network_requests`, and
  `javascript_tool` (dispatching real `.click()` calls) instead.
- **A concurrent Auditor round published real desktop/mobile/tablet
  screenshots** of this Builder's own live dev server to the shared durable
  evidence root while this round was in progress (see `CYVEXLY_WATCH.md`).
  Reading those (an evidence file any role may read) closed the visual
  screenshot-comparison gap this round would otherwise have had to leave
  open, and surfaced a real defect: at 768px the tablet screenshot showed
  "About" clipped behind the "Describe your project" button. Fixed as
  described above and independently re-verified with
  `getBoundingClientRect()` measurements at 768px and 1024px.
- **create-next-app refused to scaffold into the non-empty sandbox root**, so
  it was scaffolded into a throwaway `scaffold-tmp/` directory and merged in
  by hand, explicitly skipping the tool's own generated `AGENTS.md`/
  `CLAUDE.md` so the Owner-authored root `AGENTS.md` was never at risk of
  being overwritten by the merge itself.

### Proof performed

- `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean,
  both after the Home page and again after the Process page and header fix.
- Home page: fetched real rendered page text (all sections present with
  correct copy), zero console errors, all network requests returned 200;
  desktop nav confirmed via `read_page`; mobile menu open/close and FAQ
  accordion open/close confirmed via real dispatched clicks and DOM
  inspection at 1280×720 and 375×812.
- Real screenshots (published by the concurrent Auditor round) of the actual
  running Home page at desktop and full-page mobile compared against
  `mockups/01-home.png`: hierarchy, section order, composition, and palette
  match closely, with no clipping/overlap on desktop or the full mobile
  scroll.
- Tablet screenshot (auditor evidence) surfaced the header overlap defect;
  after the fix, re-verified with `javascript_tool` measuring
  `getBoundingClientRect()` for the logo/nav/CTA at width 768 (hamburger
  shown, no desktop nav laid out) and width 1024 (full nav visible, zero
  overlap).
- After the color-token fix, re-verified contrast by reading the real
  computed `color`/`background-color` of the primary button, a text link,
  and the emerald status dot in the running app and computing WCAG relative
  luminance/contrast in-browser: 5.25:1, 4.74:1, and 5.92:1 respectively —
  all now pass the 4.5:1 (text) / 3:1 (UI component) AA floors.
- `/process`: fetched real rendered page text confirming all five stages
  render with their timeframe, "from you", "from Cyvexly", and "approval
  point" fields, plus the trust panel and final CTA; zero console errors.

### What was not checked

- No cross-browser check beyond the one Chromium-based Browser-pane engine.
- No axe/automated accessibility audit run; only structural checks (heading
  order, landmark roles, focus-visible styling, aria-expanded/aria-controls,
  reduced-motion handling) were done by construction and code review.
- Other Chunk 2 pages (Services, Work, Pricing, About, Contact) do not exist
  yet — in scope for Chunk 2 but not this round.
- The About page's Owner-identity gap was not resolved (correctly — see
  `CYVEXLY_APP_DEBT.md`; it needs Owner-supplied facts, not Builder
  invention).

### Git/diff accountability

Four commits this round: the Chunk 1 root commit (Home page + foundation, 108
files); a second commit for the Process page, header breakpoint fix, and
color-contrast fix; a third for the honest Process-page mockup-gap note and
`.gitignore` entry for the scheduled-task runner's own lock file; a fourth
noting the Auditor's published report in the handoff. `git status` at close
shows only the concurrently-running Auditor's own report/state files as
modified/untracked (correctly left untouched — see Audibles/`CYVEXLY_WATCH.md`
non-interference note). No file this Builder is responsible for is
uncommitted, and no file outside what's described above was touched.

### Completion state

Chunk 1: `DONE WITH PROOF`. Chunk 2: `NEEDS COHERENT FOLLOW-UP` (one of six
pages built; About page blocked on Owner-supplied identity content).

### Recommended next tasks

1. Build the remaining Chunk 2 pages (Services, Work + case-study template,
   Pricing, Contact) reusing `src/lib/site-config.ts` and the existing
   component library.
2. Route the About-page founder-identity question to the Owner (see
   `CYVEXLY_APP_DEBT.md` item 1) before building `/about`.
3. Once real case-study content exists for Aurora Spaces / Nexora Systems /
   Vellora Care, replace the CSS-gradient placeholders in `selectedWork`
   with real designed crops.
4. When an attended session or another Auditor/Council round is available,
   get a full desktop+mobile+tablet screenshot pass on whichever pages exist
   at that point, rather than relying on incidentally concurrent Auditor
   evidence.
