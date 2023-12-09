import {bool} from "prop-types";
import PropTypes from "prop-types";
import ConfirmationAction from "./ConfirmationAction";
import ConfirmationMessage from "./ConfirmationMessage";

export default function ConfirmModal({show, closeModalHandler, confirmationMessage, confirmHandler}) {
  return (
    <div className={`fixed z-50 inset-x-0 inset-y-0 p-5 flex justify-center items-center ${show ? 'translate-y-0' : '-translate-y-full'} transition-transform`}>
      <div className="flex flex-col gap-5 w-full max-w-2xl p-5 rounded border-4 border-app-blue bg-app-slate">
        <ConfirmationMessage
          message={confirmationMessage} 
        />
        <ConfirmationAction
          confirmHandler={confirmHandler} 
          closeModalHandler={closeModalHandler} 
        />
      </div>
    </div>
  )
}

ConfirmModal.propTypes = {
  show: bool.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  confirmationMessage: PropTypes.string.isRequired
}