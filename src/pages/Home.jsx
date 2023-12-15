import { AppContext } from "../App";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/dataSource";
import AddButton from "../components/AddButton";
import NoteBody from "../components/body/NoteBody";
import NoteHeader from "../components/header/NoteHeader";
import BlockerModal from "../components/modal/BlockerModal";
import LoadingModal from "../components/modal/LoadingModal";
import ConfirmModal from "../components/modal/confirm-modal/ConfirmModal";

export default function Home () {
  const { lang } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = useState([]);
  const [noteTitleKeyword, setNoteTitleKeyword] = useState(searchParams.get('title') || "");
  const [showModal, setShowModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(0);
  const [deleteConfirmationMessage, setDeleteConfirmationMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateNotesList();
  },[noteTitleKeyword]);

  //updateNotesList
  const updateNotesList = async () => {
    const { data } = await getActiveNotes();
    setActiveNotes(data.filter(note => note.title.toLowerCase().includes(noteTitleKeyword.toLowerCase())));
    setLoading(false);
  }

  //showDeleteModalHandler
  const displayDeleteModal = (noteId, noteTitle) => {
    setDeleteTargetId(noteId);
    if (lang === "id") {
      setDeleteConfirmationMessage(`Anda yakin ingin menghapus "${ noteTitle }" ? Catatan yang dihapus akan hilang selamanya !`);
    } else {
      setDeleteConfirmationMessage(`Are you sure want to permanently delete "${ noteTitle }" ? You cannot undo this action !`);
    }
    setShowModal(true);
  }

  //closeModalHandler
  const closeModal = () => {
    setShowModal(false);
  }

  //deleteHandler
  const onDeleteNote = async (noteId) => {
    setShowModal(false);
    setLoading(true);
    const { error } = await deleteNote(noteId);
    if (!error) {
      updateNotesList();
    }
  }

  //archiveNoteHandler
  const archiveNoteTarget = async (noteId) => {
    setLoading(true);
    const { error } = await archiveNote(noteId);
    if (!error) {
      updateNotesList();
    }
  }

  //searchHandler
  const searchNote = (e) => {
    setNoteTitleKeyword(e.target.value);
    setSearchParams({ title: e.target.value });
  }

  return (
    <>
      <NoteHeader
        headerTitle="Catatan"
        searchHandler={ searchNote }
        searchValue={ noteTitleKeyword }
      />
      {!loading ? (
        <NoteBody 
          data={ activeNotes }
          deleteHandler={ displayDeleteModal }
          archivedNoteHandler={ archiveNoteTarget } 
        />
      ) : (<LoadingModal show={ loading } />)}
      <BlockerModal
        show={ showModal }
      />
      <ConfirmModal
        show={ showModal }
        closeModalHandler={ closeModal }
        confirmHandler={ () => onDeleteNote(deleteTargetId) }
        confirmationMessage={ deleteConfirmationMessage }  
      />
      <AddButton />
    </>
  );
}