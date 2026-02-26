# Customer Research

## Target Segments

### Segment 1: Hiring Managers & Recruiters Reviewing Portfolios
- **Who they are:** Tech recruiters and hiring managers screening junior developer portfolios on GitHub, personal websites, and portfolio platforms. They spend 2-5 minutes per portfolio and focus on code quality, design sensibility, and shipping ability.
- **Their pain points:** Most portfolio projects look generic (todo lists, weather apps). Hard to distinguish strong fundamentals from framework-heavy work. Want to see vanilla skills and polish. Miss projects that demonstrate CSS knowledge beyond basic styling.
- **Current solutions they use:** GitHub repositories with README, live demos on GitHub Pages, Netlify deployments. Usually expect a working deployed link and readable code.
- **What they'd pay for:** They don't pay, but they reward: portfolios showing vanilla JS fundamentals, visually polished work, responsive design, and keyboard accessibility (signals attention to detail).
- **Where to find them:** GitHub portfolio links, job posting comments mentioning portfolio reviews, Twitter/X hiring threads, LinkedIn recruiter activity.

### Segment 2: Junior Developers Looking for Code Examples & Inspiration
- **Who they are:** Self-taught and bootcamp graduates (0-2 years experience) building portfolios. They learn by reading source code and recreating projects. Follow open-source patterns and GitHub stars. Price-sensitive but skill-focused.
- **Their pain points:** Struggle to find clean vanilla JS examples (most tutorials show React). Want to understand CSS effects like glassmorphism but tutorials are sparse. Need working demos to understand how keyboard input flows work. Intimidated by complex projects but underwhelmed by oversimplified ones.
- **Current solutions they use:** CodePen, GitHub, YouTube tutorials, CSS-Tricks, Dev.to articles. Clone projects and modify them.
- **What they'd pay for:** Free. They want accessible source code, clear comments, deployed live demo, and blog posts/READMEs explaining decisions.
- **Where to find them:** GitHub (searching "calculator"), Hacker News threads, Dev.to, Reddit r/learnprogramming, Discord bootcamp communities.

## Key Insights

1. **Vanilla JS legitimacy gap:** Most developers assume "real" projects need React/Vue. A high-polish vanilla JS calculator contradicts and educates that assumption—it demonstrates fundamentals are enough when execution is excellent.

2. **Glassmorphism is a portfolio differentiator:** This design trend is visually striking and CSS-heavy. Hiring managers immediately recognize it as intentional design, not accidental. Junior devs see it as aspirational but achievable without a design degree.

3. **Keyboard support is invisible but valuable:** Most calculators are mouse-only. Full keyboard mapping (numpad, top-row numbers, Enter for =, Escape for clear) signals production-level thinking. Recruiters notice (a11y awareness), and junior devs learn a pattern they can reuse.

4. **Deployment simplicity wins:** A project they can fork, customize, and deploy to GitHub Pages in 2 minutes removes friction. No npm install, no build step, no environment variables. That's rare and appreciated.

## Validation Method

1. **Async feedback from target segment 1 (recruiters):** Share 5-10 hiring managers a link, ask: "Would this stand out in a junior portfolio you reviewed this week? Why or why not?" Measure: Do they mention design, code clarity, or keyboard features unprompted?

2. **GitHub engagement for target segment 2 (junior devs):** After launch, monitor stars, forks, and issues/questions on the repo. Track if they fork and customize (high signal). Count DEV.to or HN upvotes if shared there.

3. **Live survey in calculator UI:** Optional post-calculation survey: "What brought you here? Learning / Hiring review / Portfolio inspiration." Collect 20-30 responses to confirm audience splits.

4. **Code walkthrough interviews:** Record 2-3 junior developers explaining the code after reading it (e.g., "Walk me through the keyboard input handler"). Assess clarity and learning value.
