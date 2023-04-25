// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Patrimonio Cultural</div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/acerca">Acerca de</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
