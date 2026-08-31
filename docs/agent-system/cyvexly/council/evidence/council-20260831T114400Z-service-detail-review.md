# CYC-R18 service-detail and Planner-handoff review

## Scope and method

This round independently reviewed the Builder's accepted service-detail slice
from source head `68fe4a476a89070b968a21852742680571794695` in a fresh Council
snapshot/runtime. The in-app Browser was used for rendered route traversal,
DOM/accessibility inspection, native Services → detail → Planner clicks, FAQ
disclosure, empty Planner validation, and runtime console observation. A
Council-owned local Chrome visual fallback supplied opened PNGs at exact
`1440`, `768`, `390`, `320`, and a `24px` root-font stress state because the
in-app Browser does not expose pixel screenshots in this session.

The approved `mockups/02-services-pricing.png` and Builder visual plan were
opened for comparison. This is a product-quality review, not a source or test
edit; no Planner or Contact submission was sent.

## Direct observations

- `/services` and all five allowed detail routes return `200`; an unknown slug
  returns the expected `404`. Each detail route has one unique H1, one `main`,
  service-correct Planner links, and zero document overflow.
- Every route contains the vision-required hierarchy: outcome-led headline,
  problem, intended outcome, inclusion list, labeled concept example, client
  inputs, price/timing factors, related starting point, FAQ, and Planner CTA.
- Opened Services desktop/tablet/phone and Business Websites detail
  desktop/tablet/phone views are coherent and contained. E-commerce, redesign,
  landing-page, and Website Care phone first views also wrap naturally. A
  320px E-commerce view and a 390px 24px-root stress state remain contained.
- The mobile menu opens to a readable stacked panel with `aria-expanded=true`,
  five navigation links, and the primary project button. The detail FAQ opens
  to its answer with `aria-expanded=true`.
- A native in-app click from Services to Business Websites to `Include this in
  my project` reaches `/start?service=business-websites`. With a fresh browser
  profile, advancing through Steps 1–2 exposed the expected mapping for every
  service: business-site/credibility, redesign/replace, landing-page/launch,
  ecommerce/sell, and not-sure/credibility plus Care `Yes`. The in-app browser's
  existing saved-draft notice remained visible, correctly preserving the local
  draft boundary instead of silently applying the query.
- Empty Planner Step 1 still returns the three field-level alerts, marks the
  three required fields invalid, focuses `fullName`, and remains contained.
  Runtime console logs were empty during the reviewed route pass.

## Visual and methods assessment

The reusable template is a meaningful convergence step: it turns five dead-end
website-type cards into search-friendly, outcome-led journeys while keeping
the existing glass, grid, signal, and truthful concept-art vocabulary. The
Builder's first tablet split rendered too narrow and was corrected before this
review, which is evidence of an effective render-and-repair method rather than
token-only churn. The current detail signal is legible and responsive, but the
five pages share one orbital grammar and remain less luminous/dense than the
approved Services mockup's globe/workspace and proof treatment. That is an
Owner fidelity decision, not permission to fabricate client media.

## Limits

Physical keyboard traversal, reduced-motion emulation with an attended
capability, Safari/Firefox, real second-device scale, field Web Vitals,
deployment/cache behavior, domain/legal identity, and server-side Planner
delivery remain unconfirmed. The known `metadataBase` localhost fallback
warning remains Owner/domain-blocked.

## Evidence

- `council-20260831T114400Z-service-routes.json`
- `council-20260831T114400Z-service-http.json`
- `council-20260831T114400Z-service-contract.json`
- `council-20260831T114400Z-service-semantics.json`
- `council-20260831T114400Z-service-planner-cdp.json`
- `council-20260831T114400Z-planner-mapping.json`
- `council-20260831T114400Z-console.json`
- `council-20260831T114400Z-root-stress.json`
- Services/detail/planner viewport and full-page PNGs under the same round
  prefix, including the opened mobile-menu state.
