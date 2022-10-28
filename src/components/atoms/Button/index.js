import PropTypes from "prop-types";
import "./styles.css";

export const Button = ({ children, variant="primary", icon }) => {
  return (
    <button className={`sk-button ${variant}-button`}>
      {icon && icon}
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.element
}