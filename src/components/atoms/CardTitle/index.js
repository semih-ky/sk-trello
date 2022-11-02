import PropTypes from "prop-types";
import "./styles.css"

export const CardTitle = ({ title }) => {
  return (
    <p className="card-title">{ title }</p>
  )
}

CardTitle.protoTypes = {
  title: PropTypes.string
}