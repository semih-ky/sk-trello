import React from 'react'
import { useTrelloStore } from '../../../store/trelloStore'
import { Button } from '../../atoms/Button'
import './styles.css'

export const ModalFooter = ({ cardId, modalClose }) => {
  const deleteCard = useTrelloStore(state => state.deleteCard);

  const deleteHandler = () => {
    deleteCard(cardId);
    modalClose();
  }

  return (
    <div className='modal-footer'>
      <Button onClick={modalClose}>OK</Button>
      <Button variant='delete' onClick={deleteHandler} >Delete</Button>
    </div>
  )
}
