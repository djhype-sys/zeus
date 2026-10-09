# ZEUS OS — Authoritative Master Specification v1.0

## Mission
ZEUS is a voice-first AI business operating system: **Your AI management team for the business behind the booth.** Initially focused on independent DJs and creative professionals, with a path to other small businesses.

## Product invariants
- Preserve the ZEUS wordmark (lightning bolt E) and provided brand assets.
- Two modes, same account and shared data: **Dark Oracle** (minimal cinematic, voice-first) and **Light Command Center** (marble-white, brushed gold operational dashboard).
- Six coordinated roles: ZEUS Chief of Staff, Booking Manager, Music Consultant/Director, Creative Director, Invoice Manager, CFO. One shared ZEUS Core, not six isolated chatbots.
- Humanized but transparent: calm, discerning, concise, optional British male voice; never imply ZEUS is a human or has feelings. Confirm what was actually done.
- Independent customer workspaces; founder data never copied to other users.
- Voice permissions are opt-in; provide text fallback and accessible reduced-motion support.
- Persist structured data securely; browser localStorage is demo-only, not production storage.
- Integrations: Gmail, Google Calendar, later Notion, Spotify, Canva. Mark each REQUESTED → AUTHORIZED → READ TEST → WRITE TEST → LIVE. No fabricated connectivity.
- Require explicit user approval for sending external messages, confirming bookings, payments, irreversible changes. Maintain audit log, idempotency and least-privilege scopes.
- Booking lifecycle: inquiry → qualification → availability → quote draft → approval → client reply → confirmation → invoice → payment reconciliation.
- Track paid, outstanding, tentative, FOC and cancelled bookings distinctly.
- Business evidence: workflow completion rate, tool error rate, time saved, approval accuracy, revenue/payment tracking.

## Agent responsibilities
1. Chief of Staff: triage, delegate, daily briefing, resolve conflicts and escalate.
2. Booking Manager: intake, calendar availability, quotations, holds and confirmations.
3. Music Consultant: set briefs, playlists, crate preparation, track readiness.
4. Creative Director: branding, campaigns, creative task coordination.
5. Invoice Manager: generate invoices, track due dates and payment status.
6. CFO: reconcile earnings, expenses, FOC work, and monthly reports.

## Demo scenario
A fictional client requests a Dubai corporate event. ZEUS checks mock availability, proposes rate, seeks owner approval, prepares reply and booking, issues mock invoice and records simulated payment. Explicitly label every simulated step. Never send a real email or modify a real calendar in demo mode.

## Release gates
- Source audit and dependency/security review.
- Authenticated multi-tenant persistence and secure secrets.
- Genuine AI planning and tool calls with guardrails.
- Tested live integrations and human approvals.
- Automated tests, failure recovery, observability and backup.
- Measured real-world pilot outcomes and stage-ready demo.

## Source precedence
For brand: original Kimi assets. For product behavior: this spec and original Kimi prompt (see archive). For current frontend: beta-deploy. For prior history: v0.1. For prototype tests: championship-starter. Conflicts require documented decisions in CHANGELOG.md.
