import React, { useState } from 'react';
import '../styles/SeatSelection.css';

const SeatSelection = ({ movie, onSeatSelect, selectedSeats }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 8;
  const [seats, setSeats] = useState(selectedSeats);

  const toggleSeat = (seatId) => {
    let newSeats;
    if (seats.includes(seatId)) {
      newSeats = seats.filter(id => id !== seatId);
    } else {
      newSeats = [...seats, seatId];
    }
    setSeats(newSeats);
    onSeatSelect(newSeats);
  };

  return (
    <div className="seat-selection">
      <h2>Select Seats for {movie.title}</h2>
      <div className="screen">SCREEN</div>
      <div className="seats-grid">
        {rows.map(row => (
          <div key={row} className="seat-row">
            {Array.from({ length: seatsPerRow }, (_, i) => {
              const seatId = `${row}${i + 1}`;
              return (
                <div
                  key={seatId}
                  className={`seat ${seats.includes(seatId) ? 'selected' : ''}`}
                  onClick={() => toggleSeat(seatId)}
                >
                  {seatId}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="seat-legend">
        <div className="legend-item">
          <div className="seat available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="seat selected"></div>
          <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="seat occupied"></div>
          <span>Occupied</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;