# Cyvexly Current State

**Global round:** 98. **Active product work:** Chunk 6 — Velora Capability
Demonstration, chunk-local round 4, opened under Owner direction
`2026-09-07-17`. Chunk 5 remains open in parallel with only Owner/account
gates left; its completed Cyvexly launch work and gates are summarized below.

Round 98 revalidated the deployed Round 97 integration at the public boundary.
The Work entry, case study, demo, images, and sitemap all return `200`; `www`
redirects to the canonical root host; the case study is in the sitemap while
the standalone demo is excluded; and `/velora` returns both meta and response-
header no-index protection. The inherited production Chrome/CDP result and
captures were opened and remain clean across all workflows and 1440/390/320
states. No product defect surfaced, so accepted source remains `0ca0504`.

**Accepted product position:** Round 97 Velora integration source is committed
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
