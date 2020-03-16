import React from 'react';

import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';
import style from './NoteManager.module.css';

const noteManager = (props) => {
  let title = null;
  let body = null;
  return <Aux>
    <form className={style.NoteManager}>
      <ul>
        <li>
          <label htmlFor="title">Titulo</label>
          <input type="text" id="title" name="title" defaultValue={props.selectedTitle} ref={(ref) => title = ref}/>
        </li>
        <li>
          <label htmlFor="body">Contenido</label>
          <textarea rows="10" id="body" name="body" defaultValue={props.selectedBody} ref={(ref) => body = ref}/>
        </li>
        <Button onClick={(event) => props.onAccept(event, title, body)} type="Success">Actualizar</Button>
        <Button onClick={props.onCancel} type="Danger">Cancelar</Button>
      </ul>
    </form>
  </Aux>
};

export default noteManager;
