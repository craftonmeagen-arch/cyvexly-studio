# Round 130 — internal-page decision hierarchy

## Outcome

Fresh visible use found that oversized internal introductions still delayed the
buyer decision they introduced. Pricing's 563px desktop hero left only the top
edge of its packages in a 720px viewport, and its inherited negative package
offset painted cards across the newer section-navigation row. On a 390×844
contextual Contact route, the promised short inquiry began around 1,353px down
because direct-contact guidance stacked before the form.

The candidate reduces introduction spacing across primary internal pages,
compacts Pricing without removing its desktop glass/scope composition, keeps
the decorative scope graphic out of the phone decision path, removes the
package/navigation overlap, and puts the short Contact form before secondary
email/phone guidance.

## Measured proof

- Pricing at 1280×720: hero height `563px → 333px`; navigation bottom `492px`;
  first package top `516px`; no overlap and published prices enter the opening
  viewport.
- Services at 1280×720: intro height `385.5px` after the spacing correction;
  the buyer-choice heading begins at `608px` in the first viewport.
- Contact at 390×844: contextual form top `615px` in the retained CDP run
  (`641px` in the visible optimized IAB); direct-contact guidance begins after
  the form; Orbit context remains visible.
- Pricing phone: the nonessential scope diagram is not rendered; jump links and
  the first package are visible without page-level horizontal overflow.
- Optimized local hierarchy smoke: zero runtime errors and zero page overflow at
  1280×720 and 390×844. The 33-route/15-context buyer suite also passes.

## Visual comparison

Compared the actual Services/Pricing renders with
`mockups/02-services-pricing.png`. The candidate preserves the approved pale
architectural glass, blue technical field, compact package density, and clear
price emphasis. It deliberately retains the richer current Pricing scope
signal and buyer-language navigation rather than copying the older mockup's
smaller package matrix. The material discrepancy closed here is vertical
priority: the live page now exposes pricing decisions as quickly as the compact
reference while retaining the accepted evolved visual system.

## Retained evidence

- `pricing-desktop.png` — optimized 1280×720 hierarchy and package/navigation
  relationship.
- `pricing-phone.png` — optimized 390×844 first-view pricing path.
- `contact-phone.png` — optimized 390×844 form-first contextual inquiry.

Delete these captures after independent exact-source review no longer needs
the Round 130 visual comparison. No inquiry was submitted.
