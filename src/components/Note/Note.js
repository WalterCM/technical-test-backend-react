import React from 'react';

import style from './Note.module.css'

const note = (props) => {
  let title  = props.title;
  if (!title) {
    title = '(Nota sin titulo)';
  }
  let body = props.body;
  if (!body) {
    body = '(Nota sin contenido)';
  }
  return (
    <article className={style.Note} onClick={props.onClick}>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
};

export default note;
