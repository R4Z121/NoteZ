import React, { useState } from "react";
import NoteHeaderTitle from "./NoteHeaderTitle";
import NoteFolder from "./NoteFolder";

export default function NoteHeaderNav ({headerTitle}) {
  const [isNoteFolderShow, setIsNoteFolderShow] = useState(false);
  const toggleNavHandler = () => {
    setIsNoteFolderShow(!isNoteFolderShow);
  }

  return (
    <div className="relative border-b-4 border-app-blue">
      <NoteHeaderTitle title={headerTitle} navHandler={toggleNavHandler} />
      <NoteFolder show={isNoteFolderShow} folderActive={headerTitle} />
    </div>
  )
  
}