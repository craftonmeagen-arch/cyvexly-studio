# Team 2 Owner Direction

## Team 2 scheduler pause 2026-09-10

**Status:** ACTIVE — RECURRING TEAM 2 BUILDER AND AUDITOR PAUSED
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-10 America/New_York

The Owner stopped the recurring Team 2 Builder scheduler before the shared
Cyvexly checkout reconciliation. The separately named HoneyHearted Independent
Forensic Auditor scheduler was already paused and remains paused. Do not
reactivate either automation or begin a new scheduled Team 2 round without later
explicit Owner direction. Preserve the accepted standalone HoneyHearted work,
outside-site portfolio evidence, and all Owner-gated follow-up. This pause
changes scheduling, not the established Team 2 scope boundary.

## HoneyHearted temporary authenticated build identity 2026-09-09-31

**Status:** ACTIVE — TEMPORARY EXACT-ID ACCESS AUTHORIZED AND CONFIGURED
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-09 America/New_York

### Owner direction — verbatim excerpt

> “a temporary Clerk production account named builder@test.com now exists for
> authenticated build/testing and will be deleted by the Owner when
> HoneyHearted is finished. Never request, copy, record, or relay its password.
> ... Preserve the real Owner's access. Treat the temporary account as an
> authorized build/test identity and determine the smallest secure
> implementation/config change for a protected multi-user allowlist (exact
> Clerk user IDs only, fail closed, no email-based authorization and no secrets
> in source), with regression coverage and a removal path.”

### Binding implementation and credential boundary

- Keep the real Owner's exact Clerk ID as the required primary identity. Add an
  optional protected allowlist of additional exact Clerk user IDs; authorization
  is exact membership in the resulting set, never an email-address match.
- Store temporary IDs only in Render's protected environment controls. Do not
  commit, quote, screenshot, or record the temporary Clerk ID in source,
  tests, reports, or documentation. Environment-variable names and synthetic
  test IDs are safe to record.
- Any missing primary Owner ID or malformed allowlist entry must fail closed for
  every owner route and write operation. Do not silently discard malformed
  values, and do not let temporary access replace or remove the real Owner.
- Never request, receive, copy, record, relay, or automate the temporary
  account's password or verification code. Authentication remains a manual
  browser action; Team 2 handles only product and protected configuration
  support.
- Removal requires deleting the temporary exact ID from the protected
  allowlist, redeploying, proving that the former temporary session is denied,
  and confirming that the real Owner still has access. The Owner will then
  delete the temporary Clerk account when HoneyHearted is finished.
- **Implementation status:** commit `0d0a05e` supplies the fail-closed protected
  allowlist. After separate immediate Owner confirmation, the temporary exact
  ID was entered only in Render's protected environment while the primary Owner
  ID remained configured. The environment-triggered deployment succeeded and
  unauthenticated production smoke stayed fail closed. The real temporary ID is
  deliberately omitted from this record.

## HoneyHearted Render build repair direction 2026-09-08-30

**Status:** ACTIVE — TEAM 2 DEPLOYMENT REPAIR
**Source:** Owner via active Codex conversation and supplied Render screenshots
**Recorded:** 2026-09-08 America/New_York

### Owner direction — verbatim

> “Ok give it to them in owners direction for team 2 do”

### Confirmed evidence and required work — agent interpretation

- The Owner has now connected the private Honeyhearted GitHub repository to
  Render and created the HoneyHearted Blueprint and `honeyhearted` web service.
  The supplied screenshots show failed deployments, not a pending setup step.
  Do not continue reporting that the Owner has yet to create the Render service.
  Dashboard/API access for the Builder must still be checked independently;
  the screenshots do not grant an authenticated session.
- The deployment of commit `47f42ac` (Round 16) failed during the build with
  `Cannot find module '@tailwindcss/postcss'`. Inspection of the standalone
  repository confirmed that this package is a development dependency, while
  `render.yaml` sets `NODE_ENV=production` and runs plain `npm ci`, which omits
  those build dependencies by default. This observed failure is not evidence
  of a missing Clerk key, DNS problem, or a need to wait longer.
- Prioritize the bounded build repair in
  `C:/app projects/Honeyhearted/render.yaml`: change the build command from
  `npm ci && npm run build` to `npm ci --include=dev && npm run build`.
  Keep `NODE_ENV=production`; fix the versioned Blueprint so future syncs
  preserve the correction. Inspect current source first and preserve any
  concurrent Builder work or equivalent fix already applied.
- Verify a clean dependency installation and production build under the
  Render-equivalent Node/environment settings in an isolated working area.
  Run the applicable regression checks, then commit and push the accepted
  repair to the Honeyhearted repository's deployment branch (`master`).
  This is exclusively Team 2 work; do not alter the primary Cyvexly service.
- Verify that Render picks up the corrected Blueprint and deploys the exact
  repaired commit. If authenticated provider access is unavailable, give the
  Owner the precise remaining sync/deploy action and request the resulting
  status/log evidence. Do not claim deployment success from local tests or a
  GitHub push alone. Diagnose any subsequent build/start failure separately.
- Close this repair only with a successful Render deployment and public-page
  smoke check, recording commit, build command, test results, deployed URL,
  and remaining gates in Team 2's current state/handoff. The observed service
  URL is `https://honeyhearted.onrender.com`; its availability remains to be
  verified. The independent Team 2 Auditor should check the accepted repair
  and its deployment evidence through the normal review intake.
- Preserve the staged launch order and fail-closed owner security. Persistent
  storage, Clerk credentials/approved owner identity, Namecheap DNS, and final
  content remain separate requirements; do not fabricate credentials or call
  the entire website complete when this build error is resolved. No scheduler
  change is requested by this direction.

## Exclusive external-website scope clarification 2026-09-08-29

**Status:** ACTIVE — LATEST TEAM 2 SCOPE AUTHORITY
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York

### Owner direction — verbatim

> “Once done ensure team two understands in their owners direction that the
> only activities they are involved in is bringing in other websites in that
> area or working on other website. So like the work that we left in owners
> direction to reference mudoinkle and eduailenze. That work is strictly theirs
> and work related to it. But everything else cyvexly is the cyvexly primary
> builder team”

### Binding Team 2 scope — agent interpretation

- Team 2 performs only work on websites other than Cyvexly, or the bounded work
  required to bring such an outside website into Cyvexly's portfolio.
- EduAILenz and Mudoinkle, including their investigation, verified proof,
  portfolio cards/case studies, related discoverability, tests, audit, and
  corrections, are strictly Team 2 work. Direction `2026-09-08-22` is moved
  here in full below.
- HoneyHearted remains Team 2's standalone website assignment.
- Team 2 does not own general Cyvexly buyer-journey, navigation, services,
  pricing, Planner, contact, launch, copy, or visual-system work. If a required
  portfolio integration touches the Cyvexly repository, Team 2 must limit the
  change to that external-site entry and necessary integration/test surfaces,
  coordinate against active primary-team work, and preserve unrelated changes.
- Anything else on Cyvexly belongs to the primary Cyvexly Build Team.

## EduAILenz and Mudoinkle completed-work portfolio direction 2026-09-08-22

**Status:** ACTIVE — TEAM 2 EXTERNAL-WEBSITE PORTFOLIO WORK
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York

### Owner direction — verbatim

> “add to owners direction for cyvexly builder that i want to add eduailenz
> and mudoinkle to the portfolio of completed works. these are complicated
> websites so they should be able to sell capabilities. full authroization to
> look in those folders to investigate that work”

### Required outcome and authority — updated team assignment

- Build separate Work cards and buyer-facing case studies after investigating
  real source/runtime truth. The Builder has full read-only authority in
  `C:/app projects/Eduailenze` and `C:/app projects/Mudoinkle` and their
  relevant evidence. Do not modify those repos or
  inspect/copy secrets, `.env` values,
  credentials, private user/student data, or generated dependencies.
- Sell verified complexity clearly. “Completed works” does not permit invented
  clients, results, launch or feature status. Separate completed capability
  from ongoing work; use safe synthetic proof and verified links/assets only.
- Match Velora's premium standard and visibly verify discovery, routes,
  metadata, responsive/keyboard behavior, performance, disclosures, and CTAs.
  Owner direction `2026-09-08-29` assigns this work and everything related to
  it strictly to Team 2. Preserve Velora and the primary team's unrelated
  Cyvexly work. No primary Cyvexly role may implement or audit this assignment.

This file is Team 2's own Owner Direction — separate from
`docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md`, which belongs to the
primary Cyvexly Build Team. Team 2 works on outside websites and owns the
bounded work needed to bring those websites into Cyvexly's portfolio.

## HoneyHearted Team 2 ownership reaffirmed 2026-09-08-28

**Status:** ACTIVE — TEAM BOUNDARY REAFFIRMED
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York

### Owner direction — verbatim excerpt

> “Make sure honey hearted work (if there is any) goes to team 2.”

### Agent interpretation — not Owner-authored wording

- All HoneyHearted implementation, standalone-repository, deployment,
  Namecheap, Clerk, TPT, and independent-review work remains Team 2 scope.
- The newly resumed primary Cyvexly Builder and newly authorized primary
  Cyvexly Auditor do not perform HoneyHearted work.
- The existing Team 2 Auditor remains active for HoneyHearted and now reads
  `TEAM2_AUDITOR_ORIENTATION_DOCUMENT.md`, using its own reviewer environment;
  this prevents conflict with the distinct primary Cyvexly Auditor.

## Team 2 identity and separation from Cyvexly Build Team 2026-09-08-27

**Status:** ACTIVE — FOUNDING DIRECTION FOR THIS FILE
**Source:** Owner via Claude Code chat (this hourly Team 2 scheduled session)
**Recorded:** 2026-09-08 America/New_York

### Owner direction — verbatim

> "my intent was to be able to give separate direction to two teams. team two
> could be working on honey hearted and receive direction for that work while
> cyvexly build team can be working on cyvexley work or another website we are
> trying to put i the portfolio. so they need their own owners direction and
> their orientation documents need updated. now i am worried about what work
> went to which team. all website work that wasn't directly for cyvexly was
> supposed to go to team 2. if there are any thing that needs moved to team 2
> owners direction documents then move it pls."

### Agent interpretation — not Owner-authored wording

- **Team 2** and the **Cyvexly Build Team** are two distinct teams with two
  distinct Owner Direction files and orientation documents. Role-identity
  direction `2026-09-08-18` (in the Cyvexly file) had briefly renamed the
  Cyvexly product team itself to "Team Two Website Builder," conflating the
  two; that premise is superseded here. "Team 2" now specifically means this
  file and this team.
- **Scope rule, corrected by direction `2026-09-08-29`:** website work that is
  not directly for Cyvexly belongs to Team 2, and Team 2 also owns the bounded
  work required to bring an outside website into Cyvexly's portfolio. The
  former interpretation assigning EduAILenz/Mudoinkle case studies to the
  primary team is superseded.
- **Moved to this file** (originally recorded in
  `docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md`, full verbatim text
  preserved below with original direction IDs/dates for provenance): HoneyHearted
  directions `2026-09-08-19`, `2026-09-08-21`, `2026-09-08-23`,
  `2026-09-08-24`, `2026-09-08-25`, all HoneyHearted-specific — because
  HoneyHearted is not directly Cyvexly. The Cyvexly file now carries short
  pointer stubs at each of those IDs instead of the full text.
- **Stayed in the Cyvexly file:** Velora (`2026-09-08-20`, `2026-09-07-17`)
  and general Cyvexly launch/business-operations direction. Direction
  `2026-09-08-22` moved here under the later Owner clarification.
- The Codex-vs-Claude-Desktop scheduler-pause scope confusion (corrected in
  the Cyvexly file as `2026-09-08-26`) is a Cyvexly-file-specific
  correction about the Codex `:00/:30` automation; it does not need
  duplicating here. What matters for Team 2 going forward: this Claude
  Desktop hourly Team 2 scheduled session is active and should perform real
  HoneyHearted implementation work each firing.

## HoneyHearted purchased-domain confirmation 2026-09-08-25

**Status:** ACTIVE — DOMAIN CONFIRMED; DEPLOYMENT ORDER UNCHANGED
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York (moved from Cyvexly Owner Direction
2026-09-08, see founding entry above)

### Owner direction — verbatim

> "Honeyhearted.org"

### Binding interpretation

- The purchased HoneyHearted production domain is **`honeyhearted.org`**.
- Use that exact domain for the later Render custom-domain, Namecheap DNS, Clerk
  production-domain/redirect, canonical metadata, and launch-verification work.
  Do not expose provider verification values or secrets in source or records.
- Direction `2026-09-08-24` still controls sequencing: first create, verify, and
  push the standalone application; only then proceed to Render deployment →
  Namecheap DNS → Clerk production activation.

## HoneyHearted standalone repository and staged launch direction 2026-09-08-24

**Status:** ACTIVE — CLAUDE BUILD ORDER AND HANDOFF CONTRACT
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York (moved from Cyvexly Owner Direction)

### Owner direction — verbatim

> "Read AGENTS.md and docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md,
> especially HoneyHearted Owner Direction 2026-09-08-21. Build HoneyHearted as
> its own Next.js project and push it to the new private Honeyhearted GitHub
> repository. Implement the complete Clerk-secured, owner-only dashboard with
> durable product/content storage. The owner must be able to create, edit,
> preview, publish, archive, and reorder products and content. TPT must handle
> checkout, paid-file delivery, orders, reporting, and payouts. Preserve the
> existing HoneyHearted design and working public features. Do not expose or
> commit secrets. The Clerk application already exists and is configured as
> Invite-only. Ask me only when an account action or secret entry is required.
> Give Claude the exact: HoneyHearted GitHub repository URL; purchased domain
> name. Do not configure Render or Namecheap DNS yet. Claude should first
> create the application and push it to the separate repository. After that,
> the next stage is Render deployment → Namecheap DNS → Clerk production
> activation."

### Binding facts, order, and handoff requirements

- The separate private repository identified by the Owner's GitHub setup is
  **`https://github.com/craftonmeagen-arch/Honeyhearted`**. Build HoneyHearted
  as a standalone Next.js application and push the accepted source to that
  repository. Do not repoint the Cyvexly repository or treat the current
  embedded `/honey-hearted` preview (inside the Cyvexly Build Team's repo) as
  the final production project — it remains the read-only source-of-truth
  reference for accepted design/content only.
- Preserve the accepted HoneyHearted visual identity and every already-working
  public catalog, search/filter, resource/detail, preview/gallery, article,
  download, contact/newsletter demonstration, policy, responsive, keyboard,
  and accessibility behavior while moving the experience into the standalone
  application. Any change must be intentional, tested, and documented.
- Implement Clerk-backed authentication and server-enforced owner authorization
  for every private route and write operation. The Clerk application already
  exists in its Development instance and its access mode is **Invite-only**.
  Invite-only access is an account gate, not by itself proof of owner/admin
  authorization; the app must still restrict dashboard access to the approved
  owner identity. Never expose or commit Clerk keys or any other secret.
- Implement durable product/content data and appropriate asset storage. The
  authorized owner workflow must support create, edit, preview, publish,
  unpublish/archive, and reorder operations with validation, recovery states,
  persistence across restarts/deployments, and truthful public rendering.
- TPT remains the exclusive checkout, paid-file-delivery, order, reporting, and
  payout system. Each published purchase action must navigate to its exact
  approved TPT listing and clearly disclose the handoff. HoneyHearted must not
  accept card data, invent local orders, or imply that a TPT transaction or
  payout occurred.
- The required external sequence is: **(1) create and verify the standalone
  application, then push it to the private GitHub repository; (2) deploy that
  accepted repository on Render; (3) configure Namecheap DNS to the verified
  Render service; (4) activate and verify Clerk production configuration for
  the final domain.** Team 2 decides the safe technical order inside each
  stage. Do not configure Render or Namecheap DNS during stage 1.
- At the time this direction was recorded, the exact purchased HoneyHearted
  domain was not visible in the supplied screenshot. Owner direction
  `2026-09-08-25` now confirms it as `honeyhearted.org`; use that exact value in
  the later domain stages without changing the stage-1 build-first order.
- Ask the Owner only for provider/account actions, protected secret entry, the
  approved owner identity, the exact purchased domain, TPT destinations, or
  genuine content/business approvals that cannot be completed safely in code.
  Maintain a no-secret setup checklist using environment-variable names only.
  At the repository handoff, record the accepted commit, actual local checkout
  path, setup/migration/test commands, implemented placeholder boundaries, and
  remaining Owner gates so independent reviewers can audit the exact source.

## HoneyHearted implementation order and independent audit direction 2026-09-08-23

**Status:** ACTIVE — TEAM 2 OWNS IMPLEMENTATION SEQUENCING; AUDITOR SCHEDULER AUTHORIZED
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York (moved from Cyvexly Owner Direction)

### Owner direction — verbatim

> "Put it in owners direction as a note for him to do that in the proper order
> (for him to decide) of what he is doing in the build. Also set up a scheduler
> for the auditor role Luna to be auditor of that work according to the
> auditors rules in this folder. Reinforce cleaning up after her work when
> done. And reinforce that she can fix her environment and wording to make sure
> she performs her role. There is absolutely no excuse for not working when
> the scheduler goes off. If she thinks she can simply not work because of
> some stipulation she has misinterpreted something or she needs to fix that
> stipulation."

### Binding implementation and audit interpretation

- **Team 2 owns the professional implementation order for HoneyHearted.** The
  Owner is not required to decide whether GitHub, domain/DNS, Render, Clerk,
  durable data/storage, TPT listings, or dashboard work comes first. Team 2
  must inspect the current build, choose and document the safest dependency
  order, keep all work compatible with direction `2026-09-08-21`, and ask the
  Owner only for actions or information that genuinely require the Owner's
  account, identity, business decision, approval, or protected secret. Missing
  Owner inputs must be recorded and represented by truthful safe placeholder
  behavior; they do not excuse leaving reachable application work unfinished.
- A recurring **Independent Forensic Auditor** scheduler is authorized for
  Team 2's HoneyHearted work. It must use `gpt-5.6-luna`, follow the current
  Auditor orientation and mapped rule set, create isolated evidence against an
  exact accepted source, and never substitute a Builder implementation or edit
  product source. (This scheduler was originally stood up inside the Cyvexly
  Auditor environment/port `5273`, reviewing "Claude's HoneyHearted work" —
  see the outstanding-setup-debt note in `TEAM2_BUILDER_ORIENTATION_DOCUMENT.md`
  about whether it should be re-homed under a dedicated Team 2 Auditor
  environment.)
- Every scheduler firing must perform one substantive, reachable review pass.
  No new accepted HoneyHearted commit is not a reason for a no-work exit: the
  Auditor must inspect the latest accepted source, an unresolved finding,
  review debt, a coverage gap, or a reviewer capability/environment problem
  that can be advanced without fabricating evidence or crossing authority.
- A stale example, ambiguous sentence, or misread stipulation is not permission
  to stop. The Auditor must apply the current mapped rule set, the current
  Owner direction, and the root orientation to resolve it. Within the
  independent-review boundary, she may repair her own disposable runtime,
  browser/tooling setup, external review memory, intake, report wording, and
  reviewer-owned helper material when that is necessary to perform the role
  accurately. She must not edit the website source, accepted snapshots,
  Builder records, the governing rule files, this Owner direction, credentials,
  shared infrastructure, or scheduler configuration. A real remaining
  authority, credential, or capability limit requires an actionable finding
  with exact evidence, attempted methods, the needed repair/decision, and a
  closure test while all other reachable audit work continues.
- Cleanup is a required part of every pass, including partial or unsuccessful
  passes. After publishing the report and intake, the Auditor must close
  run-created browsers, stop only manifest-verified Auditor-owned processes,
  remove completed disposable runtimes/snapshots and unnecessary temporary
  captures, protect shared tools and evidence, record retained exceptions, and
  report reclaimed disk/RAM through the prescribed completion workflow.

## HoneyHearted owner dashboard and TPT commerce direction 2026-09-08-21

**Status:** ACTIVE — AUTHORIZED ARCHITECTURE; IMPLEMENTATION HANDED TO TEAM 2
**Source:** Owner via active Codex conversation
**Recorded:** 2026-09-08 America/New_York (moved from Cyvexly Owner Direction)

### Owner direction — verbatim

> "ok lets do option 2. she will need that complete set up. whcih means we will
> need to set up clerk as well. whcih i will do soon. but put this in owners
> direction. i will and pause the schedular. i will have claude do this wror
> since i am runningh ouyt of chat credits"

### Agent interpretation — not Owner-authored wording

- "Option 2" means a complete, secure HoneyHearted owner dashboard for managing
  website content while **Teachers Pay Teachers (TPT) remains the commerce,
  checkout, order, paid-file-delivery, sales-reporting, and payout system**.
  HoneyHearted must not accept card details, claim an on-site payment, create a
  local paid order, or imply that HoneyHearted itself transferred money.
- Implement a private owner experience that lets the authorized owner create,
  edit, preview, publish, unpublish/archive, and reorder products; manage final
  titles, descriptions, grade bands, categories, formats, prices displayed for
  reference, approved covers/previews, exact TPT listing URLs, articles, and
  other agreed editable website content. Public purchase actions must open the
  exact corresponding TPT listing and clearly disclose that checkout occurs on
  TPT.
- Use **Clerk** for authentication. The Owner will create and control the Clerk
  account/project soon. Protect every owner route and every write operation on
  the server, restrict administration to the explicitly approved owner
  identity, provide safe sign-in/sign-out/session recovery and unauthorized
  states, and use production-domain configuration before launch. A visible
  login screen alone is not authorization. Clerk keys and all other secrets
  must be entered through protected environment controls and must never be
  committed, embedded in client-visible source, reports, screenshots, or chat.
- Clerk supplies identity/session infrastructure; the implementation still
  needs durable product/content data, approved asset storage, validation,
  publication state, backups/recovery, and an auditable safe deployment path.
  Choose and document a proportionate backend and storage solution without
  fabricating an external account. Placeholder/local adapters may support
  development until the Owner creates each required account, but they cannot be
  represented as production persistence.
- The owner dashboard does not replace the TPT Seller Dashboard. The Owner must
  create/control the TPT Seller account, product listings, tax/payout identity,
  Hyperwallet transfer method, product files, licenses, pricing, refund/support
  practices, and exact public URLs. HoneyHearted may display and promote that
  approved information but must not claim TPT accepted a listing or issued a
  payout until it actually did.
- The complete setup includes responsive and accessible dashboard workflows;
  validation, error/retry/recovery states; safe upload restrictions; draft and
  preview behavior; secure deployment configuration; contact/newsletter
  integration where approved; truthful policies; logging without secrets or
  unnecessary personal data; and end-to-end proof of owner edit → public
  publication → exact TPT product navigation.
- The Owner assigned this implementation to **Team 2 / Claude** because Codex
  chat credits were running low, and separately (correction `2026-09-08-27`)
  because HoneyHearted belongs to Team 2's scope, not the Cyvexly Build Team's.
  The "pause the schedular" instruction in the verbatim quote above was the
  Owner pausing the Codex `:00/:30` automation specifically (see the Cyvexly
  file's `2026-09-08-26` correction); it does not pause this Team 2 scheduler.

## HoneyHearted fully functional website direction 2026-09-08-19

**Status:** SUPERSEDED IN IMPLEMENTATION DETAIL BY 2026-09-08-21
**Recorded:** 2026-09-08 America/New_York (moved from Cyvexly Owner Direction)

Full direction is preserved in
`docs/archive/CYVEXLY_OWNER_DIRECTION_ARCHIVE.md` (Cyvexly Build Team repo
location, retained there as the historical archive that already existed
before the team split). Live HoneyHearted boundaries are the later directions
above in this file.
