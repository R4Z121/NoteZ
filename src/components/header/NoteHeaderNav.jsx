import React from "react"
import NoteHeaderTitle from "./NoteHeaderTitle"
import NoteFolder from "./NoteFolder"

export default class NoteHeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Catatan",
      isNoteFolderShow: false
    }

    this.toggleNavHandler = this.toggleNavHandler.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  toggleNavHandler () {
    this.setState((previousState) => {
      return {
        isNoteFolderShow: !previousState.isNoteFolderShow
      }
    });
  }

  onCategoryChange (noteCategory) {
    this.setState({
      headerTitle: noteCategory
    });
  }

  render () {
    return (
      <div className="relative border-b-4 border-app-blue">
        <NoteHeaderTitle title={this.state.headerTitle} navHandler={this.toggleNavHandler} />
        <NoteFolder show={this.state.isNoteFolderShow} navHandler={this.toggleNavHandler} changeHandler={this.onCategoryChange} changeNoteBodyHandler={this.props.changeFolderHandler} />
      </div>
    )
  }
}