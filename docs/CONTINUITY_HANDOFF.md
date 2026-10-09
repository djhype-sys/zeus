# Continuity handoff — read this first

ZEUS is not a generic chatbot. It is a cinematic voice-first business operating system with two synchronized experiences, six coordinated agents and explicit human approvals.

## Recovery instructions for any future AI/developer
0. Read docs/PHASE_01.md for the latest release scope and platform decisions. The user selected djhype-sys/zeus as the repository on 9 October 2026. Its public visibility was approved by the user and verified, and GitHub connector source reads succeed; browser commits remain available while connector writes require an app grant.
1. Read README.md, docs/ZEUS_MASTER_SPEC.md and archive/kimi-k3/ZEUS_Kimi_K3_Build_Package/KIMI_K3_MASTER_BUILD_PROMPT.md.
2. Inspect app/index.html as the beta starting point; inspect archive/original-v0.1 for earlier voice/PWA features.
3. Review the original assets in archive/kimi-k3/.../assets. Do not substitute generic imagery for supplied assets.
4. Read docs/ROADMAP.md and CHANGELOG.md. Never claim untested integrations are working.
5. Work on a feature branch, run tests, document changes, obtain approval before deploying or performing external actions.
6. Keep production credentials out of Git; use environment variables and secret managers.

## Known status at packaging
The beta is browser-local and does not establish production-grade authentication, persistence, real connected Gmail/Calendar, or AI autonomy. The Replit ZEUS update was requested but not yet verified as completed. All 31 prepared source files were uploaded to djhype-sys/zeus and verified byte-for-byte; the GitHub smoke workflow passed. Public visibility was approved on 9 October 2026. Connector source reads now succeed; connector writes returned 403 and still require repository app authorization.

## Key source locations
- app/: baseline deployable beta
- archive/: untouched contents of four provided ZIPs
- docs/: authoritative roadmap, spec, and handoff
- .github/workflows/: static smoke checks
