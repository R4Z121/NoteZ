export default function AppForm ({noteTitle, titleChangeHandler, noteBody, bodyChangeHandler, noteDate}) {
  return (
    <form className="flex flex-col p-2 gap-4">
      <div className="flex flex-col gap-2">
        <input type="text" id="noteTitle" className="p-2 text-base outline-none bg-transparent border-b-2 border-black font-bold" value={noteTitle} onChange={titleChangeHandler} placeholder="Note Title" />
        <p className="text-sm pl-2">{noteDate}</p>
      </div>
      <textarea id="noteBody" className="bg-white border-none outline-none p-2 text-sm resize-none h-96" value={noteBody} onChange={bodyChangeHandler} placeholder="Note Body"></textarea>
    </form>
  )
}