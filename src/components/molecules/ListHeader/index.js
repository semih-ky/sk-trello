import { ListTitle } from "../../atoms/ListTitle";
import { IconButton } from "../../atoms/IconButton";
import { trashIcon } from "../../../icons/trashIcon";
import { useTrelloStore } from "../../../store/trelloStore";
import "./styles.css";

export const ListHeader = ({ listId ,title }) => {
  const deleteList = useTrelloStore(state => state.deleteList);

  return (
    <div className="list-header">
      <ListTitle title={title} />
      <IconButton svg={trashIcon} variant={"delete"} onClick={() => deleteList(listId)} />
    </div>
  )
}
