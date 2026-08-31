# Cyvexly global round 9 report

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
