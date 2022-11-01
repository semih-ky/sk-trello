import { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { addIcon } from '../../../icons/addIcon';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { checkIcon } from '../../../icons/checkIcon';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";
import { useTrelloStore } from '../../../store/trelloStore';

export const AddList = () => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [titleValue, setTitleValue] = useState("");

  const addList = useTrelloStore((state) => state.addList);

  const changeHandler = (e) => {
    setTitleValue(e.target.value);
  }

  const cancelHandler = () => {
    toggleIsOpen();
    setTitleValue("");
  }
  
  const addListHandler = () => {
    const listId = uuidv4();
    const listTitleId = uuidv4();
    addList({
      list: { 
        id: listId,
      },
      listTitle: {
        listId: listId,
        id: listTitleId,
        title: titleValue
      }
    });
    setTitleValue("");
    toggleIsOpen();
  }

  return (
    <div className='add-list-wrapper'>
      <Button icon={<Icon svg={addIcon} />} onClick={() => toggleIsOpen(true)}>Add List</Button>
      {isOpen && (
        <div className='add-list-input-wrapper'>
          <input data-testid={"addListInput"} autoFocus type={"text"} value={titleValue} onChange={changeHandler} />
          <IconButton svg={checkIcon} onClick={addListHandler} />
          <IconButton svg={xmarkIcon} variant={"secondary"} onClick={cancelHandler} />
        </div>
      )}
    </div>
  )
}
