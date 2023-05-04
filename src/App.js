// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage2';
import SitePage from './pages/SitePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sitio/:id" element={<SitePage />} />
            <Route path="/acerca-de" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/sitios" element={<Sidebar />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

