import React from 'react';

import Layout from './components/Layout/Layout';
import Notes from './containers/Notes/Notes';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
      <Layout>
        <Notes />
        <Auth />
      </Layout>
    </div>
  );
}

export default App;
