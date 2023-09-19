import React from "react";
import NoteHeader from "./components/header/NoteHeader";
import NoteBody from "./components/body/NoteBody";
import ModalForm from "./components/modal/modal-form/ModalForm";
import BlockerModal from "./components/modal/BlockerModal";
import AddButton from "./components/AddButton";
import { getInitialData } from "./utils/data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: "note",
      data: getInitialData(),
      showedData: getInitialData().filter(note => !note.archived),
      modalShow: false,
      addModal: false
    }

    this.updateShowedNote = this.updateShowedNote.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.insertNoteHandler = this.insertNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.toggleArchivedNoteHandler = this.toggleArchivedNoteHandler.bind(this);
    this.changeFolderHandler = this.changeFolderHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  toggleAddModal() {
    this.setState({
      modalShow: !this.state.modalShow,
      addModal: !this.state.addModal
    });
  }

  changeFolderHandler(target) {
    if(this.state.currentSection === "note") {
      if(target === "archive") {
        this.setState({
          currentSection: "archive",
          showedData: this.state.data.filter(note => note.archived)
        })
      }else {
        console.log("target sama, folder tidak diganti")
      }
    } else if(this.state.currentSection === "archive") {
      if(target === "note") {
        this.setState({
          currentSection: "note",
          showedData: this.state.data.filter(note => !note.archived)
        })
      }
      else {
        console.log("target sama, folder tidak diganti")
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

  updateShowedNote() {
    if(this.state.currentSection === "note") {
      this.setState({
        showedData: this.state.data.filter(note => !note.archived)
      })
    } else {
      this.setState({
        showedData: this.state.data.filter(note => note.archived)
      })
    }
  }

  insertNoteHandler(newData) {
    if(this.state.currentSection === "note") {
      this.setState({
        data: [...this.state.data,newData],
        showedData: [...this.state.showedData,newData]
      })
    } else {
      this.setState({
        data: [...this.state.data,newData],
      })
    }
  }

  deleteNoteHandler(id) {
    this.setState({
      data: this.state.data.filter(note => (note.id !== id)),
      showedData: this.state.showedData.filter(note => (note.id !== id))
    })
  }

  toggleArchivedNoteHandler(id) {
    this.setState({
      data: this.state.data.map(note => {
        if(note.id === id) {
          note.archived = !note.archived
        }
        return note;
      }),
      showedData: this.state.showedData.filter(note => (note.id !== id))
    })
  }

  render() {
    return (
      <div className="flex flex-col min-h-screen justify-between gap-7 bg-thick-white">
        <div className="flex flex-col relative">
          <NoteHeader changeFolderHandler={this.changeFolderHandler} searchHandler={this.searchHandler} />
          <NoteBody data={this.state.showedData} deleteHandler={this.deleteNoteHandler} archivedNoteHandler={this.toggleArchivedNoteHandler} />
          <BlockerModal show={this.state.modalShow} />
          <ModalForm show={this.state.addModal} closeModalHandler={this.toggleAddModal} dataStateHandler={this.insertNoteHandler} />
          <AddButton actionHandler={this.toggleAddModal} />
        </div>
        <footer className="flex justify-center items-center p-2">
          <h4 className="text-base font-bold">Powered by R4Z121.</h4>
        </footer>
      </div>
    );
  }
}