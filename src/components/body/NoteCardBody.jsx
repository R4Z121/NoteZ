export default function NoteCardBody ({info}) {
  return (
    <div id="card-body" className="p-3 overflow-hidden">
      <p className="text-sm sm:text-lg text-justify">{info}</p>
    </div>
  )
}