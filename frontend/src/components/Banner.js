import React, { useState } from 'react';
import './Banner.css';

function Banner({ featured }) {
  const [muted, setMuted] = useState(true);

  const movie = featured || {
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    tags: ["Suspenseful", "Scary", "Exciting"],
    match: 97,
    year: 2024,
    rating: "TV-14",
    bannerImage: "https://picsum.photos/seed/stranger/1280/720",
  };

  return (
    <div className="banner">
      {/* Background Image */}
      <div
        className="banner__bg"
        style={{ backgroundImage: `url(${movie.bannerImage})` }}
      />

      {/* Overlays */}
      <div className="banner__overlay banner__overlay--top" />
      <div className="banner__overlay banner__overlay--bottom" />
      <div className="banner__overlay banner__overlay--left" />

      {/* Content */}
      <div className="banner__content">
        <div className="banner__badge">
          <span className="hero__logo">NETFLIX</span>
        </div>

        <h1 className="banner__title">{movie.title}</h1>

        <div className="banner__meta">
          <span className="banner__match">{movie.match}% Match</span>
          <span className="banner__year">{movie.year}</span>
          <span className="banner__rating">{movie.rating}</span>
          <span className="banner__seasons">4 Seasons</span>
        </div>

        <p className="banner__description">{movie.description}</p>

        {movie.tags && (
          <div className="banner__tags">
            {movie.tags.map((tag, i) => (
              <React.Fragment key={i}>
                <span>{tag}</span>
                {i < movie.tags.length - 1 && (
                  <span className="banner__dot">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="banner__buttons">
          <button className="banner__btn banner__btn--play">
            <svg viewBox="0 0 24 24" fill="black" width="20" height="20">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          <button className="banner__btn banner__btn--info">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            More Info
          </button>
        </div>
      </div>

      {/* Mute Control */}
      <button
        className="banner__mute-btn"
        onClick={() => setMuted(!muted)}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Banner;