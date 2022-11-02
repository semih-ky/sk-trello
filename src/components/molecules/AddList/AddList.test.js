import { fireEvent, render, screen } from '@testing-library/react';
import { AddList } from '.';

test('add list input', () => {
  render(<AddList />);
  
  const addListBtn = screen.getByText(/Add List/i);
  fireEvent.click(addListBtn);
  
  const addListInput = screen.getByTestId("addListInput");
  
  expect(addListBtn).toBeInTheDocument();
  expect(addListInput).toBeInTheDocument();
});
