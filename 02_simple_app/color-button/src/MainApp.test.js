import { render, screen, fireEvent } from '@testing-library/react';
import MainApp from './MainApp';

test('button has correct initial color', () => {
  render(<MainApp />);

  // find an element with a role of colorButton and a text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', () => {
  render(<MainApp />);

  const colorButton = screen.getByRole('button', { name: /Change to blue/i });

  // expect the colorButton to be in the DOM with correct text
  expect(colorButton).toBeInTheDocument();
  expect(colorButton.textContent).toBe('Change to blue');
});

test('button turns blue when clicked', () => {
  render(<MainApp />);

  const colorButton = screen.getByRole('button', { name: /Change to blue/i });

  // click colorButton
  fireEvent.click(colorButton);

  // Multiple assertions is fine in functional testing

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the colorButton text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<MainApp />);

  // check that colorButton starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  expect(checkbox).toBeEnabled();
});

test('button is disabled when checkbox is checked', () => {
  render(<MainApp />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
