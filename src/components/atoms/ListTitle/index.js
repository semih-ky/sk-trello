import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { itemTypes } from "../../../dnd/itemTypes";
import "./styles.css";

export const ListTitle = ({ listTitle }) => {
  const [{isDragging}, drag, _] = useDrag(() => ({
    type: itemTypes.LIST_TITLE,
    item: {
      listTitle,
      type: itemTypes.LIST_TITLE
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [listTitle])

  return (
    <h1 
      ref={drag} 
      className={`list-title ${isDragging && "list-title-drag-on"}`}
    >
      { listTitle?.title }
    </h1>
  )
}

ListTitle.propTypes = {
  title: PropTypes.string
}