import { ModalPortal } from '../../atoms/ModalPortal'
import { ModalOverlay } from '../../atoms/ModalOverlay'
import { ModalContainer } from '../../molecules/ModalContainer'
import { ModalHeader } from '../../molecules/ModalHeader'
import { CardTitle } from '../../atoms/CardTitle'
import { AddTag } from '../../molecules/AddTag'
import { TagControl } from '../../molecules/TagControl'
import { Comment } from '../../organisms/Comment'
import { AddComment } from '../../molecules/AddComment'
import { ModalFooter } from '../../molecules/ModalFooter'
import { useTrelloStore } from '../../../store/trelloStore'
import './styles.css'


export const CardInfoModal = ({ isOpen }) => {
  const modalClose = useTrelloStore(state => state.modalClose);
  const selectedCard = useTrelloStore(state => state.selectedCard);
  const allComments = useTrelloStore(state => state.comments);
  const allTags = useTrelloStore(state => state.tags);

  const getTags = useTrelloStore(state => state.getTags);
  const getComments = useTrelloStore(state => state.getComments);

  const tags = getTags(selectedCard?.id);
  const comments = getComments(selectedCard?.id);

  return (
    <ModalPortal isOpen={isOpen}>
      <ModalOverlay onClick={modalClose} />
      <ModalContainer>
        <ModalHeader  modalClose={modalClose} />
        
        <div className='modal-body'>
          
          <h2 className='modal-labels'>Title</h2>
          <CardTitle title={selectedCard?.title} />

          <h2 className='modal-labels'>Tags</h2>
          <AddTag cardId={selectedCard?.id} />
          <div className='tag-control-container'>
            {tags.map((tag, index) => (
              <TagControl key={tag?.id} tag={tag} cardId={selectedCard?.id} index={index} />
            ))}
          </div>
          
          <h2 className='modal-labels'>Comments</h2>
          {comments.map((comment, index) => (
            <Comment key={comment?.id} comment={comment} cardId={selectedCard?.id} index={index} />
          ))}
          <AddComment cardId={selectedCard?.id} />
          
        </div>
        <ModalFooter cardId={selectedCard?.id} modalClose={modalClose} />
      </ModalContainer>
    </ModalPortal>
  )
}
