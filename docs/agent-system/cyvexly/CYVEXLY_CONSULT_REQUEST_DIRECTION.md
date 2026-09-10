# Cyvexly Quick Consultation Request — 2026-09-10-04

**Status:** ACTIVE — primary Cyvexly Builder implementation and review required.
**Authority:** New Owner request in this conversation, September 10, 2026.

## Owner request — verbatim

> Also we need a way to allow users to request to be contacted for a consult if
> they want to skip filling out an entire 9 step process form. Basically they
> leave a contact request for when we can reach them the next business day.

## Observed gap

The current Contact form already bypasses the Planner, but requires a project
description, hides optional phone details, has no preferred callback window,
and says replies take two business days. It is not yet the requested quick
consultation experience. Do not close this direction merely by linking to that
unchanged form or relabeling the nine-step Planner.

## Required buyer outcome

- Visitors can clearly choose “Request a consultation” instead of completing
  a brief. Make it discoverable on Contact and at Planner entry, with an escape
  to it during the Planner. Include a clear homepage/inquiry entry point.
- One short form, no account, payment, mandatory project description, budget,
  company details, or completion of any Planner step. Keep the detailed Planner
  available for people who want to supply a full brief.
- Ask for name, preferred contact method, and the corresponding email address
  or phone number. Do not require both contact channels. Provide a preferred
  contact window with an “any time” choice, and enough timezone context to
  interpret that preference. A short project note is optional.
- Ask permission to respond to this consultation request and link Privacy.
  Do not bundle newsletter consent, automated texting, or unrelated marketing.
- Preserve the approved blue-glass design and usable desktop/mobile hierarchy.
  Implementation architecture is the Builder's choice; avoid duplicate forms
  or conflicting routes when a clear mode can serve the same outcome.

## Next-business-day expectations

Use next-business-day follow-up for consultation requests as the Owner asked.
The preferred window is a request, not a booked slot or guaranteed exact call
time. Receipt and notification copy must distinguish “request sent” from a
confirmed appointment. Do not invent a live calendar, available appointments,
free/paid consultation terms, or an immediate-response guarantee.

Working timing default: studio timezone America/New_York; business days Monday
through Friday excluding observed U.S. federal holidays. Make the convention
understandable and configurable, with no invented opening hours. Handle
weekends, holidays, timezone differences, and daylight-saving boundaries; do
not calculate “next business day” as simply tomorrow. If a visitor cannot take
the suggested next-business-day window, allow a note or “arrange by email”
when email is their chosen contact channel.

Reconcile consultation-specific copy across entry points, receipt, and emails.
Do not leave a contradictory two-business-day promise in this path. This does
not authorize changing every unrelated service/support response commitment.

## Delivery and privacy

Deliver a clearly identified consultation request to design@cyvexly.com with
the chosen contact channel, contact details, requested window/timezone, and
optional note. Do not substitute a mailto link for a working form submission.
Use the existing protected mail infrastructure where suitable; no new provider
account, subscription, calendar integration, or scheduler change is authorized.

Apply server-side validation, sanitization, spam/rate limits, duplicate-submit
protection, accessible errors, and honest not-configured/network/provider-
failure handling. Preserve entered details after failure and provide a direct
contact fallback. Claim success only on successful server-side notification
submission; separately verify actual inbox delivery before calling it proved.
If an email confirmation is available, report its outcome independently. Do
not claim to have sent a confirmation to a phone-only requester or send SMS.

Apply the privacy refinements in `CYVEXLY_OWNER_APPROVALS.md` to this new flow:
no routine raw-IP inclusion in notification emails, no sensitive contact data
in URLs/analytics/debug logs, accurate processor/local-storage disclosure, and
no new indefinite storage. Preserve in-progress Planner answers when switching
paths; do not silently transmit those answers with the short request.

## Acceptance and coordination

The primary Builder owns this Cyvexly feature. Add a bounded follow-on chunk or
explicitly tracked addition without discarding current homepage-rail work or
another writer's edits. Team 2/outside apps and all scheduler states are unchanged.

Prove entry paths, completion without Planner answers, email-only and phone-only
requests, optional note, window/timezone transmission, consent, validation,
spam limits, duplicate-submit handling, provider failures, separate confirmation
outcomes, and honest receipt wording. Verify desktop/tablet/390px/320px and
keyboard use; regress normal Contact, Planner draft preservation, and the rails.
Use synthetic/intercepted mail for routine tests. Coordinate a controlled real
delivery check to the Owner's inbox; do not send tests to unrelated recipients
or use real customer data. Follow independent review and production verification
before reporting this as live and complete.

This direction queues work only; this record update did not edit product source,
send an inquiry, book an appointment, or change account/automation settings.
