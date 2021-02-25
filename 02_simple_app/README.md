# Section 2: First App: Building a simple React App with Tests

This will be an extremely simple React project in order to get started with some basic testing.

## Number of Assertions

With functional testing, you can be more liberal with the number of assertions since you often test multiple things at once. With unit tests, having only one assertion is the most common way.

## Unit Testing Functions

- Your React app might have functions separate from components because:
  - The functions could be used by multiple components
  - The functions have complex logic which makes sense to split from the component

You should unit test these functions IF:

- Complex logic difficult to test via functional tests
- Too many edge cases
- You want to determine what caused your functional tests to fail

Functional tests are:

- High-level which makes them resistant to refactors
- High-level which makes them difficult to diagnose

## Jest-DOM Documentation

> You can check out what Jest-DOM methods that are available here: https://github.com/testing-library/jest-dom
