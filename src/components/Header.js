// Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Patrimonio Cultural Gachancipá</div>
      <nav className="header-nav">
        <ul>
          <li>
          <NavLink to="/" activeClassName="active" exact>Inicio</NavLink>
          </li>
          <li>
          <NavLink to="/acerca-de" activeClassName="active">Acerca de</NavLink>
          </li>
          <li>
          <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
