// pages/HomePage.js
import React from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="home-page">
      <Map />
      <Sidebar />
    </div>
  );
}

export default HomePage;
