# Success Metrics & KPIs

## North Star Metric
<!-- The single most important metric that indicates product success -->
- **Metric:** Lighthouse Performance Score
- **Current baseline:** 0 (not yet launched)
- **Target:** 95+
- **Measurement method:** Run Lighthouse audit via Chrome DevTools or PageSpeed Insights on production URL. Aggregate performance, accessibility, best practices, and SEO subscores with emphasis on performance. Test on both desktop and mobile; report the lower score as the official metric.

## Primary KPIs

### KPI 1: GitHub Stars
- **What it measures:** Community interest and validation of the portfolio piece as a quality project worth forking and following.
- **Target:** 50+ stars in first month of public launch
- **How to measure:** Monitor GitHub repository star count via API (`curl https://api.github.com/repos/{owner}/{repo}` and extract `stargazers_count`). Track cumulative growth over time.
- **Review frequency:** Weekly during first month post-launch, then monthly thereafter

### KPI 2: Page Load Time
- **What it measures:** Performance perception and user experience quality. Critical for a portfolio piece showcasing clean, dependency-free code.
- **Target:** <1 second (full page interactive) on 4G and cable connections
- **How to measure:** Use WebPageTest (webpagetest.org) with multiple locations and connection profiles. Report median load time across at least 3 test runs. Can supplement with browser DevTools Network tab measurements and real-world monitoring via navigation.performance API.
- **Review frequency:** After each code optimization pass; post-launch monitor via synthetic testing weekly

### KPI 3: Mobile Usability Score
- **What it measures:** Excellence in responsive design and mobile accessibility, critical for portfolio credibility and user experience across all devices.
- **Target:** 100/100 on Lighthouse Mobile Usability audit
- **How to measure:** Run Lighthouse audit in Chrome DevTools with mobile device emulation (iPhone 12 or equivalent). Check that all mobile-specific criteria pass: viewport is configured, touch elements are appropriately sized (48x48px minimum), font sizes are legible without zooming, and no horizontal scrolling occurs.
- **Review frequency:** After each design change; weekly during development, then monthly post-launch

## Health Metrics
<!-- Metrics that indicate the product is working correctly -->
- **JavaScript Error Rate:** Zero uncaught errors in browser console. Monitor via error tracking (e.g., Sentry, or manual testing across Chrome, Firefox, Safari). Failures in any browser = blocker for launch.
- **Browser Compatibility:** Calculator functions correctly and maintains glassmorphism visual design in Chrome (latest 2 versions), Firefox (latest 2 versions), and Safari (latest 2 versions). Test arithmetic operations, UI interactions, and responsive behavior.
- **Uptime:** 99%+ if deployed to web server (e.g., GitHub Pages). Static file availability measured via simple HTTP health checks.

## Anti-Metrics
<!-- Metrics we're watching to make sure we don't make things worse -->
- **Bounce Rate:** If >40% of visitors leave without interacting with the calculator, indicates the glassmorphism design may not be visually compelling or the UI is confusing. Acceptable only if page load time issues are resolved first. Measured via analytics (if deployed with tracking) or through user feedback.
- **Unintended Dependencies:** Any third-party JavaScript libraries added to the project (other than dev-time tools like bundlers). The portfolio value is explicitly vanilla HTML/CSS/JS; adding frameworks negates the differentiator.
- **Accessibility Regression:** WCAG A or AA compliance failures that prevent screen readers from navigating the calculator or accessing functionality.
