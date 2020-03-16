import React from 'react';

import style from './Header.module.css';

const header = (props) => (
  <div className={style.Header}>{props.children}</div>
);

export default header;
