import { render, screen } from '@testing-library/react';
import Options from './../Options';

test('displays image for each scoop option from the server', async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']); // arrays and objects use the toEqual method
});

test('displays image for each topping option from the server', async () => {
  render(<Options optionType="toppings" />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /topping$/i });

  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot Fudge topping',
  ]); // arrays and objects use the toEqual method
});
