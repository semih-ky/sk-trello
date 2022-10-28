import PropTypes from "prop-types";
import { tagColors } from "./colors";
import "./styles.css";

export const Tag = ({ children, tagName, colorIndex=-1 }) => {
  return (
    <>
      <div className={`tag-wrapper ${tagColors[colorIndex] ?? ""}`}>
        <p className="tag">{ tagName }</p>
        {children}
      </div>
    </>
  )
}

Tag.propTypes = {
  tagName: PropTypes.string,
  colorIndex: PropTypes.number,
  children: PropTypes.node
}