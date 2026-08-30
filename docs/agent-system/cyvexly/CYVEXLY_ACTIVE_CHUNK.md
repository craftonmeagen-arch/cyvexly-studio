# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress). Chunk 2 — Core marketing
pages — remains closed, but global round 8 revisited its open Home/Services
portfolio-presentation debt under the rule that closed chunks are not frozen.

**Current status:** The nine-step Planner UI/state/validation remains built and
verified at `/start`; real server-side email remains Owner-blocked on the
production-domain and transactional-email-provider decisions. `/not-found`,
`/faq`, and `/accessibility` are complete; `/privacy` and `/terms` remain
Owner-blocked on jurisdiction facts; the favicon is fixed. Round 8 closes the
reachable flat-gradient inconsistency on Home and Services by reusing the
already-accepted, truthful `ConceptPreview` artwork at both surfaces.

## Active chunk boundaries

### Chunk 3 — Project Planner

- **Outcome:** A calm, nine-step conversational form at `/start`, covering the
  complete vision field plan and eventually sending a real automatic
  confirmation email from Cyvexly.
- **Built:** UI, state, validation, conditional fields, review/edit, draft save,
  responsive progress rail, and DOM/accessibility-tree audit.
- **Remaining:** the real server-side delivery path, which requires the Owner to
  choose a production domain and authorize a transactional-email provider.
- **Closure boundary:** the UI remains fully proved and the delivery gap is
  either implemented after authorization or explicitly bounded as Owner-blocked.

### Chunk 4 — Utility, legal & launch readiness

- **Outcome:** utility/legal routes, metadata assets, and launch-readiness
  conditions from vision §15.
- **Built:** custom 404, FAQ, Accessibility statement, favicon/ICO, OG image,
  robots/no-index preview default.
- **Remaining:** Privacy/Terms jurisdiction facts and production-domain metadata
  wiring; both are Owner-blocked.

## Prior round summaries

- **Round 1:** established Next.js/TypeScript/Tailwind source truth, design
  system, Home, and Process; closed Chunk 1. Full report:
  `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND1_REPORT.md`.
- **Round 2:** built Services, Pricing, Contact, Work/case studies, FAQ,
  Accessibility, and 404; fixed a Next.js 16 dynamic-params runtime bug. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND2_REPORT.md`.
- **Round 3:** closed Chunk 2 with About honestly bounded, ran the Planner email
  reachability check, added no-index/robots and OG asset, and refreshed launch
  readiness. Full report: `docs/archive/chunks/CYVEXLY_CHUNK4_ROUND3_REPORT.md`.
- **Round 4:** opened Chunk 3 and built/verified the full Planner, including
  mobile-overflow, missing-field, reduced-motion, and accessible-name fixes.
  Full report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND4_REPORT.md`.
- **Round 5:** rebuilt Process as a connected timeline and replaced Work/case-
  study gradients with truthful project-specific `ConceptPreview` SVGs. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND5_REPORT.md`.
- **Round 6:** fixed three Council findings plus two same-shape Pricing table
  issues; root-caused the unattended-browser compositor limitation. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND6_REPORT.md`.
- **Round 7:** redesigned/fixed the favicon and real ICO, and audited Planner
  keyboard-accessibility properties through DOM/accessibility-tree evidence.
  Full hot-path snapshot/report:
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.

## Round 8 report — global round 8

### Preserved Round Plan

**Session:** `7694882a-69e8-4ed1-8a51-535001d0780d`; lock claimed
`2026-08-30T22:29:39.5314948Z`; scheduled extended window requires at least 50
minutes of substantive work and release before minute 60.

1. Preserve the visual plan and current/mockup comparison; rotate the nearly
   full round-7 report out of this hot-path file.
2. Fix the root selected-work inconsistency by integrating the existing
   truthful `ConceptPreview` artwork into Home and Services cards while
   preserving geometry, disclosure, links, and responsive behavior.
3. Prove compilation and the real product via lint, typecheck, production build,
   route sweep, rendered desktop/tablet/phone comparison, and exact overflow/
   geometry measurements.
4. Reconcile state, map, summary, debt, evidence, handoff, cleanup, Git/diff
   accountability, and source truth; release the lock within the required
   window.

**Methodology check:** This class of drift should be fixed by reusing the
established project-card visual component, not creating another image system or
inventing fictional client screenshots. The Work/case-study implementation is
the strongest existing pattern, and the Council's current Home capture plus the
accepted Home mockup provide the baseline/target. Visual plan:
`docs/agent-system/cyvexly/builder/evidence/round-8-home-work-visual-plan.md`.

**Likely risks:** distorted SVG crops at compact card heights; horizontal
overflow at 390px; loss of truthful concept disclosure; adopting reviewer-owned
dirty files; mistaking headless-Chrome window minimums for product geometry.

### Work and proof

**Implemented:** `src/app/page.tsx` and `src/app/services/page.tsx` now import
and render `ConceptPreview` inside the existing project-gradient media frames.
The existing `overflow-hidden`, fixed media heights, links, copy, tags,
breakpoints, and `aria-hidden` decorative boundary remain intact. Product source
landed as commit `d04dc9d` (10 insertions, 4 deletions).

**Visual comparison:** the current Council Home capture showed three generic
gradient bands; the accepted Home mockup showed three distinct project
treatments. Opened round-8 captures now show Aurora's architectural geometry,
Nexora's dashboard composition, and Vellora's product/ingredient composition on
Home and Services. The implementation deliberately remains abstract and labels
all three `CONCEPT PROJECT`; it closes the reachable cross-surface inconsistency
without pretending fictional work has real screenshots. The Owner-level choice
between abstract release artwork and commissioned/higher-fidelity concept work
remains open.

**Verification:** `pnpm run lint` passed; `pnpm run build` passed and generated
all 18 expected app routes (only the known domain-blocked `metadataBase`
localhost warning); post-build `pnpm exec tsc --noEmit` passed. The first
standalone typecheck before the build reproduced the already-documented missing
`.next/types` `LayoutProps` artifact after disposable build output was absent;
the production build regenerated framework types and the identical command then
passed. A live production-runtime sweep returned 200 for fourteen expected
routes/assets and the intended 404 for a nonexistent route. Served Home and
Services HTML each contains all three preview SVGs, concept disclosures, and
case-study links.

**Rendered evidence:** local Chrome 151 headless + CDP captured and the Builder
opened Home/Services selected-work sections at exact 390px, 768px, and 1440px.
Every state has three cards and three previews; exact phone cards are 342px in a
390px viewport, and `scrollWidth === clientWidth` at every state. Durable PNG/
JSON evidence and its SHA-addressable files are indexed in
`builder/evidence/INDEX.md`.

**Extended sitewide audit:** because the requested 50-minute minimum left
substantive time after the fix, the round used the newly reachable CDP method on
Home, Services, Work, Pricing, and Planner at exact 1440x900 and 390x844. Ten
full-page renders were opened. All ten states have one `h1`, one `main`, no
heading-level skips, no unnamed controls, no unexplained empty image alts, and
zero horizontal overflow. No second reachable defect was found. The compact
metrics are retained as `builder/evidence/round-8-sitewide-audit.json`; the ten
large full-page screenshots were deleted after inspection.

**Planner native-input follow-through:** the newly available CDP path then sent
native Chromium Tab and Enter input through `/start` at exact 1440x900 and
390x844. The initial audit found that empty-step validation exposed three
correctly linked alerts but left focus on `Continue`. Commit `da9c6d9` fixes the
root interaction: the first invalid control receives focus after validation,
and radio/checkbox groups now expose stable names plus linked error IDs. The
post-fix audit traversed 17 desktop and 12 phone tab stops to `Continue`, found
no hidden desktop navigation leak at phone width, no offscreen or visibly
unindicated focus stop, no overflow, three linked invalid controls/alerts, and
`input#fullName` focused after Enter. Durable evidence:
`builder/evidence/round-8-planner-native-keyboard-audit.json`. A second real-
runtime 390px matrix advanced through all nine steps and proved first-error
focus plus stable error linkage for radio cards, checkbox cards, and ordinary
checkboxes; an identical `prefers-reduced-motion: reduce` run produced the same
five targets/messages. See `builder/evidence/round-8-planner-validation-focus-
matrix.json` and `round-8-planner-validation-focus-matrix-reduced-motion.json`.

### Audibles and findings

- Raw Chrome `--window-size=390,...` on Windows initially produced a 390px image
  that was actually a crop of a wider minimum browser layout, visually
  resembling horizontal product overflow. The round challenged the instrument
  rather than reporting a defect: CDP `Emulation.setDeviceMetricsOverride`
  established a true 390px CSS viewport and proved the product's scroll width is
  exactly 390px. This newly reachable proof path is now recorded in Tools and
  Capabilities and Watch.
- A served-HTML check initially used PowerShell `$home`, which is case-
  insensitively the reserved `$HOME` constant; that command failed before
  assigning it and produced invalid zero counts. It changed no repository or
  runtime state. The check was immediately rerun with task-specific variables
  (`$homeHtml`, `$servicesHtml`) and returned the valid three-preview result.
- A concurrent Council round 5 started from `d04dc9d` and independently
  verified the served branded favicon, scratch-route removal, and unified
  Home/Services/Work concepts at desktop/tablet/phone. Its canonical state and
  summary close the implementation symptom behind `CYC-R2-F002` while retaining
  the Owner's abstract-art release-framing choice. `da9c6d9` landed after its
  snapshot and remains its explicit fresh-review question. Reviewer files were
  intentionally not rewritten.
- The requested extended window enabled a stronger audit than the original
  visual-integration plan. Its native-input failure was an observable,
  same-product defect, so the round audibly expanded source scope to
  `planner-form.tsx` and `planner-fields.tsx`, fixed it, and reran the exact
  desktop/phone interaction rather than merely documenting the failure.

### What was not checked

- No physical keyboard hardware or cross-browser traversal. Chromium's native
  focus-navigation path was exercised through CDP `Input.dispatchKeyEvent`;
  round 7's DOM/ARIA audit remains complementary structural proof.
- No deployment, external email, domain, legal, or third-party integration; all
  require existing Owner decisions/authorization.
- No claim that abstract concept art is the Owner's permanent release choice.

### Git/diff accountability

Round start HEAD was `1904634`. The original plan named Home/Services
`ConceptPreview` reuse, and commit `d04dc9d` contains exactly those two source
files. The extended native-input audit then discovered and justified the
two-file Planner expansion recorded in commit `da9c6d9`; no other product file
entered either diff. Builder documentation/evidence changes are the visual plan, retained
PNG/JSON proof, active-report rotation, canonical state/map/summary/debt/tool/
watch/handoff/index reconciliation, and no product file beyond the two planned
pages. Pre-existing Auditor/Council dirty files were preserved byte-for-byte and
excluded from Builder commits.

### Completion state

**DONE WITH PROOF** for the reachable Home/Services selected-work consistency
defect and Planner validation-focus defect. Chunk 3/4 Owner-blocked gaps remain
unchanged. Recommended next moves are in `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.
