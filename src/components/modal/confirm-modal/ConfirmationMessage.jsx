import PropTypes from "prop-types";

export default function ConfirmMessage({message}) {
  return (
    <div className="p-3">
      <p className="text-sm">{message}</p>
    </div>
  )
}

ConfirmMessage.propTypes = {
  message: PropTypes.string.isRequired
}