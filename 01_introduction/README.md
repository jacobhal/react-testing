# Section 1: Introduction

## Testing Library

Testing Library is a popular testing library for the big frontend frameworks that are used today, for instance React and Vue.

React Testing Library (RTL) is a testing library for React. It provides a virtual DOM for testing in order to test your components without using the browser.

Jest, which RTL uses, is a test runner that is responsible for finding tests, running tests and checking whether they pass or not.

> Testing Library has good documentation located here: https://testing-library.com/docs/

### The Philosophy

RTL is not just a library, it also _opinionated_ meaning that it advocates a certain set of practices which should be followed in order to test your React applications properly.

These practices are:

1. Test your software the way users actually use it
   - Not internal implementation
2. Find tests by accessibility markers, not test IDs

> React Testing Library encourages _Functional tests_.

## The First Test

We can create a new React project by using Create React App using the following command:

`npx create-react-app <project-name>`

This creates a new project for us which also ships with a test. By running `npm test` we run all the tests in our project. The test command is defined in package.json.

The code of the first test looks like this:

```JSX
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

The render method creates a virtual DOM for whatever JSX we give it as the argument.  
The screen global object is used to access the virtual DOM using various methods.  
The expect method is of course used to perform assertions.

## Jest and Jest-DOM Assertions

The expect method mentioned above is a global method provided by **Jest**. The argument of the expect method is the object we want to assert against. The final method that we call on the expect method result is the type of assertion we want to call which comes from **Jest-DOM**.

Jest-DOM comes with create-react-app by default. In order to make the matchers available in each test, it imports them in the src/setupTests.js file.

## Jest: Watch Mode and How Tests Work

React Testing Library helps with:

- Rendering components into the virtual DOM
- Searching the virtual DOM
- Interacting with the virtual DOM

All the above things are necessary to test React apps BUT it also needs a test runner in order to find tests, run them, and make assertions, which Jest provides. There are also other test runners like Mocha and Jasmine but Jest is recommended by the React Testing Library.

### Watch Mode

Watch mode in Jest watches for changes in files since the last commit and it will only run tests related to those files. By using `npm test` and then typing a, we can run all tests if we want to.

> `npm test` runs `react-scripts test` which runs Jest in watch mode.

### How Jest Works

Jest has a global _test_ method that has two arguments:

- A string description of the test
- A test function

If the test function throw an error, either by a failing assertion or by manually throwing an error by using something like `throw new Error('Test failed')`, the test fails.

## TDD: Test Driven Development

TDD is a philosophy of writing the tests before writing the code. You want failing tests before the code is written and passing tests when the code is finished.

## Different Types of Tests

There are different types of tests:

- Unit tests
  - Tests one unit of code (a function or a react function) in isolation
- Integration tests
  - Tests how multiple units work together
- Functional tests
  - Tests a particular function or software. Do not confuse this with testing a specific function which would be a unit test. In this case we are talking about the behaviour or some piece of functionality of the software.
- Acceptance / End-to-end (E2E) Tests
  - Use an actual browser and server (Cypress, Selenium, WebdriverIO)

> Functional tests can be both unit tests or integration tests as well. For example a form submission with a particular set of data as input would be an integration test but it would also be a functional test since it tests a functionality of your application. If you test whether a component turns red when you enter invalid data, that would be a unit test but also a functional test.

### Functional Testing vs Unit Testing

| Unit tests                                             | Functional tests                                   |
| ------------------------------------------------------ | -------------------------------------------------- |
| Isolated: mock dependencies, test internals            | Include all relevant units, test behaviour         |
| Pro: Very easy to pinpoint failures                    | Pro: Close to how users interact with the software |
| N/A                                                    | Pro: Robust tests                                  |
| Con: Further from how users interact with the software | Con: More difficult to debug tests                 |
| Con: More likely to break with refactoring             | N/A                                                |

## Test Driven Development (TDD) vs Behaviour Driven Development (BDD)

- React Testing Library encourages testing _behaviour_ over _implementation_
- Does that mean that RTL should use BDD? No
- BDD involves collaboration between lots of roles
  - Developers, QA, business partners, etc
  - Defines a process for how different groups should interact

## Testing Library and Accessability

The philosophy of Testing Library which was mentioned earlier is to find elements by accessibility handles. Their documentation has a clear guide for the priority of test finding methods.

> Guide for which queries to use: https://testing-library.com/docs/queries/about/#priority

> HTML role definitions: https://www.w3.org/TR/wai-aria/#role_definitions
