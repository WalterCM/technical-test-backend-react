import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Notes from './containers/Notes/Notes';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Auth}/>
          <Route path="/notes/" component={Notes}/>
          <Route path="/logout/" render={() => {
            localStorage.setItem('token', null);
            return <Auth />
          }} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
