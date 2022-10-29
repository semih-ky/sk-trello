import React from 'react';
import { addIcon } from '../../../icons/addIcon';
import { Icon } from '../../atoms/Icon';
import { ListHeader } from '../../molecules/ListHeader';
import { Card } from '../../molecules/Card';
import { Button } from '../../atoms/Button';
import "./styles.css";
import { AddCard } from '../../molecules/AddCard';
import { useToggle } from '../../../hooks/useToggle';

export const List = () => {

  const [isOpenAddCard, toggleAddCard] = useToggle(false);

  return (
    <div className='list-container'>
      <ListHeader />

      <Card />
      <Card />
      <Card />


      {isOpenAddCard && (
        <AddCard close={toggleAddCard} />
      )}

      <div className='add-card-button'>
        <Button icon={<Icon svg={addIcon} />} onClick={() => toggleAddCard(true)}>Add Card</Button>
      </div>
      
    </div>
  )
}