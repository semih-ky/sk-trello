import PropTypes from "prop-types";
import "./styles.css";

export const Button = ({ children, variant="primary", icon, onClick }) => {
  return (
    <button className={`sk-button ${variant}-button`} onClick={onClick}>
      {icon && icon}
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.element,
  onClick: PropTypes.func
}