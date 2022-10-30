import React from 'react';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { IconButton } from '../../atoms/IconButton';
import './styles.css'

export const ModalHeader = ({ modalClose }) => {
  return (
    <div className='modal-header'>
      <div className='modal-close-button'>
        <IconButton onClick={modalClose} svg={xmarkIcon} variant={"secondary"} />
      </div>
    </div>
  )
}
