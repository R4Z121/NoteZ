import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ButtonForm from "../modal/modal-form/ButtonForm";

export default function AppForm ({ children, failedActionMessage, buttonContent, buttonAction, confirmationText, linkContent, linkURL }) {
  return (
    <form className="w-full max-w-md flex flex-col gap-4 p-4 bg-app-blue dark:bg-app-black text-white rounded">
      <div id="form-header" className="w-full self-center relative -top-10 bg-blue-300 dark:bg-purple-950 p-3 flex justify-center items-center font-bold text-lg sm:text-2xl border-4 border-blue-700 dark:border-app-light-blue -mb-8">
        <h1 className="text-blue-700 dark:text-white">NoteZ</h1>
      </div>
      { failedActionMessage ? (
        <div className="w-full flex justify-center p-2">
          <p className="text-red-600 font-bold">{ failedActionMessage }</p>
        </div>
      ) : (<></>) }
      <div id="form-input" className="flex flex-col gap-5">
        { children.map(child => {
          return child;
        }) }
      </div>
      <ButtonForm content={ buttonContent } type="button" actionHandler={ buttonAction } customClass="w-full bg-blue-400 dark:bg-app-light-purple text-sm sm:text-lg hover:bg-blue-500" />
      <div className="flex flex-col gap-3 text-center">
        <hr />
        <p>{ confirmationText }</p>
        <Link to={ linkURL } className="p-2 text-white outline-0 border-none rounded hover:cursor-pointer w-full bg-blue-700 text-sm sm:text-lg hover:bg-blue-600">{ linkContent }</Link>
      </div>
    </form>
  )
}

AppForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  failedActionMessage: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  confirmationText: PropTypes.string.isRequired,
  linkContent: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired
}