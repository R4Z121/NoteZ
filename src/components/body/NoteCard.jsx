import NoteCardHeader from "./NoteCardHeader"
import NoteCardBody from "./NoteCardBody"

export default function NoteCard({detail, deleteHandler, archivedNoteHandler}) {
  return (
    <div id="NoteCard" className="flex flex-col w-full bg-white rounded">
      <NoteCardHeader info={{
        id: detail.id,
        title: detail.title,
        createdAt: detail.createdAt,
        archived: detail.archived
      }}
      deleteHandler={deleteHandler}
      archivedNoteHandler={archivedNoteHandler}
      />
      <NoteCardBody info={detail.body} />
    </div>
  )
}