## Round 14 report — global round 14

### Preserved plan and selection

**Session:** `2384d0ba-a516-43bc-8615-01195c1455f2`; lock claimed
`2026-08-31T10:48:25.4775496Z`; start HEAD `62c6b7e`; no active PM prompt.
Pre-implementation plan:
`builder/evidence/round-14-service-detail-visual-plan.md`.

The vision-required `/services/[service]` system was the largest coherent,
reachable marketing gap: the Services page had complete group cards and five
short website-type descriptions, but the five detail pages required by vision
§6.3 did not exist. Footer links only scrolled to those short cards. This slice
did not require Owner-only founder, legal, domain, email-provider, or
commissioned-art facts and did not reopen Chunk 2 formally.

### What changed

Product commit `930e050` adds a typed five-offer content model and a single
reusable static detail template for Business Websites, Website Redesigns,
Landing Pages, E-commerce Websites, and Website Care. Every page carries the
required outcome-led headline, problem/outcome, inclusions, labeled concept
example, client inputs, price/timing factors, package/starting price, FAQ, and
Planner CTA. A code-native orbital signal and existing glass vocabulary extend
the accepted reference without fabricating media or results.

Services cards and footer items now link to the real routes while the five
legacy fragment IDs remain valid. `/start?service=` maps each offer into the
closest existing Planner website type/goal; Website Care also selects Care
interest. The Planner announces the editable starting point. A saved browser
draft is authoritative and always restores over the query.

### Rendered comparison and verification

- Final lint, TypeScript, and optimized production build pass; 23 pages are
  generated including all five static service routes. Only the known
  domain-blocked `metadataBase` warning remains.
- All five routes return 200 with unique title/H1, one `main`, no duplicate
  IDs, and service-correct Planner links; an unknown service returns 404.
- Opened and inspected exact 1440/768/390 Business Websites renders, a 390px
  E-commerce render, and the phone Planner preselection. 320px and 390px with
  a 24px root remain exactly width-contained.
- The first 768px render exposed a real local issue: switching to the split
  hero at `md` made the H1 column unnecessarily narrow. Moving the split to
  `lg` yields a readable 720px-wide stacked tablet hero; the final render is
  retained.
- Native clicks traversed Services → Business Websites → the preselected
  Planner. Saving each of the five query states produced exactly the expected
  Planner type/goal/care values. A saved redesign draft stayed checked when an
  e-commerce query was added, proving query input cannot overwrite user work.
- Unnamed buttons/links are zero; heading structure is coherent; FAQ controls
  expose collapsed state; reduced-motion reports zero active animations.

Durable proof is indexed in `builder/evidence/INDEX.md`; the exact results and
known audibles are in `round-14-service-detail-verification.md`.

### Audibles, limits, and accountability

The in-app Browser bootstrap again failed before browser selection with the
known kernel-assets path error. Installed Chrome through the established local
Playwright fallback supplied real product proof without touching Council's
runtime. The service template itself has no failed resource; desktop Link
prefetch still logs the pre-existing `/about` 404, already Owner-blocked on
founder identity. It was classified, not hidden or filled with invented copy.

The first native-navigation test used an exact accessible name that omitted the
visible arrow and therefore timed out; correcting the instrument to the actual
`Explore business websites →` name proved navigation. No product fix was
needed. Council-owned dirty files/evidence and its live port remained outside
Builder commits. No scheduler or automation was touched.

Not checked: Owner acceptance, the original second computer, physical Safari/
Firefox, field performance, deployment/cache behavior, or replacement concept
media. Existing founder/legal/domain/email and art-framing decisions remain.

### Completion state

**DONE WITH PROOF** for the five-service detail and Planner-handoff system;
**OWNER REVIEW STILL ACTIVE** for Home mockup parity and second-device scale.
