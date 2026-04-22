import React from 'react';

export function HighlightedData({ highlights }) {
  return (
    <div className="highlights-section">
      <div className="section-header">
        <div className="section-icon">⭐</div>
        <h3>DATOS DESTACADOS</h3>
      </div>
      <div className="highlights-grid">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="highlight-item">
            <div className="highlight-icon">🎸</div>
            <h4>{highlight.title}</h4>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
