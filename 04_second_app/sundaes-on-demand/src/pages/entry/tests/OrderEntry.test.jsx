import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

// Run ONLY this test (good to use for debugging)
test.only('handles error for scoops and testing routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (res, req, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (res, req, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  // We need to wait for ALL alerts to be on the page
  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');

    expect(alerts).toHaveLength(2);
  });
});

// Skip this test and run all others
test.skip('not a real test', () => {});
