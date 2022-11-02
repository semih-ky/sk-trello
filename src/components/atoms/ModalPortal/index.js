import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export const ModalPortal = ({children, isOpen}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(children, document.getElementById("modal-portal"));
}

ModalPortal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool
}
