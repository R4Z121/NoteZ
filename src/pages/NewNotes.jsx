import PageHeader from "../components/header/PageHeader";
import AppForm from "../components/body/AppForm";
import { addNote } from "../utils/dataSource";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewNotes () {
  const navigate = useNavigate();
  const [noteInfo, setNoteInfo] = useState({title: '', body: ''});

  const onTitleChange = e => {
    setNoteInfo((prevState) => {
      return {...prevState, title: e.target.value}
    });
  }

  const onBodyChange = e => {
    setNoteInfo((prevState) => {
      return {...prevState, body: e.target.value}
    });
  }

  //add new note handler
  const addNewNote = async () => {
    const {error} = await addNote(noteInfo);
    if(!error) {
      navigate('/');
    }
  }

  return (
    <div className="flex flex-col relative" id="add">
      <PageHeader />
      <AppForm noteInfo={noteInfo} titleChangeHandler={onTitleChange} bodyChangeHandler={onBodyChange} addNoteHandler={addNewNote} />
    </div>
  )
}