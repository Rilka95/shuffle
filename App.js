import React from 'react';
import {
  BrowserRouter as Router, // Import BrowserRouter and rename it to Router for convenience
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';

function App() {
  return (
    <Router> {/* Wrap Routes with Router */}
      <Routes>
        <Route path="/" element={<IndexPage />} /> {/* Ensure IndexPage is passed as an element */}
      </Routes>
    </Router>
  );
}

export default App;
