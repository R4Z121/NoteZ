import PropTypes from "prop-types";

export default function ButtonForm ({type, actionHandler, content, customClass}) {
  return (
    <button className={`p-2 text-white outline-0 border-none rounded hover:cursor-pointer ${customClass}`} type={type} onClick={actionHandler}>{content}</button>
  )
}

ButtonForm.propTypes = {
  customClass: PropTypes.string,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired
}