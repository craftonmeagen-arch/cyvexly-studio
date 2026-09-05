# Cyvexly Next Builder Handoff

## Round 43 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `1de36c3` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R34`)
and implemented a genuinely new reachable QA/build angle: sitewide
structured data (JSON-LD), which was entirely absent despite vision §17
naming "searchable" as a launch requirement.
**Completion:** REAL SOURCE ADDITION LANDED — see below.

### What was checked

- `IFA-2026-09-05-R34` (reviewed commit `3bbb879`, round 41's HEAD, one
  commit behind round 42's honeypot fix) is a **tenth consecutive
  independent confirmation, not a new finding.** Moved to
  `exchange/processed/`. `tsc --noEmit`/`lint`/`build` re-run clean before
  making any change.
- **New angle — structured data (JSON-LD).** Grepped the whole `src/` tree
  for `application/ld+json`/`schema.org`/`LocalBusiness` and found zero
  matches — the site had no structured data at all. Vision §17's launch
  outcome explicitly names "searchable" alongside truthful/contactable/
  legally coherent, and vision §17 item 2 covers "production discovery"
  (metadata/canonical/sitemap). §4.12 check: schema.org `Organization`
  JSON-LD via a `<script type="application/ld+json">` tag is the
  well-established, documented Next.js pattern for business
  discoverability — not a departure from normal practice, and needs no
  credentials or Owner authorization.
  **Implemented** in a new `src/lib/structured-data.ts`, embedded once in
  `src/app/layout.tsx` (renders on every route). Uses **only
  Owner-confirmed facts** already in `site-config.ts`: name ("Cyvexly
  Studio"), `url`, `logo` (the existing `/icon.svg`), `telephone`
  (`+13175725780`), `email` (`design@cyvexly.com`), and
  `address: { addressRegion: "IN", addressCountry: "US" }` — region and
  country only, deliberately omitting any street address since none is
  Owner-confirmed. No social profiles (`sameAs`) since none are confirmed
  either.
  **Verified two ways:** (1) real production build output — parsed the
  generated `<script type="application/ld+json">` block out of
  `.next/server/app/index.html`, `contact.html`, and
  `services/business-websites.html` and confirmed valid JSON with the
  correct name/phone/email on all three; (2) real CDP navigation against a
  production `next start` server across `/`, `/contact`, `/about`, and
  `/services/business-websites` — zero console messages, zero network
  failures (status ≥400), and `JSON.parse()` of the live DOM's script tag
  succeeds with the correct fields every time. `tsc`/`lint`/`build` all
  pass clean. Script preserved at
  `docs/agent-system/cyvexly/builder/evidence/round-43-jsonld-check.mjs`.
- **Hot-memory drift fix.** `CYVEXLY_ACTIVE_CHUNK.md` had grown to 29313
  bytes (near its ~30720-byte cap) because rounds 31-39's full round
  reports were never archived once later rounds landed — a violation of
  the intended §7.14 latest-three rotation that had gone unnoticed for
  roughly a dozen rounds. Archived them verbatim to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md`; the
  live file is now 18288 bytes with only rounds 40-43 live, matching the
  intended rotation again.
- Committed (see Git log) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned headless
  Chrome process tree (verified by exact `chrome-profile-round43`
  `--user-data-dir` command-line match across all child processes before
  stopping), removed the temporary Chrome profile directory under the OS
  temp scratchpad root.

### Recommended next workstream

Untried angles not yet swept: a print-stylesheet/print-to-PDF check (not
part of vision §17 item 10's explicit list, low priority); a dedicated
rate-limiting check beyond the honeypot (architecturally tied to the
server-side email delivery this chunk already defers); **FAQPage JSON-LD**
for the existing `/faq` content — a natural extension of this round's
Organization schema, using only the already-published `faqLibrary` copy in
`site-config.ts` (no new facts needed), which could earn FAQ rich-result
eligibility in search. Genuinely Owner-gated items are unchanged: DNS/domain
connection, real email delivery, analytics ownership, exact LLC name (see
`CYVEXLY_OWNER_DIRECTION.md`).

## Round 42 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `3bbb879` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R33`)
and swept the two QA angles round 41 named as untried: Contact/Planner
spam-protection live behavior, and RTL/long-name overflow in the Planner
review step.
**Completion:** REAL SOURCE FIX LANDED — see below.

### What was checked

- `IFA-2026-09-05-R33` (reviewed commit `46eae51`, round 40's HEAD) is a
  **ninth consecutive independent confirmation, not a new finding.** Moved
  to `exchange/processed/`. `tsc --noEmit`/`lint`/`build` re-run clean
  before making any change.
- **New QA angle — spam/rate-limit and honeypot live behavior on
  Contact/Planner (vision §17 item 6).** Source read found the Planner has
  a hidden honeypot field (`planner-company-website`) but **the Contact
  form had none at all** — no honeypot, no rate limiting. Vision §17 item 6
  groups "Contact and Planner" together under "proportionate accessible
  spam/rate controls." This is reachable now: a client-side honeypot needs
  no backend, credentials, or Owner authorization, and the Planner's
  existing pattern is already the accepted precedent.
  **Fixed** in `src/components/contact-form.tsx`: added an identical hidden
  honeypot field (`contact-company-website`, `tabIndex={-1}`,
  `autoComplete="off"`, `aria-hidden` wrapper, visible label for the rare
  assistive-tech edge case, matching the Planner's exact markup) and a
  validation check before the existing name/email/message/consent checks.
  **Live-verified with real CDP mouse clicks** (not just source read)
  against a production `next start` server: filling the honeypot and
  clicking "Send message" leaves the form in its error state (mailto
  bridge never fires); clearing the honeypot and resubmitting fires the
  mailto bridge normally (no regression to the legitimate path). Same
  method also live-tested the **Planner's existing honeypot for the first
  time** (round 41 flagged this as untested): advanced through all 9 real
  steps with genuine clicks, filled the honeypot at step 9, confirmed
  Submit is blocked; cleared it and confirmed Submit works. `tsc`/`lint`/
  `build` all pass clean. Script and full result log at
  `docs/agent-system/cyvexly/builder/evidence/round-42-honeypot-overflow-*`.
- **New QA angle — RTL/very-long-name overflow in the Planner review step**
  (round 41's other named candidate). Filled a ~130-character unbroken
  string (no spaces) into "Full name," and an Arabic RTL name concatenated
  directly (no separator) with the same unbroken string into "Company
  name" — worst case: zero break opportunities at the RTL/Latin boundary.
  Advanced to the review step (step 9) at a real 375px emulated width and
  measured `document.documentElement.scrollWidth` (375) against
  `window.innerWidth` (375): **zero horizontal overflow. No defect found**
  — genuinely measured, not assumed.
- Committed (see Git log) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process (verified by exact
  `chrome-profile-round42` `--user-data-dir` command-line match), removed
  the temporary Chrome profile directory under the OS temp scratchpad
  root.

### Recommended next workstream

Both QA candidates round 41 named are now closed — one found and fixed a
real, reachable gap (missing Contact honeypot), the other two live-tested
previously-unverified/unproven behavior with no defect. Untried angles not
yet swept: a print-stylesheet/print-to-PDF check (not part of vision §17
item 10's explicit list, low priority); a dedicated rate-limiting check
beyond the honeypot (e.g. rapid repeated submissions) — the honeypot
handles the bot-form-fill case but there is still no throttling if a bot
skips the honeypot and submits repeatedly; since the current bridge is
client-side `mailto:` with no server endpoint, true rate-limiting is
architecturally tied to the same server-side email delivery this chunk
already defers (vision §17 item 6's Owner-gated half). Genuinely
Owner-gated items are unchanged: DNS/domain connection, real email
delivery, analytics ownership, exact LLC name (see
`CYVEXLY_OWNER_DIRECTION.md`).

Round 41 closeout detail is archived at docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_41_REPORT.md (moved there round 43 to keep this file under its 12288-byte hot-file cap; latest-three rule: 41, 42, 43 were live, now 42 and 43 stay live). Round 41 found no reachable defect (WCAG 1.4.10 reflow/zoom and a Back-button re-check both passed).


Round 40 closeout detail is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_40_REPORT.md` (moved there in round 42 to keep
this file under its 12288-byte hot-file cap; latest-three rule: 40, 41, 42
were live, now 41 and 42 stay live plus this round's own entry). Round 40
found and fixed the Planner step-advance scroll/focus/live-region defect
(`71d233f`).

Round 39 closeout detail is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_39_REPORT.md`. Round 39 found and fixed the
sitewide skip-to-main-content link defect (WCAG 2.4.1). Rounds 38, 37, 36,
35, 33-34, 31-32, and 28-30 are archived at their correspondingly named
files under `docs/archive/chunks/`. The current Chunk 5 scope and Owner
gates are summarized in `CYVEXLY_ACTIVE_CHUNK.md` and
`CYVEXLY_OWNER_DIRECTION.md`.
