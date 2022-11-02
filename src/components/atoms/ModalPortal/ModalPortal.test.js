import { render, screen } from '@testing-library/react';
import { ModalPortal } from '.';

beforeAll(() => {
  const modalPortal = document.createElement('div');
  modalPortal.setAttribute("id", "modal-portal");
  document.body.append(modalPortal);
})


describe('Modal Portal', () => {
  test('open', () => {
    render(
      <ModalPortal isOpen={true}>
        <div data-testid={"modal-children"} >Test</div>
      </ModalPortal>
    );
    
    const children = screen.getByTestId("modal-children")

    expect(children).toBeInTheDocument();
  });

  test('close', () => {
    render(
      <ModalPortal isOpen={false}>
        <div data-testid={"modal-children"} >Test</div>
      </ModalPortal>
    );
    
    const children = screen.queryByTestId("modal-children")
    expect(children).not.toBeInTheDocument();
  });
})
