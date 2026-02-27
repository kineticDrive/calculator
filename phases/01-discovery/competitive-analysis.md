# Competitive Analysis

## Market Overview
Developer CLI tools market. The broader developer tools market is growing rapidly, with CLI-first tools gaining adoption as developers optimize their terminal workflows. Calculator functionality is currently fragmented across general-purpose tools (REPLs, shell arithmetic) rather than served by a dedicated, purpose-built CLI calculator.

## Competitors

### Competitor 1: Python REPL / `python3 -c`
- **What they do:** General-purpose programming language with built-in math. Developers use it as an ad-hoc calculator by launching `python3` or running one-liners.
- **Strengths:** Already installed everywhere. Full programming language — can handle any calculation. Familiar syntax. Rich ecosystem (numpy, decimal, fractions).
- **Weaknesses:** Slow startup time (~200ms). No unit conversions. No persistent variables across sessions. Verbose for simple calculations. Not pipe-friendly without wrapping in `-c`.
- **Pricing:** Free, open source
- **Target audience:** All Python developers
- **Key differentiator:** It's a full programming language, not just a calculator

### Competitor 2: GNU bc
- **What they do:** Arbitrary precision calculator language. Standard Unix utility for command-line math.
- **Strengths:** Pre-installed on most Unix systems. Arbitrary precision. Fast. Pipe-friendly. Well-documented.
- **Weaknesses:** Arcane syntax (e.g., `scale=2` for decimals). No unit conversions. No hex/binary input without `ibase`. No modern developer-friendly features. Error messages are cryptic.
- **Pricing:** Free, open source
- **Target audience:** Unix power users, shell scripters
- **Key differentiator:** Arbitrary precision and universal availability

### Competitor 3: Qalculate!
- **What they do:** Multi-purpose desktop calculator with unit conversions, currency conversion, and a powerful expression parser. Has both GUI and CLI modes.
- **Strengths:** Extremely feature-rich — supports units, currencies, constants, functions. GUI and CLI. Actively maintained.
- **Weaknesses:** Heavy dependency footprint. CLI mode (`qalc`) not well-known. Not pip-installable — requires system package manager. Not Python-ecosystem native. Overkill for quick developer math.
- **Pricing:** Free, open source
- **Target audience:** General users and scientists who want a powerful desktop calculator
- **Key differentiator:** Comprehensive unit and currency conversion support

### Competitor 4: Numi (macOS)
- **What they do:** Beautiful macOS notepad-style calculator. Natural language input, unit conversions, variables.
- **Strengths:** Excellent UX. Natural language input ("5 inches in cm"). Variables and references. Clean design.
- **Weaknesses:** macOS only. GUI only — no CLI integration. No pipe support. No scripting. Closed source. Can't be used in terminal workflows or CI pipelines.
- **Pricing:** Free
- **Target audience:** macOS users who want a better calculator experience
- **Key differentiator:** Natural language input and beautiful design

### Competitor 5: Shell arithmetic (`$(( ))`, `expr`)
- **What they do:** Built-in shell math evaluation. Available in bash, zsh, and other shells.
- **Strengths:** Zero startup time. Always available. No installation needed. Works in scripts.
- **Weaknesses:** Integer-only in most shells. No floating point without `bc` or `awk`. No unit conversions. No variables beyond shell variables. No base conversion helpers. Awkward syntax.
- **Pricing:** Free (part of the shell)
- **Target audience:** Shell scripters
- **Key differentiator:** Zero overhead — it's part of the shell itself

## Our Differentiation
calc is the only CLI calculator purpose-built for the developer workflow:

1. **Developer-first math:** Native support for hex (`0xFF`), binary (`0b1010`), octal, bitwise operations, and base conversions — the math developers actually do daily
2. **Unit-aware:** Handles `"5 GiB + 200 MiB in MB"` natively, with developer-relevant units (bytes, durations, frequencies)
3. **Pipe-friendly:** Designed for Unix pipelines — `echo "42" | calc "*2"` just works
4. **Python-native install:** `pip install calc` — no system packages, no compilation, works in any Python environment
5. **Fast:** Sub-50ms response for simple expressions, unlike Python REPL startup
6. **Variables that persist:** Save intermediate results across invocations

Unlike Qalculate (too heavy), bc (too arcane), Python REPL (too slow to start), or Numi (not in the terminal), calc hits the sweet spot of fast, expressive, and terminal-native.

## Opportunities
- No dominant CLI calculator exists in the Python ecosystem — the niche is wide open
- Developer tool discovery through "Show HN" and GitHub trending is highly effective for this category
- Integration opportunities: VS Code extension, shell completions, Jupyter magic command
- Community-driven unit packs (AWS pricing units, Kubernetes resource units) could drive adoption

## Threats
- A popular developer influencer could build a similar tool and capture the mindshare
- Python REPL improvements (faster startup, better REPL experience) could reduce the pain point
- AI assistants (ChatGPT, Claude) are increasingly used for quick calculations, reducing the need for dedicated tools
- Shell-native solutions like zsh plugins could emerge with similar functionality
