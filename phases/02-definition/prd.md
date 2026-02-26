# Product Requirements Document (PRD)

## Overview
- **Product:** calculator
- **Version:** MVP
- **Date:** 2026-02-26
- **Author:** Product Team

## Background
A basic arithmetic calculator website designed as a portfolio piece. The focus is on demonstrating web fundamentals through visual polish (glassmorphism design), clean code, and responsive design rather than feature complexity. This product uses vanilla HTML/CSS/JavaScript with no framework dependencies, showcasing fundamental web development skills and enabling zero-friction deployment to any static host.

Reference: [Discovery findings](../01-discovery/)

## Goals

The three primary goals for this MVP are:

1. **Visual Polish** — Deliver a striking glassmorphism design with frosted glass effects, subtle animations, and a modern aesthetic that demonstrates CSS proficiency and serves as an impressive portfolio piece.

2. **Keyboard-First UX** — Implement full keyboard support allowing users to perform all calculator operations without touching the mouse, including number input, operator selection, calculation, and clearing.

3. **Clean Code Foundation** — Build a maintainable, well-organized codebase using vanilla HTML/CSS/JS that demonstrates best practices in DOM manipulation, event handling, and responsive layout.

## Non-Goals

The following are explicitly out of scope for this MVP:

1. **No Scientific Functions** — We will not implement trigonometric functions, logarithms, or advanced mathematical operations. The calculator supports only basic arithmetic (addition, subtraction, multiplication, division).

2. **No Calculation History** — We will not include a history panel, undo feature, or persistent calculation log. Each new calculation starts fresh.

3. **No Backend or API** — All computation occurs client-side. There is no server, API, database, or cloud integration required.

4. **No Framework Dependencies** — We will not use React, Vue, Angular, or any other JavaScript framework. The implementation is pure vanilla HTML/CSS/JS.

## User Stories

### Core User Stories

1. **US-001: Perform Basic Calculations**
   - As a: user
   - I want to: enter numbers and operators to perform arithmetic calculations
   - So that: I can quickly solve everyday math problems
   - Acceptance criteria:
     - User can input numbers (0-9) via buttons or keyboard
     - User can select operators (+, -, *, /) and see them applied in order
     - Pressing equals (=) computes the result and displays it
     - Decimal point (.) can be entered for fractional numbers
     - Division by zero displays an error message (e.g., "Error")

2. **US-002: Use Keyboard Input**
   - As a: power user
   - I want to: perform calculations using only my keyboard
   - So that: I can work quickly without using the mouse
   - Acceptance criteria:
     - Numpad and top-row numbers (0-9) input digit values
     - Operator keys (+, -, *, /) select operators
     - Enter key triggers calculation (=)
     - Backspace key deletes the last digit
     - Escape key clears all values (C function)

3. **US-003: Use Calculator on Mobile and Desktop**
   - As a: mobile user
   - I want to: use the calculator effectively on my smartphone or tablet
   - So that: I can calculate on the go with a responsive, touch-friendly interface
   - Acceptance criteria:
     - Layout adapts seamlessly to viewport widths from 320px to 1920px
     - Button sizes are appropriate for touch (minimum 44x44px target area on mobile)
     - Display is readable and controls are accessible on all screen sizes
     - No horizontal scrolling is required
     - Glassmorphism effects remain visually consistent across devices

4. **US-004: Clear and Reset Calculator**
   - As a: user
   - I want to: clear the display and reset the calculator to start a new calculation
   - So that: I can quickly begin a fresh calculation without leaving and returning
   - Acceptance criteria:
     - Pressing C button clears the display and resets internal state
     - Pressing Escape key also clears the calculator
     - All previous values and operators are forgotten after clear
     - Display shows "0" after clear
     - Next number input begins a new calculation

5. **US-005: Handle Calculation Errors Gracefully**
   - As a: user
   - I want to: receive clear feedback when invalid operations occur
   - So that: I understand what went wrong and can recover easily
   - Acceptance criteria:
     - Division by zero shows "Error" instead of crashing
     - Error state is clearable by pressing C or Escape
     - After error, user can immediately start a new calculation
     - All error states are recoverable without page reload

## Functional Requirements

| ID | Requirement | Priority | User Story |
|----|-------------|----------|------------|
| FR-001 | Support arithmetic operations: addition, subtraction, multiplication, division | Must | US-001 |
| FR-002 | Calculate and display result when equals button or Enter key is pressed | Must | US-001, US-002 |
| FR-003 | Accept numeric input (0-9) via buttons and keyboard | Must | US-001, US-002 |
| FR-004 | Accept decimal point (.) for fractional numbers | Must | US-001 |
| FR-005 | Clear calculator state and reset display to "0" via C button or Escape key | Must | US-004 |
| FR-006 | Delete last digit when Backspace key is pressed | Must | US-002 |
| FR-007 | Map keyboard input to calculator operations (numpad, top-row numbers, operators, Enter, Escape, Backspace) | Must | US-002 |
| FR-008 | Display error message for invalid operations (e.g., division by zero) | Must | US-005 |
| FR-009 | Support percentage (%) calculation via button | Should | US-001 |
| FR-010 | Support sign toggle (+/-) button to negate current value | Should | US-001 |
| FR-011 | Provide smooth button press animations and visual feedback | Should | US-001, US-003 |
| FR-012 | Display current value or operation in progress on calculator display | Should | US-001, US-002 |
| FR-013 | Support chained calculations (e.g., 2 + 3 + 5 = 10) | Could | US-001 |

## Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-001 | Lighthouse Performance Score | 95+ |
| NFR-002 | Page Load Time (DOMContentLoaded) | < 500ms |
| NFR-003 | Time to First Paint (FCP) | < 300ms |
| NFR-004 | Browser Support | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| NFR-005 | CSS Backdrop Filter Support | Modern browsers with CSS backdrop-filter support |
| NFR-006 | Accessibility (WCAG) | WCAG 2.1 Level AA compliance |
| NFR-007 | Mobile Touch Performance | < 100ms tap response time |
| NFR-008 | Code Size | Single HTML file < 50KB (unminified), CSS < 10KB, JS < 15KB |

## Constraints

- **No External Dependencies:** All code must be vanilla HTML/CSS/JavaScript. No npm packages, CDN libraries, or frameworks.
- **Static Files Only:** The product is deployed as static files. No server-side processing, dynamic routing, or API calls required.
- **Single-Page Application:** All functionality contained in a single `index.html` file or minimal file structure (index.html + style.css + script.js).
- **No Build Step:** The calculator must work by opening `index.html` directly in a browser without any build process, transpilation, or bundling.
- **CSS Capabilities:** Glassmorphism design relies on `backdrop-filter: blur()` which is supported in modern browsers but may degrade gracefully in older ones.

## Dependencies

**External Dependencies:** None

**Internal Dependencies:**
- Discovery phase findings document
- Product design/visual mock-ups (if any exist in docs/designs/)

## Open Questions

All open questions have been resolved during the brainstorm phase. Key decisions are finalized:
- Technology stack: Vanilla HTML/CSS/JS (confirmed)
- Design approach: Glassmorphism (confirmed)
- Scope: Basic arithmetic only, no scientific functions (confirmed)
- Deployment: Static files, no backend (confirmed)
