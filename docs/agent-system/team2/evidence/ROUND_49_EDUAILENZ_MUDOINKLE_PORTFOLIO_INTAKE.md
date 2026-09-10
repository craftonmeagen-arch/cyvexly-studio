# Round 49 — EduAILenz and Mudoinkle Portfolio Intake

**Date:** 2026-09-09

**Authority:** Team 2 Owner Direction `2026-09-08-22` and `2026-09-08-29`

**Method:** read-only source inspection plus public HTTP availability checks

**Cyvexly implementation status:** not started in this round

This intake establishes a current, source-grounded buyer-story boundary before
Team 2 changes Cyvexly's Work surface. Neither outside repository was modified,
and no environment file, credential, private user record, or generated
dependency was inspected.

## Intake revisions and public runtime evidence

| Product | Inspected source revision | Public check | Safe current interpretation |
| --- | --- | --- | --- |
| EduAILenz | `9e48f41db4042bc43c1f6f5ea670506ffcce8878` | `https://eduailenz-web.onrender.com/` returned HTTP 200 with title `EduAILenz V2`; `https://eduailenz.com/` did not answer within the 25-second check | The Render application is publicly reachable. Do not link or describe the custom domain as live until it is independently restored and rechecked. |
| Mudoinkle | `8da277ae88662f6eceb11cc9c3371e99b31b3fd5` | `https://mudoinkle-staging.onrender.com/` returned HTTP 200 with title `Mudoinkle — Three Original Party Games` | A public staging build is reachable. Label it as staging; do not imply a production launch or completed final acceptance. |

The HTTP checks prove only route availability and page identity. They do not by
themselves prove authenticated, multiplayer, persistence, payment, email, AI,
or third-party integration flows.

## EduAILenz — verified portfolio story boundary

### Source-grounded capabilities suitable for buyer-facing presentation

- A React/Vite teacher application with Clerk-authenticated product areas and a
  broad route structure for lesson planning, saved work, digital assignments,
  reading tools, and classroom activities.
- BloomED workflows for special-education caseload, students, goals, progress
  logs, evidence, tasks, calendars, families, reports, and spreadsheet import.
- Public and classroom participation surfaces for shared lessons, Whoodle live
  rooms, Whoo Knows Live, interactive lessons, and group activities.
- A production-oriented Render blueprint with database migration and readiness
  gates, PostgreSQL, and protected provider configuration.
- Product direction that treats AI output as a teacher-controlled draft and
  keeps educator review central to the workflow.

### Claims that still require focused proof before publication

- End-to-end AI generation quality, provider availability, or current credit
  state.
- Live multiplayer reconnect, grading, upload/import, reporting, text-to-speech,
  or durable-write behavior in a real signed-in session.
- Any student outcome, adoption, customer, revenue, school, or launch claim.
- The availability of `eduailenz.com`; the custom domain failed this round's
  public connection check.

### Recommended buyer angle

Present EduAILenz as evidence that Cyvexly can organize a deep, role-aware
education platform: complex teacher workflows, many connected learning modes,
protected accounts, structured data, and classroom participation. Use the
language **built product system** rather than **client success story**, and
describe only the capabilities proven in source or separately exercised in a
recorded test.

## Mudoinkle — verified portfolio story boundary

### Source-grounded capabilities suitable for buyer-facing presentation

- One branded party-game hub containing three distinct play models:
  Witigglies, Awmuhog, and List Off.
- Witigglies provides a local, single-device pass-the-phone word-game path.
- Awmuhog provides host, join, and display surfaces for a room-based
  prompt-and-judge experience.
- List Off has dedicated host, join, and display routes, but its complete
  multi-role journey remains an explicit proof item rather than a completed
  claim.
- Clerk-protected host/account surfaces coexist with public join, display,
  help, safety, privacy, accessibility, and reporting routes.
- The deployment design separates business data in PostgreSQL from live room
  authority in Render Valkey and includes migration and health gates.

### Claims that still require focused proof before publication

- Full multi-device room lifecycle, reconnect, moderation, entitlement, or
  persistent recovery behavior.
- List Off end-to-end completion.
- Production launch status; the reachable build is explicitly staging.
- User counts, customers, revenue, performance results, or comparative claims.

### Recommended buyer angle

Present Mudoinkle as evidence that Cyvexly can design playful multi-surface
applications whose host, player, display, account, and operational states must
stay coordinated. Lead with the three interaction models and system
architecture, while plainly labeling the public link as a staging preview and
distinguishing implemented capability from remaining acceptance work.

## Cyvexly integration plan

The current generic case-study template hard-codes fictional-demo disclosures
and a Cyvexly-hosted demo framing. It must not be reused unchanged for these
real outside products. Team 2 should implement the portfolio work in this
order, coordinating source-file ownership with the primary Cyvexly team:

1. Add one Work card per product with distinct names, product categories,
   truthful summaries, capability bullets, and a case-study route.
2. Add a dedicated outside-product case-study presentation that supports
   source revision, current lifecycle label, verified-versus-pending proof,
   privacy-safe screenshots, and an explicitly labeled external preview link.
3. Use the verified Render URL for EduAILenz until the custom domain passes a
   fresh check; label the Mudoinkle link as staging.
4. Perform focused public and authenticated testing only through approved safe
   accounts and synthetic data. Do not request or handle passwords, codes,
   secrets, student data, or private user information.
5. Verify Work discovery, static routes, metadata, responsive layout, keyboard
   behavior, disclosures, outbound-link safety, CTA routing, and production
   rendering before acceptance.
6. Route the completed Cyvexly changes through the primary team's active file
   ownership and review process; do not commit unrelated dirty workspace files.

## Next safe unit

Create the reusable outside-product case-study content model and visual shell,
then add the two Work cards and case-study pages using only the approved claims
above. Screenshot selection and deeper workflow proof should follow as separate
evidence-backed rounds rather than blocking the truthful first integration.
