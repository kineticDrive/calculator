# Tech Stack Decisions

## Language & Runtime
- **Language:** HTML5, CSS3, ES6+
- **Version:** Latest standard (no version pinning required)
- **Why:** Vanilla web standards for maximum portability and performance. No external dependencies, no build step, minimal barrier to entry.

## Package Manager
- **Tool:** None
- **Why:** No dependencies to manage. All code is vanilla JavaScript with native browser APIs.

## Frameworks & Libraries

| Category | Choice | Why | Alternative Considered |
|----------|--------|-----|----------------------|
| Web framework | None (vanilla) | Portfolio demonstrates fundamental mastery without framework abstractions | React, Vue, Angular |
| Testing | Manual browser testing | Sufficient for calculator scope; direct validation via browser DevTools | Jest, Mocha, Playwright |
| Linting | Browser DevTools | Native browser inspection covers linting needs for vanilla code | ESLint, Stylelint |
| Database | None | No persistent state required | LocalStorage, IndexedDB |
| UI Library | Vanilla CSS + CSS Glassmorphism | Custom implementation showcases CSS mastery and design control | Bootstrap, Tailwind, Material UI |

## Infrastructure
- **Hosting:** GitHub Pages
- **CI/CD:** None needed (static site deploys directly from repository)
- **Monitoring:** None

## Development Tools
- **Editor/IDE:** CLI + Claude Code
- **Version control:** Git
- **Package security:** N/A (no package dependencies)

## Decision Records

### DR-001: Vanilla Over React
- **Decision:** Build with vanilla HTML/CSS/JavaScript, no framework
- **Context:** Portfolio project to demonstrate fundamental web development skills and understanding of core browser APIs
- **Alternatives considered:** React, Vue, Angular, Next.js, Svelte
- **Why this choice:** Vanilla approach shows deeper understanding of fundamentals without relying on framework abstractions. Cleaner, more direct code path suitable for a calculator application. Demonstrates ability to manage complexity without tooling.
- **Trade-offs accepted:** No component reusability, no built-in state management library, no JSX/template syntax sugar. All trade-offs are acceptable given portfolio goals and application simplicity.

### DR-002: CSS Glassmorphism Over Utility Library
- **Decision:** Implement custom CSS glassmorphism design without Bootstrap, Tailwind, or similar utility libraries
- **Context:** UI design requires modern glassmorphic aesthetic; opportunity to showcase CSS mastery
- **Alternatives considered:** Bootstrap, Tailwind CSS, Material Design, custom CSS
- **Why this choice:** Custom implementation demonstrates deep CSS knowledge: backdrop filters, transparency, shadows, and layout techniques. Portfolio value exceeds development time cost. Maintains zero-dependency philosophy.
- **Trade-offs accepted:** Additional CSS development time, responsive design managed manually, no utility classes to accelerate iteration. Custom approach is worth the effort for portfolio differentiation.
