import { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import { useSearchParams } from "react-router-dom";
import NoteBody from "../components/body/NoteBody";
import NoteHeader from "../components/header/NoteHeader";
import BlockerModal from "../components/modal/BlockerModal";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/dataSource";
import ConfirmModal from "../components/modal/confirm-modal/ConfirmModal";
import LoadingModal from "../components/modal/LoadingModal";

export default function Home () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = useState([]);
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
    const {data} = await getActiveNotes();
    setActiveNotes(data.filter(note => note.title.toLowerCase().includes(noteTitleKeyword.toLowerCase())));
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

  //archiveNoteHandler
  const archiveNoteTarget = async (noteId) => {
    setLoading(true);
    const {error} = await archiveNote(noteId);
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
        headerTitle="Catatan"
        searchHandler={searchNote}
        searchValue={noteTitleKeyword}
      />
      {!loading ? (
        <NoteBody 
          data={activeNotes}
          deleteHandler={displayDeleteModal}
          archivedNoteHandler={archiveNoteTarget} 
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
      <AddButton />
    </>
  );
}