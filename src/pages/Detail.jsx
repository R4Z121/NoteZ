import PageHeader from "../components/header/PageHeader";
import AppForm from "../components/body/AppForm";
import BlockerModal from "../components/modal/BlockerModal";
import ConfirmModal from "../components/modal/confirm-modal/ConfirmModal";
import { TfiFaceSad } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { getNote, editNote, archiveNote, unarchiveNote, deleteNote } from "../utils/data";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail () {
  const {noteId} = useParams();
  const navigate = useNavigate();

  const [noteInfo, setNoteInfo] = useState(getNote(noteId));
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(true);

  useEffect(() => {
    if(noteInfo) {
      setUpdatedTitle(noteInfo.title);
    }
  },[])

  const onTitleChange = e => {
    setNoteInfo({...noteInfo, title: e.target.value});
    setUpdateStatus(false);
  }

  const onBodyChange = e => {
    setNoteInfo({...noteInfo, body: e.target.value});
    setUpdateStatus(false);
  }

  //Update note handler
  const editNoteDetail = () => {
    if(noteInfo.title === "") {
      setNoteInfo({...noteInfo, title: "Untitled"})
      editNote(noteId,"Untitled",noteInfo.body);
      setUpdatedTitle("Untitled");
    } else {
      editNote(noteId,noteInfo.title,noteInfo.body);
      setUpdatedTitle(noteInfo.title);
    }
    setUpdateStatus(true);
  }

  //Toggle archive note handler
  const toggleArchive = () => {
    if(noteInfo.archived) {
      unarchiveNote(noteId);
      setNoteInfo({...noteInfo, archived: false});
    } else {
      archiveNote(noteId);
      setNoteInfo({...noteInfo, archived: true});
    }
  }

  //show modal delete
  const toggleDeleteModal = () => {
    setShowModal(!showModal);
  }

  //Delete note handler
  const deleteCurrentNote = () => {
    deleteNote(noteId);
    navigate("/");
  }

  return (
    <div className="flex flex-col relative" id="detail">
      <BlockerModal show={showModal} />
      <ConfirmModal
        show={showModal}
        confirmHandler={deleteCurrentNote}
        confirmationMessage={`Anda yakin ingin menghapus "${updatedTitle}" ? Catatan yang dihapus akan hilang selamanya !`}
        closeModalHandler={toggleDeleteModal}
      />
      <PageHeader />
      {noteInfo ? (
        <AppForm 
          noteInfo = {noteInfo}
          titleChangeHandler={onTitleChange}
          bodyChangeHandler={onBodyChange}
          editNoteHandler={editNoteDetail}
          toggleArchiveHandler={toggleArchive}
          deleteModal={toggleDeleteModal}
          updateStatus={updateStatus}
        />
      )
      :
      (
        <div className="flex flex-col gap-4 items-center p-5 mt-16">
          <TfiFaceSad className="text-5xl" />
          <p>Catatan Tidak Ditemukan !</p>
        </div>
      )}
      
    </div>
  )
}