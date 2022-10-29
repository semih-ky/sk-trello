import React from 'react';
import { addIcon } from '../../../icons/addIcon';
import { Icon } from '../../atoms/Icon';
import { ListHeader } from '../../molecules/ListHeader';
import { Card } from '../../molecules/Card';
import { Button } from '../../atoms/Button';
import "./styles.css";

export const List = () => {
  return (
    <div className='list-container'>
      <ListHeader />

      <Card />
      <Card />
      <Card />


      <div className='add-card-button'>
        <Button icon={<Icon svg={addIcon} />}>Add Card</Button>
      </div>
      
    </div>
  )
}