import { render, screen } from '@testing-library/react';
import SummaryForm from './../SummaryForm.jsx';
import userEvent from '@testing-library/user-event';

test('initial conditions', () => {
  render(<SummaryForm />);

  const agreementCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });

  expect(agreementCheckbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('checkbox enables button on first click and disables button on second click', () => {
  render(<SummaryForm />);

  const agreementCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });

  userEvent.click(agreementCheckbox);

  expect(agreementCheckbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  userEvent.click(agreementCheckbox);

  expect(agreementCheckbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', () => {
  // popover starts out hidden
  // popover appears upon mouseover of checkbox label
  // popover disappears when we mouse out
});
