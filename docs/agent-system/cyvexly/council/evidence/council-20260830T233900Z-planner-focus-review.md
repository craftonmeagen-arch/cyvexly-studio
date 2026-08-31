# Council Round 6 — Planner focus and responsive review

- Round: `council-20260830T233900Z`
- Captured: `2026-08-31T00:03Z` (America/New_York 2026-08-30)
- Source snapshot: `4fb7c017ca6596d2ee906a5e569874119a6541fd`
- Runtime: `.codex/runtime/council/council-20260830T233900Z/runtime`, port `5373`

## Direct rendered review

Opened the Council runtime in the in-app browser and viewed Home at desktop
`1440×900`, tablet `768×1024`, and phone `390×844`; the captured views show the
responsive header switch, intact hero hierarchy, truthful `CONCEPT PROJECT`
disclosures, readable cards, and no visible clipping. The Home desktop capture
was compared with `mockups/01-home.png`; the approved mockup remains a higher-
fidelity visual target, while the current abstract treatment is consistently
disclosed and remains an Owner framing decision rather than fabricated proof.

Opened the Planner at phone and desktop and compared it with
`mockups/04-process-planner.png`. The live route renders the nine-step progress
rail, required Step 1 fields, responsive controls, and no horizontal overflow.

## Planner validation question

The served DOM contains the new grouped-control semantics from `da9c6d9`:
`fieldset[aria-invalid]`, `aria-describedby` to stable `*-error` IDs, named
checkbox groups, and three `role=alert` messages when validation is reached.
The in-app browser's visible DOM/CUA and Playwright click paths did not produce
a real React state transition in this unattended session; after attempted
activation focus remained on `Continue →` and no alerts appeared. A separate
Council-owned Chrome/CDP probe recorded native Enter key events and exact
`390px`/`1440px` overflow metrics, but its key activation likewise did not
trigger the React handler. This is harness-limited evidence, not a product
failure claim. Builder's earlier CDP matrix is not promoted to independent
Council proof.

## Route and build checks

`council-20260830T233900Z-route-smoke.json` records all 15 public routes at
`390×844`: one `h1` and `main` each, zero empty image alts, zero unnamed links,
`scrollWidth === clientWidth`, and no console warnings/errors. Direct served
checks returned 200 for Home, Planner, case study, OG image, favicon, SVG icon,
and robots. Production build passed with the known Owner-gated `metadataBase`
localhost warning; typecheck and ESLint passed.

## Disposition

- `CYC-R5-F001`: **Unconfirmed / method-limited**, not closed. Re-run first-error
  focus in a genuinely attended or differently capable browser where the
  validation action can be activated and `requestAnimationFrame` can settle.
- Favicon, scratch-route hygiene, and Home/Services/Work concept unification
  remain closed from R5 and were not reopened.
- Retain Owner-gated metadataBase, server-side Planner email, About/Privacy/
  Terms facts, abstract-artwork framing, and physical keyboard/reduced-motion
  boundaries.

Evidence files: `council-20260830T233900Z-home-desktop.png`,
`council-20260830T233900Z-home-tablet.png`,
`council-20260830T233900Z-home-phone.png`,
`council-20260830T233900Z-planner-desktop.png`,
`council-20260830T233900Z-planner-phone.png`,
`council-20260830T233900Z-planner-cdp.json`, and
`council-20260830T233900Z-route-smoke.json`.
