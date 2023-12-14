import NoteDetail from "../components/body/NoteDetail";
import BlockerModal from "../components/modal/BlockerModal";
import ConfirmModal from "../components/modal/confirm-modal/ConfirmModal";
import { TfiFaceSad } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/dataSource";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail () {
  const {noteId} = useParams();
  const navigate = useNavigate();

  const [noteInfo, setNoteInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    async function getNoteInfo () {
      const {data} = await getNote(noteId);
      setNoteInfo(data);
      setInitializing(false);
    }
    getNoteInfo();
  },[])

  //Toggle archive note handler
  const toggleArchive = async () => {
    if(noteInfo.archived) {
      const {error} = await unarchiveNote(noteId);
      if(!error) {
        setNoteInfo((prevState) => {
          return {...prevState, archived: false}
        });
      }
    } else {
      const {error} = await archiveNote(noteId);
      if(!error) {
        setNoteInfo((prevState) => {
          return {...prevState, archived: true}
        });
      }
    }
  }

  //show modal delete
  const toggleDeleteModal = () => {
    setShowModal(!showModal);
  }

  //Delete note handler
  const deleteCurrentNote = async () => {
    const {error} = deleteNote(noteId);
    if(!error) {
      navigate("/");
    }
  }

  return initializing ? (<></>) : (
    <div className="flex flex-col relative" id="detail">
      <BlockerModal show={showModal} />
      <ConfirmModal
        show={showModal}
        confirmHandler={deleteCurrentNote}
        confirmationMessage={`Anda yakin ingin menghapus "${noteInfo.title}" ? Catatan yang dihapus akan hilang selamanya !`}
        closeModalHandler={toggleDeleteModal}
      />
      {noteInfo ? 
        ( <NoteDetail 
            noteInfo={noteInfo}
            toggleArchiveHandler={toggleArchive}
            deleteModal={toggleDeleteModal} 
          /> 
        ) 
        : 
        ( <div className="flex flex-col gap-4 items-center p-5 mt-16">
            <TfiFaceSad className="text-5xl" />
            <p>Catatan Tidak Ditemukan !</p>
          </div>
        )
      }
    </div>
  )
}