# ZEUS OS — AI Agents Championship starter

**Status:** offline proof of concept, NOT a deployable integrated AI agent or completed competition entry.

## Product statement
ZEUS is an AI workforce concept for independent professionals. Specialized booking, operations and financial agents coordinate workflows under explicit human approval.

## Implemented here
- Booking inquiry state machine
- Draft quotation from provided details
- Human-approval gate
- Unit tests for core safeguards

## Important limitations
- Availability is a user-provided boolean, not a live Google Calendar check.
- No Gmail sending, authentication, database, finance integration, LLM, or real agent orchestration.
- No personal or client data should be entered into the demo without secure infrastructure.

## Run tests
`python -m unittest discover -s tests -v`

## Proposed delivery gates
1. Identify and audit canonical GitHub repository.
2. Implement OAuth and least-privilege service access; restrict tenant access and encrypt data.
3. Implement tool-backed availability checks and structured quote policies.
4. Require approval before sending, booking, or changing financial records; log all actions.
5. Add live multi-agent orchestration and failure handling.
6. Pilot on consented real workflows and measure baseline vs ZEUS accuracy, speed and time saved.
7. Perform security, reliability, and originality review.
8. Record live demo and prepare competition submission after verifying official rules.
