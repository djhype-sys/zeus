# ZEUS OS Phase 01 — working prototype

This document carries forward the release decisions agreed on 8 October 2026. It takes precedence over older scope and platform choices elsewhere in the recovered package. Product modules and the six agent roles are separate concepts.

## Platform

Build a device-independent, cross-platform, installable offline-first PWA for iPhone, Android, Mac, Windows and browsers. Use a shared architecture, synchronize records online, and keep LIVE useful offline with reconciliation on reconnect. Native extensions are optional where voice or on-device AI needs them.

## Voice-reactive orb — agreed 9 October 2026

ZEUS speech must be visually audio-reactive. Preserve the gold identity: actual voice amplitude and frequency energy drive surface deformation, glow and expansion; pauses soften the motion and speech completion returns to idle. Listening reacts to the consented microphone stream; speaking reacts to ZEUS playback audio. Keep idle, listening, thinking, speaking and error states distinct. Thinking animation is state-driven, not claimed as audio analysis.

The 9 October baseline uses a timed pulse and does not satisfy this requirement. The 11 October source adds an original particle renderer; see VERIFY_2026-10-11.md for tested playback behavior and outstanding device checks. Implement through the voice playback abstraction shared with EARS/LIVE. Analyze the same audio stream delivered to the speaker; avoid microphone loopback of ZEUS output. Provide audio cancellation, stream cleanup, reduced-motion support and a useful low-power fallback. Acceptance: compare quiet speech, loud speech, pauses, interruption and completion against the orb on mobile and desktop. Do not mark complete from a simulated animation.

Candidate implementation reference: https://github.com/OrbitingBucket/voice-orb-visualizer (MIT; microphone and assistant-audio APIs, including HTML audio connection). Evaluate source and pin a reviewed version before adoption; bundle dependencies for offline operation. This is a candidate, not confirmation of the repository remembered by the user. A React alternative is https://github.com/amunozdev/voiceorbs. No candidate dependency has been adopted. Current source uses an original dependency-free renderer with amplitude/frequency analysis, configurable sphere/halo/helix/constellation forms and a separate working state.

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

The user created `djhype-sys/zeus`, and all 31 prepared source files were uploaded and verified byte-for-byte against a GitHub download. ZEUS smoke workflow run #1 passed on commit `3f1abc7468efe51ea8b8a1c4c24fd564320a8b05`; the local smoke check and three archived agent tests passed. The user approved public visibility on 9 October 2026. Public visibility and a successful GitHub connector read were verified, resolving the earlier source-read blocker. Connector writes return 403 and require a repository app grant; signed-in browser commits remain available. Public source access does not establish live application integrations or functional milestone completion.

## Verified increment — 11 October 2026

See [dated verification dashboard](VERIFY_2026-10-11.md). Source now includes a bounded, typed conversation-to-draft acceptance flow, consent/persistence/audit gates, a cached PWA shell, PNG installation icons and an original voice-reactive orb. Local password collection/storage has been removed; local profiles are clearly labeled. M0 and M2 are in progress, not complete. No secure auth, online sync, general transcription/extraction, tested physical-device installation, functional offline LIVE or live integration is established by this increment.
