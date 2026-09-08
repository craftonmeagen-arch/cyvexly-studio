# Cyvexly App Debt

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

Expanded `velora/smoke.mjs` through real invalid→corrected form paths,
keyboard tabs, dialog/mobile focus return, reduced motion, 320px reflow,
illustrative-image fallback/provenance, noindex/form boundaries, and allowed
network origins. Accepted source `2e79c45` passed with zero failures or
unexpected requests; opened captures remained visually sound. Parent
typecheck/lint/build passed. No product defect surfaced; remaining Chunk 6
integration/review work stays in `CYVEXLY_CHUNK_DEBT.md` item 0.

## Round 95 — Velora authority reconciliation and first functional pass

Opened Chunk 6 from Owner direction `2026-09-07-17`. Corrected Velora's
fictional identity and contact safety, then found/fixed a real rendered hero
layout defect. Added `velora/smoke.mjs`; its desktop/mobile run passed every
primary demo workflow with no overflow or runtime/network errors. The parent
Cyvexly app passed typecheck/lint/build. Open Velora depth is tracked in
`CYVEXLY_CHUNK_DEBT.md` item 0. This work does not resolve or change Chunk 5's
exact-LLC-name, Resend-account, analytics/search-ownership, legal-approval, or
final-indexability Owner gates.

## Round 94 — Accessibility-statement-vs-Pricing convergence check (0 defects)

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R85` (60th
consecutive clean confirmation, "PASS WITH COMMENDATION", milestone note
"historic benchmark"). **Stale on arrival:** evaluated head `0afe6b3`
(round 92's head, predating round 93's own lint fix and two convergence
checks). No new finding to disposition beyond what round 93 already
addressed; `activeDocumentationDebt` is empty. Moved to
`exchange/processed/`.

Ran the standard verification suite (round-84 `PATH` fix applied first):
`pnpm exec tsc --noEmit` clean, `pnpm run lint` clean (only the
pre-existing round-42 evidence-script warning), `pnpm run build` clean
(49/49 routes) — unchanged round-93 source.

**Convergence-check, fresh surface (round 93's handoff-named
candidate):** diffed the Accessibility statement's
(`src/app/accessibility/page.tsx`) "see Pricing" cross-reference — "Every
Cyvexly Studio project includes an accessibility target as standard
scope — see Pricing. Deeper accessibility audits and remediation beyond
that baseline are available as a scoped add-on." — against the actual,
current Pricing page content (last checked this specific way at round
35, before several Pricing rebuilds). **0 defects found:**
`site-config.ts`'s `projectIncludes` array (rendered on Pricing under
"What's included in every project", confirmed via
`grep`/`pricing/page.tsx` line 230) contains "Accessible interaction and
content standards target" verbatim-equivalent to the standard-scope
claim; `addOns` (rendered under Pricing's add-ons list, line 253/266)
contains "Accessibility audit / remediation beyond package scope" —
matches the add-on claim exactly. Cross-checked the FAQ's "Do you follow
accessibility standards?" answer against the Accessibility page's own
target list: consistent (WCAG 2.2 AA, keyboard operability, contrast,
focus, error messages all named in both places).

**Second check, source-level (native-control keyboard operability):**
reviewed the handoff's other named candidate — Contact's topic `<select>`
and consent checkbox, "never isolated from the rest of the form in prior
Tab-traversal passes." Read `contact-form.tsx` directly: both are plain
native HTML controls (`<select id="topic">` / `<input id="consent"
type="checkbox">`) with correct `<label htmlFor>` wiring, no custom
`role`, `tabIndex`, or keydown override on either — unlike the Planner's
custom `StatusRow` toggle-group (the actual subject of rounds 80/81/91's
real key-synthesis investigation), these two rely entirely on the
browser's built-in native operability, which round 79's live CDP Tab
traversal of this exact page already exercised in visual/DOM order
(Name → Email → Phone → Company → **Topic** → Message → **Consent** →
Send message, "each with correct `<label for>` association"). Attempted
a fresh live check via the Browser pane first (`preview_start`/
`navigate` to a manually-started `next dev` on port 5173 succeeded, but
`document.hidden`/`document.hasFocus()` read `true`/`false` and
`read_page` returned an empty 0×0 tree — the same non-compositing
limitation `CYVEXLY_TOOLS_AND_CAPABILITIES.md` documents as intermittent
for this session type); did not escalate to the local-headless-Chrome/CDP
method given native controls have no product-side keyboard logic to
verify beyond what round 79 already proved on this page. **0 defects
found — a genuine negative result**, not a proof gap requiring
escalation (no custom behavior exists here to test).

**Completion:** DONE WITH PROOF (0 defects found across both checks; 0
source change). Cleaned up: stopped the manually-started `next dev`
listener on port 5173 by its verified real listener PID
(`Get-NetTCPConnection -LocalPort 5173 -State Listen`), confirmed port
cleared; closed the Browser pane tab; removed the scratch dev-server log
from `/tmp`.

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

## Round 91 — no new defect; About-page-vs-vision §6.8 convergence-check + genuine in-pane Tab traversal of Planner Step 6

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R82` (57th
consecutive clean confirmation, "PASS WITH COMMENDATION", evaluated head
`768d84a` — round 89's docs-only HEAD — 0 Builder action needed beyond
intake; its one advisory note, `CYVEXLY_APP_DEBT.md` headroom, was already
satisfied by round 90's own rotation before this report published; it also
independently confirmed the untracked `velora/` directory is a separate
sub-project with its own `.git`/orientation, not Cyvexly product-source
contamination). Moved to `exchange/processed/`.

Ran the standard verification suite (round-84 `PATH` fix applied first):
`pnpm exec tsc --noEmit` clean, `pnpm run lint` clean (same pre-existing
round-42 evidence-script warning), `pnpm run build` clean, on unchanged
round-87 source (`cf14cd1`, round 90's docs-only HEAD).

**Convergence-check #1, fresh surface (round 90's handoff-named
candidate):** diffed the About page (`src/app/about/page.tsx`) against
`CYVEXLY_VISION_PLAN.md` §6.8's authorized studio-origin draft and
required-content list, and against Owner direction `2026-09-04-14`'s
no-founder-identity requirement. **0 defects found** — the "Why Cyvexly
exists" paragraph matches the §6.8 Owner-review draft word-for-word;
`aboutValues` (Clarity/Originality/Practicality/Ownership/Continued care)
matches §6.8's required five values exactly; every other required-content
item (logo image not a founder portrait, origin story, working
style/remote-US, capabilities/collaborator model, tool mentions framed
for compatibility only, availability/response-time, CTA) is present; no
founder name, biography, pronouns, team, or photo appears anywhere on the
page.

**Convergence-check #2, fresh surface (round 90's handoff-named
candidate):** a genuine live in-Browser-pane (not CDP) keyboard pass on
the Planner Step 6 `StatusRow` toggle-group component — untried via real
in-pane `Tab`/`Return`/`Space` since round 7's original audit. Started a
real `next dev` server, seeded a `localStorage` draft at `step: 6`,
real-clicked the "Logo: Ready" button (`aria-pressed` → `true`), then used
real `computer{action:"key"}` presses. **Real `Tab` correctly moved focus**
across all four buttons in a row and into the next row in visual/DOM
order (`Logo: Ready` → `In progress` → `Need help` → `Not sure` →
`Brand colors / type / guidelines: Ready`), confirming correct focus order
for this exact component in-pane for the first time. **Real `Return`
and `Space` did not toggle the focused button's `aria-pressed` state** —
re-confirms round 80/81's already-closed finding (this Browser pane's own
`computer{action:"key"}` tool doesn't reach Chromium's native
Return/Space button-activation pipeline, while `Tab`'s focus-traversal
pipeline works) as a tool artifact, not a product defect or regression —
consistent with round 81's independent CDP proof that real Chromium
Return/Space does activate a focused native `<button>`. **No product
defect found; no source change** — a genuine negative result plus a
proof-gap re-confirmation, matching round 81's disposition of the same
tool limitation.
**Completion:** DONE WITH PROOF (0 defects found across both checks; 0
source change). Cleaned up: cleared the seeded `localStorage` draft,
closed the Browser pane tab, stopped the manually-started `next dev`
listener on port 5173 by its verified real listener PID
(`Get-NetTCPConnection -LocalPort 5173 -State Listen`), confirmed port
clear afterward; removed the scratch server log from the OS temp
scratchpad.
Rotated this file (archived round 89's inline detail to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_89_ARCHIVE.md`, kept a
one-line pointer) to restore hot-file headroom ahead of adding this
round's entry.

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
