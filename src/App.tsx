import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchCarPage from './pages/SearchCarPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cari-mobil" element={<SearchCarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
