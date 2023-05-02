// pages/HomePage.js
import React from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Inicio</h1>
       <p>Aquí puedes agregar más información y funcionalidades antes del mapa.</p>
      <Map />
      <p>Aquí puedes agregar más información y funcionalidades después del mapa.</p>
      <Sidebar />
    </div>
    );
}

export default HomePage;
