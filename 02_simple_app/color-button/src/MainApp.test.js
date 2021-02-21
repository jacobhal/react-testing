import { render, screen } from '@testing-library/react';
import MainApp from './MainApp';

test('button has correct initial color', () => {
  render(<MainApp />);
  // find an element with a role of button and a text of 'Change to blue'
  const button = screen.getByRole('button', { name: /Change to blue/i });

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', () => {
  render(<MainApp />);
});

test('button turns blue when clicked', () => {
  render(<MainApp />);
});
