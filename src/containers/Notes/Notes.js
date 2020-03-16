import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import Note from '../../components/Note/Note';

import style from './Notes.module.css';

class Notes extends Component {
  state = {
    notes: [],
    selectedNote: null
  };

  componentDidMount() {
    axios.get('http://localhost:8000/notes/list/')
      .then(response => {
        console.log(response)
        this.setState({notes: response.data});
      });
  }

  noteClickedHandler = (id) => {
    this.setState({selectedNote: id});
  };

  render() {
    const notes = this.state.notes.map(note => {
      return <Note
        key={note.id}
        title={note.title}
        body={note.body}
        onClick={() => this.noteClickedHandler(note.id)} />
    });

    return (
      <Aux>
        <section className={style.Notes}>
          {notes}
        </section>
        <div>+</div>
      </Aux>
    );
  }
}

export default Notes;