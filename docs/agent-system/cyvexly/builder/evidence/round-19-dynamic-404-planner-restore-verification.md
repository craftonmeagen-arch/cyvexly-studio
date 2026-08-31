# Round 19 dynamic 404 and Planner restore verification

**Product commits:** `e716541` and `744cdd8` on `main`

## Selection and plans

Round 19 followed two fresh, concrete Auditor findings rather than beginning a
new visual treatment. `CYV-IFA-008` showed that invalid dynamic service and work
routes returned the correct 404 HTML title but streamed generic page metadata
over it after hydration. `CYV-IFA-009` showed that the Planner briefly exposed
interactive Step 1 before restoring a saved Step 3 draft, creating a real
lost-input race.

The preserved pre-implementation records are
`round-19-dynamic-404-metadata-plan.md` and
`round-19-planner-restore-gate-visual-plan.md`. The second plan treats the
short loading gate as a visible state: it keeps the established glass width,
stable vertical space, calm status copy, and no false progress percentage.

## Dynamic 404 correction

Invalid branches in both dynamic `generateMetadata` functions now call
`notFound()`. This terminates the segment before it can stream the fallback
`Service` or `Project` title into the hydrated document. Valid dynamic slugs
keep their existing metadata and page output.

The baseline was reproduced in the optimized runtime: both invalid routes had
HTTP 404 and correct server HTML but changed to the generic title after the
browser hydrated. The final local and public pages retain
`Page not found — Cyvexly Studio`, `noindex`, one `main`, one H1, four recovery
links, zero horizontal overflow, and no browser warning/error. A native link
click reached `/services`; native Enter focus was observed but the in-app relay
did not activate the link, so no stronger keyboard claim is made.

All five valid service details and all three valid work details still return
200 with their expected titles. `/scratch-favicon-check` is absent from source,
the build, and public output and returns 404, closing the prior provisional
cleanup confirmation.

## Planner restore gate

`PlannerForm` now keeps a local storage-readiness flag. The initial server and
client render is a non-interactive, polite busy status. The mount effect reads
and validates the saved draft, restores it when valid, applies safe service
prefill precedence, and only then exposes the corresponding Planner step. A
`finally` path releases the gate even if storage access fails.

Raw optimized HTML for `/start` contains the status heading and copy, one
`main`/H1, and no form or Full name field. Through the visible Planner UI, a
synthetic draft was advanced to Step 3 and saved; reload settled at Step 3,
then Back exposed the preserved name and contact number plus the restored-draft
message. A separate origin without that draft settled at Step 1 with exact
width containment and a clean console. The `business-websites` query-prefill
route also settled at Step 1 with the correct starting-point message.

The transient state was opened in the actual in-app browser during navigation.
That browser did not honor a requested exact phone viewport, so Auditor's
baseline phone captures establish the prior race but Round 19 does not claim a
new exact-390 screenshot. The fixed state is structurally constrained to the
same responsive Planner shell; public settled output is checked separately.

## Build, deploy, and accountability

ESLint, a clean optimized 23-page build, and immediate post-build TypeScript
all pass; the only build warning remains the documented Owner/domain-blocked
`metadataBase` warning. Public invalid-route ETags and hydrated titles changed
after `e716541`. Public Planner initial-HTML deployment is recorded separately
in `round-19-planner-restore-runtime-proof.json` after Render adoption.

Only the two named product defects were changed. No external dependency,
unsupported claim, legal/domain fact, or server integration was added.
Concurrent Auditor/Council records and evidence remained excluded from Builder
commits. The recurring scheduler/automation was not read, modified, paused,
deleted, rescheduled, or otherwise touched.
