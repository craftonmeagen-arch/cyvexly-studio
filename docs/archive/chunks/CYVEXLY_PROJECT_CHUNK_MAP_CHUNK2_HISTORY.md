# Archived Project Chunk Map — Chunk 2 History

This file preserves the detailed closed-Chunk-2 history compacted from the active chunk map on 2026-09-08. It is evidence, not newer authority over the current Owner Direction.

## Chunk 2 — Core marketing pages (CLOSED, opened round 1, extended round 2, closed round 3)

- **Outcome:** Services, Work/Portfolio (+ case-study template), Pricing,
  Process, About, and general Contact pages, reusing Chunk 1's design system
  and `src/lib/site-config.ts`.
- **Progress:** `/process` (round 1), `/services`, `/pricing`, `/contact`,
  `/work` (+ filterable grid), `/work/[slug]` case-study template with three
  concept case studies (Aurora Spaces, Nexora Systems, Vellora Care) all
  built and verified round 2. Five of six pages done.
- **Original remaining/bounded state:** `/about` was the only page not built
  because the first vision expected a founder name/story/portrait that no
  Builder could invent. **Superseded September 4, 2026:** Owner direction
  `2026-09-04-14` authorizes a logo-led studio About, no public personal founder
  name or portrait, and the reviewable origin draft in vision §6.8. Chunk 5 now
  owns implementation and verification. See `CYVEXLY_APP_DEBT.md` item 1.
  **Closed round 3:** independently re-verified via a live route sweep
  (`curl` against all six pages plus `/about`) that `/`, `/process`,
  `/services`, `/pricing`, `/contact`, `/work` (+3 case studies) all return
  200 and `/about` still 404s. The founder-identity gap is unchanged and
  still not a Builder-reachable decision at that historical round. Per the
  chunk's own closure boundary ("resolved or explicitly and
  honestly bounded"), this satisfies closure — closed with the About page
  carried forward as `CYVEXLY_APP_DEBT.md` item 1, not as open chunk debt.
  Closed does not mean frozen: reopens automatically once Owner-supplied
  approved identity direction arrives. That direction has now arrived and is
  assigned to Chunk 5.
- **Known visual gaps vs. mockups** (found via round-2 mockup comparison,
  see `CYVEXLY_CHUNK_DEBT.md`): Services/Pricing pages are content-complete
  and match vision text closely, but use denser cards than
  `mockups/02-services-pricing.png`'s more compact layout — both pages now
  have icon badges (Services round 2, Pricing round 3); the density/framing
  difference itself remains a deliberate adaptation, not fixed.
- **Round 5, revisiting closed-chunk debt (closed does not mean frozen):**
  rebuilt `/process`'s steps section as a connected vertical timeline with
  numbered circle badges, added a "Typical timing" table and an "Our
  collaboration promise" panel, matching `mockups/04-process-planner.png`'s
  visual pattern (`CYVEXLY_CHUNK_DEBT.md` item 1 — now resolved). Also
  replaced the Work grid/case-study flat gradients with three distinct,
  hand-authored abstract SVG compositions per concept project, grounded in
  each project's own already-written creative "decisions" and palette
  (`CYVEXLY_CHUNK_DEBT.md` item 2 — partially resolved; real photographic/
  screen-sequence imagery, what both the Auditor and Council explicitly
  asked for, remains open pending an Owner framing decision — see
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-5 report).
- **Round 8, cross-surface reconciliation:** the current Council review found
  that Home still used the original flat gradients even though Work/case
  studies had adopted the stronger project-specific abstract artwork; source
  inspection found Services had the same stale pattern. Both now reuse
  `ConceptPreview`, verified in real 1440/768/390 headless-Chrome/CDP renders
  with zero overflow. The reachable inconsistency is closed; the separate Owner
  decision on abstract-vs-commissioned concept imagery remains open.
- **Round 14, service-detail completion:** commit `930e050` fulfills vision
  §6.3 with one reusable `/services/[slug]` template and exactly five focused
  routes. Services/footer entry points now reach them, and each offer hands an
  editable starting state to the Planner without overwriting a saved draft.
  Desktop/tablet/phone, 320px, 24px-root, native-navigation, semantics, and
  production-build proof pass. This revisits the closed chunk without reopening
  it or resolving the separate Owner-blocked About gap.
- **Round 17, Services combination-pathway reconciliation:** replaced the
  remaining text-table adaptation identified in Chunk Debt item 4 with five
  mockup-aligned, icon-led glass pathways. Every existing audience/service
  combination remains present, now with an honest outcome and Planner handoff.
  Optimized-production proof passes at 1440/1280/1024/768/720/390/320 widths; the
  three-column layout intentionally waits until 1280px so compact desktops do
  not repeat the cross-device cramped-scale problem. This revisits the closed
  chunk without changing its Owner-blocked About boundary.
- **Round 18, Pricing scope-system reconciliation:** replaced the sparse
  centered Pricing entry with a split glass composition and an original
  five-package scope signal, then coordinated the unchanged package cards in a
  luminous constellation field. Exact 1440/1024/1023/768/390/320 and 24px-root
  states, native Planner/FAQ input, complete five-card visual inspection,
  build/route/media regression, and opened public desktop/phone proof pass.
  The approved mockup's orbital hierarchy is now represented without copying
  its thumbnail-density tables or changing any package fact. This revisits the
  closed chunk without changing its Owner-blocked About boundary.
- **Round 19, dynamic 404 metadata correction:** invalid service/work slugs now
  call `notFound()` during metadata generation, so streamed fallback metadata
  cannot overwrite the hydrated 404 title. Both invalid routes retain 404,
  noindex, landmarks, recovery links, containment, and clean browser state;
  all eight valid dynamic routes remain 200. This is a cross-chunk runtime
  correction and does not change the closed marketing-page boundary.
- Non-goal: Project Planner (its own chunk, given its multi-step form
  complexity).
