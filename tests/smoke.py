from pathlib import Path
root=Path(__file__).resolve().parents[1]
required=['README.md','docs/ZEUS_MASTER_SPEC.md','docs/CONTINUITY_HANDOFF.md','docs/ROADMAP.md','app/index.html','app/manifest.json','archive/kimi-k3/ZEUS_Kimi_K3_Build_Package/KIMI_K3_MASTER_BUILD_PROMPT.md','archive/original-v0.1/zeus-companion-os/app.js','archive/championship-starter/zeus-championship/src/agent.py']
for name in required:
    assert (root/name).is_file(), f'Missing {name}'
assert (root/'app/index.html').stat().st_size > 100000
print(f'PASS: {len(required)} required source/specification files and beta size verified')
