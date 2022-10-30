import { Avatar } from '../../atoms/Avatar'
import { Button } from '../../atoms/Button'
import { CommentContainer } from '../../atoms/CommentContainer'
import './styles.css'

export const AddComment = () => {
  return (
    <CommentContainer>
      <Avatar />
      <div className='add-comment-container'>
        <div contentEditable placeholder='Enter a comment.' className='add-comment-editable'></div>
        <div className='add-comment-footer'>
          <Button>Add</Button>
        </div>
      </div>
    </CommentContainer>
  )
}
