# Section 1: Introduction

## React Testing Library

React Testing Library (RTL) is a testing library for React. It provides a virtual DOM for testing in order to tes your components without using the browser.

Jest, which RTL uses, is a test runner that is responsible for finding tests, running tests and checking whether they pass or not.

### The Philosophy

RTL is not just a library, it also _opinionated_ meaning that it advocates a certain set of practices which should be followed in order to test your React applications properly.

These practices are:

1. Test your software the way users actually use it
   - Not internal implementation
2. Find tests by accessibility markers, not test IDs

## The Test Create React App Ships With

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
Watch mode in Jest watches for changes in files since the last commit and it will only run tests related to those files.

> `npm test` runs `react-scripts test` which runs Jest in watch mode.

## TDD: Test Driven Development

## Functional Testing vs Unit Testing

## Test Driven Development (TDD) vs Behaviour Driven Development (BDD)
