import NoteHeaderNav from "./NoteHeaderNav"
import SearchBar from "./searchBar"

export default function NoteHeader({headerTitle, searchHandler, searchValue}) {
  return (
    <div className="flex flex-col gap-2 relative">
      <NoteHeaderNav headerTitle={headerTitle} />
      <SearchBar searchHandler={searchHandler} searchValue={searchValue} />
    </div>
  )
}