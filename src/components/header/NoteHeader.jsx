import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

export default function NoteHeader({searchHandler, searchValue}) {
  return (
    <div className="flex flex-col gap-2 relative">
      <SearchBar 
        searchHandler={searchHandler} 
        searchValue={searchValue} 
      />
    </div>
  )
}

NoteHeader.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}