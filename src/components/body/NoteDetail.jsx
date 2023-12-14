import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/data";
import ActionPanel from "./ActionPanel";

export default function NoteDetail ({noteInfo, toggleArchiveHandler, deleteModal}) {
  return (
    <div className="flex flex-col p-2 gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <div className="p-2 text-base sm:text-xl md:text-2xl lg:text-3xl bg-transparent border-b-2 border-black dark:border-white font-bold">
          <p>{noteInfo.title}</p>
        </div>
        <p className="text-sm md:text-base pl-2">{showFormattedDate(noteInfo.createdAt)}</p>
      </div>
      <div className="bg-white dark:bg-app-black p-2 rounded text-sm sm:text-base md:text-lg lg:text-xl min-h-72 h-fit">
        <p>{noteInfo.body}</p>
      </div>
      <ActionPanel archivedStatus={noteInfo.archived} deleteModal={deleteModal} toggleArchiveHandler={toggleArchiveHandler} />
    </div>
  )
}

NoteDetail.propTypes = {
  noteInfo: PropTypes.object.isRequired,
  toggleArchiveHandler: PropTypes.func.isRequired,
  deleteModal: PropTypes.func.isRequired
}