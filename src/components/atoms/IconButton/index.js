import PropTypes from "prop-types";
import { Icon } from "../Icon"
import "./styles.css"


export const IconButton = ({ svg, variant="primary", onClick }) => {
  return (
    <button onClick={onClick} className={`sk-icon-button ${variant}-icon-button`}>
      <Icon svg={svg} />
    </button>
  )
}

IconButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  svg: PropTypes.node,
  onClick: PropTypes.func
}