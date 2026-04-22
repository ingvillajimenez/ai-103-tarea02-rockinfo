import React from 'react';

export function Discography({ discography }) {
  return (
    <div className="discography-section">
      <div className="section-header">
        <div className="section-icon">💿</div>
        <h3>DISCOGRAFÍA</h3>
      </div>
      <div className="albums-grid">
        {discography.map((album, idx) => (
          <div key={idx} className="album-item">
            <div className="album-cover">{album.cover}</div>
            <h4>{album.album}</h4>
            <p>{album.year}</p>
          </div>
        ))}
      </div>
      <a href="#" className="see-all">VER TODA LA DISCOGRAFÍA →</a>
    </div>
  );
}
