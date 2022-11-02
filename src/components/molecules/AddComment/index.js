import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTrelloStore } from '../../../store/trelloStore'
import { Avatar } from '../../atoms/Avatar'
import { Button } from '../../atoms/Button'
import { CommentContainer } from '../../atoms/CommentContainer'
import './styles.css'

export const AddComment = ({ cardId }) => {
  const addComment = useTrelloStore(state => state.addComment);
  const commentEditable = useRef();

  const addCommentHandler = () => {
    addComment({
      cardId,
      id: uuidv4(),
      text: commentEditable.current.textContent
    })
    commentEditable.current.textContent = "";
  }

  return (
    <CommentContainer>
      <Avatar />
      <div className='add-comment-container'>
        <div data-testid={"commentInput"} ref={commentEditable} contentEditable placeholder='Enter a comment.' className='add-comment-editable'></div>
        <div className='add-comment-footer'>
          <Button onClick={addCommentHandler}>Add</Button>
        </div>
      </div>
    </CommentContainer>
  )
}
