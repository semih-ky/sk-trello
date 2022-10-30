import React from 'react'
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
import './styles.css'


export const CardInfoModal = ({ isOpen, toggleIsOpen }) => {
  return (
    <ModalPortal isOpen={isOpen}>
      <ModalOverlay onClick={() => toggleIsOpen(false)} />
      <ModalContainer>
        <ModalHeader  toggleIsOpen={toggleIsOpen} />
        
        <div className='modal-body'>
          
          <h2 className='modal-labels'>Title</h2>
          <CardTitle title={"Wellcome to our trello app. Begin your journey. First, create your first list."} />

          <h2 className='modal-labels'>Tags</h2>
          <AddTag />
          <div className='tag-control-container'>
            <TagControl />
            <TagControl />
            <TagControl />
            <TagControl />
            <TagControl />
            <TagControl />
          </div>
          
          <h2 className='modal-labels'>Comments</h2>
          <Comment />
          <AddComment />
          
        </div>
        <ModalFooter />
      </ModalContainer>
    </ModalPortal>
  )
}
