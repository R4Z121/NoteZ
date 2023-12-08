import React from "react";
import { bool } from "prop-types";
import PropTypes from "prop-types";
import NoteFolderList from "./NoteFolderList";

export default function NoteFolder ({show, folderActive}) {
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
    </div>
  );
}

NoteFolder.propTypes = {
  show: bool.isRequired,
  folderActive: PropTypes.string.isRequired
}