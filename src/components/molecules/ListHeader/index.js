import { ListTitle } from "../../atoms/ListTitle";
import { IconButton } from "../../atoms/IconButton";
import { trashIcon } from "../../../icons/trashIcon";
import "./styles.css";

export const ListHeader = () => {
  return (
    <div className="list-header">
      <ListTitle title={"To Do"} />
      <IconButton svg={trashIcon} variant={"delete"} />
    </div>
  )
}
