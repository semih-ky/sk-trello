import { useState } from 'react';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { searchIcon } from '../../../icons/seacrhIcon';
import { xmarkIcon } from '../../../icons/xmarkIcon';
import { useTrelloStore } from '../../../store/trelloStore';
import "./styles.css";

export const SearchInput = () => {
  const addSearchData = useTrelloStore(state => state.addSearchData);
  const searchCards = useTrelloStore(state => state.searchCards);

  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);
    if (searchValue.length < 3) {
      addSearchData(null);
      return
    };
    const searchRes = searchCards(searchValue);
    addSearchData(searchRes);
  }

  const removeHandler = () => {
    setValue("");
    addSearchData(null);
  }

  return (
    <div className='search-input-container'>
      <Icon svg={searchIcon} />
      <input type={"text"} value={value} onChange={changeHandler} />
      {value && <IconButton svg={xmarkIcon} variant={"secondary"} onClick={removeHandler} />}
    </div>
  )
}
