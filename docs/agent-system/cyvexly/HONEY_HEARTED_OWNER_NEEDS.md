# HoneyHearted Owner Needs

**Purpose:** Keep external inputs visible without blocking Team Two Website
Builder work. Use safe, clearly disclosed placeholders or local demonstration
behavior until the Owner supplies or approves each item. Never place secrets in
this file.

## Production handoff — 2026-09-09

The initial standalone-production setup is complete and must not be reopened:

- accepted documentation tip `f6d7a05` is deployed from the private
  repository, with application implementation baseline `0d0a05e`;
  `craftonmeagen-arch/Honeyhearted` repository;
- `honeyhearted.org` and `www.honeyhearted.org` are live through Render and
  Namecheap;
- Render has a 1 GB persistent disk mounted at `/var/data`, and HoneyHearted
  uses `/var/data/honeyhearted/content.json` for durable content;
- Clerk production is configured for `honeyhearted.org` with Invite-only
  access, the approved owner user was created directly, and the configured
  owner user ID is installed in Render; and
- an unauthenticated visit to `/owner` reaches the production Clerk sign-in
  flow without exposing owner controls.

Do not ask the Owner to repeat GitHub, Render, disk, DNS, or initial Clerk
setup. Because the Owner directly created the approved production user
`craftonmeagen@gmail.com`, no Clerk invitation email is expected.

The remaining authentication closure check is manual: the Owner signs in at
`https://honeyhearted.org/owner` without sharing a password or verification
code. After the Owner confirms that the browser session is authenticated, Team
2 may continue verification from that session and record the observed owner
dashboard and durable-write behavior. Never request, receive, store, or
automate the Owner's password, verification code, or other login credential.

The existing Clerk server secret must be rotated because it was exposed during
prior dashboard inspection. This is pending Owner action and explicit immediate
authorization; do not create, delete, reveal, or replace a key before that
authorization. EduAILenz and Mudoinkle source and portfolio work presently
requires no Owner credential and should continue safely while this check is
pending.

For authenticated build verification, the Owner created a temporary production
Clerk user named `builder@test.com`. Team 2 supports it only through an optional
protected exact-ID allowlist while retaining the real Owner as the required
primary identity. **Configured:** after immediate Owner confirmation, its exact
ID was added only to Render's protected allowlist and the deployment succeeded;
the ID is intentionally absent from records. Never authorize by email, record
the temporary Clerk ID, or handle its password or verification code. When work
finishes, remove the temporary ID from Render's protected allowlist, redeploy,
verify that it is denied while the Owner still succeeds, and then let the Owner
delete the Clerk account.

## Known later substitutions

- Standalone source: the Owner-designated private repository is
  `https://github.com/craftonmeagen-arch/Honeyhearted`. **Completed:** the
  standalone Next.js application is built, tested, pushed, and deployed at
  accepted documentation tip `f6d7a05` and application implementation baseline
  `0d0a05e`. Local checkout:
  `C:\app projects\Honeyhearted`.
- Purchased domain: the Owner confirmed `honeyhearted.org` in direction
  `2026-09-08-25`. **Completed:** the Render deployment, Namecheap DNS,
  `honeyhearted.org` and `www.honeyhearted.org` HTTPS routes, and canonical-host
  behavior are live. Do not repeat these setup steps.

- Owner authentication: **Configured, pending the manual closure check.** Clerk
  production is active for `honeyhearted.org` in Invite-only mode, the approved
  owner user was created directly, the exact owner ID is installed through
  Render's protected controls, and server-enforced owner-only authorization is
  implemented. The Owner must manually sign in at `/owner`; Team 2 then verifies
  the authenticated dashboard without handling credentials. Rotate the exposed
  Clerk server secret only after explicit immediate Owner authorization.
- Dashboard data and assets: selected durable database/content store, approved
  image/file storage, upload limits, publication workflow, and backup/recovery
  ownership. **Configured:** the dashboard uses the Render disk at `/var/data`
  and the content document at `/var/data/honeyhearted/content.json`; owner edit,
  preview, publish, archive, reorder, backup, and restore flows are implemented.
  **Remaining proof:** after the Owner's manual sign-in, verify the real
  dashboard screen and a safe durable workflow through the authenticated
  browser session.

- Final product catalog: approved titles, descriptions, grade bands, formats,
  prices, preview art, downloadable files, and publication rights. **Current
  safe behavior:** six clearly described resource/collection cards render from
  the `PRODUCTS` data block; illustrative concepts and draft claims are
  disclosed. **Activation:** replace those records and embedded previews only
  after checking each final listing and asset right.
- Commerce destination: the Owner has chosen Teachers Pay Teachers for checkout,
  orders, paid-file delivery, sales reporting, and payouts. The remaining inputs
  are the confirmed TPT store URL and exact product-listing URLs. **Current safe behavior:**
  blank destinations open a notice saying no purchase or download occurred.
  **Activation:** connect each published dashboard product to its exact approved
  TPT listing; do not substitute a search page for a product listing and do not
  collect card details or claim local payment/order completion.
- Public identity: final HoneyHearted business/creator display name, public
  email, and approved About details. **Current safe behavior:** proposed Meagen
  copy is visibly marked for Owner review and makes no invented credential,
  customer, or classroom-testing claim. **Activation:** replace the proposal
  with approved biography, qualifications, process, and image.
- Contact delivery: approved receiving inbox and provider/account credentials.
  **Current safe behavior:** validated preview submissions stay on screen and
  are neither sent nor saved. **Activation:** connect a secure server-side
  adapter and secrets, test failure/retry behavior, then disable preview mode.
- Newsletter delivery: selected provider/list, consent wording, sender
  identity, unsubscribe behavior, and credentials. **Current safe behavior:**
  validated preview submissions are neither sent nor saved; the free download
  needs no email. **Activation:** connect and verify the documented endpoint
  contract, consent, unsubscribe, delivery, and failure paths.
- Public destinations: approved Facebook/social URLs and the exact Beachside
  sample/resource links. **Current safe behavior:** blank links show the same
  non-navigation notice. **Activation:** add only exact approved HTTPS URLs.
- Legal and privacy approval: final operator/legal identity, applicable terms,
  privacy disclosures, refund/license language, and actual production data
  practices. **Current safe behavior:** policy pages are explicitly preview
  notes, not final legal terms. **Activation:** replace them after integrations
  and operating facts are known and reviewed.
- Production release: hosting, domain, DNS, durable storage, and initial Clerk
  production activation are complete in the required order. Preview remains
  noindex until the Owner approves the final catalog, policies, public identity,
  contact/newsletter behavior, external URLs, and launch state. Do not mistake
  these remaining content/business approvals for a need to repeat infrastructure
  setup.

## Builder maintenance rule

Add only genuine Owner/account/content dependencies discovered during the
build. For each, record the safe placeholder behavior already implemented and
the exact future replacement or activation step. Do not move reachable product
work into this list.
