// components/Map.js
import React from 'react';
import './Map.css';

function Map() {
  return (
    <div className="map-container">
      <h1 className="map-header">Mapa Patrimonial</h1>
        <div className='content-wrapper'>
         <div className='info-container'>
         </div>
         <div className="map-frame-container">
           <iframe
            className="map-frame"
           title="Custom Google Map"
           src="https://www.google.com/maps/d/u/0/embed?mid=1S2m4aaP0DUFjWTFHKtGpqUZmdTRNW3Eh"
           allowFullScreen="">
           </iframe>
         </div>
        </div>
         
    </div>
  );
}

export default Map;

/*import React, { useEffect, useRef } from 'react';
import geojson from './AnyConv.com__Gachancipá - Patrimonio Cultural.geojson';

function Map() {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=`;
    script.async = true;
    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 4.992019891612211, lng: -73.8710619775782 },
        zoom: 13,
      });

      // Carga el archivo GeoJSON y agrega marcadores al mapa.
      map.data.addGeoJson(geojson);
      map.data.setStyle({
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      });

      console.log(geojson);


      // Opcional: Mostrar información en un cuadro de información al hacer clic en un marcador.
      const infoWindow = new window.google.maps.InfoWindow();
      map.data.addListener('click', (event) => {
        const content = `
          <div>
            <h2>${event.feature.getProperty('nombre_propiedad')}</h2>
            <p>${event.feature.getProperty('descripcion_propiedad')}</p>
          </div>
        `;

        infoWindow.setContent(content);
        infoWindow.setPosition(event.feature.getGeometry().get());
        infoWindow.open(map);
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mapContainer">
      <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}

export default Map;*/







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
