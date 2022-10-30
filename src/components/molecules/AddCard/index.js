import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { checkIcon } from '../../../icons/checkIcon';
import { IconButton } from '../../atoms/IconButton';
import { CardBody } from '../../atoms/CardBody';
import "./styles.css";
import { useTrelloStore } from '../../../store/trelloStore';


export const AddCard = ({ listId, close = () => {} }) => {
  const contentEditable = useRef();
  const addCard = useTrelloStore((state) => state.addCard)

  const addCardHandler = () => {
    const cardTitle = contentEditable.current.textContent;
    addCard({
      listId,
      id: uuidv4(),
      title: cardTitle
    });
    close();
  }
  
  useEffect(() => {
    if (contentEditable.current) {
      contentEditable.current.focus()
    }
  }, []);

  return (
    <CardBody>
      <div ref={contentEditable} className='add-card-contenteditable' contentEditable ></div>
      <div className='add-card-footer'>
        <IconButton svg={checkIcon} onClick={addCardHandler} />
        <IconButton svg={xmarkIcon} variant={"secondary"} onClick={close} />
      </div>
    </CardBody>
  )
}

AddCard.propTypes = {
  close: PropTypes.func
}