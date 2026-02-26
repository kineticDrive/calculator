# Definition Phase — Gate Check

All items must be completed before advancing to Architecture phase.
Lines with `>>` are machine-verifiable acceptance criteria.

- [x] PRD completed with goals, non-goals, and functional requirements
  >> `test -s phases/02-definition/prd.md` — file exists and is non-empty
  >> `grep -qi 'goal\|objective' phases/02-definition/prd.md` — contains goals
  >> `grep -qi 'non-goal\|out of scope' phases/02-definition/prd.md` — contains non-goals
- [x] At least 5 user stories defined with acceptance criteria
  >> `grep -c 'As a\|User story\|Story:' phases/02-definition/prd.md | awk '$1 >= 5'` — 5+ user stories
- [x] Success metrics defined with measurable targets
  >> `test -s phases/02-definition/success-metrics.md` — file exists and is non-empty
- [x] All user stories prioritized (Must / Should / Could)
  >> `grep -qi 'must\|should\|could\|priority\|P[0-3]' phases/02-definition/prd.md` — priorities assigned
- [x] Open questions resolved or deferred with rationale
- [x] All documents reviewed and approved by product owner
