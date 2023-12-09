import {bool} from "prop-types";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/data";
import ButtonForm from "../modal/modal-form/ButtonForm";
import ActionPanel from "./ActionPanel";

export default function AppForm ({noteInfo, titleChangeHandler, bodyChangeHandler, editNoteHandler, toggleArchiveHandler, deleteModal, updateStatus, addNoteHandler}) {
  return (
    <form className="flex flex-col p-2 gap-4">
      <div className="flex flex-col gap-2">
        <input type="text" id="noteTitle" className="p-2 text-base sm:text-xl md:text-2xl lg:text-3xl outline-none bg-transparent border-b-2 border-black font-bold" value={noteInfo.title} onChange={titleChangeHandler} placeholder="Note Title" />
        {noteInfo.createdAt ? (<p className="text-sm md:text-base pl-2">{showFormattedDate(noteInfo.createdAt)}</p>) : (<></>)}
      </div>
      <textarea id="noteBody" className="bg-white border-none outline-none p-2 text-sm sm:text-base md:text-lg lg:text-xl resize-none h-72" value={noteInfo.body} onChange={bodyChangeHandler} placeholder="Note Body"></textarea>
      {editNoteHandler ? (
        <ActionPanel archivedStatus={noteInfo.archived} updateStatus={updateStatus} editNoteHandler={editNoteHandler} toggleArchiveHandler={toggleArchiveHandler} deleteModal={deleteModal} />
      ) : (<></>) }
      {addNoteHandler ? (
        <div className="flex p-4 justify-end w-full">
          <ButtonForm actionHandler={addNoteHandler} content="Simpan Catatan" type="button" customClass="bg-app-blue" />
        </div>
      ) : (<></>)}
    </form>
  )
}

AppForm.propTypes = {
  updateStatus: bool,
  deleteModal: PropTypes.func,
  addNoteHandler: PropTypes.func,
  editNoteHandler: PropTypes.func,
  toggleArchiveHandler: PropTypes.func,
  noteInfo: PropTypes.object.isRequired,
  bodyChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
}