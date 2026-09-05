# Cyvexly App Debt — Round 43 (archived round 48)

Archived from `CYVEXLY_APP_DEBT.md` in round 48 to keep that file under its
30720-byte hot-file cap.

## Resolved round 43

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R34`** — a tenth
  consecutive independent confirmation (reviewed commit `3bbb879`, round
  41's HEAD, one commit behind round 42's honeypot fix), not a new finding.
  Moved to `exchange/processed/`. `tsc --noEmit`/`lint`/`build` re-run clean
  before making any change.
- **New angle — sitewide structured data (JSON-LD), previously entirely
  absent.** Vision §17 names "searchable" as a launch requirement; a grep
  of `src/` for `application/ld+json`/`schema.org` found zero matches.
  Added a schema.org `Organization` JSON-LD block
  (`src/lib/structured-data.ts`, embedded once in `src/app/layout.tsx`)
  using only Owner-confirmed facts already in `site-config.ts`: name, URL,
  logo (`/icon.svg`), phone, email, and `addressRegion: "IN"` /
  `addressCountry: "US"` — no street address or social profiles invented.
  Verified in real production build output (parsed generated
  `<script type="application/ld+json">` from `index.html`, `contact.html`,
  and `services/business-websites.html` — valid JSON, correct fields on
  all three) and live via real CDP navigation against a production
  `next start` server across `/`, `/contact`, `/about`, and
  `/services/business-websites`: zero console errors, zero network
  failures, JSON-LD parses correctly in the real DOM every time. `tsc`/
  `lint`/`build` all pass clean. Script at
  `docs/agent-system/cyvexly/builder/evidence/round-43-jsonld-check.mjs`.
- **Hot-memory drift fix.** `CYVEXLY_ACTIVE_CHUNK.md` had grown to 29313
  bytes (near its cap) because rounds 31-39's full reports were never
  archived once later rounds landed, breaking the intended §7.14
  latest-three rotation for roughly a dozen rounds. Archived verbatim to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md`; live
  file is now 18288 bytes with only rounds 40-43 live. Also archived round
  41's full handoff detail to
  `docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_41_REPORT.md` to keep
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md` under its own 12288-byte cap after
  adding round 43's entry (now 10271 bytes).
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process tree (verified by exact `chrome-profile-round43`
  `--user-data-dir` command-line match across all child processes),
  removed the temporary Chrome profile directory under the OS temp
  scratchpad root.
