// components/Sidebar.js
import React from 'react';
import heritageSites from '../data/heritageSites';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sitios de patrimonio cultural</h2>
      <ul>
        {heritageSites.map((site) => (
          <li key={site.id}>
            <a href={`/sitio/${site.id}`}>{site.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
