import React, { useContext } from "react";
import { bool } from "prop-types";
import PropTypes from "prop-types";
import NoteFolderList from "./NoteFolderList";
import { putAccessToken } from "../../utils/dataSource";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function NoteFolder ({show, folderActive}) {
  const {setAuthedUser} = useContext(AppContext);
  const navigate = useNavigate();

  const logOut = () => {
    putAccessToken("");
    setAuthedUser(null);
    navigate("/login");
  }

  return (
    <div className={`w-full bg-white flex flex-col absolute z-10 border-b-4 border-app-blue transition-transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <NoteFolderList 
        folderName="Catatan" 
        target={'/'} 
        folderActive={folderActive === "Catatan" ? true : false} 
      />
      <NoteFolderList 
        folderName="Arsip" 
        target={'/archived'} 
        folderActive={folderActive === "Arsip" ? true : false} 
      />
      <div className="hover:cursor-pointer pb-0 flex flex-col">
        <a className="border-b-2 border-app-gray-2 p-3 text-base sm:text-xl hover:bg-app-gray" onClick={logOut}>Keluar</a>
      </div>
    </div>
  );
}

NoteFolder.propTypes = {
  show: bool.isRequired,
  folderActive: PropTypes.string.isRequired
}