import React from 'react';
import { addIcon } from '../../../icons/addIcon';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { ListTitle } from "../../atoms/ListTitle";
import "./styles.css";

export const List = () => {
  return (
    <div className='list-container'>
      <ListTitle title={"To Do"} />

      <div className='add-card-button'>
        <Button icon={<Icon svg={addIcon} />}>Add Card</Button>
      </div>
      
    </div>
  )
}