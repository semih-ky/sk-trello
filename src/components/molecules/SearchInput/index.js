import { useState } from 'react';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { searchIcon } from '../../../icons/seacrhIcon';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import "./styles.css";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  }

  const removeHandler = () => setValue("");

  return (
    <div className='search-input-container'>
      <Icon svg={searchIcon} />
      <input type={"text"} value={value} onChange={changeHandler} />
      {value && <IconButton svg={xmarkIcon} variant={"secondary"} onClick={removeHandler} />}
    </div>
  )
}
