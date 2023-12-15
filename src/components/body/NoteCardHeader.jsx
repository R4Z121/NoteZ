import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/data";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function NoteCardHeader ({info, deleteHandler, archivedNoteHandler}) {
  const {lang} = useContext(AppContext);

  return (
    <div id="card-header" className="p-3">
      <div className="flex justify-between items-center gap-2">
        <Link to={`/detail/${info.id}`} className="font-bold overflow-hidden text-ellipsis whitespace-nowrap sm:text-2xl text-lg">{info.title}</Link>
        <div className="flex gap-2">
          <button type="button" className="bg-transparent border-none outline-none hover:cursor-pointer" onClick={() => deleteHandler(info.id, info.title)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-6 w-6 sm:h-7 sm:w-7 fill-red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
          <button type="button" className="bg-transparent border-none outline-none hover:cursor-pointer text-xl" onClick={() => archivedNoteHandler(info.id)}>
            {info.archived ? (<FaBookmark className="text-black dark:text-white" />) : (<FaRegBookmark className="text-black dark:text-white" />)}
          </button>
        </div>
      </div>
      <p className="text-xs sm:text-sm">{showFormattedDate(info.createdAt,lang)}</p>
    </div>
  )
}

NoteCardHeader.propTypes = {
  info: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  archivedNoteHandler: PropTypes.func.isRequired
}