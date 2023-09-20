import React from "react";
import NoteHeader from "./components/header/NoteHeader";
import NoteBody from "./components/body/NoteBody";
import ModalForm from "./components/modal/modal-form/ModalForm";
import ConfirmModal from "./components/modal/confirm-modal/ConfirmModal";
import BlockerModal from "./components/modal/BlockerModal";
import AddButton from "./components/AddButton";
import { getInitialData } from "./utils/data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: "note",
      data: [],
      showedData: [],
      modalShow: false,
      addModal: false,
      deleteModal: false,
      deleteTargetId: "",
      confirmationMessage: "",
    }

    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.insertNoteHandler = this.insertNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.toggleArchivedNoteHandler = this.toggleArchivedNoteHandler.bind(this);
    this.changeFolderHandler = this.changeFolderHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  componentDidMount() {
    const notes = JSON.parse(localStorage.getItem('znotes'));
    if(notes) {
      this.setState({
        data: notes,
        showedData: notes.filter(note => !note.archived)
      })
    } else {
      localStorage.setItem('znotes',JSON.stringify(getInitialData()));
    }
  }

  toggleAddModal() {
    this.setState({
      modalShow: !this.state.modalShow,
      addModal: !this.state.addModal
    });
  }

  showDeleteModal(idTarget, titleTarget) {
    this.setState({
      modalShow: !this.state.modalShow,
      deleteModal: !this.state.deleteModal,
      confirmationMessage: `Anda yakin ingin menghapus "${titleTarget}" ? Catatan yang dihapus akan hilang selamanya !`,
      deleteTargetId: idTarget
    });
  }

  closeDeleteModal() {
    this.setState({
      modalShow: !this.state.modalShow,
      deleteModal: !this.state.deleteModal
    });
  }

  changeFolderHandler(target) {
    if(this.state.currentSection === "note") {
      if(target === "archive") {
        this.setState({
          currentSection: "archive",
          showedData: this.state.data.filter(note => note.archived)
        })
      }
    } else if(this.state.currentSection === "archive") {
      if(target === "note") {
        this.setState({
          currentSection: "note",
          showedData: this.state.data.filter(note => !note.archived)
        })
      }
    }
  }

  searchHandler(e) {
    if(this.state.currentSection === "note") {
      this.setState({
        showedData: this.state.data.filter(note => !note.archived).filter(note => note.title.toLowerCase().includes(e.target.value.toLowerCase()))
      });
    } else {
      this.setState({
        showedData: this.state.data.filter(note => note.archived).filter(note => note.title.toLowerCase().includes(e.target.value.toLowerCase()))
      })
    }
  }

  insertNoteHandler(newData) {
    const updatedNoteData = [...this.state.data,newData];
    localStorage.setItem('znotes',JSON.stringify(updatedNoteData));
    if(this.state.currentSection === "note") {
      this.setState({
        data: updatedNoteData,
        showedData: [...this.state.showedData,newData]
      })
    } else {
      this.setState({
        data: updatedNoteData,
      })
    }
  }

  deleteNoteHandler(id) {
    const updatedData = this.state.data.filter(note => (note.id !== id));
    const updatedShowedData = this.state.showedData.filter(note => (note.id !== id));
    localStorage.setItem('znotes', JSON.stringify(updatedData));
    this.setState({
      data: updatedData,
      showedData: updatedShowedData
    })
    this.closeDeleteModal();
  }

  toggleArchivedNoteHandler(id) {
    const updatedNoteData = this.state.data.map(note => {
      if(note.id === id) {
        note.archived = !note.archived
      }
      return note;
    });

    localStorage.setItem('znotes',JSON.stringify(updatedNoteData));
    
    this.setState({
      data: updatedNoteData,
      showedData: this.state.showedData.filter(note => (note.id !== id))
    })
  }

  render() {
    return (
      <div className="flex flex-col min-h-screen justify-between gap-7 bg-thick-white">
        <div className="flex flex-col relative">
          <NoteHeader changeFolderHandler={this.changeFolderHandler} searchHandler={this.searchHandler} />
          <NoteBody data={this.state.showedData} deleteHandler={this.showDeleteModal} archivedNoteHandler={this.toggleArchivedNoteHandler} />
          <BlockerModal show={this.state.modalShow} />
          <ModalForm show={this.state.addModal} closeModalHandler={this.toggleAddModal} dataStateHandler={this.insertNoteHandler} />
          <ConfirmModal show={this.state.deleteModal} closeModalHandler={this.closeDeleteModal} confirmationMessage={this.state.confirmationMessage} confirmHandler={() => this.deleteNoteHandler(this.state.deleteTargetId)} />
          <AddButton actionHandler={this.toggleAddModal} />
        </div>
        <footer className="flex justify-center items-center p-2">
          <h4 className="text-base font-bold">Powered by R4Z121.</h4>
        </footer>
      </div>
    );
  }
}