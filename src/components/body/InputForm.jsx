import PropTypes from "prop-types";

export default function InputForm ({ invalidMessage, inputLogo, inputType, inputPlaceholder, inputValue, inputHandler }) {
  return (
    <div>
      <div className={ `flex items-center gap-2 bg-white p-2 text-black rounded-sm text-sm sm:text-lg ${ invalidMessage ? "border-4 border-red-600" : "" }` }>
        { inputLogo }
        <input type={ inputType } className="p-1 w-full outline-none border-none bg-transparent" placeholder={ inputPlaceholder } value={ inputValue } onChange={ inputHandler } required />
      </div>
      { invalidMessage ? (<p className="text-red-600 font-bold">{ invalidMessage }</p>) : (<></>) }
    </div>
  )
}

InputForm.propTypes = {
  invalidMessage: PropTypes.string.isRequired,
  inputLogo: PropTypes.object.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired
}