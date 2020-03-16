import React from 'react';

import style from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={style.NavigationItems}>
    <NavigationItem link="/logout/">Logout</NavigationItem>
  </ul>
);

export default navigationItems;
