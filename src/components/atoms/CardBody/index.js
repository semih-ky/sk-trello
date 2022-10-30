import PropTypes from "prop-types";
import "./styles.css";

export const CardBody = ({ 
  children, 
  onMouseEnter = () => {}, 
  onMouseLeave = () => {},
  onClick = () => {}
}) => {

  return (
    <div 
      className="card-container"
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