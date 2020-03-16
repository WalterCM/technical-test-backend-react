import React from 'react';

import style from './Note.module.css'

const note = (props) => {
  return (
    <article className={style.Note} onClick={props.onClick}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </article>
  )
};

export default note;
