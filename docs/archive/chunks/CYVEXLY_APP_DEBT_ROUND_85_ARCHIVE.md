# Cyvexly App Debt — Round 85 archived detail

Moved from `CYVEXLY_APP_DEBT.md` in round 88 to keep that file under its
30,720-byte hot-file cap. A one-line pointer remains in the live file.

## Round 85 — no new defect; structured-data.ts JSON-LD convergence-check

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R76` (51st
consecutive clean confirmation, "PASS WITH COMMENDATION", 0 action
needed — its "Production Domain Connection" gate line is the same stale
wording rounds 77-84 already noted). Moved to `exchange/processed/`.

Ran the standard verification suite first: `tsc --noEmit`/`pnpm run
lint`/`pnpm run build` all clean (zero warnings; same pre-existing
round-42 evidence-script lint warning) on unchanged round-82 source
(`61e0027`).

**Convergence-check, fresh surface (the round-84 handoff's named
candidate):** field-by-field diffed every `structured-data.ts` JSON-LD
builder against the source-of-truth data it describes —
`organizationJsonLd`'s name/phone/email/description against
`siteConfig` and the About page's own "independent"/"fully remote"
copy; `buildServiceJsonLd()`'s `extractStartingPrice()` regex against
all 5 `serviceDetails[slug].package.price` strings ("From $X"/"From
$X/mo" forms); `pricingJsonLd`'s `OfferCatalog` against `pricingPackages`
(including the price-less "Custom system"/"Quoted after discovery" entry
correctly omitting `priceSpecification`); `faqPageJsonLd` against
`faqLibrary`'s 30 Q&As (direct reuse, not a copy — no drift possible).
Then verified live on a real `next start` server (not just source
reading): `/` and `/pricing`'s `Organization` JSON-LD render identical
byte-for-byte; `/pricing`'s rendered `OfferCatalog` shows the exact 5
prices (1800/3500/5800/8500, Custom system correctly price-less);
`/services/business-websites`'s rendered `Service` JSON-LD shows
`lowPrice: 3500` matching Orbit's "From $3,500"; `/faq` renders exactly
30 `Question` entities; `/work/aurora-spaces`'s `BreadcrumbList` matches
the real route trail. **0 defects found** — a genuine negative result
after real source-and-live cross-file investigation, not skipped work.
**Completion:** DONE WITH PROOF (0 defects found; 0 source change).
Cleaned up: stopped the manually-started `next start` listener on port
5173 (verified the real listener PID via `Get-NetTCPConnection
-LocalPort 5173 -State Listen` before killing it, confirmed port clear
afterward); no scratch files created this round.
