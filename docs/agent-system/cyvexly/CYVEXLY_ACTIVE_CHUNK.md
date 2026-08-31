# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress). Chunk 2 — Core marketing
pages — remains closed, but global round 13 revisited Home's shared visual
system under the rule that closed chunks are not frozen.

**Current status:** The nine-step Planner UI/state/validation remains built and
verified at `/start`; real server-side email remains Owner-blocked on the
production-domain and transactional-email-provider decisions. `/not-found`,
`/faq`, and `/accessibility` are complete; `/privacy` and `/terms` remain
Owner-blocked on jurisdiction facts; the favicon is fixed. Round 13 adds a
reference-driven planetary/network final CTA while retaining round 12's
partnership and process systems and round 11's accessible showcase video.

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

## Round 11 report — global round 11

### Plan and implementation

**Session:** `184dd314-df8f-4e46-8a1f-37dcb993f775`; lock claimed
`2026-08-31T05:09:16.0099645Z`; start HEAD `a1245d8`; no active PM prompt.
Pre-implementation plan:
`builder/evidence/round-11-home-hero-video-plan.md`.

The Owner supplied `yes_security_and_reliabilty_a.mp4` and directed that it be
added to Home. Commit `34a5bd3` replaces the static orbit with the 30-second
showcase's web derivatives: silent fast-start H.264/yuv420p at 1280x720
(3,978,486 bytes) and a 12,006-byte WebP poster. `HeroShowcaseVideo` provides
responsive glass framing, supplementary figure description, and a named,
stateful Play/Pause control. It autoplays only while visible and ordinary motion
is allowed; reduced motion and `navigator.connection.saveData` hold the poster.
Explicit Play remains available, and explicit user pause survives later
visibility/connection changes. The unused `OrbitGraphic` was removed.

### Rendered comparison and proof

Opened exact 1440x900, 768x1024, and 390x844 production captures. The media
measures 528x297, 705x396.56, and 342x192.38 respectively, stays within the
existing hero grid, keeps copy/actions first, and has no phone caption/control
overlap. A reduced-motion phone capture shows the poster-first still. The dark
systems panel materially advances the mockup's luminous motion/device direction
without claiming final Owner parity.

Normal playback advanced 0.904s, the pause control held with zero drift, and a
29.7s seek looped to 0.887s. Reduced motion started paused at time 0; native
Enter on Play advanced 0.893s. A before probe proved save-data still autoplayed
to 1.4s; after the fix it held time 0, explicit Play advanced 0.899s, live
save-data changes paused/resumed, and user pause stayed fixed. MP4/WebP HEAD and
1,024-byte 206 range delivery passed. Thirteen expected route statuses and
twelve 390px content routes passed one-main/one-H1, named-control, and overflow
checks with no unexpected console/runtime error. Lint, production build, and
post-build TypeScript passed; only the known domain-blocked `metadataBase`
warning remains. A cold 150ms/~1.64Mbps run measured video/poster LCP at 1.004s,
CLS `0.00009`, active playback, and zero overflow after eight seconds.

### Audibles, limits, and accountability

The first post-fix build found a Builder instrumentation fault: a live Chrome
profile under project `.codex/tmp` was swept by Turbopack/Tailwind, which failed
on Chrome's locked Cookies DB. The exact owned Chrome tree/profile was removed;
moving the profile to OS temp made the identical build pass. This is now in
Watch. Port 5173 remained occupied by an unrelated Vite process and was not
touched; proof used Builder-owned 5183. It later exited independently; final
checks found 5173, 5183, and 9228 free.

Source diff-to-plan is the Owner media/poster, Home/component/CSS integration,
the data-saver correction found by planned performance testing, and removal of
the now-dead orbit component. Council-owned dirty files/evidence and the shared
inbox remained outside Builder commits. No schedule or automation was touched.

Not checked: the Owner's original second computer, physical Safari/Firefox,
deployment/cache behavior, or field Core Web Vitals. The four existing Owner
decisions remain unchanged. Source-frame QA found baked-in stylized malformed/
truncated labels and a visible end-to-start cut; the Owner should watch and
accept the complete loop or provide a corrected/crossfaded master.

### Completion state

**DONE WITH PROOF** for the Owner-directed Home showcase slice;
**OWNER REVIEW STILL ACTIVE** for final mockup parity and original-device scale.

## Round 12 report — global round 12

### Preserved plan and methodology

**Session:** `df61eaf1-567b-4791-92f4-b47a40b8a4b5`; lock claimed
`2026-08-31T07:03:03.3591738Z`; start HEAD `dc900bb`; no active PM prompt.
Pre-implementation plan:
`builder/evidence/round-12-home-midpage-visual-plan.md`.

The accepted Home mockup and latest full render showed two structural gaps
after rounds 9-11: the bespoke-partner panel was a centered text block without
the reference's system object, and the five-stage preview remained text-only.
Another blur/opacity pass would not close either. The normal method was an
original code-native SVG diagram plus reusable stage icon/route grammar, with
responsive reflow and no new asset/dependency/platform decision.

### What changed

Product commit `13d3673` adds `PartnershipSignalGraphic`, an original luminous
wireframe cube/orbit/node system, and places it beside the unchanged partner
copy in a responsive glass panel. It adds `ProcessIcon` and converts the Home
ordered list into five numbered nodes and distinct icons joined by one desktop
route line. Tablet/phone intentionally drop the connector and retain contained
glass cards. The diagram and icons are decorative; the semantic list, order,
copy, routes, claims, and interactions are unchanged.

### Rendered comparison and verification

- `pnpm run lint`, clean `pnpm run build`, and post-build
  `pnpm exec tsc --noEmit` passed. The only build warning is the known
  Owner/domain-blocked `metadataBase` fallback.
- Opened exact 1440x900, 768x1024, 720x900, and 390x844 changed-surface
  production renders plus a 1440x4731 full Home render. The visual/copy panel
  and route close the two plan gaps without disrupting the surrounding flow.
- Desktop panel/route measure `1104x313.11` and `1104x211.83`; tablet panel is
  `720x363`; phone panel is `342x574.83`. Every state has one diagram, five
  nodes/icons, one H1, and zero horizontal overflow.
- The original SVG ink measures `304x218` at `x=28,y=26` inside a `360x260`
  viewBox. A 390px explicit 24px-root stress state keeps the panel and all five
  process cards at 318px with no clipping/overflow.
- An eight-width 390-1440px boundary audit confirms one/two/five-column process
  reflow at the 640/1024 breakpoints and exposes the connector only when all
  five stages share one row.
- CDP accessibility output exposes the process as one list with five children
  and the partnership graphic as ignored. The 13-route phone production audit
  found expected 200/404 statuses, one main/H1, zero heading skips, duplicate
  IDs, missing image alternatives, visible unnamed controls, or overflow, and
  zero console errors/runtime exceptions.

Evidence and the plan-to-render disposition are indexed in
`builder/evidence/INDEX.md`.

### Audibles, intake, and limits

The first desktop render exposed a real cascade mismatch: Tailwind's
`lg:border-0`/`lg:bg-transparent` utilities did not beat the later custom
`.glass-panel` rule. A scoped desktop `.process-route-step` rule corrected the
actual cascade, and the final render was recaptured/opened. The SVG ink box was
measured explicitly because round 7 proved thumbnail inspection alone can miss
viewBox clipping.

Transient model-capacity interruptions occurred during the same invocation.
Each recovery verified the raw lock still carried this exact session, nonce,
and original claim time; no second claim or invocation was created, and work
continued inside the original extended window.

Council `CYC-R13-20260830-01` independently confirmed the prior accepted source
had clean FAQ/Contact/Work/route/media baselines and repeated that final Home
parity is Owner-gated. It detected this round's later Home drift but did not
review it; round 12 therefore relies on Builder production proof and does not
claim independent adoption.

Not checked: Owner acceptance, the original second computer, physical Safari/
Firefox, field performance, deployment, external email/domain/legal paths, or
the complete hero loop's subjective cut. Existing Owner decisions remain.

### Git/diff accountability and completion

Diff-to-plan: `13d3673` contains exactly the planned Home composition, two SVG
components, shared CSS, and cited plan/render/runtime evidence. Diff-to-belief
found no unexpected Builder product file. A later evidence-only follow-up adds
full-page, 24px-root, heading/ID/image-alt, and accessibility-tree proof. Active
rounds 8-9, Watch rounds 6-7, and Build Summary setup/rounds 1-4 were rotated
with exact history preserved; all Builder hot files are below caps. Council-
owned dirty files/evidence and its former 5373 runtime were untouched. No
scheduler or automation was touched.

**DONE WITH PROOF** for the round-12 Home mid-page structural slice;
**OWNER REVIEW STILL ACTIVE** for final mockup parity and second-device scale.

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
