import React from 'react';

export function Biography({ band }) {
  return (
    <div className="biography-section">
      <div className="section-header">
        <div className="section-icon">📖</div>
        <h3>BIOGRAFÍA / HISTORIA</h3>
      </div>
      <p className="biography-text">{band.biography}</p>
      <div className="history-timeline">
        <div className="timeline-point">
          <span className="year">{band.founded}</span>
          <span className="event">Formación</span>
        </div>
        <div className="timeline-divider">—</div>
        <div className="timeline-point">
          <span className="year">2001</span>
          <span className="event">Is This It</span>
        </div>
        <div className="timeline-divider">—</div>
        <div className="timeline-point">
          <span className="year">2003</span>
          <span className="event">Room on Fire</span>
        </div>
        <div className="timeline-divider">—</div>
        <div className="timeline-point">
          <span className="year">2011</span>
          <span className="event">Angles</span>
        </div>
        <div className="timeline-divider">—</div>
        <div className="timeline-point">
          <span className="year">2020</span>
          <span className="event">The New Abnormal</span>
        </div>
      </div>
      <a href="#" className="see-all">VER HISTORIA COMPLETA →</a>
    </div>
  );
}
