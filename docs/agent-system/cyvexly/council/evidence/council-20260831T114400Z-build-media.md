# CYC-R18 build and media evidence

- Fresh Council snapshot/runtime created by `Start-ReviewRound.ps1` with
  source head `68fe4a476a89070b968a21852742680571794695`, dirty fingerprint
  `329025F57F43D74E228064E5AE842CED8FADE5870A368A27B3D1ECC20F6999B6`, and
  Council port `5373`.
- Offline `pnpm install` completed in the disposable runtime.
- `pnpm lint`: passed.
- `pnpm build`: passed; 23 pages generated, including all five static service
  routes. The only warning is the known Owner/domain-blocked `metadataBase`
  fallback to localhost.
- Immediate post-build `pnpm exec tsc --noEmit`: passed.
- `Test-HotFileCaps.ps1` passed for all Council hot files after record updates;
  `git diff --check` passed. Council did not modify product source or tests.
