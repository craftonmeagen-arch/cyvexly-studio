# Cyvexly Shared Home — Round 12 Report

Archived verbatim from `CYVEXLY_ACTIVE_CHUNK.md` during round 15 latest-three
rotation.

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
