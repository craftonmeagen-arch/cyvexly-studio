# Round 14 service-detail visual plan

**Session:** `2384d0ba-a516-43bc-8615-01195c1455f2`
**Prepared before product implementation:** 2026-08-31
**Reference:** `mockups/02-services-pricing.png`, current `/services` render at source `62c6b7e`, and the established cyber-arctic component system.

## Baseline and gap

- `/services` is a complete 5,386 px scan at 1,440 px wide with seven detailed capability cards, five short website-type cards, combinations, work, FAQ, and CTA. It has no horizontal overflow and its existing website-type anchors resolve.
- The five website-type cards are descriptive dead ends. Footer service links only scroll back to those cards; no focused service-detail route exists.
- The accepted mockup's useful cues are a glass workspace shell, compact blue line icons, orbital linework, translucent grouped panels, and clear progression from offer to proof to action. The current product already uses those cues; the detail system should extend them without inventing portfolio photography or an unrelated visual language.

## Intended hierarchy

1. Compact breadcrumb back to Services, service label, outcome-led H1, short fit statement, and two actions.
2. A luminous service-signal panel paired with the client problem and the practical outcome.
3. A scannable inclusion grid using the existing glass-panel and signal-icon vocabulary.
4. Relevant concept-work proof, explicitly labeled as concept work and linked to the real case-study route.
5. Two balanced panels for client inputs and factors that affect price/timing.
6. A related package/starting-price strip, service-specific FAQ, and a dark high-contrast Planner CTA.

## Responsive behavior

- Desktop (1,440 × 1,000): two-column hero and problem/outcome composition; three-column inclusions; two-column operational panels; content width aligned to the existing `max-w-6xl` system.
- Tablet (768 × 1,024): hero visual remains paired only where content remains legible; cards reflow without clipped text; CTA actions may wrap.
- Phone (390 × 844) and narrow phone (320 × 800): one-column sections, no fixed-width art or copy, no horizontal scrolling, links/buttons remain at least comfortably tappable, and long e-commerce copy wraps naturally.
- Browser root font-size 24 px: no horizontal overflow and no overlapping hero/CTA content.

## Reusable rules

- One typed content model and one `/services/[slug]` template generate exactly five allowed routes.
- Every page exposes one H1, one main landmark, unique metadata, an outcome-led first screen, and a visible route back to `/services`.
- Services index cards and footer links become real detail-route links while their IDs remain in place so existing external fragment links do not break.
- `Include this in my project` uses a service query token. The Planner applies that token only when no saved draft exists; a saved draft always wins and must never be silently overwritten.
- Concept work remains labeled; no client outcome or commissioned-media provenance is fabricated.

## Rendered comparison checks

- Capture Business Websites at desktop, tablet, phone, 320 px, and 24 px root-font stress.
- Capture E-commerce Websites on phone to exercise the longest label/copy.
- Open all five detail routes and verify 200 responses, correct H1/metadata, one main landmark, and no overflow.
- Exercise a Services card link and `Include this in my project` with native clicks; verify the destination and initial Planner selection. Repeat with an existing saved draft and verify it is preserved.
- Record console/page errors and test reduced-motion behavior for any decorative motion (the planned visual system is static, so no new animation dependency is expected).
