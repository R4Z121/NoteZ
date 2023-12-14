import NoteHeader from "../components/header/NoteHeader";
import NoteBody from "../components/body/NoteBody";
import BlockerModal from "../components/modal/BlockerModal";
import ConfirmModal from "../components/modal/confirm-modal/ConfirmModal";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/dataSource";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingModal from "../components/modal/LoadingModal";

export default function Archived () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [noteTitleKeyword, setNoteTitleKeyword] = useState(searchParams.get('title') || "");
  const [showModal, setShowModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(0);
  const [deleteConfirmationMessage, setDeleteConfirmationMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateNotesList();
    setLoading(false);
  },[noteTitleKeyword]);

  //updateNotesList
  const updateNotesList = async () => {
    const {data} = await getArchivedNotes();
    setArchivedNotes(data.filter(note => note.title.toLowerCase().includes(noteTitleKeyword.toLowerCase())));
  }

  //showDeleteModalHandler
  const displayDeleteModal = (noteId, noteTitle) => {
    setDeleteTargetId(noteId);
    setDeleteConfirmationMessage(`Anda yakin ingin menghapus "${noteTitle}" ? Catatan yang dihapus akan hilang selamanya !`);
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
    const {error} = await deleteNote(noteId);
    setLoading(false);
    if(!error) {
      updateNotesList();
    }
  }

  //unarchiveNoteHandler
  const unarchiveNoteTarget = async (noteId) => {
    setLoading(true);
    const {error} = await unarchiveNote(noteId);
    setLoading(false);
    if(!error) {
      updateNotesList();
    }
  }

  //searchHandler
  const searchNote = (e) => {
    setNoteTitleKeyword(e.target.value);
    setSearchParams({title: e.target.value});
  }

  return (
    <>
      <NoteHeader 
        headerTitle="Arsip"
        searchHandler={searchNote}
        searchValue={noteTitleKeyword} 
      />
      {!loading ? (
        <NoteBody 
          data={archivedNotes}
          deleteHandler={displayDeleteModal}
          archivedNoteHandler={unarchiveNoteTarget} 
        />
      ) : (<LoadingModal show={loading} />)}
      <BlockerModal 
        show={showModal} 
      />
      <ConfirmModal 
        show={showModal} 
        closeModalHandler={closeModal} 
        confirmHandler={() => onDeleteNote(deleteTargetId)} 
        confirmationMessage={deleteConfirmationMessage}  
      />
    </>
  );
}