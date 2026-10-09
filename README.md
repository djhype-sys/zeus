# ZEUS OS — MASTER v1.0

**One source of truth for ZEUS Companion OS.**

Start with [Continuity Handoff](docs/CONTINUITY_HANDOFF.md), then [Phase 01](docs/PHASE_01.md), [Master Specification](docs/ZEUS_MASTER_SPEC.md), and [Roadmap](docs/ROADMAP.md). Phase 01 records the latest agreed release scope.

## Run the existing beta
Open `app/index.html` in a browser, or serve `app/` as a static website. This is a local demo, not a production multi-user AI agent.

## Archive
Four recovered ZIP packages are unpacked under `archive/`, preserving original source and artwork. The deploy beta is duplicated in `app/` as the working baseline.

## Smoke test
Run `python3 tests/smoke.py`. It checks archive integrity and essential files. The original championship agent unit tests are preserved under `archive/championship-starter/`.

## GitHub
Repository: `djhype-sys/zeus` (private). The user created the repository on 9 October 2026; this source is the recovered initial baseline. Do not publish personal demo data, secrets, OAuth tokens or client details.

## Current status
Master package recovered and prepared for the user-selected `djhype-sys` account. The beta is a browser-local demo; live integration readiness and deployment remain unverified. The local smoke check and three archived agent tests passed. Replit merge remains pending verification.
