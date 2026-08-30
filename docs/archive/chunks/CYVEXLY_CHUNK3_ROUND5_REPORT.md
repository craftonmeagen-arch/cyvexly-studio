# Round 5 report — global round 5 (archived)

Rotated out of `CYVEXLY_ACTIVE_CHUNK.md` during round 6 to stay under its
30KB hot-path cap (§7.14).

### Round Plan

Scheduled round, 50-minute minimum work window. Reconciled current
source/runtime truth first: `git log` HEAD at claim was `dfc0485`
(matching the round-4 handoff's own final accounting of 13 total round-4
commits); `git status` showed only the same pre-existing, untouched
Auditor/Council evidence and report-plumbing files every prior round also
found and correctly left alone. Read the round-4 handoff, the current
Auditor report (`IFA-2026-08-30-R2`) and Council report
(`CYC-R1-20260830-01`), `CYVEXLY_CHUNK_DEBT.md`, and `CYVEXLY_APP_DEBT.md`.
All three Owner-input blockers (About founder identity, Privacy/Terms
jurisdiction, domain + email-provider) remain open and unchanged — no new
Owner direction arrived, so nothing new to route there. Selected two
reachable, well-scoped visual-improvement tasks that every input this
round pointed at independently, none of them Owner-blocked:

1. `CYVEXLY_CHUNK_DEBT.md` item 1 — `/process` uses a simpler card-stack
   layout than `mockups/04-process-planner.png`'s left panel (a vertical
   connected-line timeline, a "Typical Timing" summary table, and an "Our
   Collaboration Promise" panel) — logged since round 1, never picked up.
2. `CYVEXLY_CHUNK_DEBT.md` item 2 / the Auditor's `CYV-IFA-002` / the
   Council's `CYC-R1-F002` — all three independently flagged the Work
   grid and case-study heroes as flat CSS gradients with no reviewable
   visual, both external reviewers marking it their own "Next" priority.

Did not start `/about`, `/privacy`, `/terms`, the favicon redesign (still
needs attended-session/real-browser confirmation, unchanged), or the
Planner's server-side email route (still needs the domain + provider
decision, unchanged) — all remain correctly bounded on the same Owner
inputs or capability gaps prior rounds already established.

### Methodology check

For item 1, followed the existing `processSteps` data shape in
`site-config.ts` exactly (no new fields), and matched existing panel/badge
conventions already used elsewhere (`glass-panel`, the `PackageIcon`
badge sizing/stroke pattern, the `dt`/`dd` label conventions already used
in the same page) rather than inventing a new visual language — a
CSS-Grid-style absolute-positioned connecting line behind numbered circle
badges is a standard, well-understood timeline pattern, not a novel
mechanism.

For item 2, considered building real screenshot-style imagery, but these
are explicitly labeled "Concept project" work with no real completed
design to photograph — inventing a fake "real screenshot" would misrepresent
non-existent client work, which is a different and worse problem than a
flat gradient. Instead extended the same "hand-authored, on-brand SVG
artwork" approach already established and proven for `icon.svg` and
`opengraph-image.tsx` (round 1/3): built one abstract schematic
composition per concept project, each a direct visualization of that
project's own already-written "decisions" copy in `site-config.ts`
(Aurora Spaces' "full-bleed imagery, minimal chrome"; Nexora Systems'
"darker, denser... product-UI preview panels"; Vellora Care's "product
shot + ingredient callout, checkout summary"), reusing only each
project's own existing palette hex values — verified programmatically
(see Proof performed) rather than assumed, since introducing an unlisted
color was the most likely accidental mistake with this approach.

### What changed

- `src/lib/site-config.ts` — added `collaborationPromise`, a four-item
  list grounded in already-established facts from `processSteps` (the
  approval-point pattern, the "two business days" response time already
  used sitewide, and the "14 days of post-launch defect support" already
  in the Launch & care stage) — no new claims invented.
- `src/app/process/page.tsx` — rebuilt the steps section as a connected
  vertical timeline: numbered circle badges (matching the mockup) linked
  by a continuous vertical line (`absolute`-positioned behind the circles,
  hidden below the `sm` breakpoint since the mobile layout stacks single-
  column), a small checkmark icon added next to "Approval point," and a
  new two-column "Typical timing" (derived directly from `processSteps`,
  no new data) / "Our collaboration promise" section between the timeline
  and the existing trust-banner section.
- `src/components/concept-preview.tsx` — new: three hand-authored,
  distinct abstract SVG compositions (`AuroraSpacesPreview`,
  `NexoraSystemsPreview`, `VelloraCarePreview`), exported via one
  `ConceptPreview({ slug })` component.
- `src/components/work-grid.tsx` — the Work grid card's gradient div now
  renders `<ConceptPreview slug={project.slug} />` inside it (gradient
  kept as a defensive background fallback, now visually covered).
- `src/app/work/[slug]/page.tsx` — the case-study hero div now renders
  `<ConceptPreview slug={slug} />` the same way, keeping the existing
  honest `role="img" aria-label="... concept visual placeholder"`
  labeling unchanged. Also added a new "Desktop & mobile experience"
  section (after "Visual direction"), found by directly comparing the
  shipped page against `mockups/03-work-case-study.png` (the §2.2
  visual-plan/target comparison floor): the mockup has a dedicated
  browser-chrome-frame + phone-frame device preview pair, distinct from
  the hero image, which the shipped page had never built at all. Reuses
  the same `ConceptPreview` artwork inside two new device-frame wrappers,
  honestly labeled "not a pixel-accurate screenshot."

### Audibles

- **Found and fixed a real design-system violation during self-review,
  not caught by build/lint/typecheck.** The first draft of
  `NexoraSystemsPreview` used an invented `#0c1a30` for a nav-bar
  background — a color not in Nexora's own four-color palette and not
  anywhere else in the app's design tokens, breaking the "no new colors
  without a reason" discipline every prior round followed. Caught by a
  grep-based cross-check (`grep -oE '#[0-9A-Fa-f]{6}' src/components/
  concept-preview.tsx | sort -u`) against the union of all three
  projects' palette arrays, which showed one hex outside that set. Fixed
  by replacing the filled nav-bar rect with a thin one-pixel separator
  line in the palette's own `#526176` — re-checked afterward and
  confirmed the file's full color set is now an exact match to the
  palette union (7 colors, zero extras).
- **The `computer` screenshot limitation from rounds 1-4 persisted, and a
  new related symptom appeared and was investigated rather than assumed
  away:** partway through this round, `document.documentElement.
  clientWidth`/`window.innerWidth` began reading `0` and
  `document.visibilityState` read `"hidden"` on every page, including
  `/process`, which had measured correctly (1265px desktop, 375px mobile,
  753px tablet — see Proof performed) earlier in the same round before
  the state changed. Opening a brand-new foreground tab did not recover
  it. This is consistent with — and a further manifestation of — the
  already-logged "Browser pane is not displayed, so the page is not
  compositing frames" unattended-session limitation, not a defect
  introduced by this round's own code (re-confirmed on the unchanged
  `/process` page after the new work-grid/case-study changes, same
  result). Worked around it initially for the new visual surfaces using
  the established round-3 `ImageResponse`-proxy technique (see Proof
  performed). **Later found a real recovery method, not just a
  workaround:** calling `resize_window` with an explicit `{width,
  height}` (rather than a `preset`) forced a real, non-zero
  `clientWidth`/`innerWidth` even while `visibilityState` still read
  `"hidden"` — used this to get genuine desktop/tablet/mobile overflow
  measurements for the new "Desktop & mobile experience" section (see
  Proof performed) after all. Worth trying an explicit-size resize before
  falling back to the `ImageResponse`-proxy technique if this recurs.
- **Deliberately did not attempt real photographic case-study imagery.**
  The Auditor's and Council's closure tests both ask for "real designed
  crops or screen sequences" / "truthful designed concept imagery" — the
  abstract SVG compositions built this round are a genuine, honestly-
  labeled improvement over a flat two-tone gradient, but they are schematic
  illustrations, not real screenshots of a completed design, because no
  such design exists for these fictional concept projects. This is a
  partial closure, not a full one; stated honestly in Completion state and
  `CYVEXLY_CHUNK_DEBT.md` below rather than claimed as fully resolved.

### Proof performed

- `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean,
  run twice (before and after the color-token fix described in Audibles),
  both times with zero errors/warnings beyond the pre-existing,
  unchanged `metadataBase` warning.
- Started the dev server manually (the established round-1 workaround)
  and ran a full live route sweep via `curl` across every route
  (`/`, `/services`, `/pricing`, `/contact`, `/work`, all three case-study
  slugs, `/faq`, `/accessibility`, `/process`, `/start`) both before and
  after the concept-preview change — all 200, zero regressions.
- Attached the Browser pane and, before the visibility-state issue
  described in Audibles appeared, measured `/process` directly: desktop
  (1265px) zero horizontal overflow, five numbered circles present, five
  "01"-"05"-prefixed rows in the new Typical Timing table, zero skipped
  heading levels (`H1` then eleven sibling `H2`s), nine checkmark icons
  (5 approval-point + 4 collaboration-promise) present. At mobile (375px):
  zero horizontal overflow (`scrollWidth === clientWidth === 375`), the
  connecting line correctly `display: none` (mobile stacks single-column,
  matching the responsive pattern established for every other page), all
  fifteen `dl` rows (both the per-step group and the new Typical Timing
  table) fit within 269px of a 375px-wide container with no wrapping-
  induced overflow. At tablet (768px): zero overflow, and the connecting
  line's left edge measured exactly at each of the five circles'
  horizontal center (52px in all six cases) — confirmed via
  `getBoundingClientRect()`, not just visual guess — proving real
  alignment, not a coincidental-looking approximation.
- Re-verified zero console errors and all-200 network requests on
  `/process` via the live dev server both before and after the change.
- For the concept-preview work (built after the Browser pane's visibility
  state degraded — see Audibles): verified structurally via `fetch()` +
  `DOMParser` against the live dev server rather than viewport-dependent
  measurement — confirmed all three case-study routes (200) each render
  their own distinct SVG (5/12/8 shapes respectively, not a shared
  fallback) inside the existing honestly-labeled
  `aria-label="... concept visual placeholder"` container, and confirmed
  the Work grid page renders all three distinct SVGs inside their cards.
  Re-ran the project's established heading-hierarchy and unlabeled-
  control checks (widened this round, per round 4's own watch note, to
  include `button` elements, not just `input`/`select`/`textarea`) across
  `/process`, `/work`, and all three case-study pages: zero skipped
  heading levels, zero unlabeled controls on any of the five.
- **Got genuine pixel-level proof of the three new concept-preview
  compositions**, since a live-tab screenshot was unavailable this round
  (see Audibles): reused the exact round-3 `ImageResponse`-proxy
  technique — built a temporary, non-underscore-prefixed scratch route
  (`src/app/scratch-concept-check/route.tsx`, following round 3's own
  naming-convention finding that a leading `_` silently excludes a route)
  rendering each concept-preview SVG through Next's `ImageResponse`
  pipeline (the same mechanism `opengraph-image.tsx` already proves works
  for raw nested `<svg>`/`<path>` elements in this exact codebase),
  fetched all three real generated PNGs, and visually inspected each with
  the `Read` tool: Aurora Spaces renders as an abstract dark
  architectural/landscape silhouette with a caption bar; Nexora Systems
  renders as a dashboard-like nav bar plus five panels, two containing a
  visible line-chart squiggle; Vellora Care renders as a light, calm
  product-capsule shape with an ingredient-tag callout and a checkout bar.
  All three are visually distinct from each other, on-brand (colors
  verified against each project's own palette — see Audibles), and
  legible at the actual 400x240 render size used on the real pages.
  Deleted the temporary route and all three generated PNGs immediately
  after inspection, per the ephemeral-evidence rule — confirmed via
  `git status --short` that no trace of the scratch route remains, and
  re-ran `tsc`/lint/build clean afterward to confirm its removal broke
  nothing.
- **Compared the shipped case-study page directly against
  `mockups/03-work-case-study.png`** (opened both side by side, per the
  §2.2 visual-plan/target comparison floor) and found a second, more
  specific gap beyond the flat hero gradient: a dedicated "Desktop
  experience"/"Mobile experience" device-frame preview section that the
  shipped page never had at all. Built it (see What changed), then — after
  discovering the `resize_window` explicit-size recovery method described
  in Audibles — measured it directly rather than relying only on the
  `ImageResponse`-proxy technique: at 1280px, zero horizontal overflow
  (`scrollWidth === clientWidth === 1265`), desktop frame 622px wide,
  mobile frame 192px wide, both fully inside the container. At 375px
  mobile, zero overflow (`scrollWidth === clientWidth === 375`), and the
  two frames stack vertically (different `top` values), confirming the
  responsive grid collapses to one column below `sm` as intended. At
  768px tablet, zero overflow (`clientWidth` 753), and the two frames sit
  side by side (near-equal `top` values), confirming the two-column grid
  activates at `sm` as intended — measured via `getBoundingClientRect()`
  on the actual frame elements at all three widths, not assumed from the
  CSS alone. Re-ran the heading-hierarchy and unlabeled-control checks
  across all three case-study pages after adding the section: zero
  skipped heading levels (13 headings each), zero unlabeled controls.
  Re-ran a full production build afterward: clean, same eighteen routes,
  same pre-existing `metadataBase` warning only.
- Stopped this round's own dev-server process, verified by `CommandLine`
  path before stopping (confirmed the `next dev --port 5173` process
  belonged to `C:\app projects\website`, distinct from several
  completely unrelated Vite/tsx/pnpm processes for other unrelated
  projects also running on this machine) rather than assuming ownership
  by port number alone; confirmed via a failed `curl` afterward that
  port 5173 no longer responds. Deleted the temporary dev-server stdout
  log file used during the round.
- **Ran a final verification pass against the real production build, not
  just the dev server**, given this project's own established history
  (rounds 2-3) of dev/production behavior differences: deleted `.next`
  entirely and ran a clean `pnpm run build` from scratch (no incremental
  cache) — compiled successfully, same eighteen routes, same pre-existing
  `metadataBase` warning only. Started the real production server
  (`next start --port 5173`, not `next dev`) and re-swept every route via
  `curl` (all 200, `/not-a-real-route` correctly 404s) against the actual
  built output. Grepped the real production HTML directly: confirmed zero
  occurrences of the invented `0c1a30` color anywhere in the built
  `/work/nexora-systems` page, and confirmed "Desktop & mobile
  experience," "Our collaboration promise," and "Typical timing" all
  appear in the real production HTML — not just the dev-server render.
  Stopped the production server (verified by PID/`CommandLine` before
  stopping, same discipline as the dev server) and deleted the disposable
  `.next` build output afterward, per the ephemeral-storage rule.

### What was not checked

- No real live-tab pixel screenshot exists of any changed page at its
  final rendered state (only the isolated `ImageResponse`-proxy renders
  of the SVG artwork itself, plus DOM/fetch structural checks and real
  `getBoundingClientRect()` geometry at all three widths for `/process`
  and the new device-frame section) — the `computer{action:"screenshot"}`
  action itself remained non-functional all round even after the
  `resize_window` explicit-size recovery fixed `clientWidth`/`innerWidth`
  reads (see Audibles); `visibilityState` stayed `"hidden"` throughout.
- Did not attempt real photographic/screenshot imagery for the case
  studies (see Audibles) — this remains open, tracked below and in
  `CYVEXLY_CHUNK_DEBT.md`.
- Did not re-verify the favicon 16px legibility concern (round 3, still
  open) or attempt `/about`, `/privacy`, `/terms`, or the Planner's
  server-side email route — all unchanged, still correctly bounded on
  the same Owner inputs.
- No automated axe/Lighthouse accessibility audit (unchanged from every
  prior round) — only this project's established manual heading/label/
  button checks.
- No cross-browser check beyond the one Chromium-based Browser-pane
  engine (unchanged from every prior round).

### Git/diff accountability

At round start, `git log` HEAD was `dfc0485` and `git status` showed only
the same pre-existing, untouched Auditor/Council evidence/report-plumbing
files every prior round also found and correctly left alone — confirmed
via `git status --short` before any edit. This round's own changes are
exactly: `src/lib/site-config.ts` (added `collaborationPromise`),
`src/app/process/page.tsx` (timeline/timing/promise rebuild),
`src/components/concept-preview.tsx` (new), `src/components/work-grid.tsx`
and `src/app/work/[slug]/page.tsx` (wired in `ConceptPreview`), plus the
routine `CYVEXLY_*`/archive documentation updates described in this
closeout. The temporary `src/app/scratch-concept-check/route.tsx`
verification route was created and fully deleted within this same round,
confirmed absent via `git status` before commit. No file outside what's
described here was touched.

### Completion state

`CYVEXLY_CHUNK_DEBT.md` item 1 (`/process` layout gap): **RESOLVED** —
the vertical connected timeline, Typical Timing table, and Collaboration
Promise panel are all built and verified against the mockup's visual
pattern.

`CYVEXLY_CHUNK_DEBT.md` item 2 / `CYV-IFA-002` / `CYC-R1-F002` (gradient
placeholder imagery): **PARTIALLY RESOLVED, HONESTLY BOUNDED** — replaced
flat two-tone gradients with distinct, on-brand, hand-authored abstract
compositions grounded in each project's own established creative
decisions, and added the case-study page's previously-entirely-missing
"Desktop & mobile experience" device-frame section (found via direct
mockup comparison, not just the original hero-gradient complaint); real
photographic crops or screen-sequence imagery (what both external
reviewers' closure tests actually ask for) remains out of reach, since no
completed design exists to photograph for these concept projects — not a
Builder-reachable gap this round, tracked forward below.

### Recommended next tasks

1. Route the three still-open Owner-input questions (About founder
   identity, Privacy/Terms jurisdiction, domain + email-provider) —
   unchanged from every prior round, see `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.
2. When an attended session or another Auditor/Council round is
   available: get real pixel-level screenshots of `/process`'s new
   timeline section, the Work grid, and all three case-study heroes,
   and compare the new concept-preview compositions against the mockups'
   visual weight — this round's proof is thorough on structure/DOM/
   accessibility and has genuine `ImageResponse`-proxy pixel proof of the
   compositions in isolation, but no live-page screenshot exists showing
   them in final page context.
3. Confirm the favicon's still-open 16px legibility concern in a real
   browser tab (open since round 3, unchanged).
4. Consider whether the Council's/Auditor's "real designed crops or
   screen sequences" bar should be revised to explicitly accept
   abstract/illustrative concept artwork for fictional case studies (an
   Owner-level product decision about how honest "Concept project" work
   should be presented), or whether real design mockups for one or more
   concept projects are worth commissioning as a dedicated design task —
   routing this framing question rather than guessing which the Owner
   wants. A brief web search this round found that general design-
   industry practice for speculative/fictional portfolio work centers on
   clear disclosure that a project is conceptual, not a specific
   visual-fidelity requirement — Cyvexly's existing "Concept project"
   labeling already satisfies that transparency standard regardless of
   the visual treatment chosen. This is useful context, not a
   substitute for the Owner's actual preference.
