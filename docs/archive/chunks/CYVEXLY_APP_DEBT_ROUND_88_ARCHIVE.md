# Cyvexly App Debt — Round 88 Archived Detail

Archived round 90 to keep `CYVEXLY_APP_DEBT.md` under its 30,720-byte
hot-file cap. Moved verbatim, no content lost.

## Round 88 — no new defect; Service JSON-LD scope-field and service-details.ts/pricingPackages content convergence-check

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R79` (54th
consecutive clean confirmation per the Auditor's own count, "PASS WITH
COMMENDATION", reviewed commit `f331746` predating round 87's fix, 0
Builder action needed — its one advisory note, proactively rotating
`CYVEXLY_NEXT_BUILDER_HANDOFF.md` in round 87, was already satisfied by
round 87's own rotation before this report published). Moved to
`exchange/processed/`.

Ran the standard verification suite first: `pnpm exec tsc --noEmit`
clean, `pnpm run lint` clean (same pre-existing round-42 evidence-script
warning), `pnpm run build` clean, on unchanged round-87 source
(`74367fa`).

**Convergence-check, fresh surface (the round-87 handoff's named
candidate):** the round-87 handoff suggested diffing `structured-data.ts`'s
`Service` JSON-LD against each `/services/[slug]` page's own rendered
scope list. Reading `buildServiceJsonLd()` (`src/lib/structured-data.ts`)
found it emits only `serviceType`/`name`/`description`/`url`/`provider`/
`areaServed`/`offers.lowPrice` — by design it carries no scope/feature
list at all (no `hasOfferCatalog`/`itemOffered`), so there is no
scope-list field capable of drifting from the page's rendered content;
confirmed live via a real `next start` server that no service-detail
route's rendered JSON-LD contains `hasOfferCatalog` or `itemOffered`.
Since the originally-suggested comparison has no target, extended the
check to the next most relevant surface instead: `service-details.ts`'s
`included`/`package.note`/`faqs` prose for all 5 services against
`site-config.ts`'s `pricingPackages`/`carePlans` `scope` arrays and
prices. Found the `included` lists are deliberately generic per-category
descriptions (not restated package-specific counts), so no numeric claim
exists to contradict; every specific cross-reference that does exist
matches exactly (Orbit FAQ "up to seven core pages" = Orbit `scope`'s
"Up to 7 core pages"; Nexus FAQ "includes a migration allowance" = Nexus
`scope`'s "Content migration allowance"; Commerce FAQ "initial catalog
allowance" = Commerce `scope`'s "Initial catalog allowance"); all 5
`package.price`/`lowPrice` pairs match their `pricingPackages`/
`carePlans` source figures exactly (3500/5800/1800/8500/99). **0 defects
found** — a genuine negative result after real source-and-live
cross-file investigation, not skipped work.
**Verified live:** rebuilt production build clean; started a real `next
start` server on port 5173; fetched all 5 `/services/[slug]` routes and
confirmed each rendered `Service` JSON-LD's `description` matches its
source `summary` exactly and `offers.lowPrice` matches
(3500/5800/1800/8500/99); full 20-route sweep (all static + all 5
service-detail + all 3 case-study routes), 20/20 return 200.
**Completion:** DONE WITH PROOF (0 defects found; 0 source change).
Cleaned up: stopped the manually-started `next start` listener on port
5173 by its verified real listener PID (`Get-NetTCPConnection -LocalPort
5173 -State Listen`), confirmed port clear afterward; removed the one
scratch server log from the OS temp root.
Rotated this file (archived round 85's inline detail to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_85_ARCHIVE.md`, kept a
one-line pointer) to restore hot-file headroom ahead of adding this
round's entry.
