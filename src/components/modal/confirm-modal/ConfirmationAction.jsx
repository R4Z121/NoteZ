import PropTypes from "prop-types";
import ButtonForm from "../modal-form/ButtonForm";

export default function ConfirmationAction({confirmHandler, closeModalHandler}) {
  return (
    <div className="flex gap-3 justify-end items-center">
      <ButtonForm
        type="button"
        actionHandler={confirmHandler}
        content="Ya"
        customClass="bg-app-blue text-white pr-5 pl-5"
      />
      <ButtonForm
        type="button"
        actionHandler={closeModalHandler}
        content="Tidak"
        customClass="bg-app-red text-white"
      />
    </div>
  )
}

ConfirmationAction.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired
}