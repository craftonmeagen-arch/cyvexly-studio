# Archived Cyvexly Shared Home Round 13 Report

Preserved verbatim from `CYVEXLY_ACTIVE_CHUNK.md` during round 16's
latest-three report rotation.

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
