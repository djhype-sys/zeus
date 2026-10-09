# ZEUS OS Phase 01 — working prototype

This document carries forward the release decisions agreed on 8 October 2026. It takes precedence over older scope and platform choices elsewhere in the recovered package. Product modules and the six agent roles are separate concepts.

## Platform

Build a device-independent, cross-platform, installable offline-first PWA for iPhone, Android, Mac, Windows and browsers. Use a shared architecture, synchronize records online, and keep LIVE useful offline with reconciliation on reconnect. Native extensions are optional where voice or on-device AI needs them.

## Release modules and milestones

| Milestone | Deliverable | Verified implementation status |
| --- | --- | --- |
| M0 | Foundation: auth, local-first data, permissions, audit, AI abstraction | Unverified |
| M1 | MEMORY | Unverified |
| M2 | BOOKING + CFO | Unverified |
| M3 | EARS | Unverified |
| M4 | LIBRARY: Rekordbox import and owned-track evidence | Unverified |
| M5 | SHADOW | Unverified |
| M6 | LIVE | Unverified |
| M7 | Integration and release verification | Unverified |

The recovered browser beta is a starting source, not evidence of milestone completion. Source integrity checks do not establish functional acceptance.

## Integration readiness

Track Gmail, Google Calendar, Notion, Spotify and Canva individually through REQUESTED → AUTHORIZED → READ TEST → WRITE TEST → LIVE. Advance only with dated implementation and execution evidence. A connector working in ChatGPT does not establish that the ZEUS application has that integration.

## EARS acceptance scenario

Given a consented conversation containing “Friday and Saturday, 9 PM–midnight, AED 750 per night, Latin/Moroccan music, paid after each performance,” produce:

- Structured booking terms, preserving amounts, times, music and payment terms.
- Draft calendar events; request dates or other missing details rather than guessing.
- A SHADOW music brief.
- CFO receivables for each performance.
- A follow-up draft.

Require the appropriate approval before external writes or sending messages. Verify the full flow, persistence, audit trail and failure recovery before marking it complete.

## Weekly build review

Report milestone changes, the five integration stages, unresolved choices, stalled or regressed work, and the three highest-leverage next steps. Compare dated evidence with the previous review. Distinguish lack of evidence or source access from confirmed lack of progress.

## Repository baseline — 9 October 2026

The user selected `djhype-sys` for the new repository. The connected identity matches that account. At preparation time, repository enumeration and GitHub app installation enumeration were empty. The user subsequently created `djhype-sys/zeus`; repository existence and private visibility were verified before this source upload. ChatGPT connector access to the private repository still requires a repository grant; browser sign-in alone does not provide it. Preserve the original archive as provenance and record real verification results when available.
