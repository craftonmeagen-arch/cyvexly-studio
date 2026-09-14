# Round 190 — EduAILenz/Mudoinkle showcase-parity evidence

Captured September 13, 2026 (America/New_York) from the local production build
at `http://localhost:4173` after the first Chunk 13 implementation slice.

## Evidence provenance

- EduAILenz authenticated screens come from Team 2's exact accepted source
  `9e48f41db4042bc43c1f6f5ea670506ffcce8878`. The six copied files matched
  their accepted Git blobs before use. Quick Lesson is an empty setup; BloomED
  uses the recorded synthetic test account. No real student data appears.
- Mudoinkle screens were captured read-only from the live public staging
  preview at `https://mudoinkle-staging.onrender.com/` on September 13. The
  Awmuhog, Witigglies, and List Off tabs were each selected before capture.
  These demonstrate public sample rounds, not full room acceptance or launch.
- Neither outside application repository was modified.

## Visible comparison

The nine PNGs in this directory compare accepted Velora, EduAILenz, and
Mudoinkle at 1440×900, 768×1024, and 390×844. Each capture is positioned at the
first capability/journey section rather than relying on source inspection.

Observed result:

- Velora retains six concise capability cards and its established hospitality
  identity.
- EduAILenz now leads its tour with large authenticated desktop evidence plus a
  phone inset, a task/action/result explanation, exact provenance, and a clear
  no-student-data boundary.
- Mudoinkle now leads its tour with large live Awmuhog desktop evidence plus a
  phone inset; the following journeys use separately captured Witigglies and
  List Off states with staging and incomplete-room boundaries intact.
- All three widths keep evidence within the viewport width. Headings, proof
  labels, and the external proof action remain readable and distinct.

## Verification

- `pnpm lint` — passed with the one unchanged historical evidence warning.
- `pnpm build` — passed; 62 routes generated and TypeScript completed.
- `pnpm exec tsc --noEmit` — passed.
- `node scripts/buyer-journey-smoke.mjs` — passed: 39 routes, 20 inquiry
  contexts, portfolio discovery, proof links, new evidence paths, and truthful
  labels.
- `node scripts/internal-hierarchy-smoke.mjs` — passed, including new
  EduAILenz/Mudoinkle desktop/tablet/phone checks: three journeys per case,
  desktop and phone evidence rendered, external proof links present, zero
  horizontal overflow, and zero runtime errors.
- The live Mudoinkle public preview was also exercised in the visible in-app
  browser across all three game tabs before capture.

Analytics consent was not changed. A supplemental analytics smoke run against
this locally built server could not render the consent choice because this
build intentionally had no local measurement ID; that is a test-environment
precondition, not evidence of a product regression. The unchanged consent
implementation remains protected by its existing contract and production
configuration.

## Remaining gate

This is a local candidate slice, not Chunk 13 closure. It still needs exact-
source independent review before publication. After acceptance, the Builder
must push, verify the matching Render deployment, repeat canonical buyer/search
checks, and complete the final visible comparison required by Owner direction
`2026-09-13-05`.
