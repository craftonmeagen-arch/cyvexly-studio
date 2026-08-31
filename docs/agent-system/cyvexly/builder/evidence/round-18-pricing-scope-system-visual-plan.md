# Round 18 Pricing scope-system visual plan

**Session:** `builder-20260831T194253Z-r18`
**Lock claimed:** `2026-08-31T19:42:46.6802742Z`
**Start source:** `f0f1eacee667cf7f63be54b4cf3432f71056ab74` on `main`, matching `origin/main`
**PM prompt:** no active prompt

## Selection and baseline

Round 17 recommends changing capability rather than repeating Home/Services
micro-adjustments. Current Council R26 independently passes Pricing content,
responsive containment, FAQ/menu behavior, and Planner navigation, while naming
the large remaining reference-visible difference: the route is honest and
usable but its entry is much lighter and less art-directed than the approved
Pricing half of `mockups/02-services-pricing.png`. Active Owner direction
2026-08-30-04 requires the glassy futuristic execution to keep advancing until
Owner acceptance.

The exact reviewed start source renders a centered text-only Pricing hero over
the shared grid. At 1440 it reserves the full hero width without a visual
system; at 390 the same text block occupies the entire entry before a large
plain gap to the first package. Council metrics at this source record package
widths of `352/352/352/540/540` at 1440 and `327` at 390, one `main`, one H1,
and exact root containment at 1440/1280/1024/768/720/390/320. The content and
geometry are safe, but the mockup's luminous scope/orbit composition and
coordinated package field are missing.

Opened references before implementation:

- approved target: `mockups/02-services-pricing.png`;
- current full desktop entry:
  `council/evidence/council-20260831T184121Z-pricing-desktop.png`;
- current exact phone entry:
  `council/evidence/council-20260831T184121Z-pricing-phone.png`;
- current geometry:
  `council/evidence/council-20260831T184121Z-pricing-metrics.json`.

## Intended outcome and visual specification

Build a code-native Pricing scope system, not a copied globe or a new product
claim. The entry will become a split glass composition: canonical Pricing copy
in a protected pale-blue pane and an original orbital scope graphic on the
right. The graphic will use five package nodes around a luminous core and a
three-step `brief / scope / proposal` route derived from existing truthful
process language. It is redundant decoration and stays hidden from assistive
technology; the real package cards remain the authoritative content.

The package area will become a coordinated ice-blue constellation field rather
than five unrelated white cards. It will retain the exact package order,
prices, scope, timelines, CTAs, and responsive column behavior while adding
restrained node/edge light and a stronger featured-package hierarchy.

Responsive state map:

- **1024px and wider:** two-column hero, copy approximately 45% and graphic
  approximately 55%; graphic is substantial but cannot cover copy or controls.
- **768–1023px:** stacked hero with a wide, shallow scope graphic; package cards
  keep their existing safe one-column primary / two-column secondary behavior.
- **320–767px:** copy stays first and left-aligned inside its glass pane; the
  graphic compresses to a shallow contained field. Package cards remain one
  column and no decorative label may force width.
- The package stage may visually tuck toward the hero, but its first card and
  focusable CTA must remain fully visible and scrollable at every state.

## Methodology and reachability

Premium studio Pricing pages normally combine a concise scope promise, a
recognizable visual model, and legible packages; they do not need an
interactive calculator or invented results to feel designed. The existing
Next.js static route, inline SVG, and scoped CSS are the normal reachable
method here. No external asset, dependency, account, credential, deployment
setting, scheduler, or foundational decision is required. The deliberate
checklist/table adaptations remain unchanged because the written vision is
more specific than the compact mockup in those areas.

## Accessibility, truth, and performance boundaries

- Preserve one H1 and the existing heading order.
- Mark the original scope artwork `aria-hidden="true"`; never make SVG labels
  the only source of package or process information.
- Preserve near-black copy and graphite body contrast on a quiet translucent
  field; glow never carries text contrast.
- Use no animation, canvas, client state, or large media. Reduced-motion users
  receive the same complete still composition.
- Preserve all package facts, Planner links, FAQ behavior, no-index preview
  behavior, and the earlier Home video/media path.

## Proof plan and falsifiers

1. Open final optimized-production renders at exact 1440×900, 768×1024, and
   390×844, plus 1023/1024 and 320 width metrics.
2. Compare final against both the approved mockup and current baseline for
   hierarchy, density, glass depth, first-screen package visibility, and mobile
   restraint. Record deliberate adaptations and remaining gaps.
3. Require `scrollWidth === clientWidth`, one `main`, one H1, five package
   cards, five named package headings, five reachable Planner CTAs, and a
   decorative/non-focusable scope graphic.
4. Exercise a package CTA and an FAQ disclosure through native browser input;
   confirm `/start`, the expected Planner H1, and valid expanded state.
5. Run ESLint, optimized build, immediate post-build TypeScript, built-route
   smoke, clean browser console, and Home MP4 range regression.

The plan is falsified by horizontal overflow; a hidden/clipped CTA; package
fact or order drift; duplicated accessible SVG text; a decorative graphic that
dominates the phone entry; a 1023/1024 breakpoint collision; an unexpected
route, console, lint, type, build, or media regression; or a final render that
remains materially as sparse as the baseline.
