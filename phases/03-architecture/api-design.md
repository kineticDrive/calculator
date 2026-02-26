# API Design

## API Style
JavaScript module — vanilla ES6+ functions exposed via synchronous event listeners and DOM manipulation. No HTTP API, no REST endpoints. All interactions are browser-based and client-side only.

## Authentication
None. This is a static website with no authentication, authorization, or user accounts. All calculator functionality is publicly available to any visitor.

## Base URL / Entry Point
- **Primary Entry Point:** `index.html` loaded in the browser
- **Script Loading:** `<script src="script.js"></script>` in index.html
- **Module Initialization:** All calculator functions are defined in global scope (window object) or as module-private functions called by event listeners
- **No versioning in URL** — versioning tracked via git tags

## Public Functions

### appendNumber(number)
Append a digit to the current operand display.

- **Method/Function:** `appendNumber(number)`
- **Input:** `number` — String or integer digit (0-9) or decimal point (.)
- **Output:** Updates internal state (`currentValue`) and calls `updateDisplay()` to render
- **Returns:** undefined
- **Errors:** None — invalid inputs are silently ignored (e.g., multiple decimal points are prevented in implementation)

**Example:**
```javascript
appendNumber(5);  // Display: "5"
appendNumber(3);  // Display: "53"
appendNumber('.');  // Display: "53."
```

### chooseOperation(op)
Set the pending operation and prepare to accept the next operand.

- **Method/Function:** `chooseOperation(op)`
- **Input:** `op` — String representing operator: `"+"`, `"-"`, `"*"`, `"÷"` (or `"/"`)
- **Output:** Stores operation in internal state, clears `currentValue`, and calls `updateDisplay()`
- **Returns:** undefined
- **Errors:** None — invalid operation strings are silently ignored

**Example:**
```javascript
appendNumber(5);
chooseOperation('+');  // Display clears, "+" stored as pending operation
appendNumber(3);
```

### compute()
Execute the pending operation on the previous value and current value, display the result, and clear operation state.

- **Method/Function:** `compute()`
- **Input:** None — uses internal state (`previousValue`, `operation`, `currentValue`)
- **Output:** Replaces `currentValue` with computed result, clears `operation`, calls `updateDisplay()`
- **Returns:** undefined
- **Errors:**
  - **Division by Zero:** When operation is division and `currentValue` is 0, display shows `"Error"`
  - Error state persists until `clear()` is called
  - No error code or exception — error is displayed as text

**Example:**
```javascript
appendNumber(10);
chooseOperation('+');
appendNumber(5);
compute();  // Display: "15"

appendNumber(10);
chooseOperation('/');
appendNumber(0);
compute();  // Display: "Error"
```

### clear()
Reset all calculator state and display to initial condition.

- **Method/Function:** `clear()`
- **Input:** None
- **Output:** Resets `currentValue = "0"`, `previousValue = ""`, `operation = null`, updates display
- **Returns:** undefined
- **Errors:** None

**Example:**
```javascript
appendNumber(42);
clear();  // Display: "0", all state reset
```

### deleteDigit()
Remove the last digit from the current operand (backspace operation).

- **Method/Function:** `deleteDigit()`
- **Input:** None — operates on internal `currentValue`
- **Output:** Removes last character from `currentValue`, calls `updateDisplay()`
- **Returns:** undefined
- **Errors:** None — deleting from empty string is handled gracefully (remains empty or shows "0")

**Example:**
```javascript
appendNumber(123);
deleteDigit();  // Display: "12"
deleteDigit();  // Display: "1"
deleteDigit();  // Display: "0" (or empty, implementation-dependent)
```

### toggleSign()
Toggle the sign of the current operand (positive to negative, negative to positive).

- **Method/Function:** `toggleSign()`
- **Input:** None — operates on internal `currentValue`
- **Output:** Multiplies `currentValue` by -1, calls `updateDisplay()`
- **Returns:** undefined
- **Errors:** None — sign toggle on 0 remains 0

**Example:**
```javascript
appendNumber(42);
toggleSign();  // Display: "-42"
toggleSign();  // Display: "42"
```

### percentage()
Divide the current operand by 100 (convert to percentage).

- **Method/Function:** `percentage()`
- **Input:** None — operates on internal `currentValue`
- **Output:** Divides `currentValue` by 100, calls `updateDisplay()`
- **Returns:** undefined
- **Errors:** None

**Example:**
```javascript
appendNumber(50);
percentage();  // Display: "0.5"
```

### updateDisplay()
Render the current calculator state to the DOM (internal helper, may be called by other functions).

- **Method/Function:** `updateDisplay()`
- **Input:** None — reads from internal state
- **Output:** Updates DOM element (e.g., `document.getElementById('display')`) with formatted `currentValue`
- **Returns:** undefined
- **Errors:** None

**Note:** This function is typically called internally by other calculator functions. It does not require external invocation in most use cases.

## Event Listeners

All user interactions are handled via event listeners in the browser:

### Button Click Events
- **Trigger:** User clicks a calculator button (number, operator, utility)
- **Handler:** Calls appropriate function (e.g., `appendNumber(5)` for digit button)
- **Update:** Display refreshes via `updateDisplay()`

**Example HTML:**
```html
<button onclick="appendNumber(5)">5</button>
<button onclick="chooseOperation('+')">+</button>
<button onclick="compute()">=</button>
<button onclick="clear()">C</button>
```

### Keyboard Events
- **Trigger:** User presses keyboard key
- **Mapping:**
  - `0-9` (numpad and top row) → `appendNumber(digit)`
  - `.` → `appendNumber('.')`
  - `+`, `-`, `*`, `/` → `chooseOperation(op)`
  - `Enter` → `compute()`
  - `Backspace` → `deleteDigit()`
  - `Escape` → `clear()`
  - `%` → `percentage()`
  - (optional) `Alt` + `-` → `toggleSign()`
- **Handler:** Global `keydown` or `keyup` listener in script.js
- **Update:** Same as button clicks

## Error Response Format

The calculator does not use structured error objects. Instead, errors are displayed as plain text in the calculator display.

**Error Display:**
```
"Error"
```

**Trigger Conditions:**
- Division by zero
- Any other invalid mathematical operation (implementation-dependent)

**Recovery:**
- User presses `C` button or `Escape` key to call `clear()`
- Display resets to `"0"`
- All state is cleared

**Example:**
```javascript
appendNumber(10);
chooseOperation('/');
appendNumber(0);
compute();  // Display shows: "Error"
clear();    // Display resets to: "0"
```

## Rate Limiting
Not applicable. This is a client-side application with no backend or API server. No rate limiting or request throttling is needed.

## Versioning Strategy

**Semantic Versioning (semver):** MAJOR.MINOR.PATCH

- **MAJOR:** Breaking changes to public function signatures or behavior (e.g., rename `appendNumber()` to `addDigit()`)
- **MINOR:** New features or functions that are backward-compatible (e.g., add `squareRoot()`)
- **PATCH:** Bug fixes, performance improvements, or internal refactoring with no API changes

**Version Tracking:**
- Versions are tracked as **git tags** (e.g., `v1.0.0`, `v1.1.0`, `v2.0.0`)
- No version number in code or index.html
- No HTTP header versioning (not applicable for static site)
- Repository history serves as changelog

**Example Releases:**
- `v1.0.0` — Initial MVP with basic arithmetic and keyboard support
- `v1.1.0` — Add percentage and sign toggle buttons
- `v2.0.0` — Add calculation history or scientific functions (breaking changes possible)

## Communication Protocol

All communication is **synchronous and single-threaded:**
- User input (click or keypress) → JavaScript function call → DOM update
- No promises, async/await, or message queues
- No WebSocket, HTTP, or network communication
- Direct DOM manipulation via native browser APIs (textContent, innerHTML, etc.)
