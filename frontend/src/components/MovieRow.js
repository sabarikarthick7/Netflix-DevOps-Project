import React, { useState, useRef } from 'react';
import MovieCard from './MovieCard';
import './MovieRow.css';

function MovieRow({ title, movies = [], isLarge = false }) {
  const rowRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const scroll = (dir) => {
    const container = rowRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    const newPos = dir === 'left'
      ? Math.max(0, scrollPos - scrollAmount)
      : scrollPos + scrollAmount;
    container.scrollTo({ left: newPos, behavior: 'smooth' });
    setScrollPos(newPos);
  };

  if (!movies.length) return null;

  return (
    <div className="movie-row">
      <h2 className="movie-row__title">{title}</h2>

      <div className="movie-row__container">
        {scrollPos > 10 && (
          <button className="movie-row__btn movie-row__btn--left" onClick={() => scroll('left')}>
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
        )}

        <div
          className={`movie-row__items ${isLarge ? 'movie-row__items--large' : ''}`}
          ref={rowRef}
        >
          {movies.map((movie, idx) => (
            <MovieCard
              key={movie.id || idx}
              movie={movie}
              isLarge={isLarge}
              isHovered={hoveredIdx === idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            />
          ))}
        </div>

        <button className="movie-row__btn movie-row__btn--right" onClick={() => scroll('right')}>
          <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MovieRow;
