---
active: true
iteration: 1
max_iterations: 50
completion_promise: "All work-bg tasks complete for calculator"
started_at: "2026-02-27T07:15:23Z"
---

## Context Recovery (do this FIRST on every iteration)

1. Read .claude/ralph-loop.local.md to check iteration number
2. Read .claude/ralph-progress.md for learnings and patterns from previous iterations (Codebase Patterns section FIRST)
3. Read .claude/ralph-tasks.json for current task state (find next incomplete task)
4. Read .claude/work-briefing-20260226_231523.md for all pre-answered user decisions
5. Read PRODUCT_STATE.md, CLAUDE.md, and AGENTS.md for project context
6. If ~/.claude/pre-compact-recovery.md exists, read it for any additional state from mid-session compaction
7. Run git log --oneline -10 and git status to understand what was already built

## Work Instructions

Execute /workflows:work #calculator using the briefing decisions. Do NOT ask any clarifying questions — everything has been decided. Follow the briefing exactly:
- Use the branch strategy specified in the briefing
- Build what the plan summary describes
- Respect all decisions and execution notes

Skip Phase 1 (Quick Start) of the /workflows:work skill — go straight to Phase 2 (Execute).



## Iteration Protocol

- Focus on the NEXT incomplete task from .claude/ralph-tasks.json
- Before writing code, check git log to avoid redoing work from previous iterations
- After completing a task, update .claude/ralph-tasks.json (set passes: true)
- Append learnings to the Iteration Log section of .claude/ralph-progress.md
- Commit after each completed task: feat: [Task ID] - [Task Title]

## Completion

When ALL tasks from the briefing are complete, tests pass, and linting passes:

1. Push your branch and create a private PR using gh pr create --private.
2. Run /workflows:review to conduct a thorough code review of your changes.
3. If the review finds issues, fix them, push again, and re-review.

Then output:
<promise>All work-bg tasks complete for calculator</promise>

Only output the promise when it is genuinely true. Do not output it early.
