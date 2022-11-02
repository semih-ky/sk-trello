import { render } from '@testing-library/react';
import { CardHover } from '.';

test('hover card', () => {
  const { rerender, container } = render(<CardHover isHover={false} />);
  expect(container.firstChild).toBe(null);

  rerender(<CardHover isHover={true} />)
  expect(container.firstChild).toBeTruthy();
});
