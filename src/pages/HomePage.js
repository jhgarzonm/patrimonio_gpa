// pages/HomePage.js
import React from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Heritage Adventures!</h1>
      <p className="text-content">Choose your path or make one new, its your choice!</p>
      <div className="map-container">
        <Map />
        <Sidebar />
      </div>
      <p className="text-content">Aquí puedes agregar más información y funcionalidades después del mapa.</p>
      <p className="footer">Derechos reservados &copy; 2023</p>
      
    </div>
    );
}

export default HomePage;
