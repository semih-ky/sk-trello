import PropTypes from "prop-types";
import { ellipsisIcon } from "../../../icons/ellipsisIcon";
import { Icon } from "../Icon";
import "./styles.css";

export const CardHover = ({ isHover=false }) => {
  return (
    <>
      {isHover ? (
        <>
          <div className="card-hover"></div>
          <div className="card-edit-icon">
            <Icon svg={ellipsisIcon} />
          </div>
        </>
      ) : null}
    </>
  )
}

CardHover.propTypes = {
  isHover: PropTypes.bool
}