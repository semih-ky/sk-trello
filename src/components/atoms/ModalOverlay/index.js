import React from 'react'
import './styles.css'

export const ModalOverlay = ({ onClick }) => {
  return (
    <div onClick={onClick} className='modal-overlay' />
  )
}
