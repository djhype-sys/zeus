# Continuity handoff — read this first

ZEUS is not a generic chatbot. It is a cinematic voice-first business operating system with two synchronized experiences, six coordinated agents and explicit human approvals.

## Recovery instructions for any future AI/developer
0. Read docs/PHASE_01.md for the latest release scope and platform decisions. The user selected djhype-sys/zeus as the repository on 9 October 2026. Its existence and private visibility have been verified; this folder is the initial source baseline.
1. Read README.md, docs/ZEUS_MASTER_SPEC.md and archive/kimi-k3/ZEUS_Kimi_K3_Build_Package/KIMI_K3_MASTER_BUILD_PROMPT.md.
2. Inspect app/index.html as the beta starting point; inspect archive/original-v0.1 for earlier voice/PWA features.
3. Review the original assets in archive/kimi-k3/.../assets. Do not substitute generic imagery for supplied assets.
4. Read docs/ROADMAP.md and CHANGELOG.md. Never claim untested integrations are working.
5. Work on a feature branch, run tests, document changes, obtain approval before deploying or performing external actions.
6. Keep production credentials out of Git; use environment variables and secret managers.

## Known status at packaging
The beta is browser-local and does not establish production-grade authentication, persistence, real connected Gmail/Calendar, or AI autonomy. The Replit ZEUS update was requested but not yet verified as completed. GitHub repository URL was supplied, but connector access returned 404; this package has not been pushed.

## Key source locations
- app/: baseline deployable beta
- archive/: untouched contents of four provided ZIPs
- docs/: authoritative roadmap, spec, and handoff
- .github/workflows/: static smoke checks
