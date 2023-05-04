import React from 'react';
import heritageSites from '../data/heritageSites';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-header">Sitios de patrimonio cultural de Gachancipá</h2>
      <ul className="site-list">
        {heritageSites.map((site) => (
          <li key={site.id} className="site-list-item">
            <a href={`/sitio/${site.id}`}>{site.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
