# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress). Chunk 2 (Core
marketing pages) is CLOSED as of round 3 — see
`CYVEXLY_PROJECT_CHUNK_MAP.md`.
**Status:** Chunk 3: the full nine-step Planner UI/state/validation
(vision §6.9/§9) is built and verified at `/start`, submitting via the
same `mailto:` interim pattern Contact uses — real "sent from Cyvexly"
confirmation email remains blocked on the domain + email-provider
decision (`CYVEXLY_APP_DEBT.md` item 4). Chunk 4: `/not-found`, `/faq`,
`/accessibility` complete; `/privacy`/`/terms` bounded on Owner-supplied
jurisdiction facts; favicon has a known 16px legibility concern, not yet
fixed; the OG image asset exists but its metadata wiring is still
blocked on the domain decision; `robots.txt`/meta-robots default to
no-index until the domain is live.
**Prior chunks:** Chunk 1 — Foundation & Home, closed round 1. Chunk 2 —
Core marketing pages, closed round 3 (closed does not mean frozen: round 5
revisited two of its open debt items — see the round-5 report below and
`CYVEXLY_CHUNK_DEBT.md`). See `docs/archive/chunks/` for full round
reports.

**Why Chunk 3 exists:** Chunk 2 established the marketing pages that lead
a prospect to a project brief. The Planner (vision §6.9/§9) is the
mechanism that actually captures that brief in enough structured detail
to scope a proposal, without turning Cyvexly into a DIY workshop.

**Broad outcome:** A calm, nine-step conversational form at `/start`
covering vision §9's complete field plan, with a progress indicator,
per-step validation, conditional questions, a review/summary step with
edit links, and a submission path — plus, once authorized, a real
automatic confirmation email sent from Cyvexly.

**What belongs inside it:** the Planner's UI, state, and validation
(built round 4); the eventual server-side email-delivery route once a
transactional-email provider and the production domain are authorized
(`CYVEXLY_APP_DEBT.md` item 4) — not yet built, tracked as remaining
chunk work below, not a non-goal.

**Non-goals:** the proposal/invoice/payment workflow (vision §8, its own
future chunk); any specific transactional-email provider integration
before the Owner authorizes one.

**Closure boundary:** the Planner UI matches vision §6.9/§9, passes
build/typecheck/lint, is verified through real dev-server rendering,
validation, and interaction at desktop and mobile widths, and either (a)
sends a real automatic confirmation email from Cyvexly, or (b) the
email-provider/domain gap is explicitly and honestly bounded as
Owner-blocked (the same pattern already applied to the About page and
Privacy/Terms).

## Round 1 report — global round 1 (archived)

Archived to `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND1_REPORT.md`. Summary:
closed Chunk 1 (Foundation & Home) with a verified Home page; opened
Chunk 2 and built/verified `/process`; fixed two tooling defects and a
real WCAG contrast failure; closed the visual-comparison gap using a
concurrent Auditor round's published screenshots.

## Round 2 report — global round 2 (archived)

Archived to `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND2_REPORT.md`.
Summary: built and verified five more Chunk 2 pages (`/services`,
`/pricing`, `/contact`, `/work` + 3 case-study pages), opened Chunk 4
early and built `/not-found`, `/faq`, `/accessibility`, added a
hand-authored SVG favicon, and ran a real measured heading-hierarchy
check that found and fixed one genuine defect. Found and fixed a real
Next.js 16 runtime bug and a real visual-comparison gap.

## Round 3 report — global round 3 (archived)

Archived to `docs/archive/chunks/CYVEXLY_CHUNK4_ROUND3_REPORT.md`.
Summary: closed Pricing icon-parity debt; independently re-verified and
formally closed Chunk 2 per §7.9 (About page carried forward as honestly
bounded app debt); ran the §4.12 Outcome Reachability Check for Chunk
3's email-delivery mechanism, concluding the Planner's UI is a
separable, authorized, reachable slice while real "sent from Cyvexly"
email is not; fixed a real launch-readiness gap (no `robots.txt`/no-index
default existed); built a real on-brand OG/social-sharing image and,
by testing the actual production build rather than just the dev server,
caught that its metadata wiring still needs `metadataBase`; found a
real favicon 16px legibility defect via a new `ImageResponse`-proxy
pixel-verification technique and routed it for attended-session
confirmation; ran a first structured launch-readiness pass against all
14 items in vision §15. A concurrent Auditor round published five new
evidence files mid-round that independently corroborated this round's
Pricing-icon, case-study, Work-page, and `metadataBase` findings.


## Round 4 report — global round 4 (archived)

Archived to `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND4_REPORT.md`.
Summary: opened Chunk 3 (Project Planner) and built the full nine-step
UI/state/validation at `/start` per vision §6.9/§9, submitting via the
same `mailto:` interim pattern Contact uses; found and fixed a real CSS
Grid mobile-overflow "blowout" bug (a grid item with no `min-w-0`
wouldn't shrink below a horizontally-scrolling descendant's min-content
size); a field-usage audit found and fixed two vision §9 fields typed but
never rendered; fixed a `prefers-reduced-motion` gap in the scroll-to-top
and three groups of Planner buttons with missing/duplicate accessible
names. Landed as 13 commits total (one initial + twelve "(cont.)"
follow-on fixes from re-auditing the round's own work).


## Round 5 report — global round 5 (archived)

Archived to `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND5_REPORT.md`.
Summary: revisited two open items on the closed Chunk 2 (closed does not
mean frozen) — rebuilt `/process`'s steps section as a connected vertical
timeline with a "Typical timing" table and "Our collaboration promise"
panel (closed `CYVEXLY_CHUNK_DEBT.md` item 1, open since round 1); replaced
the Work grid/case-study flat gradients with three hand-authored abstract
SVG concept-preview compositions and added the case-study page's missing
"Desktop & mobile experience" device-frame section (partial closure of
`CYVEXLY_CHUNK_DEBT.md` item 2 — real photographic/screen-sequence imagery
remains an open Owner framing question). Found and fixed a real invented
off-palette color via a grep-based design-system audit. Ran a full clean
production-build verification pass as a final check.

## Round 6 report — global round 6

### Round Plan

Scheduled round, minimum-50-minute work window (per this run's scheduler
instructions). Claimed the lock at `2026-08-30T20:24:45Z`. Reconciled
current source/runtime truth: `git log` HEAD at claim was `196768e`
(matching round 5's own final "(cont.)" documentation commits); `git
status` showed only the same pre-existing, untouched Auditor/Council
evidence/report-plumbing files every prior round found and correctly left
alone. Read the round-5 handoff, `CYVEXLY_CHUNK_DEBT.md`,
`CYVEXLY_APP_DEBT.md`, and — since the round-5 handoff flagged it as
in-progress and not yet formally disposed — the Council's now-published
formal report `CYC-R2-20260830-01` (`docs/agent-system/cyvexly/reports/
QUALITY_METHODS_CURRENT.md`, published `2026-08-30T20:11:27Z`, after round
5 closed). That report gave a concrete, reachable, non-Owner-blocked
"Primary Next-Builder Plan": fix three findings —

1. `CYC-R2-F001` (Priority Now) — the Planner progress rail at `/start`
   doesn't keep the active step visible at 390px/768px; step 9's circle
   scrolls out of view with no cue.
2. `CYC-R2-F004` (Next) — the Services "Common combinations" table clips
   its right column at 390px with no scroll affordance.
3. `CYC-R2-F005` (Later/Opportunity) — a Next.js console warning:
   `scroll-behavior: smooth` on `<html>` without the recommended
   `data-scroll-behavior="smooth"` attribute.

The other two findings (`CYC-R2-F002` abstract-vs-real concept artwork,
`CYC-R2-F003` metadataBase) are the same Owner-framing/domain decisions
already tracked and unchanged — not reachable this round. All three Owner
input questions (About founder identity, Privacy/Terms jurisdiction,
domain + email-provider) also remain open, unchanged, no new direction
arrived. Selected the three reachable Council findings as this round's
work.

### Methodology check

For F001, matched the existing reduced-motion-aware scroll pattern already
established in `planner-form.tsx`'s `goToStep` (`window.matchMedia
("(prefers-reduced-motion: reduce)").matches` gating `smooth` vs `auto`)
rather than inventing a new convention — `scrollIntoView({block: "nearest",
inline: "center"})` on the active step button is the standard way to keep
one element visible inside its own horizontally-scrolling ancestor without
also triggering unwanted vertical page scroll.

For F004, considered "add a scroll affordance" (the closure test's other
option) but chose "reflow to stacked cards below `sm`" — the stronger of
the two options the Council itself offered — since the table's own data
(two plain-text columns) has no real tabular relationship that benefits
from a shared header once stacked, and the project already uses the same
`dt`/`dd`-labelled-card pattern elsewhere (the Planner's review step, the
case-study "Visual direction" panels) for this exact "shows the same two
fields per item" shape.

For F005, this is the framework's own documented fix for its own warning
(`data-scroll-behavior="smooth"` alongside the existing CSS
`scroll-behavior: smooth`) — no departure from a standard method involved.

### What changed

- `src/app/layout.tsx` — added `data-scroll-behavior="smooth"` to `<html>`.
- `src/components/planner/planner-progress.tsx` — added a ref to the
  active step's button and a `useEffect` on `currentStep` that calls
  `scrollIntoView({behavior, block: "nearest", inline: "center"})` on it,
  with the same reduced-motion gating used elsewhere in the Planner.
- `src/app/services/page.tsx` — the "Common combinations" table is now
  wrapped `hidden sm:block`; a new `sm:hidden` stacked-card list (one card
  per audience/combination pair) renders below `sm` instead.
- `src/app/pricing/page.tsx` — a grep for the same `overflow-x-auto`+table
  shape just fixed on Services found two more instances not audited by
  the Council this round (see Audibles): the package-comparison table and
  the add-ons table. Both got the same `hidden sm:block` table / `sm:hidden`
  stacked-card-list treatment.

### Audibles

- **A grep for the exact defect *shape* (`overflow-x-auto` wrapping a
  fixed-`min-w` `<table>`), not just the one flagged page, found two more
  real instances on Pricing.** Measured first, per the measured-discrepancy
  floor, rather than assuming the Services pattern applied elsewhere:
  both Pricing tables' `scrollWidth` (640px, 560px) exceeded their 342px
  wrapper `clientWidth` at 390px, identically to the Services finding.
  Fixed both with the same reflow pattern for consistency, in a separate
  follow-on commit. This is the root-cause-floor "search for leftovers"
  discipline applied to a reviewer finding rather than to a refactored
  component — the Council audited Planner/Process/Work this round, not
  Pricing, so the same defect class existed there unflagged.
- **`scrollIntoView({behavior: "smooth"})` does not move `scrollLeft` in
  this session, isolated to the smooth-scroll *animation* rather than the
  fix's logic.** See `CYVEXLY_WATCH.md`'s round-6 entry for the full
  investigation: the effect fires correctly (confirmed by monkey-patching
  `Element.prototype.scrollIntoView` to log real calls) with the right
  target and options every time `currentStep` changes, but the animation
  itself never proceeds because this session's Browser pane doesn't
  composite frames (the same root cause as every prior round's
  `computer{action:"screenshot"}` failure). Verified the fix's actual
  intended behavior by temporarily forcing `behavior: "auto"` on the same
  wrapped call in the same session — with that, the active step's button
  is fully within the rail's visible bounds at both 390px and 768px after
  reaching step 9 (see Proof performed). This is strong evidence the
  logic is correct; it is not the same as observing a real attended
  browser's actual smooth-scroll animation, which this session cannot do.
- **Tested, not just assumed, whether real Tab-key traversal is reachable
  in this session — it is not, proven directly.** The Council's own
  "Different next Council question" asked for keyboard-only traversal
  testing. Confirmed via DOM inspection that the mechanism this depends on
  (native `disabled` attribute on unreachable-step buttons) is already
  correct — disabled buttons are natively unfocusable and excluded from
  tab order by every browser, so reachable/unreachable steps are already
  keyboard-correct by construction. Then tried the real `computer{action:
  "key", text:"Tab"}` action directly (not attempted by any prior round):
  focused `fullName` via `element.focus()`, attached a real `keydown`
  listener on `document` in capture phase, pressed Tab via `computer`,
  and read both the listener's log and `document.activeElement` back. The
  tool call reported success ("pressed Tab x1"), but the listener recorded
  zero `keydown` events and focus never left `fullName` — the key press
  never reached the page at all, the same "page not compositing frames"
  session limitation rounds 1-5 found for clicks/screenshots/geometry
  reads, now confirmed for keyboard input too. This closes the loop
  honestly: real keyboard-traversal testing is not reachable in this
  exact session type, not merely unattempted; see Recommended next tasks.

### Proof performed

- `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean
  after each of the two fix commits (Planner+Services+layout, then
  Pricing), zero errors/warnings beyond the pre-existing `metadataBase`
  warning. (The first standalone `tsc --noEmit` run before any build
  reproduced round 5's own documented false-negative — `Cannot find name
  'LayoutProps'` in an untouched file — because `.next/types` didn't exist
  yet; running `pnpm run build` first, per round 5's watch note, resolved
  it with zero code changes.)
- Started the dev server (`next dev --port 5173`) and drove the full
  nine-step Planner via the established `javascript_tool`-dispatched
  native-setter-input / `dispatchEvent(new MouseEvent('click', ...))`
  method (round 2's established interaction technique) to reach step 9
  for real, not just by directly setting `currentStep`.
- At 390px: `nav.scrollLeft` after reaching step 9 stayed `0` under real
  `behavior: "smooth"` (the session limitation described in Audibles);
  with the same call temporarily forced to `behavior: "auto"`, step 9's
  button measured fully inside the rail's visible bounds
  (`btnLeftRelativeToNav: 256`, `btnRightRelativeToNav: 292`, nav
  `clientWidth: 292`) and the whole page had zero horizontal overflow
  (`scrollWidth === clientWidth === 390`).
- At 768px: same fresh flow, step 9's button again measured fully inside
  the rail's visible bounds (`isFullyVisible: true`, nav `clientWidth:
  639`, `scrollWidth: 676`), and the whole page had zero overflow
  (`scrollWidth === clientWidth === 753`).
- Confirmed the reduced-motion branch directly: monkey-patched
  `window.matchMedia` to report `prefers-reduced-motion: reduce` as
  `true`, re-ran the flow to step 2, and confirmed the logged
  `scrollIntoView` call used `behavior: "auto"` (not `"smooth"`) — proving
  both branches of the gating logic, not just the default one.
- Services at 390px: the new `sm:hidden` card list is visible (5 cards,
  matching `serviceCombinations.length`), the `sm:block` table is hidden,
  zero page horizontal overflow. At 1280px: the table is visible (5 rows),
  the card list is hidden, zero overflow. Re-ran the project's established
  heading-hierarchy and unlabeled-control checks on Services: zero skipped
  heading levels (24 headings), zero unlabeled controls.
- Pricing at 390px: both new `sm:hidden` card lists visible (5 comparison
  cards, 16 add-on cards, matching their data arrays' lengths), both
  tables hidden, zero page overflow. At 1280px: both tables visible with
  correct row counts (5, 16), both card lists hidden, zero overflow, zero
  skipped heading levels, zero unlabeled controls.
- F005: navigated Home to `/process` via a real dispatched link click and
  read the console — no `scroll-behavior`/`data-scroll-behavior` warning
  (present before the fix, per the Council's own report); confirmed
  `document.documentElement.getAttribute('data-scroll-behavior')` reads
  `"smooth"` on the live page.
- Full route sweep (`curl` across all twelve built routes plus a 404
  check) against the live dev server after each fix commit — all 200,
  `/not-a-real-route` still 404s, zero regressions both times.
- **A full sitewide structural sweep** (`fetch()` + `DOMParser` against
  all twelve routes, checking H1 count, heading-level skips, and unlabeled
  interactive controls in one pass) after both fixes landed: zero defects
  on any route — confirms no regression anywhere else in the app, not
  just the three touched pages.
- Ran a final clean production-build verification pass after each fix
  commit, matching the discipline round 5 established: deleted `.next`,
  ran `pnpm run build` from scratch (same eighteen routes, same
  pre-existing `metadataBase` warning only), started the real production
  server (`next start`, not `next dev`), re-swept all routes via `curl`
  (all 200/404 as expected), and grepped the real built HTML directly for
  each fix's marker (`data-scroll-behavior="smooth"` present on `/`; the
  Services/Pricing `sm:hidden` card markup present in their built pages).
- Stopped every dev/production server process this round started,
  verified each by `CommandLine` (working directory / exact `next dev`
  or `next start` invocation) via `Get-CimInstance Win32_Process` before
  stopping, confirmed via a failed `curl` afterward that port 5173 no
  longer responds each time; deleted the disposable `.next` build output
  and temporary log files at final cleanup.

### What was not checked

- No real live-tab pixel screenshot of any changed page — the
  `computer{action:"screenshot"}` limitation persisted all round
  (re-confirmed directly, not assumed). The `scrollIntoView` smooth-scroll
  animation itself also could not be observed directly for the same
  reason (see Audibles) — proven correct via the forced-`behavior:"auto"`
  end-state check instead, not an equivalent substitute for watching the
  real animation in an attended browser.
- No real Tab-key keyboard-traversal test of the Planner or progress rail
  (see Audibles) — the Council's own suggested next question, tested and
  confirmed unreachable in this session (a real `computer{action:"key",
  text:"Tab"}` press produced zero `keydown` events on the page), not
  merely assumed unreliable.
- Did not attempt `/about`, `/privacy`, `/terms`, the favicon redesign, or
  the Planner's server-side email route — all unchanged, still correctly
  bounded on the same Owner inputs or capability gaps every prior round
  established.
- No automated axe/Lighthouse accessibility audit, no cross-browser check
  beyond the one Chromium-based Browser-pane engine — unchanged from every
  prior round.

### Git/diff accountability

At round start, `git log` HEAD was `196768e` and `git status` showed only
the same pre-existing, untouched Auditor/Council evidence/report-plumbing
files every prior round also found and correctly left alone — confirmed
via `git status --short` before any edit. This round's changes landed as
two commits: `1eb1242` (`src/app/layout.tsx`, `src/app/services/page.tsx`,
`src/components/planner/planner-progress.tsx`) and `f435f67`
(`src/app/pricing/page.tsx`), plus this same documentation-update commit.
No file outside what's described here was touched. `git status --short`
immediately before this commit shows only the routine `CYVEXLY_*`/archive
documentation changes described in this closeout, plus the same
pre-existing untouched Auditor/Council files every prior round found.

### Completion state

`CYC-R2-F001` (Planner progress rail hides active step at 390px/768px):
**RESOLVED** — verified end-state fully visible at both widths (see Proof
performed); the smooth-scroll animation itself is unobservable in this
session (see What was not checked), which is a session-proof limitation,
not an unresolved defect.

`CYC-R2-F004` (Services mobile comparison table clipped): **RESOLVED** —
reflowed to stacked cards below `sm`, verified at 390px and 1280px.

`CYC-R2-F005` (scroll-behavior console warning): **RESOLVED** — verified
via a real route navigation with a clean console.

Two Pricing tables with the identical defect class, not part of the
Council's own finding set, were also found and fixed this round (see
Audibles) — same resolution standard applied.

`CYC-R2-F002` (abstract vs. real concept artwork) and `CYC-R2-F003`
(metadataBase): **UNCHANGED, OWNER-BLOCKED** — not attempted this round,
same status as every prior round.

### Recommended next tasks

1. Route the four still-open Owner-input questions (About founder
   identity, Privacy/Terms jurisdiction, domain + email-provider, and the
   abstract-vs-real concept-artwork framing question) — unchanged from
   every prior round.
2. Real Tab-key keyboard-traversal testing of the Planner (focus order,
   error announcement, progress semantics) — the Council's own suggested
   next question. This round confirmed `computer{action:"key"}` produces
   zero real `keydown` events in this session (see Audibles), so this
   needs either an attended session or a differently-capable automation
   method; do not re-attempt with `computer` key presses in this same
   session type without new evidence it's been fixed.
3. When an attended session or another Auditor/Council round is
   available: get a real live-tab screenshot of the Planner rail at
   390px/768px on step 9 and of the reflowed Services/Pricing tables at
   390px, to visually confirm this round's fixes match the intended
   result the DOM/structural proof establishes — the same standing gap
   every prior round has logged for pixel-level page-context proof.
4. Confirm the favicon's still-open 16px legibility concern in a real
   browser tab (open since round 3, unchanged).
5. Re-check `docs/agent-system/cyvexly/council/evidence/` and the current
   Council/Auditor reports near the start of the next round for any
   further findings published after this round's own read.
