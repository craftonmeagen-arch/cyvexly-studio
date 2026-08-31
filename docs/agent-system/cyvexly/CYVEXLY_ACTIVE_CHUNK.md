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
minutes of substantive work and release before minute 60. Closeout was recorded
at `2026-08-30T23:19:48.5241789Z`, after 50 minutes 9 seconds.

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

A final source-hygiene sweep found one stale user-facing accessible label on
case-study artwork: `concept visual placeholder`. The artwork is no longer a
placeholder, so commit `4bdab10` truthfully renames it `abstract concept visual`.
The final production build contains 15 new-label matches across generated Work
HTML/RSC and zero old-label matches.

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

An internal-link graph pass covered 395 link instances across twelve rendered
pages and 27 unique internal route/hash targets. It found zero unexpected
status or fragment failures; `/about`, `/privacy`, and `/terms` were the exact
three expected Owner-blocked 404 targets.

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
entered those diffs. The final terminology sweep added the one-line case-study
label correction in `4bdab10`; no other product file entered the round. Builder
documentation/evidence changes are the visual plan, retained
PNG/JSON proof, active-report rotation, canonical state/map/summary/debt/tool/
watch/handoff/index reconciliation, and no product file beyond the two planned
pages. Pre-existing Auditor/Council dirty files were preserved byte-for-byte and
excluded from Builder commits.

### Completion state

**DONE WITH PROOF** for the reachable Home/Services selected-work consistency
defect and Planner validation-focus defect. Chunk 3/4 Owner-blocked gaps remain
unchanged. Recommended next moves are in `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

## Round 9 report — global round 9

### Preserved Round Plan and methodology

**Session:** `cyvexly-builder-20260830T201526-7f3c1e9b`; start HEAD
`4fb7c017ca6596d2ee906a5e569874119a6541fd`; no active PM prompt. The full
pre-implementation visual plan is
`builder/evidence/round-9-scale-glass-visual-plan.md`.

The round selected the new authenticated Owner directions as one coherent
shared-design-system slice: reproduce and fix the cross-computer apparent-scale
failure, then improve the same shared surfaces toward the accepted mockup's
glassy/futuristic depth. The normal method for a rem-tokenized responsive system
is to control both the root token basis and breakpoint units; the visual method
is to improve shared primitives, not decorate individual pages. Proof required
same-instrument browser-profile, viewport, and DPR controls plus real rendered
comparison.

### Root cause and implementation

The Owner's two PNGs show the same shared header at materially different
effective scales even though page zoom was reported as 100%. Both files declare
the same ~96-DPI metadata, so image metadata did not explain it. Current source
left `html` font size implicit while Tailwind expressed typography, spacing,
container widths, and breakpoints in `rem`.

A Builder-owned Chrome profile configured with a 24px default font reproduced
the failure without page zoom: at 1440px, root/body became 24px, the header
grew from 1152×76 to 1425×108, H1 from 48px to 72px, and the desktop nav
disappeared because `lg` moved beyond the viewport. Setting only `html` to 16px
fixed declaration geometry but not media-query breakpoints, because `rem` in
media queries follows the browser's initial font basis. The complete source fix
therefore pins the author design root to 16px and defines Tailwind's sm/md/lg/xl/
2xl breakpoints in CSS pixels. Browser page zoom still changes the effective CSS
viewport and triggers responsive reflow; this does not disable legitimate zoom.

Commit `8ec27c1` also advances the Owner's separate visual-fidelity direction:
the shared `.glass-panel` now has layered translucent gradients, bright rim/inset
light, deeper cool shadows, 24px blur, and saturation; `.signal-grid-bg` gains
restrained cyan/blue atmospheric light; the page background gains broad ambient
glows; the sticky header/mobile sheet read as glass control surfaces; primary
CTAs use a luminous blue gradient; and the hero orbit gains halo, gloss, rim,
and shadow layers. Copy, routes, disclosures, interaction, and text colors were
not changed.

A follow-up minimum-font audit then exposed two narrow-screen overflows that
the ordinary and custom-default profiles did not: the Pricing add-on range and
Process timing rows resisted wrapping at 390px when Chrome's minimum font size
was 24px. Commit `2d82b0b` stacks those rows on phones and restores their
side-by-side presentation at `sm`; it changes no copy or disclosure.

Final contrast math found the first luminous CTA gradient's center/end stops
fell below 4.5:1 against white text. Commit `95c365f` keeps the glow/rim/shadow
but darkens all normal stops to 4.86–5.25:1 and hover stops to 5.44–7.61:1.

### Verification and rendered comparison

- `pnpm run lint` passed.
- `pnpm run build` passed and generated all 18 expected app routes; only the
  known Owner/domain-blocked `metadataBase` localhost warning remains.
- Post-build `pnpm exec tsc --noEmit` passed.
- Production-runtime route sweep: 15 expected routes/assets returned 200 and a
  nonexistent route returned the intended 404.
- Normal-default and custom-24px Chrome profiles now match exactly at 1440px:
  16px root, 1152×78 header, 144.42×20 logo, 194.28×46 CTA, 48px H1,
  desktop nav visible, zero overflow.
- 720px controls also match exactly across both profiles and reflow to the
  compact header with zero overflow. This is the effective-viewport behavior
  expected when a user legitimately zooms a 1440px display to 200%.
- At 1024×768, DPR 1 and 1.5 preserve exact CSS geometry and zero overflow;
  the DPR changes raster density, not layout truth.
- Opened production captures at 1440, 1024/DPR1.5, 720, and 390. Home's hero is
  visibly more luminous and dimensional; opened selected-work/capability cards
  show clearer glass rims, translucent depth, and shadows without copy loss or
  crowding. The 390px render retains readable hierarchy, mobile header, and
  zero horizontal overflow.
- Four 33-case site audits (11 routes × desktop/laptop/phone) passed in Chrome
  and Edge using both standard and custom-24px-default profiles: 132 cases,
  zero failures for root scale, landmark/H1/heading order, accessible control
  names, responsive nav, shared glass treatment, or horizontal overflow.
- Native CDP mouse/Tab interaction passed for the 390px menu in all four
  Chrome/Edge profile combinations: toggle state/name, six links, trigger-to-
  Services focus order, and zero overflow all matched.
- An additional 33-case Chrome audit with minimum font size 24px initially
  found Pricing and Process phone overflow. After `2d82b0b`, the full audit
  passed with zero failures, proving the fix at large-text accessibility scale.
- Per-stop WCAG contrast math for the final primary CTA gradient passes 4.5:1
  in normal and hover states; lint, build, and post-build typecheck were rerun
  after the color-only correction and passed.

Evidence is indexed in `builder/evidence/INDEX.md`. Owner source captures are
retained verbatim; temporary Chrome profiles and uncited controls are removed at
closeout.

### Audibles, limits, and accountability

The initial plan anticipated a root-font fix but required measurement before
assuming it was sufficient. Post-change browser evidence falsified that partial
solution for breakpoints, so the round audibly added explicit pixel breakpoint
tokens and reran both browser profiles. This was a source-layer completion of
the same planned defect, not scope expansion.

What was not checked: the actual second computer's live browser/OS settings,
Safari/Firefox, physical-device display scaling, and Owner acceptance of final
mockup parity. No deployment, external integration, legal route, About content,
or Planner email work was attempted. The cross-computer defect is implemented
with controlled proof but awaits Owner confirmation on the original device; the
visual direction is meaningfully advanced, not declared fulfilled.

Diff-to-plan check: the four product files in `8ec27c1` are exactly the planned
design-system/root/breakpoint, header, CTA, and orbit surfaces. The two files in
`2d82b0b` are the measured large-text follow-up; `95c365f` is the final measured
CTA-contrast correction. Diff-to-belief check found no unexpected Builder
product file. Pre-existing Council files and evidence
remained outside Builder commits. The Owner-direction transcription was adopted
and status-noted without changing the quoted Owner words.

### Completion state

**IMPLEMENTED — OWNER DEVICE CONFIRMATION PENDING** for cross-computer scale;
**NEEDS COHERENT FOLLOW-UP / OWNER REVIEW** for full mockup-level glass fidelity.

## Round 10 report — global round 10

### Plan and wider methodology audit

**Session:** `9360f300-ea8b-4a05-8e88-652cc7d738cb`; lock claim
`2026-08-31T03:02:48.2441232Z`; start HEAD `95232d5`; no active PM prompt.
The pre-implementation plan is
`builder/evidence/round-10-home-glass-system-visual-plan.md`.

This every-fifth-numbered round ran the required wider methodology audit.
Rounds 7–9 made genuine progress through pixel evidence, CDP rendering,
responsive root/breakpoint correction, and richer glass tokens. Comparing the
latest 1440 render to `mockups/01-home.png` showed the remaining high-reach gap
was structural: flat full-width header framing, text-only credibility claims,
and iconless capability cards. Repeating another blur/opacity adjustment would
have been a weak loop. The selected method mapped those discrepancies to
normal, reusable Next/CSS/SVG components with no new dependency, credential,
platform exception, or foundational choice.

### What changed

Product commit `6b81922` (`Deepen Home glass system structure`) contains the
complete source change:

- `site-header.tsx` now places the shared desktop and compact navigation inside
  an inset, rounded `.glass-shell`, retaining the existing navigation labels,
  CTA, mobile state, and 1024px mode boundary.
- `credibility-icon.tsx` adds five hand-authored line icons. `site-config.ts`
  gives each truthful credibility claim and capability a stable visual ID;
  copy is unchanged.
- Home's credibility section remains a semantic list but now renders as an
  icon-led translucent signal rail; all six capability cards reuse the existing
  `ServiceIcon` visual language.
- `globals.css` adds reusable shell, signal-rail, signal-icon, card-edge, and
  pointer-safe light-sheen layers. No text color, page scale, breakpoint,
  route, claim, or disclosure changed.

### Rendered comparison and verification

- `pnpm run lint` passed. A clean `pnpm run build` regenerated Next's route/
  layout globals, passed its internal TypeScript stage, and generated all 18
  expected app routes; the only warning is the known Owner/domain-blocked
  `metadataBase` fallback. Standalone post-build `pnpm exec tsc --noEmit`
  passed.
- Opened exact 1440×900, 768×1024, and 390×844 production captures plus an
  expanded-phone-menu capture, card-section capture, and 1440×4672 full-page
  render. The inset header, icon rail, and capability cards visibly close the
  three discrepancies named in the plan while the full render verifies both
  capability rows and the unchanged lower-page flow. See
  `builder/evidence/round-10-home-glass-system-comparison.md`.
- At all three standard viewports, document/body width equals viewport width,
  root is 16px, exactly one H1 renders, and all five credibility/six capability
  icons are present. Header shell geometry is 1152×76, 744×70, and 366×70.
- The 13-route phone sweep found one H1 and zero horizontal overflow on every
  built content/case-study/not-found route.
- A 65-case shared-header matrix (13 routes at 390/768/1023/1024/1440)
  recorded zero failures for shell containment, root scale, one-H1 structure,
  overflow, and the exact compact/desktop mode boundary.
- A separate 26-case phone/desktop structural audit recorded zero failures for
  main/header/H1 counts, heading skips, duplicate IDs, or visible unnamed
  links/form controls.
- Native CDP Tab reaches logo then the named menu trigger; Enter opens the
  compact sheet with `aria-expanded=true`; subsequent Tabs reach Services,
  Work, Pricing, Process, About, and the project CTA in visible order.
- An explicit 24px-root 390px resilience stress render remains width-contained;
  the header grows to 104px and content reflows instead of clipping. This is a
  stress state, not presented as normal scale or a replacement for round 9's
  real browser-profile controls.

### Audibles, limits, and accountability

Port 5173 was occupied before this lock by PID 21440, an unrelated Vite runtime
serving `EduAILenz V2`. Its ownership was not provable, so it was preserved;
the production proof used Builder-owned 5183. This is the exact-process rule in
practice, not a test omission.

The first scripted menu-state sample inspected the same JavaScript turn as the
React `.click()` and recorded the old closed state while the following PNG
showed the menu open. The instrument was corrected to wait for the React
commit. Native Enter also required CDP `rawKeyDown` plus the character event;
after correcting the instrument, the durable JSON records the passing state and
focus order. Neither was a product defect.

A final clean-state check intentionally deleted `.next` before invoking the
standalone compiler. `tsc --noEmit` then reported `LayoutProps` missing because
that Next global lives in generated `.next/types`; running the clean production
build regenerated it, and the immediate post-build compiler passed. This is a
verification-order dependency, not a source regression; future fresh checks
must build or run Next type generation before standalone `tsc`.

Diff-to-plan check: the five product files in `6b81922` are exactly the planned
header, Home structure/config, icon component, and shared CSS. Diff-to-belief
found no unexpected Builder source file. The working tree's pre-existing
Council reports/evidence and shared inbox line remained outside Builder commits
and were not rewritten. No schedule or automation was touched.

What was not checked: the Owner's original second computer, physical Safari/
Firefox, deployment, external email, domain, legal text, or Owner acceptance of
final visual parity. The same four Owner decisions remain genuinely blocked.

### Completion state

**DONE WITH PROOF** for the round-10 structural glass slice;
**OWNER REVIEW STILL ACTIVE** for final mockup-level visual parity and original-
device scale confirmation.
