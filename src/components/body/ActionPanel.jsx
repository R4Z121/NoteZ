import {bool} from "prop-types";
import PropTypes from "prop-types";
import { FaCheck, FaRegBookmark, FaBookmark, FaTrash } from "react-icons/fa";

export default function ActionPanel ({updateStatus, editNoteHandler, toggleArchiveHandler, deleteModal, archivedStatus}) {
  return (
    <div className="flex bg-app-blue w-full max-w-xl self-center gap-8 justify-center rounded text-xl sm:text-2xl md:text-3xl p-4 mt-16 md:mt-10">
      <button type="button" title="simpan" className={updateStatus ? "text-green-400" : "text-zinc-500"} onClick={editNoteHandler}><FaCheck /></button>
      <button type="button" title="arsip" className="text-black" onClick={toggleArchiveHandler}>{archivedStatus ? (<FaBookmark />) : (<FaRegBookmark />)}</button>
      <button type="button" title="hapus" className="text-red-800" onClick={deleteModal}><FaTrash /></button>
    </div>
  )
}

ActionPanel.propTypes = {
  updateStatus: bool.isRequired,
  archivedStatus: bool.isRequired,
  deleteModal: PropTypes.func.isRequired,
  editNoteHandler: PropTypes.func.isRequired,
  toggleArchiveHandler: PropTypes.func.isRequired
}