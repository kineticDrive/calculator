# Discovery Phase — Gate Check

All items must be completed before advancing to Definition phase.
Lines with `>>` are machine-verifiable acceptance criteria.

- [x] Vision statement completed with clear problem, target user, and value proposition
  >> `test -s phases/01-discovery/vision.md` — file exists and is non-empty
  >> `grep -qi 'problem\|pain\|challenge' phases/01-discovery/vision.md` — contains problem statement
- [x] Customer research completed with at least 2 segments identified
  >> `test -s phases/01-discovery/customer-research.md` — file exists and is non-empty
- [x] Competitive analysis completed with at least 3 competitors analyzed
  >> `test -s phases/01-discovery/competitive-analysis.md` — file exists and is non-empty
- [x] Differentiation clearly articulated
  >> `grep -qi 'differenti\|unique\|advantage\|why us' phases/01-discovery/competitive-analysis.md` — differentiation documented
- [x] All documents reviewed and approved by product owner
