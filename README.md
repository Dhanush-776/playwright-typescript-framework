# Playwright + TypeScript Test Automation Framework

End-to-end test automation framework for [Swag Labs](https://www.saucedemo.com/) built with **Playwright + TypeScript**.

[![Playwright Tests](https://github.com/Dhanush-776/playwright-typescript-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/Dhanush-776/playwright-typescript-framework/actions/workflows/playwright.yml)

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Allure
- GitHub Actions
- dotenv

## Framework Features

- Page Object Model
- Playwright fixtures and dependency injection
- Authentication using `storageState`
- Chromium and Firefox execution
- Data-driven test scenarios
- Test data factories
- Environment-based configuration
- Visual regression testing
- Screenshots and logging
- Playwright HTML and Allure reporting
- CI execution with GitHub Actions
- Playwright MCP configuration for agent-assisted browser interaction

## Project Structure

```text
├── .github/workflows/       # CI pipeline
├── .vscode/                 # MCP configuration
├── config/                  # Environment configuration
├── fixtures/                # Custom Playwright fixtures
├── pages/                   # Page Object Model
├── test-data/               # Test data and factories
├── tests/                   # Test specifications
├── utils/                   # Shared utilities
├── playwright.config.ts     # Playwright configuration
└── package.json
```

## Page Objects

The framework currently uses page objects for:

- Login
- Dashboard / Inventory
- Cart
- Checkout

Tests interact with these page objects through Playwright fixtures.

## Authentication

Authentication is handled through a dedicated setup project and Playwright `storageState`. This allows authenticated tests to reuse the saved browser state instead of performing the login flow repeatedly.

## Configuration

Environment configuration is managed through `dotenv`. Supported environments:

```text
.env.dev
.env.stage
.env.example
```

Run against an environment with:

```bash
TEST_ENV=dev npx playwright test
```

## Running Tests

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run tagged tests:

```bash
npx playwright test --grep "@checkout"
```

## Reporting

Playwright HTML report:

```bash
npx playwright show-report
```

Allure report:

```bash
allure serve allure-results
```

## CI/CD

GitHub Actions runs the test suite on pushes to `main` and pull requests targeting `main`. The workflow installs dependencies, installs Playwright browsers, executes the tests, and uploads the Playwright report as an artifact.

## Playwright MCP

The repository includes `.vscode/mcp.json` for Playwright MCP. MCP is kept separate from the deterministic test suite and provides agent-assisted browser interaction through VS Code.

## Repository

https://github.com/Dhanush-776/playwright-typescript-framework

## License

This project is intended for learning, portfolio, and test automation demonstration purposes.
