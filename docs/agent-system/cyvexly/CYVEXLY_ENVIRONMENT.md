# Cyvexly Environment
Current role setup: 2026-09-05. See CYVEXLY_ROLE_RULES_MAPPING.md for authority and paths.

- Product root C:/app projects/website; main tracks origin/main.
- Builder/Supervisor port 5173.
- Independent review root C:/app projects/website-independent-review.
- Auditor 5273; Council 5373; Functional Smoke 5473.
- Review snapshots, runtimes, browser profiles, memory, reports and inbox are external.
- Source stack: Next.js 16, React 19, TypeScript, Tailwind 4; pinned pnpm in package.json.
- Install pnpm install --frozen-lockfile. Dev pnpm exec next dev --port <owned-port>.
- Checks pnpm exec tsc --noEmit, pnpm run lint, pnpm run build.
- Use PowerShell 7 for lifecycle helpers. Start background processes hidden and register
  each owned server/worker/browser process before cleanup.
- Reviewers install dependencies in their disposable runtime; never use Builder caches,
  credentials or browser state. Only run-created resources are cleanup candidates.
- Render preview https://cyvexly-studio.onrender.com/; production cyvexly.com remains
  subject to Chunk 5 DNS/HTTPS/canonical verification.
- NEXT_PUBLIC_SITE_INDEXABLE stays false/unset until the Owner authorizes final indexing
  after domain, legal, forms, metadata, and visual review. Domain connection alone is insufficient.
- next.config.ts agentRules:false remains a product setting; see CYVEXLY_WATCH.md.

Current runtime tools must be verified each invocation. Historical unattended tool failures
are diagnostic context, not permanent claims that attended visual proof is unavailable.
