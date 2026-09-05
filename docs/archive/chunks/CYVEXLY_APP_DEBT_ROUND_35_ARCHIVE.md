## Resolved round 35

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R26`.** Its one finding
  (`CYV-IFA-012` "STILL OPEN") was re-verified against pre-fix commit
  `bdf0263` (round 33's HEAD, before round 34's `0afb789` fix landed) — the
  report itself names that source commit. Confirmed via real DOM measurement
  on the current running app (`getBoundingClientRect()` on both `<a>` tags
  under "Reach us directly": email at `y:233-261`, phone at `y:269-297`,
  identical `x`/width, no overlap) that the fix is genuinely present in
  current `main`. This is stale evidence from a superseded review round, not
  a new or unfixed defect. Moved to
  `website-independent-review/exchange/processed/`.
- **Full release-QA sweep, first since round 31's (3 rounds of narrow code
  changes since: CSP round 32, canonical tags round 33, contact-link fix
  round 34).** `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build`
  (27 routes, zero warnings) all pass clean. Grepped generated
  `.next/server/app/**/*.html` for `worldwide`, `hello@cyvexly`, payment
  brand names (Venmo/PayPal/Apple Pay/Google Pay/ACH/bank wire/installment):
  zero matches. The only `founder` match is the honest "no founder
  mythology" disclosure on `/about`. `sitemap.xml` lists all 20 static/SSG
  routes; `robots.txt` still correctly disallows all (no-index preview gate
  unchanged). Every route has exactly one `<link rel="canonical">`; every
  route has `noindex` except Next's own `_global-error` fallback (expected,
  no shared layout — same as round 31's finding). A Node link-crawl script
  found zero broken internal navigation hrefs (the only non-route matches
  were static asset/preload links and `/`, all valid). Started the real
  production server (`next start --port 5173`) and `curl`ed `/` and
  `/start`: all 6 security headers (including CSP) present and identical;
  `/non-existent-probe-404-check` returns 404; `/sitemap.xml` and
  `/robots.txt` return 200 with correct content types. Drove the real
  in-app Browser against the running server for `/about`: real page text
  and zero console errors confirm genuine rendered content (not a 404),
  contradicting `CYVEXLY_CHUNK_DEBT.md`'s stale item 1 — see that file's
  correction. **No new reachable-without-an-Owner-gate defect found.**
  Chunk 5's remaining scope is unchanged: DNS/domain connection, real
  email-provider delivery, analytics/Search Console ownership, and exact
  LLC name all still require Owner account access or a provider decision.
- **Session/tooling note — this round's in-app Browser pane went from
  composited (real 800×455 screenshots, matching real layout, for the first
  several actions) to `document.visibilityState === "hidden"` /
  `window.innerWidth === 0` partway through the round** (after a
  `computer{action:"scroll_to"}` call, a `resize_window{preset:"desktop"}`
  call, and several `navigate` calls in sequence — exact trigger not
  isolated). `tabs_context` explicitly reported "the Browser pane is
  currently hidden"; `tabs_select` fronting the tab did not restore
  `innerWidth`/visibility. This is the same root-cause family documented in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md` (rounds 1-7): when hidden, the
  renderer's layout/compositor pipeline stops updating, so screenshots
  freeze on a stale frame and layout APIs return 0 — not a product defect.
  Unlike rounds 1-7 (hidden for the entire session) and rounds 29-34 (fully
  composited for the entire session), **this round changed state
  mid-session** — new information for the tools file. Switched to
  `get_page_text`/`read_console_messages`/`javascript_tool`
  (`getBoundingClientRect`/`getComputedStyle`), which the tools file already
  documents as reliable independent of compositing, and which is what
  produced the CYV-IFA-012 re-verification evidence above. A future round
  should keep verifying per-round rather than assuming a fixed state for
  the whole session.
- **Corrected two stale entries in `CYVEXLY_CHUNK_DEBT.md`** (About/Privacy/
  Terms 404 claim, OG-image domain-block claim) that no longer matched
  current source — see that file for the correction and evidence.

