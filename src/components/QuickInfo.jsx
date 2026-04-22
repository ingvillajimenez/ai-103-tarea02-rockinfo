import React from 'react';

export function QuickInfo({ band }) {
  return (
    <div className="quick-info">
      <div className="info-section">
        <div className="quick-info-item">
          <div className="info-icon">🎵</div>
          <h4>GÉNERO MUSICAL</h4>
          <p>{band.genre.join(", ")}</p>
        </div>
        
        <div className="quick-info-item">
          <div className="info-icon">📍</div>
          <h4>ORIGEN</h4>
          <p>{band.location}</p>
        </div>
        
        <div className="quick-info-item">
          <div className="info-icon">📆</div>
          <h4>AÑOS ACTIVOS</h4>
          <p>{band.yearsActive.start} - {band.yearsActive.end}</p>
        </div>
        
        <div className="quick-info-item">
          <div className="info-icon">👥</div>
          <h4>MIEMBROS</h4>
          <p>
            {band.members.map((m) => m.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
