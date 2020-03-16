import React from 'react';

import style from './Backdrop.module.css'

const backdrop = (props) => {
  const attachedClasses = [style.Backdrop, props.extraStyle];
  return (
    props.show ? <div className={attachedClasses.join(' ')} onClick={props.hide}></div> : null
  );
};

export default backdrop;
