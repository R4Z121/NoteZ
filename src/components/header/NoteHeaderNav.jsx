import PropTypes from "prop-types";
import NoteFolder from "./NoteFolder";
import React, { useState } from "react";
import NoteHeaderTitle from "./NoteHeaderTitle";

export default function NoteHeaderNav ({headerTitle}) {
  const [isNoteFolderShow, setIsNoteFolderShow] = useState(false);

  //Toggle Nav Handler
  const toggleNav = () => {
    setIsNoteFolderShow(!isNoteFolderShow);
  }

  return (
    <div className="relative border-b-4 border-app-blue">
      <NoteHeaderTitle
        title={headerTitle}
        navHandler={toggleNav}
      />
      <NoteFolder
        show={isNoteFolderShow} 
        folderActive={headerTitle} 
      />
    </div>
  )
  
}

NoteHeaderNav.propTypes = {
  headerTitle: PropTypes.string.isRequired
}