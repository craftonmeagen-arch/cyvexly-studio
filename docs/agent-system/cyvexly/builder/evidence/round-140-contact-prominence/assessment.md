# Round 140 — Contact first-viewport prominence

- **Source:** local product commit `0a96f4c`; deployed equivalent `ce526f2`.
- **Observed baseline:** production `3118a3f`, `/contact?interest=orbit-package`, 1280×720. The primary form began at `659.75px` and its first required cue at `692.75px`, so only the form edge entered the first viewport.
- **Target:** form entry at or above `520px`, first required cue above `620px`, zero horizontal overflow, and no regression to phone ordering or the 44px direct-contact actions.
- **Result:** local optimized production runtime places the form at `468.5px` and required cue at `501.5px` on 1280×720. At 390×844 the form begins at `575px` (baseline `615px`); at 768×1024 it begins at `494.1875px`. Horizontal overflow is zero.
- **Visual comparison:** opened the desktop and phone captures beside `mockups/06-sitewide-blue-glass-owner-direction.png`. The live page preserves the architectural grid, bright glass fields, blue depth, white edge treatment, dark display typography, and clear primary/secondary hierarchy. The deliberate adaptation is a compact conversion-page introduction rather than the mockup's large Home media composition.
- **Interaction:** visible IAB focus moved from Name to Email with one Tab; no inquiry, email, or phone action was triggered.
- **Proof:** the new hierarchy assertion fails on production `3118a3f` at the baseline geometry and passes locally with the values above. The 52-route build, TypeScript, lint, 33-route/15-context buyer suite, and responsive hierarchy suite pass.

Retain `contact-desktop.png` and `contact-phone.png` until the current source receives independent review; delete them when their review purpose ends.

Independent Auditor `IFA-2026-09-09-R107` passed exact local source `0a96f4c`
with zero findings; one further current-source review remains before readiness.
