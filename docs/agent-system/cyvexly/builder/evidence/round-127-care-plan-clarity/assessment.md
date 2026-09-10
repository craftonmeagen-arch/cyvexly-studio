# Round 127 — Care-plan decision clarity

- **Accepted source:** deployed `586ea23`; equivalent local Builder commit
  `406de2d`. Their stable patch IDs match.
- **Observed gap:** the Website care route's two pricing actions landed at the
  top of Pricing instead of the promised care comparison. At that decision
  point, Care, Care+, and Evolve presented their details as dense paragraphs,
  offered no plan-specific inquiry action, and left pause/cancellation and
  unused-capacity treatment inside later FAQ/agreement language.
- **Change:** Website care now deep-links to `#care-plans`. The three plans
  expose comparable monthly capacity, response-window, and review-rhythm
  fields; each opens a plan-specific three-field inquiry. A concise terms note
  surfaces the no-long-term-contract position and promises that pause,
  cancellation, and unused-capacity treatment are settled before billing,
  without inventing the Owner's exact commercial terms.
- **Responsive audible:** the first rendered 768px pass showed an unnecessarily
  cramped three-column layout and 66px wrapped Care+/Evolve actions. The final
  layout uses two tablet columns with Evolve spanning the second row, restoring
  46px actions and readable comparison density; desktop remains three columns
  and phone remains one.
- **Automated proof:** TypeScript, the 52-route webpack production build, the
  34-route buyer-journey suite, and an exact 1440x900 / 768x1024 / 390x844 CDP
  pass succeed. All plan actions measure at least 46px high, every viewport has
  zero horizontal overflow, the terms note is present, and native Enter on
  Care+ reaches a correctly prefilled non-submitted Contact inquiry with no
  runtime errors. Exact measurements are in `metrics.json`.
- **Visible proof:** the optimized local route and Care+ handoff were opened and
  exercised in the Codex in-app browser. The responsive captures in this
  directory were opened at original resolution; no inquiry was submitted.
- **Review intake:** Auditor `IFA-2026-09-09-R99` cleanly verifies exact local
  Round 126 source `0d65cb3` (equivalent to deployed `c780c43`) with no finding.
  It closes that source's independent-review gate and predates this change.
- **Retention:** the four captures and metrics are retained for exact-source
  independent review of this user-facing comparison and inquiry handoff. The
  captures may be removed after that review is dispositioned; keep this
  assessment and `metrics.json` as the compact durable record.
