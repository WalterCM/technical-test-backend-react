import React from 'react';

import Aux from '../../hoc/Aux';
import style from './Layout.module.css';

const layour = (props) => (
  <Aux>
    <main className={style.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layour;
