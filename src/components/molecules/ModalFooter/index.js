import React from 'react'
import { Button } from '../../atoms/Button'
import './styles.css'

export const ModalFooter = () => {
  return (
    <div className='modal-footer'>
      <Button>Save</Button>
      <Button variant='delete'>Delete</Button>
    </div>
  )
}
