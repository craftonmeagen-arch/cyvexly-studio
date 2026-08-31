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
- A final clean production runtime returned 200 for all 15 expected routes/
  assets and the intended 404 for an unknown route. Its 300 rendered internal-
  link instances resolve to 15 unique targets; the only 404 targets are the
  already-documented Owner-blocked `/about`, `/privacy`, and `/terms`.
- Native CDP Tab reaches logo then the named menu trigger; Enter opens the
  compact sheet with `aria-expanded=true`; subsequent Tabs reach Services,
  Work, Pricing, Process, About, and the project CTA in visible order.
- An explicit 24px-root 390px resilience stress render remains width-contained;
  the header grows to 104px and content reflows instead of clipping. This is a
  stress state, not presented as normal scale or a replacement for round 9's
  real browser-profile controls.
- Contrast math for the new icon/text surfaces passes with margin: cool-
  graphite body text is 5.24–6.08:1 across Ice/Arctic/Frosted backgrounds;
  cyber-blue signal icons are 4.74–5.06:1 on Arctic/Frosted surfaces (above
  both the 3:1 non-text floor and 4.5:1 text floor).

### Audibles, limits, and accountability

Port 5173 was occupied before this lock by PID 21440, an unrelated Vite runtime
serving `EduAILenz V2`. Its ownership was not provable, so it was preserved;
the production proof used Builder-owned 5183. This is the exact-process rule in
practice, not a test omission. The unrelated 5173 listener later exited without
Builder intervention; final closeout found 5173, 5183, and 9227 all free.

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
must build or run Next type generation before standalone `tsc`. The alternative
was then tested from another clean `.next`: `pnpm exec next typegen` succeeded,
and the immediate standalone compiler passed.

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
