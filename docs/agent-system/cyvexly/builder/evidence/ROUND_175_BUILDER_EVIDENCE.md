# Builder Evidence — Global Round 175

**Exact candidate:** `4232574`
**Scope:** Chunk 11 homepage Work rail plus the explicitly tracked quick-consultation addition from Owner direction `2026-09-10-04`.

## Automated proof

- `pnpm run build` — passed (56 generated routes; dynamic Contact, Planner, and API routes compiled).
- `pnpm run lint` — passed with the one pre-existing round-42 evidence warning and no errors.
- `pnpm exec tsc --noEmit` — passed.
- `node scripts/buyer-journey-smoke.mjs` — passed: 35 routes, 17 inquiry contexts, consultation entry/source contracts, legal truth, and standard Contact/Planner regressions.
- `pnpm run test:business-days` — passed seven calendar cases covering a normal weekday, weekend, observed Juneteenth, Christmas, cross-year observed New Year, a daylight-saving boundary, and a configurable studio closure.
- `pnpm run test:consultation-api` — passed email-only, phone-only, corresponding-field validation, and honeypot behavior with no real messages sent.
- `node scripts/submission-receipt-smoke.mjs` — passed six intercepted submissions, including consultation email-confirmation and phone-without-confirmation outcomes; no real messages sent.
- `node scripts/internal-hierarchy-smoke.mjs` — passed at 1280px, 768px, 390px, and 320px with zero runtime errors and zero horizontal overflow. Home and `/work` rail controls, end states, keyboard, touch, and reduced-motion behavior passed; Planner draft storage and compact Contact positioning regressed cleanly.
- `.codex/roles/scripts/Test-RoleSetup.ps1`, `Test-HotFileCaps.ps1`, and `Test-ReviewLifecycle.ps1` — passed before candidate packaging.
- `git diff --check` — passed.

## Visible-browser proof

The visible in-app browser confirmed the final consultation route presents name, a real email/phone choice, only the corresponding required field, preferred window, required timezone, optional note, consent with Privacy link, next-business-day convention, truthful non-appointment language, direct alternatives, and a detailed-Planner route. The phone-only state was operated directly. Earlier in the same run, the Home rail was operated with visible controls and Arrow/End keys through the EduAILenz/Mudoinkle end state.

## Curated screenshots

- `round-175-candidate/home-rail-desktop.png`
- `round-175-candidate/home-rail-keyboard-desktop.png`
- `round-175-candidate/home-rail-tablet.png`
- `round-175-candidate/home-rail-phone.png`
- `round-175-candidate/home-rail-minimum-phone.png`
- `round-175-candidate/work-rail-end-desktop.png`
- `round-175-candidate/work-rail-touch-phone.png`
- `round-175-candidate/contact-minimum-phone.png`
- `round-175-candidate/planner-storage-phone.png`
- `round-175-candidate/consultation-desktop.png`
- `round-175-candidate/consultation-tablet.png`
- `round-175-candidate/consultation-phone.png`
- `round-175-candidate/consultation-minimum-phone.png`
- `round-175-candidate/consultation-keyboard-desktop.png`
- `round-175-candidate-receipts/consultation-email-confirmation-desktop.png`
- `round-175-candidate-receipts/consultation-phone-request.png`

## Remaining gates

This is a candidate, not an accepted or deployed source. It still needs two independent review rounds on exact `4232574`, a controlled real Resend delivery check to the Owner inbox for Contact, Planner, and Consultation after protected provider configuration, accepted-source publication, and canonical production verification. No real message, deployment, scheduler, provider, DNS, or indexing state changed in this round.
