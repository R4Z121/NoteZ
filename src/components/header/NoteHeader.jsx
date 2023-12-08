import PropTypes from "prop-types";
import SearchBar from "./searchBar";
import NoteHeaderNav from "./NoteHeaderNav";

export default function NoteHeader({headerTitle, searchHandler, searchValue}) {
  return (
    <div className="flex flex-col gap-2 relative">
      <NoteHeaderNav
        headerTitle={headerTitle} 
      />
      <SearchBar 
        searchHandler={searchHandler} 
        searchValue={searchValue} 
      />
    </div>
  )
}

NoteHeader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}