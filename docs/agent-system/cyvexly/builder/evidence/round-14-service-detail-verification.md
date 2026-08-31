# Round 14 service-detail verification

**Session:** `2384d0ba-a516-43bc-8615-01195c1455f2`
**Product commit:** `930e050` (`Build focused service detail journeys`)
**Baseline source:** `62c6b7e`
**Reference:** `mockups/02-services-pricing.png` and vision §6.3
**Runtime:** optimized Next.js production server on Builder-owned port 5173

## Shipped surface

- A typed content model and one reusable `/services/[slug]` template generate exactly five static service routes: Business Websites, Website Redesigns, Landing Pages, E-commerce Websites, and Website Care.
- Each route has an outcome-led H1, common problem, intended outcome, six inclusions, a clearly labeled concept-work example, client inputs, price/timing factors, a related package/starting price, three FAQs, and two `Include this in my project` actions.
- The visual system extends the accepted cyber-arctic language with a code-native orbital signal, frosted grouped panels, compact numbered inclusion nodes, and a dark high-contrast final CTA. No new media or client outcome was fabricated.
- The Services index retains all five legacy fragment IDs while adding real detail links. The footer now links directly to the five detail pages.
- `/start?service=` safely maps each offer into existing Planner values. A visible notice tells the visitor the selection is editable. Browser-saved drafts always restore over query preselection.

## Build and source checks

- `pnpm lint` — pass.
- `pnpm exec tsc --noEmit` — pass.
- `pnpm build` — pass; 23 static/dynamic pages generated, including all five detail routes. The only build warning is the known Owner/domain-blocked `metadataBase` warning.
- `git diff --check` on the owned source/evidence set — pass.
- Unknown `/services/not-a-service` — intentional 404.

## Production route and responsive proof

All five detail routes returned 200 in the optimized runtime. Each exposed a unique title/H1, exactly one `main`, no duplicate IDs, and two service-correct Planner links.

| Check | Result |
| --- | --- |
| Business Websites, 1440×1000 | 1440px viewport/scroll width; one H1/main; two CTAs |
| Business Websites, 768×1024 | 768px viewport/scroll width; stacked 720px hero after refinement |
| Business Websites, 390×844 | 390px viewport/scroll width; one-column flow |
| Business Websites, 320×800 | 320px viewport/scroll width; no clipping |
| Business Websites, 390px + 24px root | 390px viewport/scroll width; large-text reflow contained |
| E-commerce Websites, 390×844 | 390px viewport/scroll width; longest copy contained |

The first tablet render placed the hero in two narrow columns at the exact 768px breakpoint, forcing the H1 into an unnecessarily tall stack. The route was refined to reserve the split hero for `lg` and above. The final 768px render uses a 720px-wide single-column H1 and a full signal panel; it is materially clearer without changing desktop or phone behavior.

Opened and inspected:

- `round-14-business-desktop.png`
- `round-14-business-tablet.png`
- `round-14-business-phone.png`
- `round-14-ecommerce-phone.png`
- `round-14-planner-prefill-phone.png`

## Planner and interaction proof

Native clicks traversed `/services` → `/services/business-websites` → `/start?service=business-websites`. Every query mapping was saved through the real `Save & continue later` control and read back from the Planner draft:

- Business Websites → `business-site` + `credibility`.
- Website Redesigns → `redesign` + `replace`.
- Landing Pages → `landing-page` + `launch`.
- E-commerce Websites → `ecommerce` + `sell`.
- Website Care → `not-sure` + `credibility` + Care interest `Yes`.

All five actual values exactly matched the expected values. A controlled saved redesign draft opened with an e-commerce query at step 4 and preserved `redesign` checked while `ecommerce` remained unchecked, proving the query does not overwrite user work.

## Semantics, motion, and audibles

- Heading order is one H1 followed by H2 section headings; footer region headings remain H2.
- Unnamed buttons: 0. Unnamed links: 0. FAQ buttons expose `aria-expanded=false` before activation.
- With `prefers-reduced-motion: reduce`, the media query matched and active animations were 0.
- The detail template itself generated no failed resource. The desktop runtime still logs prefetch 404s for the pre-existing `/about` navigation target. That route is already explicitly Owner-blocked on founder identity in App Debt and was not fabricated or removed in this service-detail round.
- The in-app Browser plugin was attempted first as required, but its session bootstrap failed before browser selection with `failed to write kernel assets: The system cannot find the path specified. (os error 3)`. Verification therefore used the established local Playwright-to-installed-Chrome fallback. This did not attach to or stop Council's runtime.

## Honest limits

- The five pages use truthful labeled concept examples, not commissioned client screenshots or outcome claims.
- Production-domain metadata, About, Privacy/Terms, transactional email, the original second computer, physical Safari/Firefox, field Web Vitals, and deployment/cache behavior remain outside this round or Owner-blocked.
