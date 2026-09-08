# Cyvexly App Debt

## Round 108 — HoneyHearted responsive-menu focus continuity

Accepted/deployed source `1c49c00` fixes breakpoint-driven focus loss from the
open mobile menu. When the layout crosses to desktop, a focused mobile link now
moves to its matching visible desktop link, and the mobile store action moves
to the desktop store action. The new real-Chromium regression failed on the
public baseline and passes locally/publicly after the fix. TypeScript, lint
(one known evidence warning), the 53-route build, and complete suites pass.
Two independent reviews remain the only reachable Chunk 7 debt.

## Round 107 — HoneyHearted free-sample print focus

Accepted/deployed source `9465ae9` fixes the free-sample Print action moving
focus into its 1×1 `aria-hidden` iframe. A new real-Chromium regression failed
on the public baseline (`IFRAME#sample-print-frame`) and passes locally and on
production after removing the unnecessary frame-focus call; the iframe still
contains and invokes the promised printable document. TypeScript, lint (one
known evidence warning), the 53-route build, and complete local/public suites
pass. Two independent reviews remain the only reachable Chunk 7 debt.

## Round 106 — HoneyHearted routed accessibility contract

No new external-review intake existed. Proof source `f4adb32` adds an 18-route
real-Chromium contract for visible H1/heading structure, interactive names,
form labels, ARIA ID references, embedded-image availability, and route-focus
transfer. The initial heading alert was correctly refuted as instrument noise
from decorative `aria-hidden` cover text. TypeScript, lint (one known evidence
warning), the 53-route build, and complete local/public suites pass with zero
failures/errors. Product source remains `165b246`; two independent reviews
remain the only reachable Chunk 7 debt.

## Round 105 — HoneyHearted activation-integration proof

No new external-review intake existed. Proof source `cacc5af` adds real-
Chromium coverage for illustrative-cover notice keyboard open/Escape focus
return, notice-to-launch routing with visible-heading focus, configured store/
product/social/sample destinations, protected HTTPS new-tab attributes, and
the documented local `hh:outbound` event contract. TypeScript, lint (one known
evidence warning), the 53-route build, and the complete local/public suites
pass with zero failures/errors. Product source remains `165b246`; two
independent reviews remain the only reachable Chunk 7 debt.

## Round 104 — HoneyHearted launch-instruction source truth

Accepted and deployed source `165b246` removes two false maintenance claims
from the Owner-facing launch checklist: no nonexistent `app.js` is named, and
the self-contained HTML is no longer described as separate CSS, JavaScript,
image, and sample files. The durable Chrome regression verifies the rendered
instructions. TypeScript, lint (one known evidence warning), the 53-route build,
and the complete local/public suites pass with zero failures/errors. Retained
production proof is under
`builder/evidence/round-104-honey-hearted-source-truth/`; two independent
reviews remain the only reachable Chunk 7 debt.

## Round 103 — HoneyHearted hosted-link and route-focus truth fixes

Accepted source `b47c7cb` corrects the hosted copy-link confirmation and moves
focus into the visible Home destination after detail-to-Home or malformed-hash
recovery. The expanded Chrome suite reproduced all three failures before the
fix and passes afterward locally and on the adopted public route with zero
workflow, runtime, network, or unexpected-origin errors. Two opened targeted
captures and the source-identified local/public result JSONs remain for
independent review. No Owner substitution or external integration changed.

## Round 102 — HoneyHearted navigation-history proof

No new external-review intake existed. Extended the durable Chrome suite with
direct resource deep links, browser Back/Forward restoration and route-heading
focus, plus malformed encoded-hash recovery. The first run surfaced two bad
test expectations, not product defects; after calibrating them to captured
browser truth, proof source `94b7fdb` passes the complete suite with zero
failures or runtime/network errors. Product source remains `4e3f06e`; only the
two independent review rounds remain as reachable Chunk 7 debt.

## Round 101 — HoneyHearted interaction and adversarial proof hardening

Accepted source `4e3f06e` adopts the inherited per-dialog focus restoration and
strict contact-destination validation, then proves combined/empty catalog
recovery, native form correction, adapter failure/retry, safe activation URLs,
all catalog disclosure/provenance states, image failure, zoom-equivalent
reflow, and a real 85-control Chromium keyboard traversal. TypeScript, lint
(one known evidence warning), the 53-route build, and the full rendered suite
pass with zero failures/errors. Only the two independent review rounds remain
as reachable Chunk 7 debt; Owner substitutions remain in
`HONEY_HEARTED_OWNER_NEEDS.md`. The identical suite also passes on the adopted
production route.

## Round 100 — HoneyHearted first integrated functional pass

Accepted product source `8d84b96` makes the imported standalone storefront
available through a no-indexed same-origin route; its malformed contact-subject
chooser is fixed. A durable
rendered suite passes all current catalog, resource/dialog, safe commerce,
download/print, content/policy, preview-form, responsive, accessibility,
storage, and network boundaries. Reachable depth remains in
`CYVEXLY_CHUNK_DEBT.md` item 0. Missing catalog, commerce, identity, messaging,
newsletter, public-destination, legal, and release inputs remain truthfully
bounded in `HONEY_HEARTED_OWNER_NEEDS.md`.

## Round 99 — Velora portfolio metadata and social-preview integration

Checked the new case study's live canonical/Open Graph/Twitter metadata,
BreadcrumbList JSON-LD, fictional/demo disclosure, staged no-index behavior,
and sitemap boundary against source. Rendered and opened the route-specific
1200x630 Open Graph image from an optimized local runtime; its longer Velora
challenge copy is readable and unclipped. TypeScript, lint (one known evidence
warning), and the 52-route build pass. No product defect or product-source
change; two independent reviews remain.

## Round 98 — Velora public deployment integrity

Fresh public HTTP, discovery, security-header, and retained rendered-evidence
checks confirm the Round 97 integration is adopted at `cyvexly.com`: all entry
routes/assets pass, `www` redirects canonically, the case study is in the
sitemap while `/velora` is excluded, and the standalone demo is explicitly
no-indexed. No product defect surfaced. Only Chunk 6's two independent reviews
remain; Chunk 5 gates are unchanged.

## Round 97 — Velora production-path and portfolio integration

Moved Velora's deployable source to `public/velora/index.html`, self-hosted its
illustrative images/fonts, added the no-index `/velora` route, and integrated a
truthful built-concept Work card/case study using real responsive captures.
Accepted source `0ca0504` is pushed and passes typecheck/lint/build plus the
expanded CDP workflow/integration suite with zero browser, network, origin, or
overflow failures locally and on `cyvexly.com`, proving Render adoption.
Remaining Chunk 6 independent-review requirements stay in
`CYVEXLY_CHUNK_DEBT.md` item 0; Chunk 5 gates are unchanged.

## Round 96 — Velora correction/accessibility/provenance proof

Full detail rotated to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_96_ARCHIVE.md` in round 103 for
hot-file headroom. The accepted result remains: correction, keyboard/focus,
reduced-motion, reflow, provenance, and network proof passed with no defect.

## Round 95 — Velora authority reconciliation and first functional pass

Full detail rotated to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_95_ARCHIVE.md` in round 103 to
restore hot-file headroom. The accepted result remains: Chunk 6 opened under
Owner direction `2026-09-07-17`, fictional identity/contact safety and the
rendered hero defect were fixed, and the first durable workflow suite passed.

## Round 94 — Accessibility/Pricing and Contact-control checks (0 defects)

Full detail rotated to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_94_ARCHIVE.md` in round 99 to
restore hot-file headroom. The accepted result remains: Auditor intake
`IFA-2026-09-07-R85` was stale but clean, the Accessibility/Pricing truth
comparison and Contact native-control source check found no defect, and the
49-route validation suite passed on unchanged product source.

## Round 93 — lint-infrastructure fix (untracked `velora/` sub-repo) + Terms/Privacy convergence checks

Round 93's full detail (Auditor `IFA-2026-09-07-R84` disposition, the
`eslint.config.mjs` `velora/**` ignore fix, and the Terms-page/Privacy-
Policy convergence checks — 1 real build-infra defect fixed, 0 product
defects) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_93_ARCHIVE.md` (moved there
round 94 to keep this file under its 30,720-byte hot-file cap; no
history lost).

## Round 92 — no new defect; Accessibility-statement-claims vs. actual rendered behavior (contrast, focus order, skip-link, reduced-motion), doc-cap fix

Round 92's full detail (Auditor `IFA-2026-09-07-R83` disposition,
`CYV-DOC-003` doc-cap fix, and the Accessibility-statement four-check
convergence check — contrast, skip-link/focus order, reduced-motion,
sticky-header focus indicator, 0 defects) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_92_ARCHIVE.md` (moved there
round 93 to keep this file under its 30,720-byte hot-file cap; no
history lost). Round 90's full detail is likewise archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_90_ARCHIVE.md`.

## Round 91 — 0-defect About/Planner convergence checks

Dispositioned clean Auditor intake, confirmed the About page against vision
§6.8 and the no-founder-identity direction, and verified Planner Step 6's real
Tab order. The Browser-pane Return/Space artifact remained disproved by round
81's real CDP evidence. Full detail remains in the Round 91 active-chunk and
Builder-handoff history.

Rounds 81-89's full detail are each archived at their correspondingly
named `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_<N>_ARCHIVE.md` files
(consolidated round 92 to keep this file under its 30,720-byte hot-file
cap; no history lost — one-line outcomes only): 81 Enter/Space
key-synthesis proof gap closed via CDP (confirms real Chromium
Return/Space activates a focused native button; round 80's finding was a
Browser-pane-tool artifact, not a product defect; that archive file also
carries the round-80 pointer forward); 82 real Privacy Policy
IP-disclosure truth-accuracy fix (`19ae224`); 83 Terms/Accessibility/
sitemap/CSP convergence-check, 0 defects; 84 FAQ/pricing/response-time/
About convergence-check + PATH environment fix, 0 defects; 85
structured-data.ts JSON-LD convergence-check, 0 defects; 86 Planner/
Contact per-step copy vs. email-notification field-label
convergence-check, 0 defects; 87 Home pricing-preview Nexus-integrations
truth-precision fix (`c85419f`); 88 Service JSON-LD scope-field target
check + 0-defect service-details.ts/pricingPackages convergence-check;
89 FAQ/Pricing/Home payment-copy convergence-check across three
independent surfaces, 0 defects.

## Round 79 — no new defect; live keyboard/validation verification + rAF proof-instrument refinement

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R70` (45th
  consecutive clean confirmation, reviewed commit `7708964` — round 77's head),
  0 active code defects, "PASS WITH COMMENDATION" including its own live CDP
  re-verification of the round-76 video. Same stale "Production Domain
  Connection" gate wording rounds 77-78 already noted (domain verified live
  since round 53). No Builder action required; moved to `exchange/processed/`.
- **Completed round 78's recommended live keyboard-only Tab traversal of the
  header nav / Contact form / Planner** via the manual-start-then-attach
  Browser-pane workaround (real compositing screenshot + real native `Tab`
  confirmed working again this round). Real click + `Tab` sequence through
  the Home hero traversed hero CTA → Explore services → the round-76 "how it
  works" video trigger (a focusable `role="button"` `<div>` — confirmed it
  carries `aria-label="Open the Cyvexly process video in a larger view"`, not
  a defect) → Work cards, in correct visual/DOM order. On `/contact`, a real
  native `Tab` sequence from a real click on Name traversed Name → Email →
  Phone → Company → Topic → Message → Consent → Send message, each with
  correct `<label for>` association; the honeypot field
  (`contact-company-website`) is confirmed `tabIndex="-1"` and correctly
  unreachable by keyboard.
- **Found and correctly diagnosed a proof-instrument gap, not a product
  defect.** A real click on Contact's "Send message" with an empty form set
  `aria-invalid`/`aria-describedby`/the `role="alert"` summary correctly, but
  focus stayed on the button instead of moving to the first invalid field as
  `contact-form.tsx` intends (`form.querySelector('[aria-invalid="true"]')
  ?.focus()`, wrapped in `requestAnimationFrame`). Root-caused before
  concluding it was a bug: a direct rAF probe in the same Browser-pane session
  (`requestAnimationFrame` counter after a real 3s wait) stayed at `0` even
  though `document.hidden` read `false` and compositing/Tab-focus worked —
  this is the same rAF-suppression limitation `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  documented at round 6, now shown to be an *independent* degradation from
  compositing/keyboard (one can work while the other stays suppressed; they
  are not one unified capability). Verified the real product behavior instead
  via round 8's local-headless-Chrome/CDP method, where `requestAnimationFrame`
  genuinely fires: a real DOM click on Contact's submit button with an empty
  form correctly moved focus to the Name input (`aria-invalid="true"`,
  `aria-describedby="name-error"` → "Please enter your name."). **No product
  defect** — confirmed working as designed via a stronger instrument.
- **Planner Step 1, same method:** a real native click (headless-Chrome CDP)
  on "Continue →" with every field empty correctly moved focus to `fullName`
  (`aria-invalid="true"`, `aria-describedby="fullName-error"`, 3 real
  `role="alert"` messages), then real native `Input.dispatchKeyEvent` `Tab`
  presses traversed workEmail → contactMethod → roleTitle → companyName →
  country → otherApprovers in correct order with correct labels — reconfirms
  round 8's original finding still holds on current source (commit
  `94048c4`), no regression.
- **Verified:** no source file changed this round (verification/proof-gap
  closure only), so `tsc`/lint/build were not re-run (round 78's clean
  results stand unchanged).
- Cleaned up: stopped the manually-started `next dev` listener on port 5173
  by verified real listener PID; stopped the round-owned headless-Chrome
  instance by matching its unique `--user-data-dir` command-line substring
  (not by process name — several unrelated `chrome.exe` processes were
  running); removed the unique Chrome profile directory, dev-server log, and
  both scratch CDP helper scripts from the OS temp root and session
  scratchpad; closed the Browser pane tab.

Round 78's full detail (environment finding — the manual-start-then-attach
Browser-pane workaround is reachable but intermittent; and the round-76
autoplay proof-gap closure) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_78_ARCHIVE.md` (moved there
round 81 to keep this file under its 30,720-byte hot-file cap).

Round 77's full detail (Auditor `IFA-2026-09-07-R68` disposition, a
`service-details.ts`/`site-config.ts` field-by-field diff, and a
source-level accessibility scan — 0 defects found) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_77_ARCHIVE.md` (moved there
round 80 to keep this file under its 30,720-byte hot-file cap).

Round 76's full detail (Home "how does it work?" video build + the
`backdrop-filter`/`position:fixed` containing-block bug fix; its named
`document.hidden` proof gap was independently closed round 78) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_76_ARCHIVE.md` (moved there round
79 to keep this file under its 30,720-byte hot-file cap; also preserved in
`CYVEXLY_ACTIVE_CHUNK.md`'s "Round 76 report" and `CYVEXLY_BUILD_SUMMARY.md`).

Round 75's full detail (brand-color-token sitewide purity fix +
service-details/site-config pricing adversarial diff, 0 defect found)
is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_75_ARCHIVE.md` (moved there
round 85 to keep this file under its 30,720-byte hot-file cap).

Round 74's full detail (extended color-token/response-time audit, 0 new
defects) is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_74_ARCHIVE.md` (moved there
round 85 to keep this file under its 30,720-byte hot-file cap).

Rounds 43-74's full detail are each archived at their correspondingly
named `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND(S)_<N>_ARCHIVE.md`
files (consolidated round 84, then round 85 for round 74, to keep this
file under its 30,720-byte hot-file cap; no history lost — one-line
outcomes only): 43 sitewide Organization JSON-LD; 44-45 FAQPage/
BreadcrumbList JSON-LD; 46 removed dead scaffold SVGs + Web App
Manifest; 47 Apple touch icon; 48 raster manifest icons +
print-legibility fix; 49 error boundaries + viewport theme-color; 50
COOP/CORP headers + security.txt; 51 sitewide OG/Twitter metadata; 52
per-route OG images; 54 per-slug OG images; 55 Service JSON-LD; 56
OfferCatalog JSON-LD; 57 meta-description trims; 58 `lang="en-US"` +
hot-file-cap fix; 59 Home meta-description fix; 61 rate-limiter
memory-pruning fix; 62 dormant Cloudflare-bypass gate; 63 timing-safe-
comparison fix; 64 30th audit confirmation, clean re-review; 65
request-body-size cap; 66 Planner spectrum data-loss fix; 67 Planner
secondary-goals-label fix; 68 `robots.ts` missing `Sitemap:` fix; 69
Home FAQ CMS-claim qualification; 70 text-cursor/editable-copy fix; 71
`/work` dead-end filter-pill fix + hot-file-cap fix; 72 Planner Review-
page validation-bypass fix; 73 case-study/artwork color-token staleness
fix; 74 extended color-token/response-time audit (0 new defects).

## Open

1. **RESOLVED round 53 (verified live, not a code change).** This item's
   text below claimed the DNS/Render connection was still open and required
   Owner account access. Round 53 (interactive session, Owner direction
   `2026-09-05-15`) checked the actual production domain directly — no
   account access needed to observe live DNS/HTTP/TLS behavior — and found
   it fully connected: `http://cyvexly.com` and `http://www.cyvexly.com`
   both 301 to `https://cyvexly.com/`; `https://www.cyvexly.com` 301s to
   the apex; a valid Google Trust Services certificate is active (the
   domain sits behind Cloudflare in front of the Render origin, confirmed
   via `Server: cloudflare` plus `x-render-origin-server: Render` response
   headers); `robots.txt`, `sitemap.xml`, and per-route canonical/og tags
   all resolve correctly on the live production domain; round 52's per-
   route Open Graph images are already deployed and live. No reachable
   Builder work remains on domain/HTTPS/canonicalization. **Original text,
   preserved for history:** "Production domain is confirmed; the account-
   bound DNS/Render connection remains open. Round 29 closed the reachable
   code-side metadata gap. The Owner confirmed `cyvexly.com`. The domain
   still needs Render custom-domain setup, DNS replacement of the
   Namecheap parking destination, HTTPS verification, root/`www` canonical
   behavior, and public route proof — these require account access this
   Builder does not have."
   **Round 29 update:** `metadataBase` is now set to `https://cyvexly.com` in
   `src/app/layout.tsx`, and a real `src/app/sitemap.ts` (App Router
   `MetadataRoute.Sitemap` special file) now enumerates all 17 built public
   routes (static pages plus every service-detail and case-study slug) with
   the production origin. Verified via a real production `pnpm run build`:
   the generated `.next/server/app/sitemap.xml.body` lists all 17 absolute
   `https://cyvexly.com/...` URLs, and `.next/server/app/index.html`'s baked
   `og:image`/`twitter:image` meta tags now resolve to
   `https://cyvexly.com/opengraph-image?...` instead of the previous
   `http://localhost:3000` fallback — the long-standing domain-blocked
   `metadataBase` warning is gone from the build output. **Round 33:** added
   `alternates: { canonical: ... }` to the root layout and all 13 static/
   dynamic route metadata exports (every `export const metadata`/
   `generateMetadata` in `src/app`), closing the last code-only follow-up
   named above. Staged indexing behavior (`NEXT_PUBLIC_SITE_INDEXABLE`)
   is unchanged and still defaults to no-index; robots.txt already gates on
   the same env var. This closes the code-only portion of item 1 completely;
   the DNS/Render account connection is still the real remaining blocker.
2. **RESOLVED round 53 (code-complete; delivery untested pending Owner
   account).** Contact and Planner now both submit server-side (Next.js
   Route Handlers, `src/app/api/contact/route.ts` and
   `src/app/api/planner/route.ts`) through Resend, per Owner direction
   `2026-09-05-15`. Internal notification goes to `design@cyvexly.com`
   with Reply-To set to the visitor's email; a best-effort visitor
   confirmation is sent with Reply-To `design@cyvexly.com`. Server-side
   validation mirrors every client-side required-field rule; the honeypot
   is re-checked server-side; a per-IP in-memory rate limiter (5/15min) is
   new defense-in-depth; all text is sanitized (control-character/length
   caps, single-line header-injection defense) before use in email
   subjects/headers/bodies. `src/lib/mailer.ts` centralizes this. No secret
   is readable from client code — `RESEND_API_KEY` is read only inside the
   two Node-runtime route handlers.
   **What remains — a real Owner account, not a Builder-reachable gap:**
   1. Create a Resend account (resend.com).
   2. Add `cyvexly.com` (or a subdomain) as a sending domain in Resend and
      add the DNS records Resend generates (SPF/DKIM, account-specific —
      only available after adding the domain) in Namecheap; verify in
      Resend.
   3. Create an API key in Resend and add it to Render's environment
      variables as `RESEND_API_KEY` (a secret — never place it in source,
      docs, or chat). Optionally set `RESEND_FROM_EMAIL` to override the
      default `Cyvexly Studio <notifications@cyvexly.com>`.
   4. Redeploy (Render redeploys automatically on push; setting an env var
      alone also triggers a redeploy).
   **Verified without a real account:** `tsc`/`lint`/`build` clean; a real
   running server with no `RESEND_API_KEY` returns 503 `not-configured`
   (confirmed live on production, not just locally); every required-field
   validation and the honeypot rejection verified via real HTTP requests on
   both routes; the rate limiter verified by exhausting it live; a
   deliberately invalid API key produced a real Resend API auth failure,
   caught as a graceful 502 rather than a crash; a real browser-driven
   (not synthetic) submission on production shows the intended error UI
   and preserves the visitor's entered data. Actual message delivery is
   the one thing that cannot be verified without step 1-3 above.

3. **Dormant round-62 scaffolding for the residual Cloudflare-bypass gap
   named under "Resolved round 60" above — activation is an Owner/account
   step, not a Builder-reachable one.** `isTrustedOrigin()`
   (`src/lib/mailer.ts`), wired into both `/api/contact` and
   `/api/planner`, always passes today (no behavior change) and starts
   rejecting (403) any request missing a matching `x-cf-origin-secret`
   header once `CF_ORIGIN_SECRET` is set in Render. **Exact Owner steps
   to activate:** (1) In the Cloudflare dashboard for `cyvexly.com`: Rules
   → Transform Rules → create a "Modify Request Header" rule matching all
   incoming requests, action "Set static", header name
   `x-cf-origin-secret`, value = a long random secret you choose (this is
   not an API key or account credential — treat it like a password, don't
   paste it into chat or source). (2) In Render, on the `cyvexly-studio`
   web service: add environment variable `CF_ORIGIN_SECRET` set to that
   exact same value, then redeploy (Render also auto-redeploys on env
   changes). Once both match, direct requests to
   `cyvexly-studio.onrender.com` that skip Cloudflare have no way to learn
   or forge the secret and are rejected at the origin. Verified round 62:
   dormant (unset) and activated (set, matching/mismatched/missing header)
   behavior both proved live on a real `next start` server; zero
   regressions across a 14-route sweep. **Round 63:** hardened the secret
   comparison itself from `===` to `timingSafeEqual` (a plain string
   comparison is a timing side-channel once this gate is activated); same
   dormant/activated behavior reverified, no functional change.

Rounds 40-42 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_40_42_ARCHIVE.md` in round 58
to keep this file under its 30720-byte hot-file cap: Contact-form honeypot
fix plus first live Planner-honeypot verification (round 42), WCAG 1.4.10
reflow/zoom sweep with no defect found (round 41), and the Planner
step-advance scroll/focus/live-region fix (round 40).

Rounds 36-39 detail archived to docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_36_39_ARCHIVE.md in round 43 to keep this file under its 30720-byte hot-file cap: skip-to-main-content fix (round 39), full-site console/network diagnostics sweep (round 38), performance spot-check (round 37), and live production-deployment parity confirmation (round 36).

## Resolved round 35

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_35_ARCHIVE.md` in
round 42 to keep this file under its 30720-byte hot-file cap: dispositioned
`IFA-2026-09-05-R26` (stale `CYV-IFA-012` re-verification), a full
release-QA sweep (contrast, worldwide/payment-claim grep, sitemap/robots,
canonical tags, link crawl, security headers, live `/about` render), an
in-app-Browser-pane hidden-state tooling note, and corrections to two stale
`CYVEXLY_CHUNK_DEBT.md` entries.

## Resolved rounds 32-34

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_32_34_ARCHIVE.md` in
round 40 to keep this file under its 30720-byte hot-file cap: `CYV-IFA-012`
contact-link collision fix (round 34), per-route canonical tags (round 33),
and the corrected static Content-Security-Policy header (round 32, after
catching that the textbook nonce recipe would have broken hydration on this
mostly-static route architecture).

Round 31 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_31_ARCHIVE.md` in round 38
(security headers added; first full 27-route release-QA sweep).

## Resolved round 30

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_30_ARCHIVE.md` in
round 36 to keep this file under its 30720-byte hot-file cap: the built and
verified About page (`src/app/about/page.tsx`), Privacy Policy and Website
Terms drafts (`src/app/privacy`, `src/app/terms` — both still carry a
"Draft under review" notice pending the exact LLC name and Owner review),
and a fixed `sitemap.ts` omission (About/Privacy/Terms were missing from
`staticRoutes`).

- **Environment fix, documented for the next agent — still an active
  per-session workaround, kept inline rather than archived.** This Windows host's
  Node.js 24.19.0 install
  (`C:\Users\Tcraf\AppData\Local\Programs\NodeJS\node-v24.19.0-win-x64`) and
  the global `pnpm` shim (`%APPDATA%\npm`) are registered in the **User**
  PATH environment variable, but the shell processes this tool session
  spawns do not inherit that PATH (`node`/`pnpm` were both "not recognized"
  until fixed). Workaround used this round: prepend both directories to
  `$env:Path` at the start of each PowerShell tool call that needs
  node/pnpm/next (per-call, since shell state does not persist between
  calls in this harness). This is a session/harness PATH inheritance gap,
  not a missing install — do not reinstall Node or edit the real PATH
  variable to "fix" it.

## Resolved round 29

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_29_ARCHIVE.md` in
round 35 to keep this file under its 30720-byte hot-file cap: public
contact-identity replacement (`design@cyvexly.com`/`(317) 572-5780`
sitewide), the United States-only truth audit (removed stale
worldwide/international/payment-method claims), and the code-only
`metadataBase`/`sitemap.xml` fix (see item 1 above).
