import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Note from '../../components/Note/Note';
import NoteManager from './NoteManager/NoteManager';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Header from  '../../components/UI/Header/Header';

import style from './Notes.module.css';

import axios from '../../axios-connection';

class Notes extends Component {
  state = {
    notes: [],
    selectedNote: null,
    selectedTitle: '',
    selectedBody: '',
    onManage: false
  };

  getConfig = () => {
    const token = localStorage.getItem('token');
    return {
      headers: { Authorization: `Bearer ${token}` }
    };
  };


  componentDidMount = () => {
    this.updateNoteList();
  };

  updateNoteList = () => {
    axios.get('notes/list/', this.getConfig())
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
    axios.post('notes/create/', {}, this.getConfig())
      .then(response => {
        console.log(response)
      });
  };

  onAcceptHandler = (title, body) => {
    const payload = {
      'title': title,
      'body': body
    };

    axios.patch('notes/' + this.state.selectedNote + '/manage/', payload, this.getConfig())
      .then(response => {
        this.updateNoteList();
        this.hideNoteManagerModal();
        console.log(response)
      });
  };

  onCancelHandler = () => {
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
        <Header>Notas</Header>

        <Modal show={this.state.onManage}>
          <NoteManager
            selectedNote={this.state.selectedNote}
            selectedTitle={this.state.selectedTitle}
            selectedBody={this.state.selectedBody}
            onAccept={this.onAcceptHandler}
            onCancel={this.onCancelHandler}
            config={this.getConfig()}/>
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