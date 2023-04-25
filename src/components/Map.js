// components/Map.js

import React from 'react';

function Map() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        title="Custom Google Map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1S2m4aaP0DUFjWTFHKtGpqUZmdTRNW3Eh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
      ></iframe>
    </div>
  );
}

export default Map;

/* import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import heritageSites from '../data/heritageSites';

function Map() {
  return (
    <MapContainer center={[39.90, -4.25]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {heritageSites.map((site) => (
        <Marker key={site.id} position={site.coordinates}>
          <Popup>
            {site.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map; */
