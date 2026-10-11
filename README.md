# ZEUS OS — MASTER v1.0

**One source of truth for ZEUS Companion OS.**

Start with [Continuity Handoff](docs/CONTINUITY_HANDOFF.md), then [Phase 01](docs/PHASE_01.md), [Master Specification](docs/ZEUS_MASTER_SPEC.md), and [Roadmap](docs/ROADMAP.md). Phase 01 records the latest agreed release scope.

## Run the existing beta
Serve `app/` as a static website: `python3 -m http.server 8000 --directory app`. Open localhost:8000. The app includes a particle orb, local booking drafts and a cached offline shell. This is a local developer preview; secure authentication, online synchronization and live agents are pending. Netlify must publish `app/` (configured in `netlify.toml`).

## Archive
Four recovered ZIP packages are unpacked under `archive/`, preserving original source and artwork. The deploy beta is preserved in the archive; `app/` carries the current prototype changes.

## Smoke test
Run `python3 tests/smoke.py`. It checks archive integrity and essential files. The original championship agent unit tests are preserved under `archive/championship-starter/`.

## GitHub
Repository: `djhype-sys/zeus` (public, with user approval on 9 October 2026). The user created the repository on 9 October 2026; this source is the recovered initial baseline. Do not publish personal demo data, secrets, OAuth tokens or client details.

## Current status — 11 October 2026
Local source smoke, three archived agent tests, bounded booking tests and the desktop/mobile browser suite passed. See [verification and build dashboard](docs/VERIFY_2026-10-11.md) for evidence and limitations. The orb uses actual playback amplitude/frequency energy, six states and four configurable formations; no upstream code was copied. Physical microphone and device installation checks remain pending.

The Netlify preview root still returns 404; its older `/app/index.html` returns 200. The published deploy predates the root redirect. Source now sets the publish directory to `app/`; publishing is blocked by a Netlify login screen. GitHub connector writes require an app grant; browser commits are available. None of Gmail, Calendar, Notion, Spotify or Canva is implemented as a live ZEUS integration.

## Functional checks
Use Node 24: `npm ci`, `npm test`, `npx playwright install --with-deps chromium`, then `npm run test:browser`. Browser tests run against a disposable local server with sample data. The microphone lifecycle test injects a Web Audio MediaStream; it does not prove physical microphone compatibility. The shell caches public assets only. Local profiles and browser storage are not a security boundary or online synchronization.
