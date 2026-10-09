# Architecture draft

Owner -> ZEUS Orchestrator -> Booking Agent / Scheduling Agent / CFO Agent -> Proposed actions -> Owner approval -> External tools -> Audit log.

Principles: default deny; no automatic sending; idempotent actions; data minimization; OAuth least privilege; user isolation; encrypted secrets; action logs; explicit consent. This document is design only and does not certify deployment security.

## Competition evidence pack
- Originality: source control history and independent implementation explanation.
- Technical: working demo with tool call traces, failures, and approvals.
- Impact: verified benchmark with baseline and sample count.
- Privacy: documented access, deletion, retention and incident response procedures.
- Commercial: user interviews, user profiles, price hypotheses and market test outcomes.
