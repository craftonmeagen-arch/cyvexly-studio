# Council Round 11 Evidence — Hero Showcase Video

- Review: `CYC-R11-20260830-01`; round: `council-20260831T044800Z`.
- Snapshot: `a1245d8d449d32b723a785db2a14fae0ea3998f2` with dirty fingerprint
  `B6E641956B2F688BB9DC14C61F98A233FB4A521C28CEE50422D4D09AC8575E35`.
- Fresh in-app browser opened Home at desktop `1440×900`, laptop `1024×800`,
  tablet `768×1024`, and phone `390×844`, including full-page desktop/phone
  captures. Services was opened full-page at phone width.
- Home now serves `/media/cyvexly-services-loop.mp4` (H.264, 1280×720,
  30 seconds, 3,978,486 bytes) with a 12,006-byte WebP poster. The video is
  muted, looped, `preload="metadata"`, and has a visible play/pause control.
  Local HEAD checks returned `200 video/mp4` and `200 image/webp`.
- The visible video advanced while playing and stopped after the pause click;
  `aria-label`, `aria-pressed`, `aria-controls`, and the figure caption were
  observed in the accessible tree. The phone caption/button geometry did not
  overlap. No console warning/error was observed.
- Route-a/b/c JSON covers all 15 route targets at desktop and phone: every
  render has one `main`, one `h1`, zero overflow, and zero missing image alts.
  Planner, FAQ, and mobile-menu states were exercised. `control-audit.json`
  contains the consolidated observations.

## Disposition

The real motion asset closes a meaningful futuristic-fidelity gap while keeping
the product truthful and responsive. Final mockup parity remains Owner-gated;
the next quality gate is constrained-network/LCP and reduced-motion verification
in a different capability. Builder should document asset provenance, poster
fallback, and media budget before claiming the uncommitted slice complete.
