# Cyvexly App Debt — Round 93 archive

Moved from `CYVEXLY_APP_DEBT.md` round 94 to keep that file under its
30,720-byte hot-file cap. No history lost — full detail preserved below.

## Round 93 — lint-infrastructure fix (untracked `velora/` sub-repo) + Terms-page convergence check

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R84` (59th
consecutive clean confirmation, "PASS WITH COMMENDATION", evaluated head
`871b8db` — round 91's head, predating round 92's fix — re-escalated
`CYV-DOC-003` at "9,490b over the 8,192 cap"). **Stale on arrival:** round
92 (committed after this Auditor round started) already fixed
`CYV-DOC-003` by condensing `CYVEXLY_CURRENT_STATE.md` to 6,540 bytes;
verified the file measures 6,582 bytes now (post this round's own edit),
comfortably under cap. No Builder action needed beyond intake. Moved to
`exchange/processed/`.

Ran the standard verification suite (round-84 `PATH` fix applied first):
`pnpm exec tsc --noEmit` clean. `pnpm run lint` **failed** — a real,
newly-reachable build-infrastructure defect, not a stale/flaky result:
22 errors (`@typescript-eslint/no-require-imports`) across
`velora/evidence/run-005/*.cjs` and `velora/scripts/*.cjs`. Root-caused
before fixing: `velora/` is an untracked directory (confirmed by round
91's Auditor check as an independent nested git repository — its own
commit history, no remote, no relationship to this repo's tracked
history) that ESLint has no reason to skip, since `eslint.config.mjs`
only excluded `.next/**`, `out/**`, `build/**`, `next-env.d.ts`, and
`.codex/**`. Not Cyvexly product source, so not a product regression —
but a real reachable tooling failure per §2.9 (lint no longer runs
clean, which is required proof for every round). **Fixed:** added
`velora/**` to `eslint.config.mjs`'s existing `globalIgnores` list, the
same pattern already used for `.codex/**`. Re-ran lint: clean (only the
pre-existing round-42 evidence-script warning remains). `pnpm run build`
clean (49/49 pages, zero errors) on the same source plus this one-line
config change.

**Convergence-check, fresh surface (round 92's handoff-named
candidate):** diffed the Terms of Service page's
(`src/app/terms/page.tsx`) specific behavioral claims against real
Planner/Contact/Pricing source and rendered behavior. **0 defects
found:**
- "Submitting either form is the start of a conversation, not an order,
  purchase, or binding commitment" — the real confirmation-email subject
  lines are `"We received your project brief — Cyvexly Studio"`
  (`api/planner/route.ts`) and `"We received your message — Cyvexly
  Studio"` (`api/contact/route.ts`); neither route contains order/
  purchase/confirmation-of-sale language.
- "This site does not currently process payments. No payment method is
  represented as active" — grepped `src/app/pricing/page.tsx` for
  checkout/payment-processing UI (`checkout`, `pay now`, `buy`,
  `purchase`, `stripe`, card-entry language): none found; the only match
  is the existing "not a self-checkout menu" disclaimer, which reinforces
  the same claim rather than contradicting it.
- Contact email/phone in the "Contact us" section resolve through
  `siteConfig.email`/`siteConfig.phoneHref`/`phoneDisplay`
  (`src/lib/site-config.ts`): `design@cyvexly.com` / `tel:+13175725780` /
  `(317) 572-5780` — matches Owner direction `2026-09-04-14` exactly.

**Second convergence-check, fresh surface (named in this same round's
handoff planning):** diffed the Privacy Policy's
(`src/app/privacy/page.tsx`) specific data-handling claims against the
real Contact/Planner/analytics source. **0 defects found:**
- "We do not store your submission in a database — it exists only as
  the two emails this process sends" — `api/contact/route.ts` and
  `api/planner/route.ts` contain no database/file-write call; the only
  persistence is the two `sendMail()` calls (internal notification +
  visitor confirmation).
- "[IP] include it in the internal notification email... It is not
  included in the confirmation email sent back to you" — `getClientIp()`
  appears in `internalHtml`/`internalText` only
  (`<p>...IP ${escapeHtml(ip)}</p>`); the separate visitor-confirmation
  `sendMail()` call's `text`/`html` contain no `ip` reference — verified
  by reading both call sites directly, not inferred.
- "We do not currently use cookies, advertising pixels, or third-party
  analytics" — `src/app/layout.tsx` only renders `<GoogleAnalytics
  measurementId={gaMeasurementId} />` when
  `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID` is set; that env var is
  one of the still-open Owner gates (unset today per
  `CYVEXLY_CURRENT_STATE.md`), so the component never renders in the
  current deployment — the claim matches actual shipped behavior, not
  just a code comment's intent.

**Completion:** DONE WITH PROOF (1 real build-infrastructure defect found
and fixed; 0 product defects found across both named convergence checks).
Source change: `eslint.config.mjs` only (no product-facing/runtime
change). Cleaned up: no dev server or browser instance was started this
round (verification suite is CLI-only for this scope).
