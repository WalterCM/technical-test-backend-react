import React,  {Component} from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';
import style from './NoteManager.module.css';
import axios from "../../../axios-connection";

class NoteManager extends Component {
  state = {
    title: '',
    body: ''
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  buttonHandler = (event, f, title, body) => {
    event.preventDefault();
    this.setState({title: '', body: ''});
    f(title, body)
  };

  render() {
    let title = this.state.title;
    let body = this.state.body;

    if (title === '')
      title = this.props.selectedTitle;
    if (body === '')
      body = this.props.selectedBody;

    return <Aux>
      <form className={style.NoteManager}>
        <ul>
          <li>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.inputHandler} />
          </li>
          <li>
            <label htmlFor="body">Contenido</label>
            <textarea
              rows="10"
              id="body"
              name="body"
              value={body}
              onChange={this.inputHandler} />
          </li>
          <Button
            onClick={(event) => this.buttonHandler(event, this.props.onAccept, title, body)}
            type="Success">Actualizar</Button>
          <Button
            onClick={(event) => this.buttonHandler(event, this.props.onCancel)}
            type="Danger">Cancelar</Button>
        </ul>
      </form>
    </Aux>
  }
}

export default NoteManager;
