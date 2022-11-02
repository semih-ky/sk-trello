import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { itemTypes } from "../../../dnd/itemTypes";
import "./styles.css";

export const CardBody = ({ 
  children,
  card,
  onMouseEnter = () => {}, 
  onMouseLeave = () => {},
  onClick = () => {}
}) => {

  const [{isDragging}, drag, _] = useDrag(() => ({
    type: itemTypes.CARD,
    item: {
      card,
      type: itemTypes.CARD
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [card]);

  return (
    <div
      ref={drag} 
      className={`card-container ${isDragging && "card-drag-on"}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      { children }
    </div>
  )
}

CardBody.propTypes = {
  children: PropTypes.node,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
}