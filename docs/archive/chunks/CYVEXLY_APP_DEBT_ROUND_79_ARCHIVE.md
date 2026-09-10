# Cyvexly App Debt — Round 79 Archive

## Round 79 — no new defect; live keyboard/validation verification + rAF proof-instrument refinement

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R70` (45th
  consecutive clean confirmation, reviewed commit `7708964` — round 77's head),
  0 active code defects, "PASS WITH COMMENDATION" including its own live CDP
  re-verification of the round-76 video. Same stale "Production Domain
  Connection" gate wording rounds 77-78 already noted (domain verified live
  since round 53). No Builder action required; moved to `exchange/processed/`.
- **Completed round 78's recommended live keyboard-only Tab traversal of the
  header nav / Contact form / Planner** via the manual-start-then-attach
  Browser-pane workaround (real compositing screenshot + real native `Tab`
  confirmed working again this round). Real click + `Tab` sequence through
  the Home hero traversed hero CTA → Explore services → the round-76 "how it
  works" video trigger (a focusable `role="button"` `<div>` — confirmed it
  carries `aria-label="Open the Cyvexly process video in a larger view"`, not
  a defect) → Work cards, in correct visual/DOM order. On `/contact`, a real
  native `Tab` sequence from a real click on Name traversed Name → Email →
  Phone → Company → Topic → Message → Consent → Send message, each with
  correct `<label for>` association; the honeypot field
  (`contact-company-website`) is confirmed `tabIndex="-1"` and correctly
  unreachable by keyboard.
- **Found and correctly diagnosed a proof-instrument gap, not a product
  defect.** A real click on Contact's "Send message" with an empty form set
  `aria-invalid`/`aria-describedby`/the `role="alert"` summary correctly, but
  focus stayed on the button instead of moving to the first invalid field as
  `contact-form.tsx` intends (`form.querySelector('[aria-invalid="true"]')
  ?.focus()`, wrapped in `requestAnimationFrame`). Root-caused before
  concluding it was a bug: a direct rAF probe in the same Browser-pane session
  (`requestAnimationFrame` counter after a real 3s wait) stayed at `0` even
  though `document.hidden` read `false` and compositing/Tab-focus worked —
  this is the same rAF-suppression limitation `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  documented at round 6, now shown to be an *independent* degradation from
  compositing/keyboard (one can work while the other stays suppressed; they
  are not one unified capability). Verified the real product behavior instead
  via round 8's local-headless-Chrome/CDP method, where `requestAnimationFrame`
  genuinely fires: a real DOM click on Contact's submit button with an empty
  form correctly moved focus to the Name input (`aria-invalid="true"`,
  `aria-describedby="name-error"` → "Please enter your name."). **No product
  defect** — confirmed working as designed via a stronger instrument.
- **Planner Step 1, same method:** a real native click (headless-Chrome CDP)
  on "Continue →" with every field empty correctly moved focus to `fullName`
  (`aria-invalid="true"`, `aria-describedby="fullName-error"`, 3 real
  `role="alert"` messages), then real native `Input.dispatchKeyEvent` `Tab`
  presses traversed workEmail → contactMethod → roleTitle → companyName →
  country → otherApprovers in correct order with correct labels — reconfirms
  round 8's original finding still holds on current source (commit
  `94048c4`), no regression.
- **Verified:** no source file changed this round (verification/proof-gap
  closure only), so `tsc`/lint/build were not re-run (round 78's clean
  results stand unchanged).
- Cleaned up: stopped the manually-started `next dev` listener on port 5173
  by verified real listener PID; stopped the round-owned headless-Chrome
  instance by matching its unique `--user-data-dir` command-line substring
  (not by process name — several unrelated `chrome.exe` processes were
  running); removed the unique Chrome profile directory, dev-server log, and
  both scratch CDP helper scripts from the OS temp root and session
  scratchpad; closed the Browser pane tab.
