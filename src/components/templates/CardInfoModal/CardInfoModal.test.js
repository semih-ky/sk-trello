import { fireEvent, render, screen } from '@testing-library/react';
import { useTrelloStore } from '../../../store/trelloStore';
import { CardInfoModal } from '.';

beforeAll(() => {
  const modalPortal = document.createElement('div');
  modalPortal.setAttribute("id", "modal-portal");
  document.body.append(modalPortal);
})

const initialStoreState = useTrelloStore.getState()
     
beforeEach(() => {
  useTrelloStore.setState(initialStoreState, true)
})

describe('card info modal', () => {
  
  beforeEach(() => {
    useTrelloStore.setState({
      tags: [{
          id: "tag-1",
          cardId: "1",
          title: "server"
      }],
      comments: [{
          id: "comment-1",
          cardId: "1",
          text: "Lorem ipsum."
      }],
      selectedCard: {
        id: "1",
        title: "Test Card"
      }
    });
  });
  
  test('card title', () => {
    render(<CardInfoModal isOpen={true} />);
    
    const cardTitle = screen.getByText(/test card/i)
    expect(cardTitle).toBeInTheDocument();
  });

  test('tag title', () => {
    render(<CardInfoModal isOpen={true} />);
    
    const tagTitle = screen.getByText(/server/i)
    expect(tagTitle).toBeInTheDocument();
  });

  test('comment text', () => {
    render(<CardInfoModal isOpen={true} />);
    
    const commentText = screen.getByText(/lorem ipsum/i)
    expect(commentText).toBeInTheDocument();
  });

  test('add tag', () => {
    render(<CardInfoModal isOpen={true} />);
    
    const addTagButton = screen.getByText(/add tag/i);
    fireEvent.click(addTagButton);

    const addTagInput = screen.getByTitle("Tag name");
    const newTagName = "panel";
    fireEvent.change(addTagInput, { target : { value: newTagName }});

    const checkMarkIconButton = screen.getByRole('button', { name: /add-tag/i})
    fireEvent.click(checkMarkIconButton);

    const newTag = screen.getByText(newTagName);
    expect(newTag).toBeInTheDocument();
  });

  test('add comment', () => {
    render(<CardInfoModal isOpen={true} />);
    
    const newCommentValue = "Test commnet";

    const commentInput = screen.getByTestId("commentInput");
    commentInput.textContent = newCommentValue;
    
    const addCommentButton = screen.getByText("Add");
    fireEvent.click(addCommentButton);

    
    const newComment = screen.getByText(newCommentValue);
    expect(newComment).toBeInTheDocument();
  });

  test('delete comment', async () => {
    render(<CardInfoModal isOpen={true} />);
    
    const { comments, selectedCard } = useTrelloStore.getState();

    const willDeleteComment = comments.filter(comment => comment.cardId === selectedCard.id);


    const deleteCommentButton = await screen.findAllByRole('button', { name: /delete-comment/i})
    fireEvent.click(deleteCommentButton[0]);
    
    const deletedComment = screen.queryByText(willDeleteComment[0].text);

    expect(deletedComment).not.toBeInTheDocument();
  });

  test('delete tag', async () => {
    render(<CardInfoModal isOpen={true} />);
    
    const { tags, selectedCard } = useTrelloStore.getState();

    const willDeleteTag = tags.filter(tag => tag.cardId === selectedCard.id);


    const deleteTagButton = await screen.findAllByRole('button', { name: /delete-tag/i})
    fireEvent.click(deleteTagButton[0]);
    
    const deletedTag = screen.queryByText(willDeleteTag[0].title);

    expect(deletedTag).not.toBeInTheDocument();
  });
})

