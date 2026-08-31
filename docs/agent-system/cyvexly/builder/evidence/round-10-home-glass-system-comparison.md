# Round 10 rendered comparison — Home glass system

## Result

The production render is materially closer to `mockups/01-home.png` in the three structural areas selected before implementation:

- The shared header is now a genuinely inset, rounded glass control surface with bright rim light, cool depth, and visible page atmosphere around it instead of a flat full-width bar.
- The credibility rail now carries five crisp, hand-authored line icons and cell rhythm while preserving the five real claims as list text.
- Home capability cards now use the established service-icon language plus a restrained diagonal signal edge, bringing their visual grammar closer to the mockup without inventing interactions.

The result remains calmer and less illustration-dense than the mockup's fully art-directed globe/device composition. This round does not claim final Owner parity; it closes a measurable structural gap and leaves final visual acceptance active.

## Evidence inspected

- `round-10-home-desktop.png` — 1440×900 Home hero/header/credibility viewport.
- `round-10-home-desktop-full.png` — opened 1440×4672 full-page production
  render, verifying all six capability cards and the untouched lower-page flow.
- `round-10-home-desktop-glass-cards.png` — 1440×900 selected-work and capability-card viewport.
- `round-10-home-tablet.png` — exact 768×1024 reflow.
- `round-10-home-phone.png` and `round-10-home-phone-menu.png` — exact 390×844 compact hero and open menu sheet.
- `round-10-home-phone-root-24-stress.png` — explicit 24px-root stress state, retained as an accessibility/resilience stress test rather than a normal-scale target.
- `round-10-responsive-runtime-proof.json` — exact geometry, 13-route phone-width overflow/heading sweep, menu state, native CDP Tab/Enter focus order, and 24px-root stress metrics.

## Measured acceptance

- Standard states: `scrollWidth === viewportWidth` at 1440, 768, and 390; root remains 16px; one H1 at every state.
- Header shell: 1152×76 at desktop, 744×70 at tablet, 366×70 at phone.
- Five credibility icons and six capability icons render at every audited viewport.
- At 390px, native CDP Tab reaches logo then the named menu trigger; Enter opens it (`aria-expanded=true`), and subsequent Tabs visit Services, Work, Pricing, Process, About, then the project CTA in visible order.
- All 13 rendered content/not-found routes have one H1 and zero horizontal overflow at 390px.
- A 65-case shared-header sweep (13 routes × 390/768/1023/1024/1440)
  records zero failures for 16px root, shell containment, H1, overflow, and the
  exact compact-to-desktop mode switch at 1024px.
- A separate 26-case structural sweep (13 routes × phone/desktop) records zero
  failures for main/header/H1 counts, heading-level skips, duplicate IDs, or
  visible unnamed links/form controls.
- The explicit 24px-root stress state remains width-contained at 390px; its header becomes 104px tall and content reflows rather than clipping.
- New-surface contrast passes: graphite text is 5.24–6.08:1 across the three
  light brand surfaces, and cyber-blue icons are 4.74–5.06:1 on Arctic/Frosted.

## Runtime audible

Builder port 5173 was already occupied by an unrelated pre-existing Vite process serving `EduAILenz V2` (PID 21440, created before this lock). Ownership was not provable, so it was not stopped. This round used a Builder-owned production server on 5183 and records that exception honestly; it does not change the product result.

The first menu JSON sample read React state in the same JavaScript turn as `.click()` and therefore recorded the pre-render closed state even though the following screenshot showed the open sheet. The durable script was corrected to wait for the React commit, rerun, and now records `aria-expanded=true`/`navPresent=true`. Native CDP Enter required `rawKeyDown` plus a `char` event; after correcting the instrumentation, keyboard activation and focus order passed.
