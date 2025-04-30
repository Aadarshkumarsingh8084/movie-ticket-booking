import React, { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SeatSelection from './components/SeatSelection';
import BookingSummary from './components/BookingSummary';
import './styles/App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
    setBookingComplete(false);
  };

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
  };

  const handleBookingComplete = () => {
    setBookingComplete(true);
  };

  const resetBooking = () => {
    setSelectedMovie(null);
    setSelectedSeats([]);
    setBookingComplete(false);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        {!selectedMovie ? (
          <MovieList onSelectMovie={handleMovieSelect} />
        ) : !bookingComplete ? (
          <>
            <SeatSelection 
              movie={selectedMovie} 
              onSeatSelect={handleSeatSelect} 
              selectedSeats={selectedSeats}
            />
            {selectedSeats.length > 0 && (
              <BookingSummary 
                movie={selectedMovie} 
                seats={selectedSeats}
                onComplete={handleBookingComplete}
                onCancel={resetBooking}
              />
            )}
          </>
        ) : (
          <div className="confirmation">
            <h2>Booking Confirmed!</h2>
            <p>Movie: {selectedMovie.title}</p>
            <p>Seats: {selectedSeats.join(', ')}</p>
            <p>Total: ${selectedSeats.length * selectedMovie.price}</p>
            <button onClick={resetBooking}>Book Another Movie</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
