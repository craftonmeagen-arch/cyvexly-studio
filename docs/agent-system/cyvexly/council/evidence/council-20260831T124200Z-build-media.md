# Council R19 Build and Runtime Evidence

- Round: `council-20260831T124200Z`; immutable snapshot head
  `57480e359c2e8252006547da59b55d06dd100d7b`; clean start fingerprint
  `E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855`.
- `pnpm install --offline`: passed in the Council runtime.
- `pnpm lint`: passed.
- `pnpm build`: passed; Next generated 23 routes, including the five static
  service-detail routes. The only output warning is the known Owner/domain
  decision: `metadataBase` falls back to `http://localhost:3000`.
- `pnpm exec tsc --noEmit`: passed immediately after build.
- Production server: Council-owned port `5373`; `/services`, all five detail
  routes, `/start?service=business-websites` returned `200`; unknown service
  returned `404`.
- In-app Browser live console query after route and interaction review returned
  no warning or error entries.
- Cleanup is pending publication and will preserve this evidence and the R19
  visual captures while deleting the disposable runtime and snapshot.
