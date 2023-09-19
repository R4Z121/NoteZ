import NoteHeaderNav from "./NoteHeaderNav"
import SearchBar from "./searchBar"

export default function NoteHeader({changeFolderHandler, searchHandler}) {
  return (
    <div className="flex flex-col gap-2 relative">
      <NoteHeaderNav changeFolderHandler={changeFolderHandler} />
      <SearchBar searchHandler={searchHandler} />
    </div>
  )
}