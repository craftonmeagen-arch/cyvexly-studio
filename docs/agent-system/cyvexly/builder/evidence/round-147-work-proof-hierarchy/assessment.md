# Round 147 — Work proof hierarchy

- **Observed gap:** at the live 1280×720 Work route, the first project card
  began at `615.75px` and its artwork ended at `808.75px`, leaving only about
  `103px` of the strongest proof visible in the opening viewport. This lagged
  the accepted Work mockup's compact title-to-project hierarchy even though
  the two-project content and current architectural glass treatment were
  stronger deliberate adaptations.
- **Change:** Work now uses a route-specific compact introduction and a shorter
  transition into its unchanged Velora/Nexora grid. No copy, proof label,
  project action, artwork, shared component, or global visual token changed.
- **Measured result:** local and adopted public 1280×720 Chromium place the
  first card at `523.75px` and the full artwork at `716.75px`; the 390×844
  route places them at `535px` and `728px` with zero horizontal overflow.
  The new desktop hierarchy assertion fails deployed Round 146 before the
  change and passes corrected local and public source.
- **Proof infrastructure:** the buyer contract now preserves Work's compact
  route-specific classes. The responsive hierarchy suite covers the first
  proof at desktop and phone widths and waits for the Planner's client-only
  draft gate before testing its save disclosure, avoiding a document-ready/
  hydration race in optimized-runtime proof.
- **Validation:** the 52-route optimized build, TypeScript, lint, local/public
  33-route buyer suites, local/public responsive hierarchy suites, and opened
  desktop/phone local and public renders pass. The approved cyber-blue glass
  identity and both working fictional demos remain intact. No inquiry, email,
  call, or transaction occurred.
- **Source:** local product/test commit `5fa17c6`; stable-patch-equivalent
  deployed commit `77181b2` on `origin/main`. Independent review of the final
  accepted Round 147 source remains required before Chunk 8 readiness.
