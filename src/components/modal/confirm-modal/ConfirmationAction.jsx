import PropTypes from "prop-types";
import ButtonForm from "../modal-form/ButtonForm";
import { AppContext } from "../../../App";
import { useContext } from "react";

export default function ConfirmationAction({confirmHandler, closeModalHandler}) {
  const {lang} = useContext(AppContext);

  return (
    <div className="flex gap-3 justify-end items-center">
      <ButtonForm
        type="button"
        actionHandler={confirmHandler}
        content={lang === "id" ? "Ya" : "Yes"}
        customClass="bg-app-blue text-white pr-5 pl-5"
      />
      <ButtonForm
        type="button"
        actionHandler={closeModalHandler}
        content={lang === "id" ? "Tidak" : "No"}
        customClass="bg-app-red text-white"
      />
    </div>
  )
}

ConfirmationAction.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired
}