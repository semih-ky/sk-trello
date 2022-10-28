import PropTypes from "prop-types";
import "./styles.css";

export const ListTitle = ({ title }) => {
  return (
    <h1 className="list-title">{ title }</h1>
  )
}

ListTitle.propTypes = {
  title: PropTypes.string
}