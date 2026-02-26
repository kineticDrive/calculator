# Data Model

## Entity Overview
The calculator application uses a single in-memory state entity to manage calculator functionality. This is a client-side only application with no database or persistence layer. The state is ephemeral and stored entirely in JavaScript memory.

## Entities

### Entity 1: CalculatorState
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| currentOperand | string | yes | The current display value; contains the number being entered or the result of the previous calculation. Displayed to the user in the calculator display. |
| previousOperand | string | yes | The operand from the previous operation; stored when an operator is selected. Used in calculations. |
| operation | string \| null | no | The current mathematical operation selected by the user: `+`, `-`, `*`, or `÷`. Null if no operation has been selected. |
| shouldResetDisplay | boolean | yes | Flag indicating whether the next digit input should replace the current display value (true) or append to it (false). Set to true after an operation is selected or after a calculation completes. |

## Relationships
<!-- No relationships: single state object with no references to other entities -->
None. The CalculatorState is a standalone, self-contained state object with no relationships to other entities.

## Storage
- **Storage type:** In-memory JavaScript variables
- **Why this choice:** Client-side only application. Calculator state does not require persistence. Users expect a fresh state on each page load. Eliminates backend complexity and server dependencies.
- **Migration strategy:** N/A - no persistent storage or migrations required.

## Data Lifecycle
- **Created:** On page load; CalculatorState is initialized with default values (currentOperand: "0", previousOperand: "", operation: null, shouldResetDisplay: false).
- **Updated:** On every user input event (digit clicks, operator clicks, equals click, clear click). State updates are applied synchronously to the in-memory object.
- **Displayed:** The currentOperand field is rendered to the DOM whenever state changes, providing real-time feedback to the user.
- **Reset:** Triggered by the clear button, which resets all fields to their initial state.
- **Lifecycle End:** All state is lost on page refresh (by design). No data persists beyond the current browser session.
