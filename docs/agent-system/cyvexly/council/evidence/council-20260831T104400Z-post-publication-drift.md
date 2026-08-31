# CYC-R17 post-publication source drift

R17's immutable Council snapshot was created from source head
`62c6b7e6bb4e36ebc05b59a78f6b98b513ed1858` with dirty fingerprint
`9E720D490C57AA368EA78E5EF74899D4F18F211B53E5C5291303D710CF547005`.
Publication completed at `2026-08-31T11:09:26.0614187Z`; exact browser/runtime
cleanup completed at `2026-08-31T11:09:57.1499760Z`.

At `2026-08-31T11:10:02.5800731Z`, after cleanup, the working tree contained
new unreviewed Builder/product changes:

- modified `src/app/globals.css`, `src/app/services/page.tsx`,
  `src/app/start/page.tsx`, `src/components/planner/planner-form.tsx`,
  `src/lib/planner-config.ts`, and `src/lib/site-config.ts`;
- untracked `src/app/services/[slug]/`, `src/components/service-detail-signal.tsx`,
  and `src/lib/service-details.ts`.

The drift adds service detail routes, service-to-Planner links/prefill, and
related configuration/styles. It is outside the immutable R17 snapshot/runtime
and was not reviewed or edited by Council. The next Council must establish a
fresh snapshot and independently review the service-detail/Planner handoff
slice before acceptance. Preserve Builder ownership and the current working
tree.
