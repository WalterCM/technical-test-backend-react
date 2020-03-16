import React from 'react';

import Layout from './components/Layout/Layout';
import Note from './containers/Notes/Notes';

function App() {
  return (
    <div>
      <Layout>
        <Note />
      </Layout>
    </div>
  );
}

export default App;
