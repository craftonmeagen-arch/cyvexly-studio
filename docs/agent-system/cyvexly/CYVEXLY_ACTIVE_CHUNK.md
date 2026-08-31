# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress). Chunk 2 — Core marketing
pages — remains closed, but global round 15 repaired its public deployment
path under the rule that closed chunks are not frozen.

**Current status:** The nine-step Planner UI/state/validation remains built and
verified at `/start`; real server-side email remains Owner-blocked on the
production-domain and transactional-email-provider decisions. `/not-found`,
`/faq`, and `/accessibility` are complete; `/privacy` and `/terms` remain
Owner-blocked on jurisdiction facts; the favicon is fixed. Round 15 makes the
accepted Home video visible on the real Render site by aligning the deployment
branch with accepted source. Round 14's five focused service-detail journeys
and safe Planner preselection remain intact alongside rounds 11-13's Home video
and luminous visual systems. Owner direction 2026-08-31-07 records a larger,
integrated hero-reel redesign as a separate next-round visual slice.

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

- **Round 8:** unified truthful concept artwork across Home, Services, and Work;
  established exact CDP rendering and fixed Planner first-error focus. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND8_REPORT.md`.
- **Round 9:** fixed cross-computer scale drift from browser font defaults/rem
  breakpoints and strengthened shared glass/large-text resilience. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND9_REPORT.md`.
- **Round 10:** ran the wider method audit and added the inset glass header,
  credibility icon rail, and capability-card grammar. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND10_REPORT.md`.
- **Round 11:** integrated the Owner-supplied Home showcase video with honest
  provenance, motion/data-saver controls, and responsive media proof. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND11_REPORT.md`.

## Round 13 report — global round 13

### Preserved plan and selection

**Session:** `4492410c-d32b-41c5-b78a-b4db0829c967`; lock claim
`2026-08-31T08:56:05.8814291Z`; start HEAD `061fb00`; no active PM prompt.
The pre-implementation plan is
`builder/evidence/round-13-home-final-cta-visual-plan.md`.

Council `CYC-R14-20260830-01` independently confirmed the round-12 source and
named richer final-CTA art as a remaining parity gap. Comparing that source to
`mockups/01-home.png` showed a normal, reachable slice: replace the flat radial
wash with a compact split system composition. Portfolio photography and real
client screens remained blocked on truthful Owner-supplied or approved media.

### What changed

Product commit `1df0203` adds `FinalCtaSignalGraphic`, an original inline SVG
planetary horizon with orbital traces, routes, and signal nodes. Home's existing
headline, supporting copy, `/start` action, and response note now sit in a left
copy layer against the graphic; scoped CSS supplies the glass depth, grid, and
protective dark overlay. Below 768px the copy centers and the horizon lowers.
The SVG is decorative and cannot add accessibility-tree noise.

### Rendered comparison and verification

- `pnpm run lint`, a clean `pnpm run build`, and immediate post-build
  `pnpm exec tsc --noEmit` passed. The only build warning is the known
  Owner/domain-blocked `metadataBase` fallback.
- Opened exact 1440x900, 768x1024, and 390x844 final-CTA renders plus a full
  1440px Home render. Desktop changes from a flat `1104x316` baseline to a
  split `1104x338` panel; tablet is `705x416`; phone is `327x432` and remains
  centered/contained. See the indexed comparison for the baseline disposition.
- Nine width states at 320/390/639/640/767/768/1023/1024/1440 retain one panel,
  one CTA heading/action, one page H1, correct center/left reflow, and zero
  horizontal overflow. A 390px explicit 24px-root state is also contained.
- Conservative contrast calculations pass with substantial margin: heading
  14.97–17.87:1, body 11.12–13.28:1, note 8.66–10.34:1.
- The accessibility tree exposes the real heading/link and no named planet,
  horizon, or network node. Native CDP mouse input verified its post-scroll hit
  target was the real `/start` anchor and navigated successfully.
- A 16-route phone production sweep reports expected 200/404 statuses, one
  `main` and H1, complete image alternatives, and zero overflow. Runtime
  exceptions and unexpected warning/error logs are zero. The only logged 404
  paths are the documented Owner-blocked `/about`, `/privacy`, and `/terms`
  prefetches.

### Audibles, limits, and accountability

The preferred in-app Browser runtime failed before session creation with
`failed to write kernel assets: The system cannot find the path specified.`
No browser/plugin state was changed. The already-proven Builder-owned local
Chrome/CDP route supplied exact product proof instead.

The first native-click sample returned `/` because smooth scrolling was still
moving and its coordinates were stale. The instrument was corrected to force
non-smooth scrolling, wait for layout, and prove `elementFromPoint` resolved to
the intended link before dispatching native input; it then reached `/start`.
This refuted a product defect. Browser error logs were also classified rather
than hidden: every one is an expected prefetch of Owner-blocked route debt.

The SVG's `getBBox()` extends below/right of its `720x360` viewBox by design:
the planet continues beyond the visible horizon and is clipped by the panel's
`overflow:hidden`. Opened renders at every target show the intended crop.

Diff-to-plan: `1df0203` contains exactly the planned Home markup, scoped CSS,
SVG component, and preserved plan. Council-owned dirty files/evidence were not
staged or modified, and no scheduler or automation was touched.

Not checked: Owner acceptance, the original second computer, physical Safari/
Firefox, field performance, deployment/cache behavior, or replacement
portfolio media. Existing founder/legal/domain/email and concept-art decisions
remain.

### Completion state

**DONE WITH PROOF** for the round-13 Home final-CTA system slice;
**OWNER REVIEW STILL ACTIVE** for final mockup parity and second-device scale.

## Round 14 report — global round 14

### Preserved plan and selection

**Session:** `2384d0ba-a516-43bc-8615-01195c1455f2`; lock claimed
`2026-08-31T10:48:25.4775496Z`; start HEAD `62c6b7e`; no active PM prompt.
Pre-implementation plan:
`builder/evidence/round-14-service-detail-visual-plan.md`.

The vision-required `/services/[service]` system was the largest coherent,
reachable marketing gap: the Services page had complete group cards and five
short website-type descriptions, but the five detail pages required by vision
§6.3 did not exist. Footer links only scrolled to those short cards. This slice
did not require Owner-only founder, legal, domain, email-provider, or
commissioned-art facts and did not reopen Chunk 2 formally.

### What changed

Product commit `930e050` adds a typed five-offer content model and a single
reusable static detail template for Business Websites, Website Redesigns,
Landing Pages, E-commerce Websites, and Website Care. Every page carries the
required outcome-led headline, problem/outcome, inclusions, labeled concept
example, client inputs, price/timing factors, package/starting price, FAQ, and
Planner CTA. A code-native orbital signal and existing glass vocabulary extend
the accepted reference without fabricating media or results.

Services cards and footer items now link to the real routes while the five
legacy fragment IDs remain valid. `/start?service=` maps each offer into the
closest existing Planner website type/goal; Website Care also selects Care
interest. The Planner announces the editable starting point. A saved browser
draft is authoritative and always restores over the query.

### Rendered comparison and verification

- Final lint, TypeScript, and optimized production build pass; 23 pages are
  generated including all five static service routes. Only the known
  domain-blocked `metadataBase` warning remains.
- All five routes return 200 with unique title/H1, one `main`, no duplicate
  IDs, and service-correct Planner links; an unknown service returns 404.
- Opened and inspected exact 1440/768/390 Business Websites renders, a 390px
  E-commerce render, and the phone Planner preselection. 320px and 390px with
  a 24px root remain exactly width-contained.
- The first 768px render exposed a real local issue: switching to the split
  hero at `md` made the H1 column unnecessarily narrow. Moving the split to
  `lg` yields a readable 720px-wide stacked tablet hero; the final render is
  retained.
- Native clicks traversed Services → Business Websites → the preselected
  Planner. Saving each of the five query states produced exactly the expected
  Planner type/goal/care values. A saved redesign draft stayed checked when an
  e-commerce query was added, proving query input cannot overwrite user work.
- Unnamed buttons/links are zero; heading structure is coherent; FAQ controls
  expose collapsed state; reduced-motion reports zero active animations.

Durable proof is indexed in `builder/evidence/INDEX.md`; the exact results and
known audibles are in `round-14-service-detail-verification.md`.

### Audibles, limits, and accountability

The in-app Browser bootstrap again failed before browser selection with the
known kernel-assets path error. Installed Chrome through the established local
Playwright fallback supplied real product proof without touching Council's
runtime. The service template itself has no failed resource; desktop Link
prefetch still logs the pre-existing `/about` 404, already Owner-blocked on
founder identity. It was classified, not hidden or filled with invented copy.

The first native-navigation test used an exact accessible name that omitted the
visible arrow and therefore timed out; correcting the instrument to the actual
`Explore business websites →` name proved navigation. No product fix was
needed. Council-owned dirty files/evidence and its live port remained outside
Builder commits. No scheduler or automation was touched.

Not checked: Owner acceptance, the original second computer, physical Safari/
Firefox, field performance, deployment/cache behavior, or replacement concept
media. Existing founder/legal/domain/email and art-framing decisions remain.

### Completion state

**DONE WITH PROOF** for the five-service detail and Planner-handoff system;
**OWNER REVIEW STILL ACTIVE** for Home mockup parity and second-device scale.

## Round 15 report — global round 15

### Preserved plan, intake, and methodology

**Session:** `builder-20260831T091345658Z-b8c1c2b439ba`; lock claimed
`2026-08-31T13:13:46.0974085Z`; start HEAD `57480e3`; no active PM prompt.
Pre-repair plan:
`builder/evidence/round-15-live-video-deployment-plan.md`.

The Owner reported, “it still didn't show up on the website... the video”. The
accepted source already contained the Round 11 video and later local/browser
proof, so another media edit would have treated the visible symptom. The normal
connected-Render method is to deploy a configured Git branch on push. A real
public baseline, GitHub default branch, and branch graph identified a stronger
root-cause test: compare public output to `main` and `master`, then fast-forward
only if no independent `main` work existed.

### Root cause and completed work

The public Render Home had zero video/control elements and the exact old Orbit
labels. GitHub default/deployment source `main` remained at pre-video commit
`c13ae7a`; accepted Builder source had been pushed only to `master` at
`57480e3`, 52 commits ahead. `main` had zero unique commits and was a strict
ancestor. A non-force `git push origin master:main` safely published the full
accepted continuous history. The public ETag/content changed about 51 seconds
later and began serving the video.

The local branch was renamed from `master` to `main` and now tracks
`origin/main`, closing the recurrence path for ordinary future pushes. Remote
`master` remains preserved at the same source. No product code, media byte,
hosting setting, domain, credential, scheduler, or automation was changed.

### Public rendered comparison and verification

- Opened `round-15-live-home-before.png`: old Orbit graphic, no video/control.
- Opened final desktop/default and exact 390×844 phone captures: one contained
  16:9 showcase, visible Pause control, preserved copy/actions, no old Orbit,
  and no horizontal overflow. Phone shell is `327×183.94` at `x=24`.
- Public poster is `200 image/webp` (12,006 bytes); full MP4 is
  `200 video/mp4` (3,978,486 bytes); `bytes=0-1023` returns `206` and the exact
  `Content-Range`.
- Real browser video decoded at 1280×720/30 seconds with `readyState=4`, no
  error, and advancing playback. Pause held (0–0.088 seconds observed drift),
  Play advanced 1.21–1.49 seconds, and the 29.7-second boundary wrapped to
  1.092 seconds without entering `ended`.
- Separate Chrome 151 preference states: reduced motion and data saver each
  held at time `0` with the poster/Play control; explicit Play advanced about
  1.19 seconds in both. Normal state remained muted, looping, and inline.
- MP4 probe: silent H.264 High, 1280×720, 24 fps, 30 seconds, YUV420p,
  ~1.06 Mbps; `moov` precedes `mdat`, confirming fast-start structure.
- Live console warning/error log is empty. All 22 expected public pages/assets
  return `200`; unknown service and the three documented Owner-blocked routes
  return their expected `404`; expected HTML pages retain `main`/H1 baselines.
- Local lint, optimized 23-page build, and post-build TypeScript pass. The only
  build warning is the known Owner/domain-blocked `metadataBase` fallback.

Exact values, the official Render method, hashes, branch/source evidence, and
limits are in `round-15-live-video-deployment-verification.md`.

### Audibles, diff accountability, and limits

The first local preference-test launch combined proof and cleanup and was
blocked before execution by the command safety layer; nothing started or was
removed. Launch, proof, ownership check, and cleanup were split. The only
Builder-owned Chrome profile was placed under the OS temp root, Browser.close
ended Chrome, and the exact verified profile was moved to the Recycle Bin. The
temporary helper script was deleted. No Council process, runtime, evidence, or
dirty file was touched.

Diff-to-plan: implementation consists of the planned safe branch fast-forward,
public deployment verification, recurrence-proof local tracking, three cited
captures, verification/plan records, and canonical continuity updates. No
product file changed because current source was correct. Diff-to-belief found
only those Builder-owned records plus the deliberate round-12 latest-three
archive rotation; all other dirty paths are concurrent Council-owned records
and remain excluded from Builder adoption. A newer Owner-directed hero-video
mockup and its 2026-08-31-07 direction arrived during closeout, were visually
reviewed, and are preserved as authoritative input for a separate next-round
redesign; they do not alter this deployment-repair claim.

The Render dashboard/settings and logs were not credential-accessible, but the
strict before/after branch/output fingerprints, public ETag change, official
platform behavior, and real render prove the deployed result. Physical Safari/
Firefox and the Owner's original second computer were not checked. Existing
founder/legal/domain/email/art-framing decisions remain unchanged.

### Completion state

**DONE WITH PROOF** for the Owner-reported live-video gap. The showcase is now
visible and working on the real website. **OWNER REVIEW STILL ACTIVE** for final
mockup parity and original second-device scale.
