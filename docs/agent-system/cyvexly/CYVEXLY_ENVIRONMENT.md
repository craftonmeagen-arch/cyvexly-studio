# Cyvexly Environment

## Sandbox and roots

- Sandbox root: `C:/app projects/website`
- Builder root: sandbox root
- Builder lock: `.engine-lock`
- Builder evidence: `docs/agent-system/cyvexly/builder/evidence/`
- Auditor disposable root: `.codex/runtime/auditor/`
- Auditor durable evidence: `docs/agent-system/cyvexly/auditor/evidence/`
- Council disposable root: `.codex/runtime/council/`
- Council durable evidence: `docs/agent-system/cyvexly/council/evidence/`
- Council research: `docs/agent-system/cyvexly/council/research/`
- Role identity/guard state: `.codex/role-state/`

## Ports

- Builder/Supervisor: `5173`
- Auditor: `5273`
- Council: `5373`

## Lifecycle

- Builder claim: `.codex/roles/scripts/Claim-BuilderLock.ps1`
- Builder release: `.codex/roles/scripts/Release-BuilderLock.ps1`
- Reviewer start: `.codex/roles/scripts/Start-ReviewRound.ps1`
- Reviewer process registration: `.codex/roles/scripts/Register-RoleProcess.ps1`
- Reviewer publish: `.codex/roles/scripts/Publish-RoleReport.ps1`
- Reviewer cleanup: `.codex/roles/scripts/Complete-ReviewRound.ps1`

## Product runtime (established round 1)

- Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind
  CSS v4. Package manager: pnpm (`packageManager` pinned in `package.json`).
- Source/deployment branch: local `main` tracks `origin/main`. The public Render
  service at `https://cyvexly-studio.onrender.com/` deploys this branch. Round
  15 proved that pushing only the historical `master` branch leaves the public
  site stale even when GitHub contains the commits; use `main` for accepted
  source and verify the public route after a deployment-relevant push. Remote
  `master` is retained only as a same-source historical branch and is not the
  Builder upstream.
- Install: `pnpm install` (use `CI=true pnpm install` if it prompts to
  recreate `node_modules` after the folder was moved/copied — pnpm's linked
  store references can break across a move).
- Dev server: `pnpm exec next dev --port 5173` (the Builder port
  reservation). `.claude/launch.json` defines a `cyvexly-builder`
  configuration for the same thing, for use in attended sessions where
  `preview_start({name: "cyvexly-builder"})` is permitted.
- Build/verify: `pnpm run build`, `pnpm exec tsc --noEmit`, `pnpm run lint`.
- `next.config.ts` sets `agentRules: false` — do not remove this; see
  `CYVEXLY_WATCH.md` for why.
- `NEXT_PUBLIC_SITE_INDEXABLE` (round 3): unset/anything but the literal
  string `"true"` = the whole site emits `noindex, nofollow` and
  `robots.txt` disallows all crawlers (the safe default for a temporary
  preview domain, per vision §15). Set this env var to `true` on the
  production deploy once the real domain is connected, or the launched
  site will never get indexed. See `src/app/layout.tsx` and
  `src/app/robots.ts`.
