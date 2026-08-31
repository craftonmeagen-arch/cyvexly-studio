# Round 18 Pricing scope-system verification

**Session:** `builder-20260831T194253Z-r18`
**Start source:** `f0f1eacee667cf7f63be54b4cf3432f71056ab74`
**Product source:** `7ec9c5c` (`Build Pricing scope signal system`) on `main`
**Public route:** `https://cyvexly-studio.onrender.com/pricing`

## Outcome

The Pricing entry is no longer a centered text block over an otherwise empty
grid. It now uses a protected pale-blue copy pane, an original code-native
scope signal with five package nodes, and a coordinated luminous package
field. The existing package names, prices, descriptions, scopes, timelines,
order, FAQ, and Planner destinations are unchanged.

The scope graphic is an original implementation of the approved mockup's
product intent rather than a copied globe: the visual expresses the already
truthful `brief → scope → proposal` relationship and the five real package
names. Its wrapper is `aria-hidden="true"`, contains no focusable element, and
does not replace the real package cards.

## Rendered comparison

Opened before implementation:

- approved target `mockups/02-services-pricing.png`;
- current-source Council desktop/phone renders and exact metrics at
  `f0f1eace...`.

Opened after implementation:

- `round-18-pricing-desktop.png` — exact 1440×900 optimized runtime;
- `round-18-pricing-desktop-packages.png` — complete 1440px hero and five-card
  package field;
- `round-18-pricing-tablet.png` — exact 768×1024 split state;
- `round-18-pricing-phone.png` — exact 390×844 stacked state;
- `round-18-pricing-phone-root24.png` — 390px explicit 24px-root resilience
  state;
- `round-18-public-pricing-{desktop,phone}.png` — deployed Render result.

The final desktop hero is 563px high with a `475.19×402` copy pane and a
`580.81×354.84` scope visual. The first package row begins at y=595 and remains
fully visible while overlapping the hero field by 56px. This increases the
visual's absolute presence substantially while moving the first packages only
about 70px lower than the sparse baseline; they remain visible in the first
900px screen. Package widths remain the established
`352/352/352/540/540` desktop geometry.

At 768, the copy and visual remain a controlled `302.84 / 370.16` split and
the first three cards keep their 705px single-column width. At 390, the copy
and visual stack at the same 327px width; the scope visual is 199.11px high and
the five package cards retain 327px widths. At 320, the visual compresses to
`257×158.47` and the page stays exactly contained. The 24px-root stress state
expands vertically instead of clipping or introducing horizontal overflow.

Relative to the approved mockup, the final entry now carries the missing
orbital atmosphere, split hierarchy, denser illuminated edge system, and a
coordinated package composition. Deliberate adaptations remain: current
canonical copy is more grounded than the mockup's compact headline, package
cards keep the vision's full truthful detail, and the existing lower comparison
and add-on structures remain text-complete instead of imitating the mockup's
thumbnail-density tables.

## Responsive, semantic, and interaction proof

`round-18-pricing-runtime-proof.json` records exact optimized-runtime states at
1440, 768, 390, 1023, 1024, 320, and 390 with a 24px author root.

- Every state has `scrollWidth === clientWidth`.
- Every state has one `main`, one H1, five package headings, five package
  Planner links, no heading-level skip, and no empty accessible control name.
- The scope graphic is hidden from assistive technology and has zero focusable
  descendants.
- The 1023/1024 breakpoint changes the primary package row from one to three
  columns without overflow; the hero remains a safe two-column composition on
  both sides.
- Native Chromium Enter activation on the first package CTA reached `/start`
  and the expected Planner H1.
- Native Chromium Enter activation on `Are these prices final?` changed
  `aria-expanded` to `true` and exposed the controlled answer panel.
- Browser diagnostics contain no application exception or console warning/
  error. The two desktop-only network entries are the already-documented
  prefetch of Owner-blocked `/about`; 390/768 and both interaction paths are
  clean.

The first rendered implementation pass found two genuine source defects. The
negative package overlap was clipped by its stage, hiding the card tops.
Allowing the overlap then exposed a 14–17px horizontal scrollbar caused by a
rotated decorative pseudo-element. The final CSS keeps the cards visible,
bounds the ellipse without rotation, and remeasures exact containment at all
seven states. These were fixed before adoption rather than reported as visual
limitations.

## Build, route, media, and deployment proof

- ESLint: pass.
- Optimized Next build: pass, 23 generated pages. Only the known
  Owner/domain-blocked `metadataBase` warning remains.
- Immediate post-build `tsc --noEmit`: pass.
- Twenty canonical local pages/assets returned 200; the correct showcase MP4
  and poster also returned 200, making 22 expected successful requests.
- `/about`, `/privacy`, `/terms`, and an unknown service returned their
  documented 404 states.
- Local and public MP4 range requests return `206 video/mp4`,
  `bytes 0-1023/3978486`, and exactly 1024 bytes. The Pricing work did not
  regress the accepted Home video path.
- `7ec9c5c` was pushed to `origin/main`. Public Pricing changed from ETag
  `"3azyangk3w2jpn"` without the scope visual to `"v7ek1wa7sw2w4f"` with it.
- Opened public 1440/390 renders match local production, have exact containment,
  one main/H1, five package headings, successful native Planner/FAQ behavior,
  and no application diagnostic.

One intermediate clean build printed a Turbopack cache-persistence disk-space
warning while still completing all 23 pages. The stale Builder-owned
`.next/dev` and `.next/cache` directories were verified and removed. The next
clean build completed without the cache warning; no reviewer or user artifact
was deleted.

## Diff accountability and limits

Diff-to-plan contains the planned original scope SVG, Pricing hero/package
markup, route-scoped CSS, preserved visual plan, rendered proof, and canonical
closeout records. No package fact, shared navigation behavior, route contract,
external asset, dependency, metadata setting, credential, scheduler, or
automation changed. The two render-discovered CSS corrections are plan-aligned
responsive fixes, not scope expansion.

Physical Safari/Firefox, the Owner's original second computer, field Web
Vitals, and final Owner visual acceptance were not available. Founder, legal,
domain/email-provider, and concept-artwork decisions remain unchanged.

**Completion state:** `DONE WITH PUBLIC PROOF` for the Round 18 Pricing
scope-system slice; `OWNER REVIEW PENDING` for final visual acceptance and the
original second-device scale confirmation.
