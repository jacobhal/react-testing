import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
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

test('popover responds to hover', async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no icecream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no icecream will actually be delivered/i);
  expect(popover).toBeInTheDocument(); // test will fail on previous line if it is not in the DOM but this line is included for readability

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);

  // disappearance of popover happens asynchronously
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no icecream will actually be delivered/i)
  );
});
