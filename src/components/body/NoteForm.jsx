import { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../App";
import ButtonForm from "../modal/modal-form/ButtonForm";

export default function NoteForm ({ noteInfo, titleChangeHandler, bodyChangeHandler, addNoteHandler }) {
  const { lang } = useContext(AppContext);

  return (
    <form className="flex flex-col p-2 gap-4 dark:text-white">
      <input type="text" id="noteTitle" className="p-2 text-base sm:text-xl md:text-2xl lg:text-3xl outline-none bg-transparent border-b-2 border-black dark:border-white font-bold" value={ noteInfo.title } onChange={ titleChangeHandler } placeholder={ lang === "id" ? "Judul Catatan" : "Note Title" } />
      <textarea id="noteBody" className="bg-white dark:bg-app-black rounded outline-none p-2 text-sm sm:text-base md:text-lg lg:text-xl resize-none h-72" value={ noteInfo.body } onChange={ bodyChangeHandler } placeholder={ lang === "id" ? "Isi Catatan" : "Note Content" }></textarea>
      <div className="flex p-4 justify-end w-full">
        <ButtonForm actionHandler={ addNoteHandler } content={ lang === "id" ? "Simpan Catatan" : "Save Note" } type="button" customClass="bg-app-blue dark:bg-purple-950" />
      </div>
    </form>
  )
}

NoteForm.propTypes = {
  addNoteHandler: PropTypes.func,
  noteInfo: PropTypes.object.isRequired,
  bodyChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
}