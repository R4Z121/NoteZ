import { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../App";

export default function SearchBar ({ searchHandler, searchValue }) {
  const { lang } = useContext(AppContext);

  return (
    <div className="p-2">
      <div className="p-1 flex items-center gap-2 bg-app-gray rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#36454F" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        <input type="text" placeholder={ lang === "id" ? "Cari catatan..." : "Search notes..." } className="border-none outline-0 p-1 bg-transparent w-full text-base sm:text-xl" onChange={ searchHandler } value={ searchValue } />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
}