import {bool} from "prop-types";
import PropTypes from "prop-types";
import { FaRegBookmark, FaBookmark, FaTrash } from "react-icons/fa";

export default function ActionPanel ({toggleArchiveHandler, deleteModal, archivedStatus}) {
  return (
    <div className="flex bg-app-blue dark:bg-purple-950 w-full max-w-xl self-center gap-8 justify-center rounded text-xl sm:text-2xl md:text-3xl p-4 mt-5 md:mt-10">
      <button type="button" title="arsip" className="text-black" onClick={toggleArchiveHandler}>{archivedStatus ? (<FaBookmark className="dark:text-white" />) : (<FaRegBookmark className="dark:text-white" />)}</button>
      <button type="button" title="hapus" className="text-red-800 dark:text-red-600" onClick={deleteModal}><FaTrash /></button>
    </div>
  )
}

ActionPanel.propTypes = {
  archivedStatus: bool.isRequired,
  deleteModal: PropTypes.func.isRequired,
  toggleArchiveHandler: PropTypes.func.isRequired
}