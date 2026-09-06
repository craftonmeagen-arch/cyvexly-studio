# Cyvexly App Debt — Round 68 full detail (archived)

Moved from `CYVEXLY_APP_DEBT.md` round 72 to keep that file under its
30,720-byte hot-file cap.

## Resolved round 68

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R57`** — a
  thirty-third consecutive independent confirmation (reviewed commit
  `33e3f4c`, round 66's HEAD, predating round 67's secondary-goals-label
  fix), 0 active code defects. Moved to `exchange/processed/`.
- **Moved to a fresh surface per round 67's recommendation** (Contact
  client JS, `site-config.ts`, JSON-LD generation) — reviewed all
  three, no defects found. Contact's client JS matches the server
  route field-for-field; `pricingPreview`/`pricingPackages` stay in
  sync; US-only/payment-deferral copy is consistent; `structured-
  data.ts`'s JSON-LD builders reuse only real published copy.
- **Found and fixed a real, previously-unflagged gap on an adjacent
  surface:** `src/app/robots.ts` never declared a `Sitemap:` directive,
  even though `src/app/sitemap.ts` already builds a real 20-route
  sitemap — a standard, zero-cost crawler-discovery convention serving
  Owner direction `2026-09-04-14`/vision §17's sitemap/robots/
  indexing-readiness workstream.
- **Fixed:** `robots.ts` now returns `sitemap: \`${SITE_URL}/sitemap.xml\``
  (reusing `layout.tsx`'s existing `SITE_URL` constant), in both index
  and no-index modes.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173: `curl /robots.txt` shows the new `Sitemap:` line alongside the
  existing `Disallow: /`; `/sitemap.xml` unchanged; a 12-route sitewide
  sweep all 200. Committed (`ce28c0e`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed the scratch
  server log.
