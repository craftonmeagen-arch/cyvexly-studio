# Cyvexly Environment
Current role setup: 2026-09-05. See CYVEXLY_ROLE_RULES_MAPPING.md for authority and paths.

- Product root C:/app projects/website; main tracks origin/main.
- Builder/Supervisor port 5173.
- Independent review root C:/app projects/website-independent-review.
- Auditor 5273; Council 5373; Functional Smoke 5473.
- Review snapshots, runtimes, browser profiles, memory, reports and inbox are external.
- Source stack: Next.js 16, React 19, TypeScript, Tailwind 4; pinned pnpm in package.json.
- Install pnpm install --frozen-lockfile. Dev pnpm exec next dev --port <owned-port>.
- Checks, in this order, pnpm run lint, pnpm run build, then pnpm exec tsc
  --noEmit (build before standalone tsc on a fresh checkout — see
  CYVEXLY_WATCH.md Round 10 and CYVEXLY_TOOLS_AND_CAPABILITIES.md Round 178).
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

- **Round 65 environment fix, may recur each fresh shell:** this machine has no `node`/`pnpm`
  on the default PATH for a new shell session (neither Bash nor a fresh PowerShell tab), even
  though a real Node.js install and pnpm's global shim exist on disk. The npm-installed
  `pnpm.ps1`/`pnpm.cmd` shims under `%APPDATA%\npm` themselves shell out to `node.exe`, so
  calling them still fails with "node is not recognized" until a real Node install directory
  is also on PATH. Fix per PowerShell session (does not persist across tool calls or new
  shells — must be repeated each time): prepend both directories, e.g.
  `$env:PATH = "C:\Users\Tcraf\AppData\Local\Programs\NodeJS\node-v24.19.0-win-x64;$env:APPDATA\npm;" + $env:PATH`
  then use `pnpm` normally. Confirm the exact Node directory still exists before reusing this
  (folder name embeds a version and could change on a future Node upgrade) — list
  `C:\Users\Tcraf\AppData\Local\Programs\NodeJS\` if the hardcoded path stops working. This is
  a session/PATH configuration gap, not evidence that Node/pnpm are absent from the machine.
