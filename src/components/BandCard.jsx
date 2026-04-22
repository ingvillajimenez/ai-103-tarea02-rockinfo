import React from 'react';

export function BandCard({ band, uploadedImage }) {
  return (
    <div className="band-card">
      <div className="band-photo">
        {uploadedImage ? (
          <img src={uploadedImage} alt={band.name} />
        ) : (
          <div className="placeholder">📸 Foto no cargada</div>
        )}
      </div>
      
      <div className="band-info">
        <div className="band-header">
          <h2>{band.name} 🔴</h2>
          <p className="band-location">🌍 {band.location}</p>
          <p className="band-founded">📅 Formado en {band.founded}</p>
        </div>
        
        <p className="band-description">{band.biography.substring(0, 200)}...</p>
        
        <button className="favorite-btn">❤️ AGREGAR A FAVORITAS</button>
      </div>
    </div>
  );
}
