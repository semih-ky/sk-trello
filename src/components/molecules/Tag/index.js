import PropTypes from "prop-types";
import { tagColors } from "./colors";
import "./styles.css";

export const Tag = ({ children, colorIndex=-1 }) => {
  return (
    <div className={`tag-wrapper ${tagColors[colorIndex] ?? ""}`}>
      {children}
    </div>
  )
}

Tag.propTypes = {
  colorIndex: PropTypes.number,
  children: PropTypes.node
}