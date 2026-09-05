# Cyvexly App Debt — Rounds 32-34 Archive

Archived from `CYVEXLY_APP_DEBT.md` in round 40 to keep that file under its
30720-byte hot-file cap.

## Resolved round 34

- **Fixed `CYV-IFA-012` (Auditor-tracked, open across four consecutive
  external review rounds R22-R25).** `src/app/contact/page.tsx`'s email and
  phone links under "Reach us directly" both used `inline-flex` with no
  block/column wrapper; JSX collapses the whitespace-only text between two
  sibling elements on separate source lines, so the two anchors rendered
  with zero separating space — `design@cyvexly.com(317) 572-5780` — on any
  viewport wide enough to fit both inline (confirmed by the Auditor at
  1440px in all four rounds). Wrapped both `<a>` tags in a
  `<div className="flex flex-col gap-2">` per the Auditor's recommended fix.
  Verified: `tsc --noEmit`, `lint`, and `build` (27 routes) all pass clean;
  grepped real generated `.next/server/app/contact.html` for the two link
  hrefs — confirmed no longer text-adjacent, wrapped in the new flex-col
  container. Also checked `site-footer.tsx`'s own email/phone links (same
  `siteConfig.email`/`phoneHref` source data, so a plausible leftover of the
  same shape) — already each in their own `<li>`, not affected. Opened the
  real dev server in the in-app Browser (this session's screenshot
  compositor is currently functional — see note below) at 1440px, 785px
  (pane default), and 390px: email/phone stack cleanly on separate lines at
  all three, zero console errors, zero horizontal overflow. Stopped the
  manually-started `next start --port 5173` process (and its `next`-binary
  child, the actual port listener) after verification.
- **Session-capability note:** this scheduled/unattended session's in-app
  Browser pane *could* composite and screenshot this round (succeeded after
  one retry, consistent with round 30's finding, inconsistent with the
  original rounds 1-7 hard-limitation record in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`). That file's documented limitation is
  evidently no longer universal for this session type; a future round should
  keep verifying per-round rather than assuming either the old limitation or
  this success is permanent.
- Re-checked for other newly-reachable items: grepped real build output for
  `worldwide`/`hello@cyvexly` (zero matches, still clean from round 29) and
  confirmed `CYV-IFA-005` (metadataBase/OG) remains closed. No other new
  reachable-without-an-Owner-gate defect surfaced in the four unread Auditor
  reports beyond `CYV-IFA-012` — `CYV-IFA-006` (server-side Planner receipt)
  and the DNS/analytics/LLC-name gates all remain genuinely Owner-blocked,
  unchanged from round 33's assessment.

## Resolved round 33

- **Pushed round 32's two local-only commits to `origin/main`** after
  independently re-verifying them this round (`tsc --noEmit`, `lint`,
  `build` all clean) rather than pushing on round 32's own say-so alone —
  `be60862..8c07262` now on `origin/main`.
- **Per-route canonical tags added — closes the last code-only follow-up
  from round 29's item 1.** Added `alternates: { canonical: "/<path>" }` to
  the root layout (`"/"`) and to all 11 static-page metadata exports plus
  both dynamic `generateMetadata` functions (`/services/[slug]`,
  `/work/[slug]`), resolving against the existing `metadataBase`. Verified
  in real production build output: grepped `.next/server/app/**/*.html` for
  `<link rel="canonical"` across the home page, every static route, one
  service-detail route, and one case-study route — all 13 resolve to the
  correct absolute `https://cyvexly.com/...` URL with no duplicates or
  mismatches. `tsc --noEmit`, `lint`, and `build` (27 routes) all pass clean.
  `/start` (the one fully dynamic, non-prerendered route) uses the identical
  code pattern as the verified static/SSG routes and was not independently
  screenshotted this round — same code shape, not a separate unverified
  claim.

## Resolved round 32

- **Content-Security-Policy header added — with a real reachability
  correction, not the nonce recipe originally planned.** The open item this
  resolves (as it read entering this round) suggested a nonce-based
  `script-src` via middleware, the standard Next.js docs recipe. Built it
  first
  (`src/proxy.ts` — Next.js 16 renamed the `middleware.ts` convention to
  `proxy.ts`; the build's own deprecation warning caught this before it
  shipped under the old name), then verified against a real running
  `next start` production server rather than assuming the recipe would just
  work. It would have **silently broken hydration**: most routes here
  prerender statically at build time, so there is no per-request value
  available to nonce Next's own inline hydration scripts. The real generated
  HTML's `self.__next_f.push(...)` scripts ship with no `nonce` attribute at
  all, and one serialized script prop literally reads
  `"nonce":"$undefined"` — under `'strict-dynamic'`, a spec-compliant browser
  refuses every un-nonced inline script, which is nearly all of them on a
  static page. This is exactly the failure mode this item already warned
  about ("getting this wrong silently breaks hydration"); caught by testing
  before shipping, not discovered after.
  Corrected to a static CSP with no middleware/proxy file: added a
  `Content-Security-Policy` entry to `next.config.ts`'s existing
  `securityHeaders` array — `default-src 'self'`, every directive locked to
  `'self'` except `script-src`/`style-src` (`'unsafe-inline'`, required by
  the static-rendering architecture — a real, documented trade-off, not an
  oversight) and `img-src` (adds `blob: data:` for `next/image`/
  `ImageResponse`). No third-party origins are permitted anywhere in the
  policy, consistent with round 31's grep finding that the site has none.
- **Verification:** `tsc --noEmit`, `lint`, and `build` (27 routes, zero
  warnings) all pass. Started the actual production server (`next start`)
  and `curl`ed `/` (static), `/about` (static), and `/start` (the one
  dynamic route) — identical CSP header present on all three via real HTTP
  responses. Opened the real in-app Browser against that running server:
  Home renders with zero console errors; on `/start` (the most
  JS-interactive route — a nine-step client-state form) actually typed into
  a field and clicked "Continue →" — the form advanced to step 2 with new
  fields rendered and zero console errors, proving hydration and
  client-side event handlers work under the policy rather than just that
  pages load.
