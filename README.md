# Playwright Tests

## Table of Contents

- [Requirements](#Requirements)
- [Set up](#Set-up)
- [Performing](#Performing)

## Requirements
1. If performing locally, make sure the application is running fine.

## Set up
1. `yarn install`
2. `npx playwright install`

## Performing
- To perform Playwright in headless mode:

    `yarn playwright test`

- To run Playwright in UI mode: 
    
    `yarn playwright test --ui`

- To run tests in a specific browser, such as Chromium, use the following command: 

    `yarn playwright test --project=chromium`

- To run specific test cases, such as Smoke, use the following command:

    `yarn playwright test --grep @smoke`
