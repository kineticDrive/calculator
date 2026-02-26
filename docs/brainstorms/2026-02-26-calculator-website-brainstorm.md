---
type: brainstorm
product: calculator
date: 2026-02-26
status: complete
---

# Calculator Website — Brainstorm

## What We're Building

A basic arithmetic calculator as a static website, designed as a portfolio piece. The focus is on visual polish (glassmorphism design), clean code, and responsive design — not feature complexity. Vanilla HTML/CSS/JS with no framework dependencies.

**Core operations:** addition, subtraction, multiplication, division, clear, equals, decimal point, percentage, sign toggle (+/-).

**Key feature:** Full keyboard support — users can type numbers and operators without touching the mouse.

## Why This Approach

**Vanilla HTML/CSS/JS** was chosen over React or Python because:
- Portfolio piece should demonstrate fundamentals, not framework knowledge
- Zero build step — open `index.html` and it works
- Easiest to deploy (GitHub Pages, Netlify drop, any static host)
- Glassmorphism effects are pure CSS — no library needed
- Shows you can build without a framework crutch

**Glassmorphism style** was chosen because:
- Visually striking in a portfolio — stands out from flat/material designs
- CSS `backdrop-filter: blur()` is well-supported in modern browsers
- Pairs well with subtle animations for button presses
- Demonstrates CSS proficiency beyond basics

## Key Decisions

1. **No framework** — vanilla HTML/CSS/JS only. Single `index.html` + `style.css` + `script.js`.
2. **Glassmorphism design** — frosted glass card, blurred background, soft shadows, semi-transparent buttons.
3. **Keyboard support** — map numpad and top-row numbers, +, -, *, /, Enter (=), Escape (clear), Backspace (delete last), . (decimal).
4. **Responsive** — works on mobile (touch) and desktop (mouse + keyboard). CSS Grid for button layout.
5. **No history panel** — keep it minimal. Just the display and buttons.
6. **Static deployment** — no server needed. GitHub Pages or similar.

## Scope

**In scope (MVP):**
- Calculator UI with glassmorphism styling
- Basic arithmetic: +, -, *, /, =
- Utility buttons: C (clear), +/- (sign toggle), % (percentage), . (decimal)
- Keyboard input mapping
- Responsive layout (mobile + desktop)
- Smooth button press animations

**Out of scope:**
- Scientific functions
- Calculation history
- Themes/dark mode toggle
- Backend/API
- Local storage persistence

## Open Questions

None — all decisions resolved during brainstorm.
