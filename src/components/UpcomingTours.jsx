import React from 'react';

export function UpcomingTours({ tours }) {
  return (
    <div className="tours-section">
      <h3>PRÓXIMAS FECHAS / TOURS</h3>
      <div className="tours-list">
        {tours.map((tour, idx) => (
          <div key={idx} className="tour-item">
            <div className="tour-date">{tour.date}</div>
            <div className="tour-details">
              <div className="tour-city">{tour.city}</div>
              <div className="tour-venue">{tour.venue}</div>
            </div>
            <div className="tour-status">{tour.status}</div>
          </div>
        ))}
      </div>
      <a href="#" className="see-all">VER TODAS LAS FECHAS →</a>
    </div>
  );
}
