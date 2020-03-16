import React from 'react';

import style from './Button.module.css';

const button = (props) => {
  const className = [style.Button, style[props.type], props.extraStyle];
  return <button className={className.join(' ')} onClick={props.onClick}>{props.children}</button>
};

export default button;
