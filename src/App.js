import React from 'react';

import Layout from './components/Layout/Layout';
import Note from './containers/Notes/Notes';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
      <Layout>
        <Note />
        <Auth />
      </Layout>
    </div>
  );
}

export default App;
