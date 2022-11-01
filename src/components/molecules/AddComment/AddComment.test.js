import { fireEvent, render, screen } from '@testing-library/react';
import { AddComment } from '.';

test('add comment input', () => {
  render(<AddComment />);
  
  const addCommentBtn = screen.getByText(/Add/i);
  const commentInput = screen.getByTestId("commentInput");

  commentInput.textContent = "test";
  fireEvent.click(addCommentBtn);
  
  expect(addCommentBtn).toBeInTheDocument();
  expect(commentInput).toBeInTheDocument();
  expect(commentInput.textContent).toBe("");
});
