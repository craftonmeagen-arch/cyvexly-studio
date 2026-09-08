# Cyvexly Current State

**Global round:** 114. **Active product work:** Chunk 7 — HoneyHearted
Functional Storefront, chunk-local round 15, opened under Owner direction
`2026-09-08-19`. Chunk 6 remains open in parallel only for its two required
independent reviews; Chunk 5 remains open only for Owner/account gates.

Round 114 changed method again to Windows High Contrast/forced-colors
adaptability. Proof source `dacec6a` adds a real-Chromium contract at 320px for
selected-filter distinction, real-Tab focus visibility, named controls, width
containment, and representative product, sample, About, and launch routes. Two
initial failures were instrument errors (a hidden desktop CTA and incomplete
accessible-name calculation), then the corrected suite passed locally and
publicly with zero workflow/runtime/network errors. Two opened public captures
match local pixels exactly. Product source remains `000dcd9`; two independent
reviews remain.

Round 113 changed method from focus hardening to storefront-wide text-spacing
adaptability. Proof source `bb327be` applies WCAG-style line, paragraph,
letter, and word-spacing overrides at 320px across eight representative Home,
product, article, sample, About, policy, launch, and recovery states. Local and
public runs remain width-contained with no clipped readable/interactive text;
three opened public captures match local pixels exactly. Product source remains
`000dcd9`; two independent reviews remain.

Round 112 found the untested mobile-store notice lifecycle losing focus after
its invoking menu button became hidden. Accepted/deployed source `000dcd9`
moves focus to the visible menu toggle before the truthful notice opens; a
real-Space-key regression fails on public `d88bfc8` and passes locally and
publicly after deployment. The complete suites and repository gates pass with
zero failures. Two independent reviews remain.

Round 111 moved to a distinct mobile touch-target question after Round 110's
focus methodology audit. The deployed baseline exposed 12 visible standalone
controls below the product's 44px design floor. Accepted/deployed source
`d88bfc8` gives menu, catalog, consent, footer, dialog, and back-to-top actions
44px targets without inflating inline prose links. A real-Chrome regression
fails before and passes all 32 measured controls locally/publicly afterward;
the complete suites and repository gates pass. Two independent reviews remain.

Round 110's wider methodology audit identified a shared focus-lifecycle gap
behind recent one-off fixes: activating any mobile-menu link closed the menu
but left focus inside its hidden DOM, including when the current destination
was reactivated. Accepted/deployed source `49017a3` centralizes Home-route
focus transfer and covers all seven mobile destinations plus same-route
reactivation with real Enter-key input. The regression failed on deployed
`7b9813c`; complete local/public suites, TypeScript, lint (one known evidence
warning), the 53-route build, role setup, and review-lifecycle checks pass.
Two independent reviews remain.

Rounds 100–109 integrated the no-indexed storefront and established its
catalog, content, form, activation, accessibility, navigation, download/print,
and focus-lifecycle proof. Their source identities and complete outcomes are
preserved in the build summary, app debt, and archived active-chunk/handoff
reports.

**Parallel accepted product position:** Round 97 Velora integration source is committed
and pushed at `0ca0504` on `main`; its closeout is `c2f8e8e`.
`https://cyvexly.com/work/velora-dining` and `https://cyvexly.com/velora` are
live; the raw demo returns the explicit no-index response header.
`cyvexly.com` remains fully connected, HTTPS, and canonicalized (verified round
53). `origin/master` is historical.

## Owner launch decisions and remaining gates

The Owner has now confirmed: Cyvexly Studio; LLC structure; Indiana, United
States; United States-only launch market; `cyvexly.com`;
`design@cyvexly.com`; `(317) 572-5780`; logo-led About; no public personal
founder name or portrait; and a studio-origin narrative authorized for review.

The following still require Owner account access, confirmation, or final
approval and must not be invented:

1. exact registered LLC legal name for legal text and later agreements;
2. Resend account creation, sending-domain DNS verification (account-
   specific records Resend generates after the domain is added — see
   `CYVEXLY_APP_DEBT.md` item 2), and `RESEND_API_KEY` entered securely in
   Render — the code path is built, deployed, and tested short of an
   actual send;
3. a GA4 property + Measurement ID (or an explicit no-analytics decision),
   and/or a Google Search Console verification value — both are wired in
   code (dormant) and activate the moment a real value is supplied;
4. review of About/Privacy/Terms drafts, public visual acceptance, and
   final permission to enable search indexing.

Domain/DNS/HTTPS/canonicalization is **done** — verified live round 53, not
merely code-complete. Payment-provider selection and real portfolio
replacement are deliberately tabled. Existing payment claims must be
removed or qualified until supported; existing concepts must remain
unmistakably labeled. Contact/Planner now use real server-side delivery
(not `mailto:`) — see `CYVEXLY_APP_DEBT.md` item 2.

## Working orientation

Use the six current root orientations and CYVEXLY_ROLE_RULES_MAPPING.md. New reviewer
reports and memory are external; read CYVEXLY_REVIEW_INDEX.md and all unread inbox items.
The existing architectural-glass visual baseline is unchanged. Older round proof is in
CYVEXLY_BUILD_SUMMARY.md and the archived pre-migration current state. No new product
round or Owner visual acceptance is claimed by the environment migration.
