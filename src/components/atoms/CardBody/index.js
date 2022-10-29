import PropTypes from "prop-types";
import "./styles.css";

export const CardBody = ({ 
  children, 
  onMouseEnter = () => {}, 
  onMouseLeave = () => {}
}) => {

  return (
    <div 
      className="card-container" 
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
  onMouseLeave: PropTypes.func
}