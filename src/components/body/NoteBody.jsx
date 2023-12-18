import NoteCard from "./NoteCard";
import { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../App";

export default function NoteBody ({ data, deleteHandler, archivedNoteHandler }) {
  const { lang } = useContext(AppContext);
 
  return data.length ? 
    (
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        { data.map(obj => (
          <NoteCard
            key={ obj.id }
            detail={ obj }
            deleteHandler={ deleteHandler }
            archivedNoteHandler={ archivedNoteHandler }
          />
        )) }
      </div>
    ) 
    : 
    (
      <div className="flex justify-center items-center p-5">
        <p className="text-red text-base sm:text-lg mt-12 dark:text-white">{ lang === "id" ? "Tidak ada catatan !" : "Note not found !" }</p>
      </div>
    )
}

NoteBody.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
  archivedNoteHandler: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}