import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from './../SummaryForm.jsx';

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

  fireEvent.click(agreementCheckbox);

  expect(agreementCheckbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  fireEvent.click(agreementCheckbox);

  expect(agreementCheckbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});
