import { useRef } from 'react'
import { CommentContainer } from '../../atoms/CommentContainer'
import { Avatar } from '../../atoms/Avatar'
import { IconButton } from '../../atoms/IconButton'
import { ellipsisIcon } from '../../../icons/ellipsisIcon'
import { trashIcon } from '../../../icons/trashIcon'
import { checkIcon } from '../../../icons/checkIcon'
import { useToggle } from '../../../hooks/useToggle'
import { xmarkIcon } from '../../../icons/xmarkIcon'
import { useTrelloStore } from '../../../store/trelloStore'
import './styles.css'


export const Comment = ({ cardId, index, comment }) => {
  const deleteComment = useTrelloStore(state => state.deleteComment);
  const updateComment = useTrelloStore(state => state.updateComment);

  const commentEditable = useRef();
  const [isEdit, toggleEdit] = useToggle(false);

  const editToggleHandler = () => {
    if (!isEdit) {
      if (commentEditable.current) {
        commentEditable.current.textContent = comment?.text;
      }
    }
    toggleEdit();
  }

  const updateCommentHandler = () => {
    updateComment(cardId, index, {
      ...comment,
      text: commentEditable.current.textContent
    });
    toggleEdit();
  }

  return (
    <CommentContainer>
      <Avatar />
      <div className='comment-text-container'>
        <div className='comment-text'>
            <div ref={commentEditable} contentEditable className={`comment-edit comment-edit-${isEdit ? "open" : "close"}`}></div>
            {isEdit || (
              <p>{comment?.text}</p>
            )}
        </div>
        <div className='comment-footer'>
          {isEdit && (
            <IconButton svg={checkIcon} variant={"primary"} onClick={updateCommentHandler} />
          )}
          <IconButton svg={isEdit ? xmarkIcon : ellipsisIcon} variant={"secondary"} onClick={editToggleHandler} />
          {isEdit || (
            <IconButton ariaLabel='delete-comment' svg={trashIcon} variant={"delete"} onClick={() => deleteComment(comment?.id)} />
          )}
        </div>
      </div>
    </CommentContainer>
  )
}
