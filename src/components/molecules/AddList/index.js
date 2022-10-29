import { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { addIcon } from '../../../icons/addIcon';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { checkIcon } from '../../../icons/checkIcon';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import "./styles.css";

export const AddList = () => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  }

  const cancelHandler = () => {
    toggleIsOpen();
    setValue("");
  }

  return (
    <div className='add-list-wrapper'>
      <Button icon={<Icon svg={addIcon} />} onClick={() => toggleIsOpen()}>Add List</Button>
      {isOpen && (
        <div className='add-list-input-wrapper'>
          <input autoFocus type={"text"} value={value} onChange={changeHandler} />
          <IconButton svg={checkIcon}/>
          <IconButton svg={xmarkIcon} variant={"secondary"} onClick={cancelHandler} />
        </div>
      )}
    </div>
  )
}
