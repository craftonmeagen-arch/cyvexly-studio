# Team 2 Website Builder Orientation Document

**Canonical role:** Team 2 Website Builder. **Status:** Active.
**Created:** 2026-09-08, per Owner clarification (Claude Code chat) splitting
this role out from the "Cyvexly Build Team" it was previously conflated with
under role-identity direction `2026-09-08-18`.

## What Team 2 is

Team 2 is separate from the **Cyvexly Build Team**. Under latest Owner
direction `2026-09-08-29`, Team 2's only lanes are **work on websites other
than Cyvexly** and the **bounded work required to bring an outside website into
Cyvexly's portfolio**. This includes HoneyHearted and every EduAILenz/
Mudoinkle investigation, proof, entry, integration, test, and correction.
Everything else on Cyvexly belongs to the primary team.

Owner, verbatim (2026-09-08): *"my intent was to be able to give separate
direction to two teams. team two could be working on honey hearted and
receive direction for that work while cyvexly build team can be working on
cyvexley work or another website we are trying to put i the portfolio."*

Read this document's Owner Direction first:
`docs/agent-system/team2/TEAM2_OWNER_DIRECTION.md`. It is Team 2's own file,
separate from `docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md` (Cyvexly
Build Team's file). Direction `2026-09-08-29` is the boundary: do not take
general Cyvexly work, and do not leave assigned outside-site portfolio work to
the primary team.

## Current assignments

### EduAILenz and Mudoinkle portfolio integration

Direction `2026-09-08-22`, moved into Team 2's Owner Direction by
`2026-09-08-29`, authorizes read-only investigation of
`C:/app projects/Eduailenze` and `C:/app projects/Mudoinkle`. Team 2 owns the
truthful Work cards, buyer-facing case studies, verified capability claims,
privacy-safe proof, safe links/demos, necessary portfolio discoverability,
tests, audit intake, and corrections. Do not modify either outside source
repository, access secrets/private data, or invent client/result/launch facts.
Match accepted Velora quality while preserving Velora and all unrelated
Cyvexly work.

### HoneyHearted

Build HoneyHearted as a standalone Next.js application in
`C:/app projects/Honeyhearted` and push it to the private repository
`https://github.com/craftonmeagen-arch/Honeyhearted`. Full binding detail is
in `TEAM2_OWNER_DIRECTION.md` (moved-in directions `2026-09-08-19`, `-21`,
`-23`, `-24`, `-25`). Summary:

- Preserve the accepted HoneyHearted visual identity and every already-working
  public behavior from the source of truth at
  `C:/app projects/website/honey-hearted/index.html`.
- Clerk-backed owner authentication/authorization for every private route and
  write operation; TPT remains the exclusive checkout/delivery/payout system.
- Durable product/content storage supporting create/edit/preview/publish/
  archive/reorder.
- Sequencing: (1) create, verify, and push the standalone app to the private
  repo; (2) Render deployment; (3) Namecheap DNS to `honeyhearted.org`;
  (4) Clerk production activation. Do not configure Render or Namecheap DNS
  during stage 1.
- Ask the Owner only for account actions, secret entry, the approved owner
  identity, or genuine business approvals — see `TEAM2_OWNER_DIRECTION.md`
  for the exact boundary. **Update (round 6, 2026-09-08):** the repo push was
  believed blocked on missing GitHub credentials (`gh auth`/SSH both absent)
  for rounds 1-5, but Windows Git Credential Manager
  (`credential.helper = manager`) had working HTTPS credentials the whole
  time — a third credential store none of those rounds checked. The push is
  done; see `docs/agent-system/team2/TEAM2_CURRENT_STATE.md` round 6 for the
  verification method. Don't assume other account-action gates (Render,
  Namecheap, Clerk) are similarly unblocked without checking each fresh.
  **Update (round 14):** the local app now contains a fail-closed Clerk owner
  route/sign-in foundation at commit `97adf2b`, but Git Credential Manager began
  requiring interactive GitHub sign-in again. The commit is one ahead of
  `origin/master` until the Owner reauthenticates and the push/CI run are
  verified. Clerk CLI linking also requires an Owner-authenticated session; do
  not expose keys or bypass either login prompt.
  **Update (round 15):** the round-14 push blocker was transient — a plain
  non-interactive `git push` succeeded this round with no Owner action, and
  the GitHub Actions run for `97adf2b` confirmed `completed`/`success`. That
  commit is now the latest remotely accepted source. Render and Clerk remain
  genuine, freshly re-verified Owner-only account gates (no CLI/env access,
  `npx clerk whoami` returns `auth_required`); don't re-attempt either
  headlessly.
  **Update (round 16):** commits `b38708b` and `47f42ac` add the Clerk-protected owner
  product dashboard and atomic durable content store. Create/edit/preview/
  publish/archive/reorder are implemented and tested; publication requires an
  exact HTTPS TPT product URL. Production storage fails closed until an
  absolute `HONEYHEARTED_CONTENT_FILE` on a persistent Render disk is supplied.
  The public catalog bridge is still a separate next round. GitHub Actions run
  `34288411880` passed the updated content-test workflow against the exact tip.
  **Update (round 17):** commit `9d4fefb` connects the owner store to the
  preserved public design. Managed mode exposes only published records in
  owner-selected order and binds each purchase action to its validated TPT
  URL; draft/archived records stay private. Browser, migration, serialization,
  content, lint, build, and production smoke checks passed, followed by exact
  GitHub Actions run `34291837473`. Richer content/assets and real Clerk/Render
  account verification remain.
  **Update (round 18):** Owner direction `2026-09-08-30` is complete. The
  Blueprint now uses `npm ci --include=dev && npm run build`; an isolated
  `NODE_ENV=production` install/build passed, exact commit `db3b966` is live at
  `https://honeyhearted.onrender.com`, the deployment revision header matches,
  the remote smoke suite passes, and GitHub Actions run `34294927419` passed.
  Next Owner-controlled gates are persistent Render storage/configuration,
  Namecheap DNS for `honeyhearted.org`, and Clerk production activation.
  **Update (round 19):** commit `9c50963` adds exact-owner teaching-article
  create/edit/private-preview/publish/draft/archive/reorder controls and
  published-only public cards/detail rendering. Plain-text article bodies are
  escaped, legacy storage migrates safely, and content, script, lint, build,
  and browser verification passed. GitHub Actions run `34298184196` passed;
  exact SHA `9c509637ef730698b39c00c9a4cc0c0a33df3a69` is live on Render and the
  remote smoke suite passed. Richer product fields/assets, backup tooling, and
  Owner-controlled persistent storage, Clerk, and custom-domain stages remain.
  **Update (round 20):** commit `aa1e747` adds dashboard-managed grade bands,
  resource types, file/compatibility facts, printable/digital filters, and
  optional qualified reference prices. Incomplete products cannot publish;
  legacy data migrates without reset. Tests, build, real-browser filter/detail
  checks, GitHub Actions run `34301467500`, exact Render-revision proof, and
  the remote smoke suite passed. Asset management, backup/recovery, other page
  content, and Owner-controlled production gates remain.
  **Update (round 21):** commit `aa78e1c` adds exact-owner cover/preview upload,
  private draft retrieval, removal, signature/size/alt validation, generated
  durable filenames, and published-reference-only public image delivery.
  Tests, build, a real uploaded-WebP browser/zoom pass, HTTP MIME/`nosniff`
  proof, GitHub Actions run `34304619399`, exact Render-revision proof, and the
  remote smoke suite passed. Auditor finding `HH-IFA-004`'s reachable asset
  implementation is closed; real Owner imagery and the persistent Render disk
  are external activation gates. Backup/recovery and other agreed page content
  remain reachable.
  **Update (round 22):** commit `02f437a` adds automatic pre-mutation snapshots
  with referenced images, ten-snapshot retention, exact-owner backup history
  and JSON downloads, and explicit-confirmation restore that first preserves
  the current state. Tests proved invalid-ID rejection, rollback, revision
  advancement, and recovery of a removed image. Build, local smoke,
  GitHub Actions run `34307130352`, exact Render-revision proof, and remote
  smoke passed. Source-level products, articles, rich facts, imagery, and
  recovery are implemented; production account/storage/content gates remain.
  **Update (round 23):** commit `916d01a` adds exact-owner About copy plus TPT
  shop, Facebook, approved sample, public contact-email, and newsletter-endpoint
  settings. Edits remain private while the prior approved snapshot stays live;
  explicit publish replaces it and unpublish removes it. Server validation,
  legacy migration, escaping, protected preview, tests, and real-browser proof
  passed. GitHub Actions run `34310582840`, exact Render-revision proof, and the
  remote smoke suite passed. Contact/newsletter transmission remains safely
  disabled until its Owner-controlled provider/privacy/domain activation gate.
  **Update (round 24):** commit `627365f` adds exact-owner FAQ create, edit,
  private-preview, publish, return-to-draft, archive, and reorder controls.
  Managed mode exposes only published answers in selected order; legacy data
  migrates safely and script-like text stays inert. Tests, real-browser native
  accordion proof, protected-route checks, GitHub Actions run `34313545952`,
  exact Render-revision proof, and remote smoke passed. External Clerk,
  persistent-storage, content/provider, and domain gates remain.
  **Update (round 25):** commit `03498eb` adds exact-owner Privacy, Terms &
  resource use, and Accessibility policy editing, private preview, explicit
  publish, revision, and unpublish controls. A newer draft cannot leak or
  replace the last approved public snapshot until republished; safe static
  notices remain when no managed snapshot exists. Migration, validation,
  escaping, content tests, build, HTTP assertions, real-browser inert-script
  proof, protected-route checks, GitHub Actions run `34343382748`, exact Render
  revision, and remote smoke passed. Owner/legal approval, Clerk, persistent
  storage, final content/providers, and domain activation remain external
  gates.
  **Update (round 26):** commit `c87498b` gives products, teaching articles,
  FAQs, and product imagery the same private-draft/approved-snapshot isolation
  already used for policies and site settings. Editing no longer mutates live
  content; republish replaces the approved snapshot, while explicit unpublish
  or archive removes it. Public image bytes remain available while an approved
  snapshot references them, and backups include both working and public asset
  state. Migration, content tests, build, direct HTTP assertions, real-browser
  proof, GitHub Actions run `34347712956`, exact Render revision, and remote
  smoke passed. Owner-controlled production gates remain unchanged.
  **Update (round 27):** commit `7c09119` adds an explicit owner-controlled
  Preview/Live website state with server-enforced launch prerequisites and
  confirmation, plus a same-origin newsletter relay that keeps the provider
  endpoint and optional credential server-only. The route validates origin,
  input size/type, email, consent, honeypot, rate, published live state,
  provider allowlisting, timeout, and explicit provider acceptance; it never
  claims a failed request subscribed anyone. Live mode also protects its last
  public product and required policies. Tests, HTTP failure-path checks,
  real-browser live-copy/accessibility verification, GitHub Actions run
  `34353204319`, exact Render revision, and remote smoke passed. Production
  remains safely in Preview until the Owner supplies the persistent Render
  disk/path, Clerk secrets and approved owner ID, real provider and content,
  policy approvals, and completes the `honeyhearted.org` domain then Clerk
  production stages.
  **Update (round 28):** commit `9d42560` prevents owner-published products
  from inheriting unrelated static-template artwork, galleries, keywords,
  features, or instructional claims. A product without owner-uploaded imagery
  now uses its own escaped title and grade on a clearly labeled illustrative
  cover; facts and detail guidance derive only from its approved record and
  linked TPT listing. Live-mode product, fallback FAQ, disconnected-link, and
  optional Beachside-sample wording are now state-accurate. Script, lint,
  build, content, newsletter, local smoke, and synthetic live real-browser
  checks passed; GitHub Actions run `34358036164`, exact Render revision, and
  remote smoke passed. External Clerk, persistent-storage, real provider,
  final content/policy, and custom-domain gates remain Owner-controlled.
  **Update (round 29):** commit `91fc31d` adds an explicit Clerk-backed owner
  session sign-out control to the exact-owner-protected dashboard and returns
  safely to the public homepage after sign-out. The control is absent from the
  fail-closed unconfigured surface. Lint, build, content, newsletter, script,
  local smoke, GitHub Actions run `34362478310`, exact Render revision, and
  remote smoke passed. Independent report `HH-IFA-008` closed Rounds 24–28;
  the next audit must intake Round 29, while authenticated owner-workflow proof
  remains externally gated on protected Clerk credentials and the approved
  owner ID.
  **Update (round 30):** commit `3536f3f` adds dedicated accessible loading and
  render-error recovery states for the private owner workspace. Retry copy
  does not guess whether a save completed, and narrow browser diagnostics log
  only an opaque error digest rather than content, form data, paths, or
  credentials. Lint, build, all product tests, local smoke, GitHub Actions run
  `34366672783`, exact Render revision, and remote smoke passed. A read-only
  check reconfirmed that `honeyhearted.org` and `www` still resolve to
  Namecheap parking; no DNS or account setting was changed. External
  activation and authenticated-runtime gates remain Owner-controlled.
  **Update (round 31):** commit `da057fb` fixes the previously incompatible
  Clerk CSP boundary. ClerkProvider and Clerk's nonce-based strict CSP now run
  only on `/owner`, `/sign-in`, and the internal Clerk handshake path; the
  public storefront keeps its same-origin CSP and loads no Clerk code. A new
  CI regression test protects that architecture. Safe synthetic-config
  runtime proof verified nonced protected-route scripts, dynamic frontend API
  allowance, owner sign-in redirection, and unchanged public isolation without
  using a real key/account/identity. Lint, build, all tests, zero-vulnerability
  npm audit, GitHub Actions run `34371787616`, exact Render revision, and
  remote smoke passed. Independent report `HH-IFA-009` closes Rounds 29–30 total;
  the next audit must intake Round 31. Real authenticated Clerk workflow proof
  remains an Owner-controlled external gate.
  **Update (round 32):** commit `880d2f2` adds a fail-closed search publication
  boundary. Preview stays `noindex, nofollow`, disallows crawling, publishes
  no canonical, and returns 404 for the sitemap. Only an explicitly published
  verified Live snapshot switches the root to `index, follow`, adds the fixed
  `https://honeyhearted.org/` canonical, exposes live robots rules that still
  exclude owner/sign-in, and publishes the root sitemap. Routes are forced
  dynamic and the mode-aware smoke suite remains valid before and after
  launch. Tests, build, GitHub Actions run `34376459155`, exact Render
  revision, and remote Preview proof passed. Independent report `HH-IFA-010`
  closed Round 31; Round 32 awaits review, and the real Clerk workflow remains
  an Owner-controlled external gate.
  **Update (round 33):** commit `8b1a655` makes the production storage promise
  enforceable. On Render, owner writes now require both a content-file path
  below the standardized `/var/data` location and an exact `/var/data` mount
  reported by the running container; an absolute path on ephemeral storage no
  longer unlocks the dashboard. The gate reports safe setup guidance, the
  Blueprint intentionally leaves the billed disk for Owner approval, and a
  new permanent CI test covers path and mount-info edge cases. Full tests,
  build, GitHub Actions run `34380981612`, exact Render revision, and remote
  smoke passed. Independent report `HH-IFA-011` closed Round 32; Round 33
  awaits review, and the real persistent disk and Clerk-authenticated workflow
  remain Owner-controlled gates.
  **Update (round 34):** commit `f7e3518` adds protected complete off-platform
  backup downloads. Every retained snapshot can now be exported as a `.tar.gz`
  with validated content JSON, all referenced product images, and a SHA-256
  manifest; JSON-only export and in-dashboard restore remain. The archive
  fails closed on missing/size-mismatched images, rejects unsafe names, and is
  available only through the exact-owner route. Tests independently unpacked
  the archive and verified tar headers, image presence, traversal rejection,
  and every checksum. Full checks, GitHub Actions run `34385672700`, exact
  Render revision, and remote smoke passed. Rounds 33–34 await independent
  review; production account/content gates are unchanged.
  **Update (round 35):** commit `1ed76dd` adds an exact-owner on-demand backup
  action for the current revision. It runs through the serialized content
  queue, preserves the revision, includes every referenced image, obeys the
  ten-snapshot retention limit, and immediately supports complete archive,
  JSON, and restore operations. Tests, build, GitHub Actions run `34389632269`,
  exact Render revision, and remote smoke passed. Independent report
  `HH-IFA-012` accepted Rounds 33–34; Round 35 awaits review.
  **Update (round 36):** commit `beda0a3` closes the off-platform recovery loop
  with an exact-owner complete-backup importer. It limits compressed/expanded
  size; verifies gzip, USTAR headers, tar checksums, path safety, inventory,
  manifest SHA-256 values, content schema, image-reference consistency, and
  image signatures; saves the current state first; regenerates image filenames
  to prevent collision; and restores at the next revision. Tests perform a real
  export/import and reject both invalid gzip and checksum-tampered content.
  Build, GitHub Actions run `34394266511`, exact Render revision, local/remote
  smoke, and the locked import route passed. Independent report `HH-IFA-013`
  accepted Round 35; Round 36 awaits review.
  **Update (round 37):** commit `6cea89a` adds Live-only canonical Privacy,
  Terms, and Accessibility pages, routes live legal links to them, and includes
  published policies in the sitemap while Preview keeps hash views and returns
  404 for direct routes. It also closes a restoration launch bypass: every
  public request now rechecks the stored Live snapshot against current domain,
  TPT, contact, provider, and policy prerequisites, downgrading safely to
  Preview if any changed after backup. Tests, build, GitHub Actions run
  `34398662081`, exact Render revision, and local/remote Preview smoke passed.
  Independent report `HH-IFA-013` accepted Round 35; Rounds 36–37 await review.
  **Update (round 38):** commit `f14e37a` replaces the obsolete Clerk-CLI
  requirement on the fail-closed owner setup page with the actual hosted
  activation path: protected Render entry of the existing app credentials and
  confirmed owner ID, followed by redeploy while Invite-only stays enabled.
  Permanent smoke assertions, full local checks, exact Render-revision proof,
  and remote smoke passed. The live owner route still returned the setup gate
  during verification, so real authenticated workflow proof remains behind the
  Owner-controlled Clerk environment and persistent-disk gates.
  **Update (round 39):** commit `a9a87e6` completes that correction on the
  dedicated sign-in setup page, replacing ambiguous "Clerk session" wording
  with the protected hosting-environment path. Route-boundary and smoke tests
  now enforce the correct wording; full local checks, exact Render-revision
  proof, and remote smoke passed. The production owner route was still safely
  locked when this round began, so activation remains an Owner-controlled gate.
  **Update (round 40):** commit `fdf4faf` validates the actual Clerk
  environment values before enabling any private surface: publishable/server
  keys must have valid matching Development or Production prefixes and the
  owner identity must be a complete `user_` ID. Missing, malformed, or mixed
  values stay fail closed with safe category-only diagnostics. A permanent CI
  suite, full checks, synthetic mismatched-key runtime proof, exact Render
  revision, and remote smoke passed; real Owner authentication and durable
  storage remain external gates.
  **Update (round 41):** commit `fc02011` adds a Blueprint-controlled HTTP
  health check on the real root application route, replacing a TCP-port-only
  readiness signal. A permanent deployment-config suite protects the accepted
  runtime/build/start/branch/plan/health contract and prevents Clerk secret or
  owner-identity declarations in the Blueprint. Full checks, exact Render
  revision, and remote smoke passed; external activation gates are unchanged.
  **Update (round 42):** commit `8e90e9b` removes the obsolete claim that
  canonical/search work is still missing. The owner-facing launch checklist
  now accurately distinguishes noindex Preview from verified canonical,
  sitemap, and policy-page behavior in Live mode. Full checks, exact Render
  revision, remote smoke, and direct remote-copy proof passed.
  **Update (round 43):** commit `fa8a9b4` adds the exact Render disk and
  `HONEYHEARTED_CONTENT_FILE=/var/data/honeyhearted/content.json` sequence to
  the authorized storage lock, so the next external gate is actionable without
  guesswork. Full checks, exact Render revision, and remote smoke passed after
  a transient replacement-deploy `502` recovered to the accepted commit.
  **Update (round 44):** commit `ae05bc0` versions the Owner-provisioned
  `/var/data` content path, `honeyhearted.org` origin, and Render custom domain.
  Live DNS/HTTPS and `www` canonical redirect checks passed; Clerk remained
  safely unconfigured on the production owner route.
  **Update (round 45):** commit `3714256` adds a one-year HSTS policy with
  subdomain coverage now that the production domain is live. The smoke suite
  permanently enforces it; full checks, exact custom-domain/Render revision,
  direct header proof, and remote smoke passed after a transient deploy `502`
  recovered.
  **Update (round 46):** commit `7027948` adds an HTTP `X-Robots-Tag` that
  mirrors Preview/Live state and remains noindex on errors. Full checks, exact
  production-domain revision, and remote header proof passed.
  **Update (round 47):** the Owner's production Clerk configuration became
  active. Commit `c272d08` makes smoke verification support both unconfigured
  and connected phases, proving unauthenticated owner traffic routes to the
  connected production Clerk sign-in without rendering owner/storage controls.
  Full checks and remote smoke passed on both hosts. The next gate is a real
  Owner sign-in at `https://honeyhearted.org/owner` to prove the exact identity,
  persistent disk, and authenticated dashboard workflow.
  **Update (round 48):** Owner direction `2026-09-09-31` authorizes a temporary
  production Clerk build/test identity without weakening exact-ID server
  authorization. Keep `HONEYHEARTED_OWNER_USER_ID` as the required primary
  Owner and use the optional protected `HONEYHEARTED_AUTHORIZED_USER_IDS` only
  for comma-separated exact temporary Clerk IDs. A malformed entry locks the
  whole private surface; email matching is forbidden. Never record the real
  temporary ID or handle its password/code. Removal is a protected Render
  allowlist edit plus redeploy and denial/Owner-access proof before the Owner
  deletes the temporary Clerk account. Commit `0d0a05e` is deployed; after
  immediate Owner confirmation the real temporary ID was installed only in the
  protected Render value, the environment deploy succeeded, and unauthenticated
  production smoke remained fail closed. Authenticated workflow proof is still
  manual.

## Working directories and environment

- For HoneyHearted, Team 2's product working tree is
  `C:/app projects/Honeyhearted` (a standalone project and git history).
- For an outside-site portfolio assignment, inspect the named outside project
  read-only and edit `C:/app projects/website` only for the assigned portfolio
  entry, its necessary discoverability, and its tests. Coordinate current file
  ownership and never overwrite unrelated primary-team changes.
- This orientation document and Team 2's Owner Direction live inside the
  `C:/app projects/website` repo (`docs/agent-system/team2/`) as the shared
  coordination point across scheduled sessions, even though the product code
  does not.
- Do not take unrelated Cyvexly work or use the primary team's port/runtime.
  Update shared Cyvexly coordination only as needed to hand off the exact
  outside-site integration, and keep Team 2 state in `docs/agent-system/team2/`.

## Independent audit lane

Owner directions `2026-09-08-28` and `2026-09-08-29` resolve the former
re-homing and scope questions. Team 2's Auditor reads
`TEAM2_AUDITOR_ORIENTATION_DOCUMENT.md` and uses
its separate Team 2 reviewer-owned root and port. It must not reuse the primary
Cyvexly Auditor's runtime, browser, memory, reports, or port.

## Round discipline

Follow the same round discipline the Cyvexly Build Team uses: one coherent
unit of verified progress per firing, concise state/handoff notes at the end
of `TEAM2_OWNER_DIRECTION.md` or a new `TEAM2_CURRENT_STATE.md` once enough
rounds accumulate to need one, and honest reporting when a real blocker (like
the missing GitHub credentials) stops a specific step rather than all work.
