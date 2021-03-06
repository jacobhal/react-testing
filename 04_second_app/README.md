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
