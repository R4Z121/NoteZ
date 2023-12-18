import PropTypes from "prop-types";
import NoteCardBody from "./NoteCardBody";
import NoteCardHeader from "./NoteCardHeader";

export default function NoteCard({ detail, deleteHandler, archivedNoteHandler }) {
  return (
    <div id="NoteCard" className="flex flex-col w-full bg-white dark:bg-app-black dark:text-white rounded">
      <NoteCardHeader 
        info={ detail }
        deleteHandler={ deleteHandler }
        archivedNoteHandler={ archivedNoteHandler }
      />
      <NoteCardBody
        info={ detail.body }
      />
    </div>
  )
}

NoteCard.propTypes = {
  detail: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  archivedNoteHandler: PropTypes.func.isRequired
}