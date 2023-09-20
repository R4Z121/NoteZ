import React from "react";
import LabelInput from "./LabelInput";
import ButtonForm from "./ButtonForm";

export default class ModalForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      contentValue: "",
      inputLength: 50
    }

    this.onTitleInputChange = this.onTitleInputChange.bind(this);
    this.onContentInputChange = this.onContentInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleInputChange(e) {
    const maxTitleInputCharacters = 50;
    if(e.target.value.length > maxTitleInputCharacters) {
      e.target.value = e.target.value.substring(0, maxTitleInputCharacters);
    } else {
      this.setState({
        titleValue: e.target.value,
        inputLength: maxTitleInputCharacters - e.target.value.length
      });
    }
  }

  onContentInputChange(e) {
    this.setState({contentValue: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    const timeStamp = new Date();
    const newData = {
      id: timeStamp.getTime(),
      title: this.state.titleValue,
      body: this.state.contentValue,
      createdAt: timeStamp.toISOString(),
      archived: false
    }
    this.props.dataStateHandler(newData);
    this.setState({
      titleValue: "",
      contentValue: "",
      inputLength: 50
    });
    this.props.closeModalHandler();
  }
  
  render() {
    return (
      <div className={`fixed z-50 inset-x-0 inset-y-0 p-5 flex justify-center items-center ${this.props.show ? 'translate-y-0' : '-translate-y-full'} transition-transform`}>
        <form className="rounded border-4 border-app-blue p-5 bg-app-slate w-full max-w-2xl flex flex-col gap-3" onSubmit={this.onFormSubmit}>
          <h3 className="flex justify-center items-center text-app-blue text-2xl mb-7">Tambah Catatan</h3>
          <div className="flex flex-col gap-2">
            <LabelInput 
              label="Judul Catatan" 
              id="title" 
              customClass="bg-transparent border-b-2 border-app-blue" 
              value={this.state.titleValue}
              changeHandler={this.onTitleInputChange}
            />
            <p className={`text-xs font-bold ${(this.state.inputLength > 0) ? 'text-app-blue' : 'text-app-red'} flex justify-end`}>Sisa karakter : {this.state.inputLength}</p>
          </div>
          <LabelInput 
            label="Konten" 
            id="content" 
            type="textarea" 
            value={this.state.contentValue} 
            changeHandler={this.onContentInputChange} 
          />
          <div className="flex gap-3 justify-end p-3">
            <ButtonForm type="submit" content="Tambah" customClass="bg-app-blue text-white" />
            <ButtonForm type="button" content="Batal" customClass="bg-app-red text-white" actionHandler={this.props.closeModalHandler} />
          </div>
        </form>
      </div>
    )
  }
}