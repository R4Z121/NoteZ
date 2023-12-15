import NoteForm from "../components/body/NoteForm";
import { addNote } from "../utils/dataSource";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../components/modal/LoadingModal";

export default function NewNotes () {
  const navigate = useNavigate();
  const [noteInfo, setNoteInfo] = useState({title: '', body: ''});
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const {error} = await addNote(noteInfo);
    setLoading(false);
    if(!error) {
      navigate('/');
    }
  }

  return (
    <div className="flex flex-col relative" id="add">
      <NoteForm noteInfo={noteInfo} titleChangeHandler={onTitleChange} bodyChangeHandler={onBodyChange} addNoteHandler={addNewNote} />
      <LoadingModal show={loading} />
    </div>
  )
}