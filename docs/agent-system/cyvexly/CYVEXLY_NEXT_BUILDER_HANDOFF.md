# Cyvexly Next Builder Handoff

## Urgent items

None. Round 7 closed cleanly on the product-source side — no crash, no
unsafe uncommitted state, no unresolved urgent reviewer finding, and no
non-interference incident. (Round 6's own process-interference incident,
which briefly stopped a concurrent Council round's own processes, was
already fully self-healed and independently confirmed resolved by that
same Council round before round 6 closed — see
`docs/archive/chunks/CYVEXLY_CHUNK3_ROUND6_REPORT.md` and
`CYVEXLY_WATCH.md`'s round-6 entries for the full account. Round 7
applied the root-cause fix going forward: stopped every process it
started by exact PID looked up via exact `CommandLine` match on this
project's own port/working directory, never a shared-path substring.)
`git log 196768e..HEAD` (round 6's start) through round 7's own commits
— check `git log` for the exact current hashes since this prose will go
stale the moment another commit lands.

## Concurrent Auditor finding `CYV-IFA-007`: already resolved, no action needed

A concurrent Auditor round (`auditor-20260830T2115Z-003`, report
`IFA-2026-08-30-R3`, published `2026-08-30T21:34:34Z` — after this
Builder round's lock claim) correctly flagged this round's own temporary
`src/app/scratch-favicon-check/route.tsx` proxy-testing route as a real
risk (an untracked, unreviewed scratch endpoint that could accidentally
ship) from a snapshot taken while the route still existed mid-work. It
was deleted before this round's commit — confirmed clean via `git status`
and a direct filesystem check at closeout, and absent from the
production build's route table. A real, valid catch of a genuine
concurrent-review risk window, already resolved by the time this round
closed. No action needed; do not re-investigate.

## Round 7: favicon 16px legibility fixed; Planner keyboard-accessibility audited via an alternate method

- **Favicon (`CYVEXLY_CHUNK_DEBT.md` item 3): RESOLVED.** The C/Y mark's
  two thin overlapping strokes blurred into an indistinct shape at 16px
  (found round 3). Redesigned to a single-weight fused orbit-arc-plus-
  checkmark mark, tested against two other candidates with real pixel
  evidence at 16/32/64px via the established `ImageResponse`-proxy
  technique, applied to both `src/app/icon.svg` and
  `src/app/opengraph-image.tsx`. Verified through the real shipping
  routes in both dev and a clean production build. **A real live-tab
  screenshot would still strengthen this (the proxy rasterizer is not
  proof of exact Chrome/Safari/Firefox `<link rel="icon">` scaling
  behavior, per round 3's own caveat) but the defect itself is fixed on
  strong evidence, not stalled any further.**
- **Council's "Next Council question" (Planner keyboard-only/reduced-
  motion review): partially addressed via a legitimate alternate
  method, not resolved.** Real OS-level Tab-key traversal remains
  unreachable in this session type (re-confirmed: `computer{action:
  "screenshot"}` still times out with the same "Browser pane is not
  displayed" error rounds 1-6 found). Instead, drove a real non-
  submitting nine-step Planner flow and audited the actual DOM/ARIA
  state: focus order matches visual order (Step 1, measured); Steps
  1/3/4/5/8 use native radio/checkbox/select/textarea inputs in real
  `<label>`s under `<fieldset>`/`<legend>` groups; Step 6's 44-button
  readiness grid uses `aria-pressed` with self-describing `aria-label`s
  and correct per-row exclusivity; conditional fields validate with real
  `role="alert"` messages wired via `aria-describedby`; the review
  step's eight "Edit" buttons carry distinguishing `aria-label`s despite
  identical visible text; blocked-submit produces accessible errors with
  no mail-client side effect; the Planner/Contact focus-visible border-
  color indicator (replacing the global outline ring) measures 5.06:1
  contrast against field background — a real, sufficient indicator, not
  a silent regression; grepped for any other reduced-motion gap beyond
  the two already-fixed effects — found none. **This is real DOM/ARIA-
  level proof, not a substitute for observing an actual Tab-key
  traversal** — the next Council round (or an attended session) should
  still do that specific test; full detail and every measurement is in
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-7 report.
- **New capability finding, fully resolved this round:**
  `computer{action:"scroll_to"}` (using a `read_page` ref) actually
  moves `window.scrollY` in this session, while plain JS
  `window.scrollTo()` and coordinate-based `computer{action:"scroll"}`
  do not. Tested the obvious follow-up — does scrolling this way unlock
  `computer{action:"screenshot"}`? — within the same round: no, the
  screenshot still fails identically. `scroll_to` is a genuinely
  separate, narrower capability (useful for revealing more of a long
  page's accessibility tree via `read_page`), not a path toward real
  screenshots. No further investigation needed on this specific
  question.
- Chunk 3 (Project Planner) is otherwise unchanged from round 6, still
  open: the full UI/state/validation is DONE WITH PROOF at `/start`, now
  with a real keyboard-accessibility audit layered on top; the chunk
  still doesn't close until the real server-side email route exists,
  blocked on the domain + email-provider decision (unchanged).
- Chunk 4 (utility/legal pages): favicon now resolved (above); `/privacy`/
  `/terms` remain blocked on Owner-supplied jurisdiction facts; `/about`
  remains blocked on Owner-supplied founder identity.
- Read `CYVEXLY_CHUNK_DEBT.md` before touching the OG image/
  `metadataBase` or the Work/case-study concept imagery.

## Four Owner-input questions still blocking real work

1. **About page founder identity** (carried from round 1): what name/
   pronoun should the site use, is there a real portrait or should a
   non-portrait studio image stand in, and what should the first-person
   story say about why Cyvexly exists?
2. **Privacy/Terms jurisdiction** (carried from round 2): what is
   Cyvexly's business location/registration, and which customer markets
   should the policies explicitly address?
3. **Production domain and an authorized transactional-email provider**
   (carried from round 3, still the only remaining blocker for Chunk 3):
   needed before `metadataBase`/canonical URLs/`sitemap.xml`/real
   OG-image metadata can ship, and before the Project Planner can send a
   real confirmation email "from Cyvexly" rather than relying on the
   visitor's own mail client.
4. **Is abstract illustrative concept artwork an acceptable permanent
   answer for the Work/case-study visual gap, or is real commissioned
   design work needed** for one or more of the three fictional concept
   projects (carried from round 5, `CYC-R2-F002`)?

All four are Owner-supplied facts, authorizations, or presentation-level
product decisions, not reversible Builder judgment calls.

## Method notes worth reusing (full detail in `CYVEXLY_WATCH.md`'s round-7 entries)

- **A real DOM/accessibility-tree audit (focus order via
  `getBoundingClientRect`, accessible names/roles/states via attributes
  and `read_page`, error wiring via `role="alert"`/`aria-describedby`,
  contrast math for focus indicators) is a legitimate, reusable
  substitute proof layer for keyboard accessibility when live Tab-key
  input isn't reachable** — honestly bounded as complementary, not
  equivalent, to real traversal testing.
- **`ImageResponse` proxy routes must not store candidate JSX (especially
  bare `<>...</>` Fragments) in module-level `const`s looked up by
  string key** — causes a `"Cannot convert a Symbol value to a string"`
  500 error in Satori. Use a plain function returning a fresh element
  per request instead.
- **Checking a wrapper element's own computed style, not just a child's,
  matters for `display: none` verification** — a child's own
  `getComputedStyle().display` doesn't reflect an ancestor's
  `display: none`; use `checkVisibility()` or check the actual hiding
  ancestor.

## Older method notes (carried forward as pointers, full detail archived)

- **Round 5:** grep-based color audits catch design-system drift
  eyeballing misses — see `docs/archive/chunks/
  CYVEXLY_CHUNK3_ROUND5_REPORT.md`.
- **Round 4:** the Planner's fields use a shared field-component library
  (`src/components/planner/planner-fields.tsx`) driven by config data
  (`src/lib/planner-config.ts`) — extend `planner-config.ts` first for
  any future Planner content change rather than hand-editing markup.
