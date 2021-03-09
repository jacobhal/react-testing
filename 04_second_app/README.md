# Section 4: Second App: Building an Icecream Builder App with Tests

## The Testing Library User Event Package

In most cases, you want more than just the fireEvent function for DOM interaction in your tests. Then you can use the User Event package.

`npm install @testing-library/user-event @testing-library/dom --save-dev`

## Screen Query Methods

The screen query methods in React Testing Library are built in this way: `Command[All]ByQueryType`.

Command:

- **get**: Expect element to be in the DOM
- **query**: Expect element to _not_ be in the DOM
- **find**: Expect element to appear async

All:

- (exclude) expect only one match
- (include) expect more than one match

QueryType:

- Role (most preferred)
- AltText (image)
- Text (display elements)
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue

## Not Wrapped in Act Warning

Sometimes Testing Library can give an error that looks something like the title above, what does this mean?

The warning suggests that React updated an element after the test was finished. Some async update occurred after the test completed running. You DO NOT want to follow the advice and wrap in _act(...)_.

> In order to fix this error, determine what changes after the test is over (async). Account for the change by awaiting the change and then asserting on it.

> Any time we are deadling with async we need to use _await_ and _findBy_.
