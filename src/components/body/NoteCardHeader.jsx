import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/data";

export default function NoteCardHeader ({info, deleteHandler, archivedNoteHandler}) {
  return (
    <div id="card-header" className="p-3">
      <div className="flex justify-between items-center gap-2">
        <Link to={`/detail/${info.id}`} className="font-bold overflow-hidden text-ellipsis whitespace-nowrap sm:text-2xl text-lg">{info.title}</Link>
        <div className="flex gap-2">
          <button type="button" className="bg-transparent border-none outline-none hover:cursor-pointer" onClick={() => deleteHandler(info.id, info.title)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-6 w-6 sm:h-7 sm:w-7 fill-red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
          <button type="button" className="bg-transparent border-none outline-none hover:cursor-pointer" onClick={() => archivedNoteHandler(info.id)}>
            {info.archived ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-6 w-6 sm:h-7 sm:w-7 fill-black"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-6 w-6 sm:h-7 sm:w-7"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
            )}
          </button>
        </div>
      </div>
      <p className="text-xs sm:text-sm">{showFormattedDate(info.createdAt)}</p>
    </div>
  )
}

NoteCardHeader.propTypes = {
  info: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  archivedNoteHandler: PropTypes.func.isRequired
}