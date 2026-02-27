# Customer Research

## Target Segments

### Segment 1: Backend / Full-Stack Developers
- **Who they are:** Software engineers writing Python, Go, Rust, or JavaScript who work primarily in the terminal. Mid to senior level, 3–15 years experience. Comfortable with CLI tools and shell scripting.
- **Their pain points:** Constantly need quick math during development — computing buffer sizes, converting between bases (hex, binary, decimal), calculating timeouts and retry intervals, doing modular arithmetic. Opening a Python REPL works but is slow to start and doesn't persist variables across sessions.
- **Current solutions they use:** Python/Node REPL, `bc`, macOS Calculator, Google search, Wolfram Alpha, in-head estimation
- **What they'd pay for:** A fast, zero-config tool that handles developer-specific math (base conversions, bitwise ops, byte math) from the terminal. Would pay $0 — expects open source, but would sponsor if it saves daily time.
- **Where to find them:** GitHub, Hacker News, Reddit r/programming, dev Twitter/X, VS Code extension marketplace

### Segment 2: DevOps / SRE Engineers
- **Who they are:** Infrastructure engineers managing cloud resources, monitoring systems, and deployment pipelines. Live in the terminal and shell scripts. Often need to compute resource limits, cost estimates, and performance metrics on the fly.
- **Their pain points:** Calculating disk IOPS, memory limits in different units (MiB vs MB vs GiB), cost per request, latency percentiles, time conversions (seconds to hours, epoch timestamps to dates). Unit conversion errors cause real production incidents.
- **Current solutions they use:** Shell arithmetic (`$(( ))`), Python one-liners, spreadsheets for cost modeling, `date` command for time conversions, custom shell functions
- **What they'd pay for:** A calculator that natively understands infrastructure units (bytes, IOPS, requests/sec) and can convert between them reliably. Time and date arithmetic built in. Pipe-friendly for use in scripts.
- **Where to find them:** DevOps conferences, SRE Slack communities, Reddit r/devops, infrastructure-focused newsletters

### Segment 3: Data Engineers / Analysts (Secondary)
- **Who they are:** Engineers working with data pipelines and large datasets. Need to estimate data sizes, partition counts, and processing costs.
- **Their pain points:** Quick estimation of row counts, partition sizes, storage costs. Often need to convert between data formats and estimate compression ratios.
- **Current solutions they use:** Jupyter notebooks, Python REPL, spreadsheets, back-of-envelope math
- **What they'd pay for:** Quick terminal math with large number formatting (1_000_000 style) and data-size-aware unit conversions
- **Where to find them:** dbt community, data engineering Slack, Reddit r/dataengineering

## Key Insights
- All segments already use the terminal as their primary workspace — the tool must be CLI-native, not a GUI
- Speed matters more than features: if it takes longer than typing `python3 -c "..."`, it won't get adopted
- Unit awareness is the killer differentiator — no existing CLI calculator handles `"5 GiB + 200 MiB in MB"` natively
- Variable persistence across invocations would create stickiness (save intermediate results)
- Pipe support (`echo "42" | calc "*2"`) is expected by this audience

## Validation Method
- Ship a minimal version (expression evaluation + base conversions) and post to Hacker News "Show HN"
- Track GitHub stars and pip install counts in the first 2 weeks
- Monitor GitHub issues for feature requests — these indicate engaged users
- Survey power users after 1 month on which features they use most
