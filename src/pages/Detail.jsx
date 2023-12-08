import PageHeader from "../components/header/PageHeader";
import AppForm from "../components/body/AppForm";
import { useEffect, useState } from "react";
import { getNote, showFormattedDate } from "../utils/data";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail () {
  const {noteId} = useParams();
  const navigate = useNavigate();

  const [noteInfo, setNoteInfo] = useState({});
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  useEffect(() => {
    const result = getNote(noteId);
    if(result) {
      setNoteInfo(result);
      setNoteTitle(result.title);
      setNoteBody(result.body);
    } else {
      navigate('/not-found');
    }
  },[]);

  const onTitleChange = e => {
    setNoteTitle(e.target.value);
  }

  const onBodyChange = e => {
    setNoteBody(e.target.value);
  }

  return (
    <div className="flex flex-col" id="detail">
      <PageHeader />
      <AppForm noteTitle={noteTitle} titleChangeHandler={onTitleChange} noteBody={noteBody} bodyChangeHandler={onBodyChange} noteDate={showFormattedDate(noteInfo.createdAt)} />
    </div>
  )
}