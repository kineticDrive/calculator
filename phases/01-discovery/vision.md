# Vision Statement

## Product Name
calc — a programmable CLI calculator for developers

## Problem Statement
Developers constantly context-switch to calculate things: converting units, evaluating expressions, doing quick math during debugging, or computing values for configuration. They bounce between Python REPLs, browser calculator tabs, and `bc` — none of which remember variables, support units, or integrate with their terminal workflow. The friction is small per instance but compounds across hundreds of daily calculations.

## Vision
A fast, expressive calculator that lives in the terminal. Type `calc "2**10"` and get 1024. Assign variables, convert units, chain expressions — all without leaving the command line. Calculations should feel as natural as running `ls`.

## Why Now?
Developer tooling is experiencing a golden age of CLI-first, composable tools (ripgrep, fd, jq, httpie). Developers expect tools that are fast, scriptable, and respect their workflow. Existing calculator options haven't kept pace — they're either too simple (macOS Calculator) or too heavy (Wolfram Alpha, full Python REPL).

## Target User
Software developers and DevOps engineers who spend most of their day in the terminal. They do 10–50 quick calculations daily — hex conversions, byte math, percentage calculations, time zone offsets — and want something faster than opening a REPL.

## Value Proposition
calc gives developers instant, expressive math in the terminal with variables, unit conversions, and piping support — no context switch required.

## Success Looks Like
- Developers install it via pip and use it daily within the first week
- It replaces their "open Python REPL for quick math" habit
- Community contributions for custom unit definitions and functions
- 500+ GitHub stars within 6 months of launch
