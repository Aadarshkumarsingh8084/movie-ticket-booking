import React from 'react';
import '../styles/MovieList.css';

const movies = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    poster: 'https://image.tmdb.org/t/p/original/z0gRHPKq0uX2YY5YqKRLiRCoBqN.jpg',
    description: 'The epic conclusion to the Infinity Saga.',
    duration: '3h 1m',
    price: 12,
    showtimes: ['10:00', '14:00', '18:00', '22:00']
  },
  {
    id: 2,
    title: 'The Batman',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg',
    description: 'The Dark Knight investigates corruption in Gotham City.',
    duration: '2h 56m',
    price: 10,
    showtimes: ['11:00', '15:00', '19:00']
  },
  {
    id: 3,
    title: 'Dune',
    poster: 'https://preview.redd.it/k5n3x3edaiv71.png?auto=webp&s=654ba9e3795eab60afdfc9416639a054edc72a16',
    description: 'A noble family becomes embroiled in a war for control over the galaxy.',
    duration: '2h 35m',
    price: 11,
    showtimes: ['12:00', '16:00', '20:00']
  }
];

const MovieList = ({ onSelectMovie }) => {
  return (
    <div className="movie-list">
      <h2>Now Showing</h2>
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card" onClick={() => onSelectMovie(movie)}>
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Duration: {movie.duration}</p>
              <p>Price: ${movie.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;