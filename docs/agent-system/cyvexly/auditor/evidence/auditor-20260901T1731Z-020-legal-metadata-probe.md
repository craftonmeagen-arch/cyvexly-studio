# IFA-2026-09-01-R20 — legal, accessibility, metadata, and 404 probe

## Custody and scope

- Review: `IFA-2026-09-01-R20` / `auditor-20260901T1731Z-020`
- Heartbeat minute zero: `2026-09-01T17:31:58.542Z`
- Current accepted source at entry: docs-only HEAD `2cd912158e5b7214534f71df5332eedffb8eae9f`; product `src/` tree `d9f3e4a976e08f4acc11307b152bcb388d6885a6` (unchanged from R19 and the `06fbadd` product commit).
- Exact role-owned runtime: `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1731Z-020`, port `5273`; standard guard again failed with managed-permission `UnauthorizedAccessException` writing `.codex/role-state/auditor.active.json`.
- No Builder lock was present at entry. Council listener `5373` remained untouched. Product source/tests and scheduler automation were not edited.

## Methods and results

This is a fresh legal/launch-readiness and focus-navigation method rather than a repeat of R19's visual/Contact pass. The real Codex in-app Browser inspected `/accessibility`, `/about`, `/privacy`, `/terms`, `/services/not-a-real-service`, and `/work/not-a-real-project` at desktop and phone widths. I opened exact Accessibility desktop/phone and custom-404 phone captures, exercised a custom-404 Services → Back route handoff, inspected hydrated metadata on Home/Accessibility/Pricing/Contact/Services and the 404 boundary, and probed the clean alternate Planner origin without workaround when the saved Browser permission rejected it.

### Accessibility statement and responsive boundary — pass

`/accessibility` renders one `main` and one `h1`, named WCAG 2.2 Level AA target copy, an actionable `mailto:hello@cyvexly.com`, and no unnamed links. At requested `390×844`, `scrollWidth` equals the 390px client width with zero overflow; the opened phone render keeps the copy on a protected pale-blue glass field. Browser focus-ring CSS is present on a focused navigation link. A direct Playwright `Tab` traversal from `body` did not advance the active element in this in-app Browser API, so physical keyboard coverage remains unconfirmed rather than being treated as a product failure.

### 404 and recovery truth — pass

`/about`, `/privacy`, `/terms`, `/services/not-a-real-service`, and `/work/not-a-real-project` eventually hydrate the intentional custom `Page not found — Cyvexly Studio` title/body with one `main`, one `h1`, four named recovery links, and zero phone overflow. The cold first hit of the unknown service route showed a short dev-compilation blank before settling after ~3 seconds; a warmed repeat settled within 400ms, so this was recorded as a dev-server compilation artifact, not a product finding. Clicking the custom 404 Services link reached `/services`, and browser Back recovered `/about` with the 404 title.

### Metadata/indexing — existing `CYV-IFA-005` re-confirmed open

Home, Accessibility, Pricing, Contact, and Services all emit `robots: noindex, nofollow` as expected for preview, but no canonical link and no `metadataBase`-resolved origin. `og:image` and `twitter:image` resolve to `http://localhost:5273/opengraph-image?...`; `og:url` is absent. Local `/robots.txt` returns `200` with `Disallow: /`, `/opengraph-image` returns a valid `image/png` (`85215` bytes), and `/sitemap.xml` is `404`. The public-domain/metadata decision remains Owner-blocked; no new finding is assigned.

### Runtime health

HTTP returned `200` for `/`, `/accessibility`, `/opengraph-image`, and `/robots.txt`; intentional legal/invalid routes returned `404`. Browser warning/error logs were empty after warm route traversal. `eslint src` passed with exit `0`.

## Verification limits

The saved Browser permission rejected `http://127.0.0.1:5273/start`; no alternate-origin, storage-clearing, raw-CDP, or policy workaround was attempted. Therefore a true clean no-draft Planner first use remains unconfirmed (`CYV-IFA-009`). Public Render adoption, production canonical/domain, physical keyboard hardware, reduced-motion/Safari/Firefox behavior, and external email remain unconfirmed. The accepted source had no product-code delta from R19; this round's value is the independent legal/metadata/404 and responsive/accessibility surface review required by the Auditor PM enforcement.

## Evidence files

- `auditor-20260901T1731Z-020-runtime-metrics.json`
- `auditor-20260901T1731Z-020-accessibility.png`
- `auditor-20260901T1731Z-020-accessibility-390.png`
- `auditor-20260901T1731Z-020-404-phone.png`
