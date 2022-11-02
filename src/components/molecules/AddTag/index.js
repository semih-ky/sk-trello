import { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { addIcon } from '../../../icons/addIcon';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { checkIcon } from '../../../icons/checkIcon';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { useTrelloStore } from '../../../store/trelloStore';
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";

export const AddTag = ({ cardId }) => {
  const addTag = useTrelloStore(state => state.addTag);
  const [isOpen, toggleIsOpen] = useToggle();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  }

  const cancelHandler = () => {
    toggleIsOpen();
    setValue("");
  }

  const addTagHandler = () => {
    addTag({
      cardId: cardId,
      id: uuidv4(),
      title: value,
      colorIndex: Math.floor(Math.random() * 3)
    });
    setValue("");
    toggleIsOpen();
  }

  return (
    <div className='add-tag-wrapper'>
      <Button icon={<Icon svg={addIcon} />} onClick={() => toggleIsOpen(true)}>Add Tag</Button>
      {isOpen && (
        <div className='add-tag-input-wrapper'>
          <input autoFocus title='Tag name' type={"text"} value={value} onChange={changeHandler} />
          <IconButton ariaLabel='add-tag' svg={checkIcon} onClick={addTagHandler} />
          <IconButton svg={xmarkIcon} variant={"secondary"} onClick={cancelHandler} />
        </div>
      )}
    </div>
  )
}
