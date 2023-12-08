import { FaCheck, FaRegBookmark, FaBookmark, FaTrash } from "react-icons/fa";
import { showFormattedDate } from "../../utils/data";

export default function AppForm ({noteInfo, titleChangeHandler, bodyChangeHandler, editNoteHandler, toggleArchiveHandler, deleteModal, updateStatus}) {
  return (
    <form className="flex flex-col p-2 gap-4">
      <div className="flex flex-col gap-2">
        <input type="text" id="noteTitle" className="p-2 text-base sm:text-xl md:text-2xl lg:text-3xl outline-none bg-transparent border-b-2 border-black font-bold" value={noteInfo.title} onChange={titleChangeHandler} placeholder="Note Title" />
        <p className="text-sm md:text-base pl-2">{showFormattedDate(noteInfo.createdAt)}</p>
      </div>
      <textarea id="noteBody" className="bg-white border-none outline-none p-2 text-sm sm:text-base md:text-lg lg:text-xl resize-none h-72" value={noteInfo.body} onChange={bodyChangeHandler} placeholder="Note Body"></textarea>
      <div className="flex bg-app-blue w-full max-w-xl self-center gap-8 justify-center rounded text-xl sm:text-2xl md:text-3xl p-4 mt-16 md:mt-10">
        <button type="button" title="simpan" className={updateStatus ? "text-green-400" : "text-zinc-500"} onClick={editNoteHandler}><FaCheck /></button>
        <button type="button" title="arsip" className="text-black" onClick={toggleArchiveHandler}>{noteInfo.archived ? (<FaBookmark />) : (<FaRegBookmark />)}</button>
        <button type="button" title="hapus" className="text-red-800" onClick={deleteModal}><FaTrash /></button>
      </div>
    </form>
  )
}