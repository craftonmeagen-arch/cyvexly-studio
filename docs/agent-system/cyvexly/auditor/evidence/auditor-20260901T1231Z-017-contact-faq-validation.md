# Auditor R17 — contact validation and FAQ interaction

## Review identity and isolation

- Review: `IFA-2026-09-01-R17` / `auditor-20260901T1231Z-017`.
- Heartbeat minute zero: `2026-09-01T12:31:27.6180525Z`.
- Reviewed accepted source: HEAD `a7e07ca30a40757fa00ee3d7d6452918edba5137`; product source remains `1437f5b`, Git `src/` tree `50dc64c9ab91752979b5e50113b398fa047f2b1f` (41 files, no `src/` diff).
- The Builder lock was active with uncommitted `globals.css`, Home, and Services changes (`cyvexly-builder-20260901T0458Z-r22-6f3a9d1c`). I used only an exact accepted-HEAD archive at `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1231Z-017` and did not read or alter the mutable Builder tree. Cleanup verification later also showed `src/lib/site-config.ts` as a mutable Builder file; it was left untouched.
- Runtime: local Next dev server on port `5273`; real Codex in-app Browser tab `1`; temporary phone viewport `390×844` (`375px` layout width). Standard Auditor guard remained write-denied, so this evidence is manually routed.

## Fresh interaction scope

This round intentionally used a different reachable surface and method from R14's header-cascade pass: direct form interaction and validation on `/contact`, FAQ expansion/collapse on `/faq`, and the Contact → Planner → Back handoff. No valid form was submitted and no `mailto:` navigation or external side effect was triggered.

### Contact validation

I physically operated the visible Contact form controls, left required values blank, and activated **Send message**. The custom validation surfaced the summary `Please fix the highlighted fields below.`, four field-level messages (`name-error`, `email-error`, `message-error`, `consent-error`), and `aria-invalid="true"` on each corresponding control. The form remained on `/contact` with one `main`, one `h1`, and exact phone containment (`375/375`).

### New finding — `CYV-IFA-011` (P1, WCAG normal-text contrast)

The field-level error messages are rendered at `12px` in `rgb(217, 67, 95)` (`--color-warning-coral`) over the frosted input background `rgb(248, 251, 255)`. The measured WCAG contrast is `4.1139:1`, below the `4.5:1` normal-text AA threshold. This affects all Contact field errors and the shared Planner error components that use the same token. The messages are present and correctly associated, but their red color must be darkened or otherwise paired with a sufficiently contrasting treatment before release.

The opened phone validation capture visibly shows the error text and focus-visible Send button; the desktop capture shows the same state at `1265/1265` containment.

### FAQ and route handoff

On `/faq`, **Do you follow accessibility standards?** toggled from `aria-expanded="false"` to `true`, exposed its answer, and returned to zero expanded questions after a second activation. The page retained one `main`, one `h1`, and exact phone containment. From `/contact`, the visible **Describe your project →** link reached `/start`; browser Back returned to `/contact`, with one `main`/`h1` and exact containment throughout.

The shared `.site-atmosphere` remained one fixed, `aria-hidden="true"`, pointer-inert layer. Browser warning/error diagnostics were empty.

## Evidence

- Machine metrics: `auditor-20260901T1231Z-017-runtime-metrics.json`.
- `auditor-20260901T1231Z-017-contact-validation.png` — desktop Contact validation state.
- `auditor-20260901T1231Z-017-contact-phone-validation.png` — phone Contact validation state.
- `auditor-20260901T1231Z-017-contact-all-errors-phone.png` — phone state with all four field errors.
- `auditor-20260901T1231Z-017-faq-expanded-phone.png` — phone FAQ answer expanded with visible focus.

## Limits

Public Render remained unavailable under the saved Browser permission boundary. Physical keyboard hardware, reduced-motion preference, Safari/Firefox, field vitals, external email side effects, and Owner visual acceptance remain unconfirmed. The accepted source was audited independently; active Builder changes remain excluded until committed and re-identified.
