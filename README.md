# Playwright Automation Framework
A high-performance End-to-End (E2E) automation testing suite built with **Playwright** and **TypeScript**. 
This framework is designed for the **[RocScience](https://www.rocscience.com/)** , focusing on scalability, maintainability.

## Project Structure

```text
├── page_objects/         # Contain Page Object Model classes
├── tests/                # Test specifications (*.spec.ts)
├── test-results/         # Contain screenshot, video recording, ...
├── playwright-report/    # Contain test report
├── playwright.config.ts  # Global Playwright configuration
└── package.json          # Dependency and script management
```
## Setup & Installation
Clone the Repository:
> git clone https://github.com/hao781996/rocscienceDemo.git
## Install Dependencies:
> npm install
## Install Playwright Browsers:
> npx playwright install
## Execution Commands
| Command  | Second Header |
| ------------- | ------------- |
| npx playwright test  | Runs all tests in headless mode.  |
| npx playwright test --ui  | Opens the interactive UI Mode.  |
| npx playwright test --project=chromium | Runs tests only on Chrome.|
| npx playwright show-report | Opens the generated HTML report. |
## Debugging Strategy
If a test fails, the framework is configured to save a Trace. Use the Playwright Trace Viewer to inspect network requests, console logs, and a step-by-step visual replay:
> npx playwright show-trace path/to/trace.zip
