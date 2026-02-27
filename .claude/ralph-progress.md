# Ralph Progress — work-bg for calculator

## Codebase Patterns
<!-- General, reusable patterns discovered during iterations. Read this section FIRST. -->

- Product uses dev-framework phase gates: each phase has a GATE-CHECK.md with machine-verifiable criteria
- Discovery phase templates are in phases/01-discovery/ — fill in the markdown templates, don't create new files
- Gate checks use simple shell commands (test -s, grep -qi) for verification
- Python project uses ruff for linting, mypy for types, pytest for tests (configured in pyproject.toml)

---

## Iteration Log

### Iteration 1 — 2026-02-27
**Tasks completed:** DISC-1, DISC-2, DISC-3, DISC-4
**What was done:**
- Defined calc as a programmable CLI calculator for developers
- Completed vision statement with problem, target user, value prop
- Identified 3 target segments: backend devs, DevOps/SRE, data engineers
- Analyzed 5 competitors: Python REPL, bc, Qalculate!, Numi, shell arithmetic
- Differentiation: developer-first math, unit awareness, pipe-friendly, pip-installable
- All 5 gate checks pass
