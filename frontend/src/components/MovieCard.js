import React, { useState } from 'react';
import './MovieCard.css';

function MovieCard({ movie, isLarge, isHovered, onMouseEnter, onMouseLeave }) {
  const [imgError, setImgError] = useState(false);

  const fallbackImg = `https://picsum.photos/seed/${movie.id}/300/170`;
  const imgSrc = imgError ? fallbackImg : (movie.image || fallbackImg);

  return (
    <div
      className={`movie-card ${isLarge ? 'movie-card--large' : ''} ${isHovered ? 'movie-card--hovered' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="movie-card__img-wrapper">
        <img
          src={imgSrc}
          alt={movie.title}
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="movie-card__overlay" />
      </div>

      {isHovered && (
        <div className="movie-card__popup">
          <img
            src={imgSrc}
            alt={movie.title}
            onError={() => setImgError(true)}
          />
          <div className="movie-card__popup-content">
            <div className="movie-card__popup-buttons">
              <button className="movie-card__play-btn" title="Play">
                <svg viewBox="0 0 24 24" fill="black" width="16" height="16"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <button className="movie-card__icon-btn" title="Add to List">
                <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </button>
              <button className="movie-card__icon-btn" title="Like">
                <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
              </button>
              <button className="movie-card__icon-btn movie-card__icon-btn--right" title="More Info">
                <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M7 10l5 5 5-5z"/></svg>
              </button>
            </div>
            <div className="movie-card__popup-meta">
              <span className="movie-card__match">{movie.match || 95}% Match</span>
              <span className="movie-card__rating-badge">{movie.rating || 'TV-MA'}</span>
              <span className="movie-card__seasons">1 Season</span>
            </div>
            <div className="movie-card__popup-title">{movie.title}</div>
            <div className="movie-card__popup-genre">{movie.genre}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
