# System Design

## Architecture Overview

The calculator is a static website with no server, database, or API. All computation and interaction happens client-side in the browser. The architecture consists of three tightly-coupled components:

1. **HTML Structure** — defines the UI elements (display, buttons)
2. **CSS Styling** — applies glassmorphism design and responsive layout
3. **JavaScript Engine** — handles calculator logic, user input (mouse/keyboard), and display updates

The browser loads `index.html`, which links `style.css` and `script.js`. User interactions trigger JavaScript event handlers that update the display in real-time.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  [index.html] ──links──> [style.css]                    │
│       |                                                   │
│       |                     [script.js]                  │
│       └──────────────────────────|                       │
│                                  |                       │
│  ┌──────────────────────────────────────────────────────┐│
│  │          JavaScript Execution Environment            ││
│  │  ┌─────────────┐      ┌──────────────────┐           ││
│  │  │   Display   │      │ Calculator Engine│           ││
│  │  │   (DOM)     │<────>│  (State + Logic) │           ││
│  │  └─────────────┘      └──────────────────┘           ││
│  │       ^                                               ││
│  │       |                                               ││
│  │   [User Input Events]                                ││
│  │   (click, keydown)                                   ││
│  └──────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

## Components

### Component 1: HTML Structure (index.html)
- **Responsibility:** Define semantic markup for calculator UI — display area, button grid, and container elements. Provide accessibility baseline and semantic structure.
- **Inputs:** None (static markup)
- **Outputs:** DOM tree with:
  - Display div (shows current value)
  - Button elements (numbers 0-9, operators, utilities)
  - Container divs for layout organization
- **Dependencies:** None

### Component 2: CSS Styling (style.css)
- **Responsibility:** Apply glassmorphism design, responsive layout, and visual feedback. Ensure the calculator is usable on mobile (small screens) and desktop (large screens).
- **Inputs:** HTML structure from index.html
- **Outputs:** Styled page with:
  - Glassmorphic card with frosted glass effect (backdrop-filter: blur)
  - CSS Grid button layout
  - Hover/active states for button feedback
  - Responsive font sizing and spacing
  - Semi-transparent backgrounds and soft shadows
- **Dependencies:** HTML structure; modern CSS features (backdrop-filter, CSS Grid, CSS custom properties)

### Component 3: JavaScript Calculator Engine (script.js)
- **Responsibility:** Manage calculator state, process user input (mouse clicks and keyboard), perform arithmetic operations, and update the display.
- **Inputs:**
  - User events: click on buttons, keydown for keyboard input
  - Display element (DOM reference)
- **Outputs:**
  - Updated display text (showing current number, result, or error state)
  - State mutations (currentValue, operation, previousValue)
- **Dependencies:** HTML structure (DOM elements), no external libraries

## Communication Patterns

**Synchronous event-driven communication:**
- User interaction (click or keypress) triggers event listeners in script.js
- Event handler processes input, updates internal calculator state, and calls display update
- Display update directly manipulates the DOM (innerHTML or textContent)
- No asynchronous calls, no promises, no message queue

**State flow:**
```
[User Input] → [Event Listener] → [Calculator Logic] → [State Update] → [DOM Update]
```

**Example:** User clicks "+" button
1. Click event fires on button element
2. Event listener in script.js detects the click
3. Calculator logic stores the "+" operation and current number
4. Display is cleared (ready for next number)

**Example:** User presses keyboard "5"
1. Keydown event fires in the browser
2. Event listener maps "5" to the number 5
3. Calculator appends 5 to currentValue
4. Display updates to show new currentValue

## Error Handling Strategy

**Division by zero:**
- When user presses "=" and the denominator is 0, the calculator displays "Error"
- Display is frozen in "Error" state until user clears (presses "C" or hits Escape)
- Clear button resets state to initial values and displays "0"

**Invalid input:**
- Invalid keyboard input is silently ignored (no console errors, no user-facing warnings)
- Only valid number keys, operators, and utility keys trigger state changes
- Prevents accidental input from affecting calculator state

**Display overflow:**
- No handling for very large numbers — JavaScript's number precision is relied upon
- If a number becomes too large, JavaScript's standard number representation is used (may show scientific notation)

## Scalability Considerations

**Scalability: N/A**

This is a static website with no backend infrastructure. Scalability is unlimited at the application level because:

- **No server** — no computation load, no database queries, no rate limiting
- **Infinite horizontal scalability** — can serve from a global CDN (Netlify, GitHub Pages, CloudFlare) with zero architectural changes
- **Zero cost scaling** — CDN edge caching handles traffic spikes automatically

**Performance characteristics:**
- File size: ~5-10 KB total (HTML + CSS + JS combined), cached by browser indefinitely
- Load time: Sub-100ms on modern networks
- Interaction latency: <1ms (pure client-side computation)
- Memory: Negligible (single calculator state object, <1 KB)

**If feature scope grows 10x/100x:**
- Adding complex features (history, themes, localization, offline persistence) would still remain client-side
- No architectural changes needed — only new JavaScript features
- Could add localStorage for persistence without server involvement
- Static hosting costs remain constant regardless of feature growth
