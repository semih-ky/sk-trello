import { AddList } from "../../molecules/AddList";
import { SearchInput } from "../../molecules/SearchInput";
import "./styles.css";

export const Header = () => {
  return (
    <div className='header'>
      <AddList />
      <SearchInput />
    </div>
  )
}
