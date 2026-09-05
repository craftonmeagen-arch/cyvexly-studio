# Archived — Round 43 closeout (moved from CYVEXLY_NEXT_BUILDER_HANDOFF.md round 45, to keep that file under its 12288-byte hot-file cap)

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
