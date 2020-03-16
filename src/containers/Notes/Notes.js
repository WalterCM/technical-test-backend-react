import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import Note from '../../components/Note/Note';
import NoteManager from './NoteManager/NoteManager';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

import style from './Notes.module.css';

class Notes extends Component {
  state = {
    notes: [],
    selectedNote: null,
    selectedTitle: '',
    selectedBody: '',
    onManage: false
  };

  componentDidMount = () => {
    this.updateNoteList();
  };

  updateNoteList = () => {
    axios.get('http://localhost:8000/notes/list/')
      .then(response => {
        console.log(response);
        this.setState({notes: response.data});
      });
  };

  noteClickedHandler = (id, title, body) => {
    this.setState({
      selectedNote: id,
      selectedTitle: title,
      selectedBody: body,
      onManage: true
    });
  };

  onAddNoteHandler = () => {
    axios.post('http://localhost:8000/notes/create/', {})
      .then(response => {
        console.log(response)
      });
  };

  onAcceptHandler = (event, title, body) => {
    event.preventDefault();
    const payload = {
      'title': title.value,
      'body': body.value
    };

    axios.patch('http://localhost:8000/notes/' + this.state.selectedNote + '/manage/', payload)
      .then(response => {
        this.updateNoteList();
        this.hideNoteManagerModal();
        console.log(response)
      });
  };

  onCancelHandler = (event) => {
    event.preventDefault();
    this.hideNoteManagerModal();
  };

  hideNoteManagerModal = () => {
    this.setState({onManage: false});
  };

  render() {
    const notes = this.state.notes.map(note => {
      return <Note
        key={note.id}
        title={note.title}
        body={note.body}
        onClick={() => this.noteClickedHandler(note.id, note.title, note.body)} />
    });

    return (
      <Aux>
        <Modal show={this.state.onManage}>
          <NoteManager
            selectedNote={this.state.selectedNote}
            selectedTitle={this.state.selectedTitle}
            selectedBody={this.state.selectedBody}
            onAccept={this.onAcceptHandler}
            onCancel={this.onCancelHandler} />
        </Modal>
        <section className={style.Notes}>
          {notes}
        </section>
        <section className={style.AddNoteButton}>
          <Button onClick={this.onAddNoteHandler}>+</Button>
        </section>
      </Aux>
    );
  }
}

export default Notes;