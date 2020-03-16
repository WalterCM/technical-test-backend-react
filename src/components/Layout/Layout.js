import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import style from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  render() {
    return  (
      <Aux>
        <Toolbar onDrawerToggleClick={this.sideDrawerToggleHandler}/>
        <main className={style.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}



export default Layout;
