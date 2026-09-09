# Round 146 — Home hero accessible name

- **Observed gap:** the visible public browser exposed the first buyer-facing
  heading as “Websites built to make your businessunmistakable.” in its
  accessibility tree. The rendered word spacing looked correct, but the styled
  inline split removed the semantic word boundary from the heading name.
- **Change:** the Home H1 now uses the canonical `siteConfig.tagline` as its
  explicit accessible name while retaining the existing split-color visible
  text and geometry.
- **Regression:** `scripts/internal-hierarchy-smoke.mjs` now reads the actual
  Chromium accessibility tree through CDP and requires the exact complete
  heading. `scripts/buyer-journey-smoke.mjs` also requires the server-rendered
  accessible name. The new browser assertion fails deployed Round 145 at the
  missing boundary and passes corrected local and adopted public source.
- **Validation:** the 52-route optimized build, post-change TypeScript, lint
  with one unchanged historical evidence warning, local/public 33-route buyer
  suites, and local/public responsive hierarchy suites pass. Visible IAB review
  at 390×844 confirms the exact accessible heading name; 390×844 and 1280×720
  local/public renders preserve the approved hero composition with zero page
  overflow or runtime errors. No inquiry, email, call, or transaction occurred.
- **Source:** local product/test commit `175c23c`; stable-patch-equivalent
  deployed commit `a484880` on `origin/main`. Two independent reviews of the
  final accepted Round 146 source remain before Chunk 8 readiness.
