# Cyvexly Active Chunk

**Chunk:** 2 — Core marketing pages (effectively complete except the
Owner-blocked About page); Chunk 4 — Utility/legal pages opened early
(round 2) and in progress.
**Status:** Chunk 2: `/process`, `/services`, `/pricing`, `/contact`,
`/work` (+3 case studies) all complete and verified. Only `/about` remains,
honestly bounded on Owner-supplied founder identity. Chunk 4: `/not-found`,
`/faq`, `/accessibility` complete; `/privacy`/`/terms` bounded on
Owner-supplied jurisdiction facts; favicon/social assets and launch-readiness
pass remain.
**Prior chunk:** Chunk 1 — Foundation & Home, closed round 1. See "Round 1
report" below for its full record.

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

## Round 2 report — global round 2

### Round Plan

Reconcile current source/runtime truth (git log showed the prior session had
continued past its own round-1 report's stated commit count, all as
"Round 1 (cont.)" commits — read as history, not a blocker). Continue Chunk 2
with the strongest remaining coherent slice: the four fully-specified,
unblocked marketing pages (Services, Pricing, Contact, Work + case-study
template), reusing the existing design system and `site-config.ts` pattern
established in round 1. Verify every page against the real dev server, not
just build/typecheck/lint. Given the scheduled task's stated minimum
work-window (50 minutes, longer than this packet's own 25-minute normal
window), continue with coherent, reachable follow-on work — a mockup visual
comparison pass, then Chunk 4's cheapest well-specified items (custom 404,
FAQ library, Accessibility statement) — rather than stopping once the
Chunk 2 provisional plan was nominally complete.

### Methodology check

Continued the same Next.js App Router + TypeScript + Tailwind v4 stack and
component patterns from round 1 (`SiteHeader`/`SiteFooter`/`ButtonLink`/
`FaqAccordion`, `glass-panel`/`signal-grid-bg` utilities, shared
`site-config.ts` data). For the Contact form, since no email-delivery service
is authorized yet (a foundational/authorization-sensitive decision per
§4.12 — same class of gap as the Project Planner in Chunk 3), used a
`mailto:` bridge (constructs a pre-filled mailto link and sets
`window.location.href`) rather than inventing a backend/credential — this is
a real, honestly-labeled, zero-authorization interim mechanism, not a
disguised fake submission. For the Work page, added client-side category
filtering (matches vision §6.4's filter-chip requirement) using the
project's existing `category`/`kind` fields rather than introducing new
infrastructure.

### What changed

- `src/lib/site-config.ts` — added `pricingPackages`, `projectIncludes`,
  `addOns`, `carePlans`, `billedSeparately`, `pricingFaq`, `contactTopics`,
  `servicesGroups` (7 groups), `websiteTypes` (5, matching the pre-existing
  footer anchor hrefs), `serviceCombinations`, `servicesFaq`, `workFilters`,
  `caseStudies` (3 full concept case studies, each now including a `palette`
  + `typographyNote`), and added `slug`/`category` fields to the existing
  `selectedWork` entries.
- `src/app/pricing/page.tsx` — new page: 5 package cards, comparison table,
  "what every project includes," add-ons table, care plans, billed-
  separately/payment-schedule section, pricing FAQ, CTA (vision §6.6).
- `src/app/services/page.tsx` — new page: 7 service-group cards (each
  answering problem/who/included/scope-change/next-action per vision §6.2,
  now with icon badges), a "popular website types" section whose 5 card
  `id`s match the pre-existing `footerNav.services` anchor hrefs (previously
  dangling since `/services` didn't exist), a service-combinations table,
  reused selected-work cards, FAQ, CTA.
- `src/components/service-icon.tsx` — new: 7 small hand-authored inline-SVG
  line icons (no external asset), one per service group.
- `src/components/contact-form.tsx`, `src/app/contact/page.tsx` — new:
  accessible contact form (labeled fields, `aria-invalid`/
  `aria-describedby`, `role="alert"`/`role="status"`) with real client-side
  validation and a `mailto:`-bridge submit path (vision §6.10).
- `src/components/work-grid.tsx`, `src/app/work/page.tsx` — new: filterable
  portfolio grid (All/Business Site/Redesign/Landing Page/Commerce/Concept,
  vision §6.4).
- `src/app/work/[slug]/page.tsx` — new: case-study template (vision §6.5)
  with `generateStaticParams`/`notFound()`, rendering challenge, goals,
  scope, key decisions, a "Visual direction" color-swatch + typography
  section (added after mockup comparison — see Audibles), accessibility
  highlights, intended outcome, CTA.
- `src/app/faq/page.tsx` — new: full FAQ library, 11 categories / 30 Q&As
  covering every topic vision §6.11 lists, with an anchor-linked category
  nav (vision §6.11; Chunk 4).
- `src/app/accessibility/page.tsx` — new: Accessibility Statement — WCAG 2.2
  AA target, what that means in practice, ongoing-work note, and a report-a-
  problem contact route (vision §6.12; Chunk 4). Deliberately did not build
  `/privacy` or `/terms` in the same pass — see Audibles.
- `src/app/not-found.tsx` — new: custom 404 replacing the Next.js default,
  with links back to Home/Services/Work/Planner (vision §6.12; Chunk 4).
  Applies to both unmatched routes and explicit `notFound()` calls (verified
  against the case-study template's unknown-slug path).

### Audibles

- **Found and fixed a real Next.js 16 runtime bug.** `/work/[slug]/page.tsx`
  was first written with `params: { slug: string }` (pre-Next.js-15
  convention). `tsc --noEmit`, `pnpm run lint`, and `pnpm run build` all
  passed clean — the hand-written type bypassed the framework's generated
  `PageProps` check. Real dev-server requests to all three case-study routes
  404'd, and the server log showed `Route "/work/[slug]" used
  \`params.slug\`. \`params\` is a Promise and must be unwrapped...`. Fixed
  by typing `params: Promise<{ slug: string }>` and awaiting it in both
  `generateMetadata` and the page component; re-verified all three routes
  return 200 with correct content afterward. Recorded in `CYVEXLY_WATCH.md`
  as a pattern to watch for in any future dynamic route.
- **Performed a real mockup visual-comparison pass** against
  `mockups/02-services-pricing.png` and `mockups/03-work-case-study.png`
  (opened both as images). Found and fixed one genuinely actionable,
  reachable gap: the case-study template was missing the "visual system
  excerpt" vision §6.5 item 7 requires and the mockup visually demonstrates
  (a compact color-palette + typography specimen) — added a real "Visual
  direction" section per case study using each project's actual gradient hex
  values as swatches (verified via `getComputedStyle` in the running app,
  not just source inspection) plus a short typography note. Also found the
  Services page had no icon badges where the mockup shows them on every
  card; added a small hand-authored inline-SVG icon set rather than leaving
  it unaddressed. Named, but deliberately left open (logged in
  `CYVEXLY_CHUNK_DEBT.md` rather than silently claimed as converged): the
  Services/Pricing pages are denser and more text-heavy than the mockup's
  compact cards (a reasoned adaptation favoring the more specific written
  vision text over the compact thumbnail, per §4.3's "preserve product
  intent" guidance — not an oversight), Pricing still has no icon badges,
  and both pages' final-CTA headline wording differs from the mockup.
- **Refined a round-1 Watch finding.** Round 1's note said
  `javascript_tool`-dispatched clicks "work normally" in this unattended
  session. Round 2 found this needs a caveat: a `computer` tool click (by
  ref) on a submit button and a text input produced zero effect (no state
  change, no focus, no typed text) across repeated controlled tests, even
  though the tool call itself reported apparent success. An earlier same-
  session test that seemed to show a `computer` click succeeding on the FAQ
  accordion was very likely a false positive — a stale read racing an
  unrelated `javascript_tool`-dispatched click's delayed state commit, not
  the `computer` click itself. Standardized on `javascript_tool` dispatching
  real `MouseEvent`/`input` events (with a short `await setTimeout` after,
  since React's commit isn't synchronous with the dispatch call) as the
  session's one reliable interaction-verification method for the rest of
  this round; updated `CYVEXLY_WATCH.md` accordingly so the next Builder
  doesn't have to rediscover this.
- **Chose a `mailto:` bridge for the Contact form's submit action** rather
  than inventing a backend/email-delivery integration, since no such service
  is authorized (§4.12 applies — this is the same class of foundational gap
  as the Project Planner's eventual backend). This is a real, functioning,
  zero-authorization mechanism (verified: constructs a correct
  `mailto:hello@cyvexly.com?subject=...&body=...` target and calls
  `window.location.href = mailto` on valid submit, confirmed via a real
  submit-flow test with intercepted navigation), not a placeholder disguised
  as complete. Documented as the current mechanism in the round report
  rather than silently treated as the final answer — a real email-delivery
  service is still an open foundational decision for Chunk 3.

### Proof performed

- `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean
  after every page added this round (checked incrementally, not just once
  at the end).
- Started the dev server manually (unattended-session workaround from round
  1) and, for every new route (`/services`, `/pricing`, `/contact`, `/work`,
  `/work/aurora-spaces`, `/work/nexora-systems`, `/work/vellora-care`,
  `/faq`, `/accessibility`, `/not-found` via an unmatched path and via the
  case-study template's `notFound()`) plus the pre-existing `/` and
  `/process`: confirmed HTTP 200 (404 for intentionally-unmatched paths),
  fetched real rendered page text confirming correct content, checked
  `read_console_messages` for zero unexpected errors, and checked
  `read_network_requests` for all-200/304 asset loads.
- Real interaction testing via `javascript_tool`-dispatched DOM events (see
  Audibles for why `computer` actions were not used): FAQ accordion
  open/toggle on Pricing and FAQ pages (verified `aria-expanded` and panel
  text), mobile nav open/close on Pricing (verified `aria-expanded` and
  rendered link count), Work page category filter (verified "Commerce"
  isolates exactly Vellora Care), Contact form's full validation path (empty
  submit → all 4 expected field errors + alert banner) and full valid-submit
  path (filled all fields including checkbox → confirmation state rendered,
  form reset, no unwanted page navigation observed).
- Verified the "visual direction" color swatches render the correct actual
  colors via `getComputedStyle(...).backgroundColor` against the source hex
  values (not just visual inspection of markup).
- Verified all 12 Services-page anchor targets (7 service groups + 5
  website-type cards, including the previously-dangling footer anchor ids)
  resolve via `document.getElementById`.
- Checked every new page at 375×812 (mobile preset) for
  `document.documentElement.scrollWidth > clientWidth` (horizontal overflow)
  — none found.
- Ran a full route regression sweep (`curl` HTTP status) across every route,
  old and new, after all `site-config.ts` changes, plus a live re-check of
  the Home page (`/`) confirming its FAQ accordion, work cards, and content
  were unaffected by the shared-config growth.
- Opened `mockups/02-services-pricing.png` and `mockups/03-work-case-
  study.png` as images and performed the visual-plan/target comparison
  required by §2.2/§4.3 — see Audibles for findings, both fixed and
  deliberately logged as open.

### What was not checked

- No cross-browser check beyond the one Chromium-based Browser-pane engine
  (unchanged from round 1).
- No axe/automated accessibility audit; structural checks only (labels,
  aria-invalid/describedby, role=alert/status, heading order, focus-visible
  by construction/code review).
- Full pixel screenshot comparison against the mockups was not reachable
  this round either (same unattended-session limitation as round 1) — the
  mockup comparison performed was: open the mockup image directly, read its
  actual visible content/layout, and compare against real fetched page text/
  DOM structure from the running app. This is real evidence of content and
  structure, not of exact pixel layout/spacing/typography rendering.
- `/about`, `/start`, `/privacy`, `/terms` were not built — all four are
  honestly bounded on Owner-supplied facts or a Chunk 3 authorization
  decision, not reachable this round (see `CYVEXLY_APP_DEBT.md` and the
  project chunk map).
- Did not attempt to resolve the pre-existing placeholder work-card/case-
  study photographic imagery gap (needs a real design asset, not a text
  generation task) — partially narrowed (added real color/typography data)
  but the photographic hero and desktop/mobile screen-preview panels from
  `mockups/03-work-case-study.png` remain unaddressed.
- Did not investigate why the prior session's commits are labeled
  "Round 1 (cont.)" past round 1's own stated commit count, beyond noting it
  in `CYVEXLY_CURRENT_STATE.md` as a documentation-accuracy observation for
  the next Builder — not a source-truth risk (git log is unambiguous), just
  a prose-vs-history mismatch worth a look if it recurs.

### Git/diff accountability

At round start, `git log` showed 7 commits on `master` (2 from round 1's own
report plus 5 more labeled "Round 1 (cont.)" that round 1's own report did
not describe — read as history, not re-litigated). `git status` at round
start showed only concurrently-running Auditor/Council-owned files as
modified/untracked (left untouched, per non-interference). This round's own
changes — all `src/` files listed under "What changed" above, plus the
documentation files listed in this report's own commit — are what this round
is responsible for; committed as git source truth in one or more commits
following this report (see the commit(s) immediately after this report entry
for the exact hashes). No file outside what's described in this report and
the routine documentation updates (`CYVEXLY_*` state/debt/watch/handoff/
summary/chunk-map files) was touched.

### Completion state

Chunk 2: `NEEDS COHERENT FOLLOW-UP` → now effectively `DONE WITH PROOF`
except one honestly `FULFILLED TO THE BEST OF CURRENT PRACTICAL ABILITY`
item (About page — blocked on Owner-supplied founder identity, not a
reachable gap). Chunk 4: opened early, `NEEDS COHERENT FOLLOW-UP` (3 of ~5
known items done; Privacy/Terms bounded on Owner-supplied jurisdiction
facts; favicon/social assets and a launch-readiness pass remain).

### Recommended next tasks

1. Independently verify Chunk 2's bounded state and, if agreed, formally
   close it per §7.9 (only the About-page gap remains, and it is not
   reachable without Owner input).
2. Continue Chunk 4: favicon/social-sharing image asset (needs a real design
   asset — likely not a pure code-generation task), then a launch-readiness
   pass against vision §15 once more of the site exists.
3. Route two Owner-input requests that are now blocking real pages rather
   than just documentation: (a) About-page founder identity (vision §6.8,
   carried from round 1), and (b) Privacy/Terms jurisdiction facts — business
   location and customer markets to address (vision §6.12/§12, new this
   round). See `CYVEXLY_APP_DEBT.md` items 1 and 3 for the exact questions.
4. Before opening Chunk 3 (Project Planner), run the full §4.12 Outcome
   Reachability Check on the email-delivery/backend mechanism — the Contact
   page's `mailto:` bridge (this round) is a reasonable interim pattern for
   a short form, but the Planner is described in vision §6.9 as needing a
   confirmation email with a full answer summary, which a `mailto:` bridge
   cannot reliably deliver (the visitor, not Cyvexly, would need to actually
   send it). Don't assume the same interim mechanism scales to Chunk 3
   without checking.
5. When an attended session or another Auditor/Council round is available,
   get a real pixel-level screenshot comparison of the round-2 pages against
   `mockups/02-services-pricing.png` and `mockups/03-work-case-study.png` —
   this round's comparison was real (opened the actual mockup images) but
   was necessarily content/structure-level, not pixel-level, per the
   unattended-session screenshot limitation.
6. Revisit the logged-but-not-fixed visual gaps in `CYVEXLY_CHUNK_DEBT.md`
   item 5 (Pricing icon parity, service-combination framing, CTA headline
   wording) during a dedicated visual-polish pass, alongside the pre-existing
   `/process` layout gap (item 1).
