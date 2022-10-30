import { useEffect, useRef } from 'react'
import { CommentContainer } from '../../atoms/CommentContainer'
import { Avatar } from '../../atoms/Avatar'
import { IconButton } from '../../atoms/IconButton'
import { ellipsisIcon } from '../../../icons/ellipsisIcon'
import { trashIcon } from '../../../icons/trashIcon'
import './styles.css'
import { checkIcon } from '../../../icons/checkIcon'
import { useToggle } from '../../../hooks/useToggle'
import { xmarkIcon } from '../../../icons/xmarkIcon'


export const Comment = () => {

  const commentEditable = useRef();

  const [isEdit, toggleEdit] = useToggle(false);

  const editToggleHandler = () => {
    if (!isEdit) {
      if (commentEditable.current) {
        console.log("YEEESS")
        commentEditable.current.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
      }
    }
    toggleEdit();
  }


  return (
    <CommentContainer>
      <Avatar />
      <div className='comment-text-container'>
        <div className='comment-text'>
            <div ref={commentEditable} contentEditable className={`comment-edit comment-edit-${isEdit ? "open" : "close"}`}></div>
            {isEdit || (
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            )}
        </div>
        <div className='comment-footer'>
          {isEdit && (
            <IconButton svg={checkIcon} variant={"primary"} />
          )}
          <IconButton svg={isEdit ? xmarkIcon : ellipsisIcon} variant={"secondary"} onClick={editToggleHandler} />
          {isEdit || (
            <IconButton svg={trashIcon} variant={"delete"} />
          )}
        </div>
      </div>
    </CommentContainer>
  )
}
