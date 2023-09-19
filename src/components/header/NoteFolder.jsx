import React from "react";
import NoteFolderList from "./NoteFolderList";

export default class NoteFolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteActive: true
    }

    this.onFolderChange = this.onFolderChange.bind(this);
  }

  onFolderChange() {
    this.setState({
      noteActive: !this.state.noteActive
    });
    this.props.navHandler();
  }

  render () {
    return (
      <div className={`w-full bg-white flex flex-col absolute z-10 border-b-4 border-app-blue transition-transform ${this.props.show ? 'translate-y-0' : '-translate-y-full'}`}>
        <NoteFolderList folderName="Catatan" target="note" folderActive={this.state.noteActive} changeTitleHandler={this.props.changeHandler} onFolderChange={this.onFolderChange} changeNoteBodyHandler={this.props.changeNoteBodyHandler} />
        <NoteFolderList folderName="Arsip" target="archive" folderActive={!this.state.noteActive} changeTitleHandler={this.props.changeHandler} onFolderChange={this.onFolderChange} changeNoteBodyHandler={this.props.changeNoteBodyHandler} />
      </div>
    )
  }
}