import React from 'react';
import { addIcon } from '../../../icons/addIcon';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { ListTitle } from "../../atoms/ListTitle";
import { Card } from '../../molecules/Card';
import "./styles.css";

export const List = () => {
  return (
    <div className='list-container'>
      <ListTitle title={"To Do"} />

      <Card />
      <Card />
      <Card />


      <div className='add-card-button'>
        <Button icon={<Icon svg={addIcon} />}>Add Card</Button>
      </div>
      
    </div>
  )
}