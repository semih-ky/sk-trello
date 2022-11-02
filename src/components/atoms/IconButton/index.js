import PropTypes from "prop-types";
import { Icon } from "../Icon"
import "./styles.css"


export const IconButton = ({ svg, ariaLabel="icon-button", variant="primary", onClick }) => {
  return (
    <button aria-label={ariaLabel} onClick={onClick} className={`sk-icon-button ${variant}-icon-button`}>
      <Icon svg={svg} />
    </button>
  )
}

IconButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'delete']),
  svg: PropTypes.node,
  onClick: PropTypes.func
}