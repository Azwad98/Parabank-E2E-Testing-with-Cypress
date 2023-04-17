# Parabank E2E Testing with Cypress

This project demonstrates end-to-end (E2E) testing of the Parabank web application using Cypress and TypeScript. It covers testing of the registration, login, and check balance functionalities (the latter is not implemented due to an internal error). The tests are designed to verify the application's behavior under different scenarios and validate the correctness of its features.

## Table of Content

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the repository](#clone-the-repository)
  - [Set up the project](#set-up-the-project)
- [Run the E2E tests](#run-the-e2e-tests)
  - [Cypress Test Runner](#cypress-test-runner)
  - [Command Line](#command-line)
- [Test Scenarios](#test-scenarios)
- [Known Issues](#known-issues)

## Project Overview

This project is structured using the recommended Cypress folder structure and naming conventions. It is developed using TypeScript, which provides the benefits of type safety and IntelliSense support.

The tests are organized into separate spec files for each functionality:

- register.spec.ts - Tests the registration functionality.
- logon.spec.ts - Tests the login functionality.

## Prerequisites

- Git installed on your machine. You can download it from the [official Git website](https://git-scm.com/downloads).
- Node.js (version 12 or higher) installed on your machine. You can download it from the [official Node.js website](https://nodejs.org/en/download).

## Getting Started

### Clone the repository

1. Open your terminal and navigate to the directory where you want to clone the repository.
2. Run the following command to clone the repository:

```
git clone https://github.com/Azwad98/Parabank-E2E-Testing-with-Cypress.git
```

3. Navigate to the cloned project directory:

```
cd parabank-e2e-cypress
```

### Set up the project

1. Install the project dependencies by running the following command:

```
npm install
```

This command will install all the dependencies listed in the package.json file, including Cypress.

## Run the E2E tests

You can run the end-to-end tests using either the Cypress Test Runner or the command line:

### Cypress Test Runner

Run the following command to open the Test Runner:

```
npx cypress open
```

1. A Cypress App Interface will pop up giving you the option to select either E2E or Component testing. Select E2E Testing
2. Select the browser of your choice and click on the Start E2E Testing button. This will open up the Cypress Test Runner
3. In the Test Runner, click on the test file you want to run (e.g., login_positive_spec.cy.js) to start the test in an interactive browser window.  
   To view all the test files as you're running the tests either press F on your keyboard or click on Specs on the top left part of your screen

### Command line

To run the tests in headless mode, use the following command:

```
npx cypress run
```

This command will run your tests in a headless browser, and you'll see the test results in your terminal.

## Test Scenarios

The following test scenarios are covered in this project:

### Registration

- Successful user registration

### Login

- Successful login with valid credentials

### Check Balance (Not Implemented)

Due to an internal error with the login functionality, the check balance test could not be implemented.

## Known Issues

- The login test encounters an intermittent internal error, which prevents further testing of the check balance functionality.
