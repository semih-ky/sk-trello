import { Icon } from '../Icon';
import { searchIcon } from '../../../icons/seacrhIcon';
import "./styles.css";

export const SearchInput = () => {
  return (
    <div className='search-input-container'>
      <Icon svg={searchIcon} />
      <input type={"text"} />
    </div>
  )
}
