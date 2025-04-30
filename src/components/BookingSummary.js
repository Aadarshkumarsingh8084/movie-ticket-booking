import React from 'react';
import '../styles/BookingSummary.css';

const BookingSummary = ({ movie, seats, onComplete, onCancel }) => {
  const total = seats.length * movie.price;

  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <div className="summary-details">
        <p><strong>Movie:</strong> {movie.title}</p>
        <p><strong>Selected Seats:</strong> {seats.join(', ')}</p>
        <p><strong>Number of Tickets:</strong> {seats.length}</p>
        <p><strong>Price per Ticket:</strong> ${movie.price}</p>
        <p><strong>Total Amount:</strong> ${total}</p>
      </div>
      <div className="buttons">
        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
        <button className="confirm-btn" onClick={onComplete}>Confirm Booking</button>
      </div>
    </div>
  );
};

export default BookingSummary;