import { fireEvent, render, screen } from '@testing-library/react';
import { useTrelloStore } from '../../../store/trelloStore';
import { SearchInput } from '.';

const initialStoreState = useTrelloStore.getState()
     
beforeEach(() => {
  useTrelloStore.setState(initialStoreState, true)
})

describe('search cards', () => {
  
  beforeEach(() => {
    useTrelloStore.setState({
      cards: [{
        title: "Find this card",
        id: "1"
      }],
      tags: [{
        title: "Find this tag",
        id: "tag-1",
        cardId: "1"
      }],
      comments: [{
        text: "Find this comment",
        id: "comment-1",
        cardId: "1"
      }]
    });
  });
  
  test('saerch card title', () => {
    render(<SearchInput />);
    
    const searchValue = "Find this card";

    const searchInput = screen.getByRole('search')
    fireEvent.change(searchInput, { target: { value: searchValue }});

    const { searchData } = useTrelloStore.getState();

    const isCardFound = searchData.filter(data => data.title === searchValue);

    expect(isCardFound.length).toBeTruthy();
  });

  test('saerch tag title', () => {
    render(<SearchInput />);
    
    const searchValue = "Find this tag";

    const searchInput = screen.getByRole('search')
    fireEvent.change(searchInput, { target: { value: searchValue }});

    const { searchData } = useTrelloStore.getState();

    expect(searchData.length).toBeTruthy();
  });

  test('saerch comment text', () => {
    render(<SearchInput />);
    
    const searchValue = "Find this comment";

    const searchInput = screen.getByRole('search')
    fireEvent.change(searchInput, { target: { value: searchValue }});

    const { searchData } = useTrelloStore.getState();
    expect(searchData.length).toBeTruthy();
  });

  test('saerch nothing', () => {
    render(<SearchInput />);
    
    const searchValue = "Find this comments";

    const searchInput = screen.getByRole('search')
    fireEvent.change(searchInput, { target: { value: searchValue }});

    const { searchData } = useTrelloStore.getState();
    expect(searchData.length).toBeFalsy();
  });

})

