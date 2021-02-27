import { render, screen, fireEvent } from '@testing-library/react';
import MainApp, { replaceCamelCaseWithSpaces } from './MainApp';

test('Button has correct initial color', () => {
  render(<MainApp />);

  // find an element with a role of colorButton and a text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: /Change to Midnight Blue/i,
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Button has correct initial text', () => {
  render(<MainApp />);

  const colorButton = screen.getByRole('button', {
    name: /Change to Midnight Blue/i,
  });

  // expect the colorButton to be in the DOM with correct text
  expect(colorButton).toBeInTheDocument();
  expect(colorButton).toHaveTextContent('Change to Midnight Blue');
});

test('Button turns midnight blue when clicked', () => {
  render(<MainApp />);

  const colorButton = screen.getByRole('button', {
    name: /Change to Midnight Blue/i,
  });

  // click colorButton
  fireEvent.click(colorButton);

  // Multiple assertions is fine in functional testing

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the colorButton text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('Initial conditions', () => {
  render(<MainApp />);

  // check that colorButton starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  expect(checkbox).toBeEnabled();
});

test('Button is disabled when checkbox is checked', () => {
  render(<MainApp />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<MainApp />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<MainApp />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

// group tests together (for unit testing a function in this case)
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe(
      'Medium Violet Red'
    );
  });
});
