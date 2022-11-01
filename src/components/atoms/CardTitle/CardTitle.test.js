import { render, screen } from '@testing-library/react';
import { CardTitle } from '.';

test('renders a card title', () => {
  render(<CardTitle title={"Sample card"} />);
  const title = screen.getByText(/sample card/i);
  expect(title).toBeInTheDocument();
});
