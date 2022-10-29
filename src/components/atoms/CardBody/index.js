import PropTypes from "prop-types";
import { useToggle } from "../../../hooks/useToggle";
import { ellipsisIcon } from "../../../icons/ellipsisIcon";
import { Icon } from "../Icon";
import "./styles.css";


export const CardBody = ({ children }) => {

  const [isHover, toggleIsHover] = useToggle(false);

  return (
    <div className="card-container" onMouseEnter={toggleIsHover} onMouseLeave={toggleIsHover}>
      {isHover && (
        <>
          <div className="card-container-overlay"></div>
          <div className="card-edit-icon">
            <Icon svg={ellipsisIcon} />
          </div>
        </>
      )}
      { children }
    </div>
  )
}

CardBody.propTypes = {
  children: PropTypes.node
}