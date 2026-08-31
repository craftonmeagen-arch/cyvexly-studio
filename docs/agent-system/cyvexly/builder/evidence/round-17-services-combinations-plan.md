# Round 17 Services combination pathways — preserved visual plan

## Baseline and problem

- Baseline: `round-17-services-combinations-baseline.png`, captured from the
  local `/services` route at 1440×900 before implementation.
- The current “Common combinations” region is a sparse two-column table on
  desktop and a stack of text-only rows on phone. It is responsive and honest,
  but it does not communicate the mockup’s icon-led “service math,” does not
  visibly connect the component services, and is materially flatter than the
  luminous glass language the Owner asked to preserve.
- No Owner-gated legal, founder, domain, email-provider, or concept-artwork
  facts are needed for this slice.

## Intended visual result

- Replace the table/text-row adaptation with five durable pathway cards so all
  existing audience combinations remain represented.
- Each card will show the audience as a short eyebrow, three labelled service
  nodes with the existing Cyvexly line icons, visible plus connectors, and a
  concise outcome statement.
- Use the established ice-blue glass system: white edge light, cyan-blue inner
  glow, restrained backdrop blur, and a faint grid/signal accent. The section
  must feel like the mockup’s “Service Combinations That Work” module without
  copying its unsupported project claims.
- Use a three-column desktop grid with the last two cards balanced on a second
  row, a two-column tablet grid, and a single-column phone stack. Service nodes
  may wrap inside a card, but labels may not clip or force horizontal overflow.
- Keep hierarchy compact enough that the new module improves scanability
  without making the already-long Services page feel dramatically longer.

## Interaction and accessibility contract

- Keep the content server-rendered and semantic; no carousel, hidden state, or
  pointer-only interaction is required to understand every combination.
- Treat icons and plus signs as decorative because the service labels carry the
  full meaning.
- Maintain one page H1, correctly nested section/card headings, readable text,
  and zero horizontal overflow at 1440, 768, 390, and 320 CSS pixels.
- Preserve every existing service-combination fact; the only added copy is a
  concise plain-language result derived from the current audience/combination.

## Proof plan

- Before/after full-page comparison at 1440×900.
- Focused rendered captures of the combination module at desktop, tablet, and
  phone widths.
- DOM/metric checks for one main, one H1, five combination cards, fifteen
  service nodes, no overflow, and no console errors.
- `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` after implementation.
- Compare the final diff against this preserved plan and explicitly record any
  divergence in the Round 17 report.
