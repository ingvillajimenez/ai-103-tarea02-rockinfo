import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          ⚡ <span>ROCKINFO</span>
        </div>
        <p className="tagline">TU BANDA, SU HISTORIA</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <span className="nav-icon">🏠</span>
            <span>INICIO</span>
          </li>
          <li>
            <span className="nav-icon">🔍</span>
            <span>EXPLORAR</span>
          </li>
          <li>
            <span className="nav-icon">⏱️</span>
            <span>MI HISTORIAL</span>
          </li>
          <li>
            <span className="nav-icon">❤️</span>
            <span>FAVORITAS</span>
          </li>
          <li>
            <span className="nav-icon">⚙️</span>
            <span>CONFIGURACIÓN</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
