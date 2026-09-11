# Round 178 — Chunk 5 candidate re-verification and repo hygiene

**Run time:** 2026-09-11 America/New_York (unattended scheduled session)

**Exact product candidate under review:** `b14a92b1a9dbea8adb585f5aabd8bd4ac609c0c3`
(unchanged this round)

**Accepted/deployed baseline:** product source `4232574`; release commit
`8c34031` (unaffected by this round)

**Main HEAD at round start:** `719b3a4` (Round 177's handoff commit, on top of
`b14a92b`)

**Main HEAD at round end:** one non-documentation commit, `67fb358` (the
hygiene fix below), followed by a run of documentation-only commits recording
this round's findings — see `git log --oneline 719b3a4..main` for the exact
list. None of the documentation commits touch product source, and none touch
the Chunk 5 candidate's own files.

**Disposition:** IMPLEMENTED — INDEPENDENT REVIEW PENDING. No new reachable
Chunk 5 implementation work found. Candidate `b14a92b` still requires the
independent exact-source Auditor/Council review before acceptance or
publication; that review is the next required product action.

## Why this round happened

The scheduler fired a normal Cyvexly Builder round. Orientation review found:
Chunk 5's candidate `b14a92b` was already implementation-complete per Round
177; `CYVEXLY_VISION_PLAN.md` §17's full launch checklist was already
reachable-complete; the only new external evidence since Round 177 was
Auditor `IFA-2026-09-11-R138`, a third routine re-verification of the already-
accepted `4232574` baseline that does not evaluate `b14a92b`. Rather than
close the round immediately for lack of new Owner-authorized implementation
work, this round used the time to independently re-verify the existing
candidate with fresh evidence and to do a full route-by-route product sweep,
consistent with the governing packet's closeout-is-discovery-work principle
(v23.2 §8.1-8.2) and the instrument-validity practice already established in
`CYVEXLY_TOOLS_AND_CAPABILITIES.md`.

## Verification ledger (candidate `b14a92b`, unchanged)

- `tsc --noEmit`: clean.
- `eslint`: zero errors, one unchanged historical warning
  (`docs/.../round-42-honeypot-overflow-test.mjs`).
- `next build` (dormant no-ID/no-index state): 56 routes compiled cleanly,
  before the hygiene fix below reduced the count to 55.
- `business-day-smoke.mjs`: 7 calendar cases passed.
- `consultation-api-smoke.mjs`: email-only, phone-only, timezone, validation,
  honeypot, and rate-limit paths passed; 0 real messages sent.
- `search-readiness-smoke.mjs`: `{"indexable":false,"verification":"absent",
  "canonical":"https://cyvexly.com","robots":"disallow","status":"passed"}` —
  correct dormant state.
- `pnpm audit --prod`: no known vulnerabilities.

## Fresh browser/content spot-checks (manually started dev/production server;
IAB screenshot compositing is unavailable in this unattended session per
`CYVEXLY_TOOLS_AND_CAPABILITIES.md`, so `read_page`/`get_page_text`/console/
network inspection — confirmed 100% reliable in that file — were used instead)

- Home (`next dev`, no `NEXT_PUBLIC_GA_MEASUREMENT_ID` set): zero Google/gtag
  network requests, no consent UI rendered (correct — nothing to consent to
  when no measurement ID exists), `robots: noindex, nofollow`, no verification
  meta, canonical `https://cyvexly.com/`.
- Pricing, FAQ (both occurrences), and Terms Stripe copy: all state the
  account/methods are not active yet, no checkout, no pre-agreement payment,
  no raw-payment-storage claim. Consistent across all three surfaces.
- Privacy `#cookies-and-analytics`: anchor exists; copy correctly branches on
  `analyticsConfigured` — dormant-state and configured-state text are both
  accurate and match the consent implementation.
- `/robots.txt`: `Disallow: /` (dormant). `/sitemap.xml`: 12+ URLs, correctly
  excludes the interactive demo routes (`/velora`, `/nexora`) and the removed
  `/honey-hearted`.
- Full route sweep (About, FAQ, Accessibility, Terms, Work, all four
  `/work/[slug]` case studies, Start/Planner, Contact with
  `?request=consultation`): all load with zero console errors beyond the
  expected dev-mode `eval()` notice, zero horizontal overflow at 375px.
- Homepage accessibility tree (`read_page`): skip link, `banner`/`navigation
  "Primary"`/`main` landmarks, heading hierarchy, and the Work rail's
  `"Work carousel controls"` / `"Previous projects"` / `"Next projects"`
  buttons and `"<Project>, project N of 4"` groups are all correctly named.
  `"Analytics settings"` correctly absent when no measurement ID is
  configured.
- `isTrustedOrigin` (dormant `CF_ORIGIN_SECRET` origin-bypass hardening,
  `CYVEXLY_APP_DEBT.md` item 6): source-verified still dormant (`!secret`
  short-circuits to `true` before the timing-sensitive comparison), uses
  `timingSafeEqual`, and is correctly wired into both `/api/contact` and
  `/api/planner`.
- `analytics-consent-smoke.mjs` re-run fresh against current HEAD with a
  synthetic, uncommitted `NEXT_PUBLIC_GA_MEASUREMENT_ID` production build:
  `{"googleRequestsBeforeConsent":0,"googleTagLoadedAfterGrant":true,
  "successfulInquiryEvent":"generate_lead/contact","desktopGeometry":
  {"panelInsideViewport":true,"noPageOverflow":true,"buttonHeights":[44,44]},
  "phoneOverflow":false}` — identical result to Round 177's original evidence.
  Workspace rebuilt back to the safe no-ID dormant state immediately after;
  the synthetic ID was never committed.

## Finding 1 (fixed): orphaned pre-team-split HoneyHearted route

The route sweep surfaced `src/app/honey-hearted/route.ts`, which served a
frozen ~2MB static snapshot (`honey-hearted/index.html`, plus
`honey-hearted/smoke.mjs`) of the HoneyHearted storefront from Round 100
(2026-09-08), before the Owner's team-split direction (`2026-09-08-27`/`-29`)
moved HoneyHearted to Team 2's own standalone repository and deployment
(`honeyhearted.org`; see `HONEY_HEARTED_OWNER_NEEDS.md`). The route was
unlinked from every Cyvexly navigation surface, noindexed
(`X-Robots-Tag: noindex, nofollow, noarchive`), absent from the sitemap, and
referenced nowhere else in source (`grep` confirmed). It was exactly the
cross-team leftover the Owner's team-split direction was meant to prevent
("all website work that wasn't directly for cyvexly was supposed to go to
team 2"), still live and directly reachable at `cyvexly.com/honey-hearted` on
the primary Cyvexly domain/repo.

**Action taken:** removed as commit `67fb358`, kept separate from candidate
`b14a92b` so the candidate's own exact hash/identity for its pending
independent review is undisturbed. Verified clean after removal: `tsc
--noEmit`, `eslint` (same single historical warning), `next build` (55
routes), and a live `curl` check (`/` → 200, `/honey-hearted` → 404).

## Finding 2 (documented, not a defect): `next dev` vs. production build smoke
timing

`internal-hierarchy-smoke.mjs` and `submission-receipt-smoke.mjs` failed
consistently against a manually started `next dev` (Turbopack) server — a
Work-rail `aria-live` hydration-timing mismatch and a receipt-wait timeout,
respectively — with no related source change in flight (the only change was
the isolated, unrelated `honey-hearted` route deletion) and no change at all
to either script's target files since Auditor `IFA-2026-09-11-R138` passed
both suites clean hours earlier. Re-running both unchanged against a
production `next build`/`next start` server passed cleanly on the first
attempt. Recorded in `CYVEXLY_TOOLS_AND_CAPABILITIES.md` so a future round
does not misdiagnose the same dev-mode artifact as a product regression.

## Finding 3 (documented, not a defect): `tsc --noEmit` needs a prior build on
a fresh checkout

Deleting `.next` and immediately running `pnpm exec tsc --noEmit` (no prior
build) reliably fails with `src/app/layout.tsx(74,50): error TS2304: Cannot
find name 'LayoutProps'.` — Next 16's generated typed-layout ambient type only
exists in `.next/types/` after `next build`/`next dev` has run once. Reproduced
twice, both times clean after `pnpm run build` regenerated `.next/types` with
zero source changes. **This was reproduced independently, not newly
discovered** — `CYVEXLY_WATCH.md` Round 10 already documented the identical
root cause and fix. The genuinely new part this round: `CYVEXLY_ROLE_RULES_MAPPING.md`
and `CYVEXLY_ENVIRONMENT.md` still listed `tsc` before `build` in the
documented check order, eight-plus rounds after Round 10 established the
correct order, which could cause a reviewer's genuinely fresh `runtime/`
checkout to hit this exact false failure. Corrected both files' check order to
lint → build → tsc.

## Final closeout regression run

After the fixes and findings above, the full local smoke ledger was re-run
once more end to end against a production `next build`/`next start` server on
the final committed HEAD (`59a36e6`): `business-day-smoke.mjs` (7 cases),
`consultation-api-smoke.mjs` (0 real messages), `search-readiness-smoke.mjs`
(dormant state), `buyer-journey-smoke.mjs` (35 routes/17 contexts),
`internal-hierarchy-smoke.mjs` (0 runtime errors, 0 overflow),
`submission-receipt-smoke.mjs` (6 intercepted, 0 real messages), and
`nexora-demo-smoke.mjs` — all passed cleanly. The production server was
stopped by its verified listening PID afterward; no Builder-owned process or
port was left running.

## Remaining authority gates (unchanged from Round 177)

Independent exact-source review must still challenge `b14a92b` (and, given
this round's hygiene commit, current `main` HEAD) before acceptance or
publication. The Owner must separately complete/approve LLC filing/name
verification, Resend domain/key and controlled delivery, GA4/Search Console
account creation and indexing authorization, Stripe account verification and
a test invoice, and the Guardio review/recheck. None of these are Builder-
complete merely because dormant/synthetic proof passes.
