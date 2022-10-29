import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { checkIcon } from '../../../icons/checkIcon';
import { IconButton } from '../../atoms/IconButton';
import { CardBody } from '../../atoms/CardBody';
import "./styles.css";

export const AddCard = ({ close = () => {} }) => {
  const contentEditable = useRef();
  
  useEffect(() => {
    if (contentEditable.current) {
      contentEditable.current.focus()
    }
  }, []);

  return (
    <CardBody>
      <div ref={contentEditable} className='add-card-contenteditable' contentEditable ></div>
      <div className='add-card-footer'>
        <IconButton svg={checkIcon}/>
        <IconButton svg={xmarkIcon} variant={"secondary"} onClick={close} />
      </div>
    </CardBody>
  )
}

AddCard.propTypes = {
  close: PropTypes.func
}