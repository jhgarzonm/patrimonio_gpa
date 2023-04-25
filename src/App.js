// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentsgit/Header';
import HomePage from './pages/HomePage';
import SitePage from './pages/SitePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sitio/:id" element={<SitePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

