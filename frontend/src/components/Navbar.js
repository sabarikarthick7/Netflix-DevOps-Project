import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__left">
        {/* Netflix Logo SVG */}
        <div className="navbar__logo">NETFLIX</div>

        <ul className="navbar__links">
          {NAV_LINKS.map((link, i) => (
            <li key={i} className={i === 0 ? 'active' : ''}>
              <a href="#/">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar__right">
        <div className={`navbar__search ${showSearch ? 'navbar__search--open' : ''}`}>
          {showSearch && (
            <input
              type="text"
              placeholder="Titles, people, genres"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          )}
          <button className="navbar__icon-btn" onClick={() => setShowSearch(!showSearch)}>
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>

        <button className="navbar__icon-btn navbar__kids">KIDS</button>

        <button className="navbar__icon-btn">
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </button>

        <div className="navbar__profile" onClick={() => setShowProfile(!showProfile)}>
          <div className="navbar__avatar">
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <svg className="navbar__caret" viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M7 10l5 5 5-5z"/>
          </svg>

          {showProfile && (
            <div className="navbar__dropdown">
              <div className="navbar__dropdown-item">
                <svg viewBox="0 0 24 24" fill="#b3b3b3" width="16" height="16"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <span>Account</span>
              </div>
              <div className="navbar__dropdown-item">
                <svg viewBox="0 0 24 24" fill="#b3b3b3" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                <span>Help Center</span>
              </div>
              <div className="navbar__dropdown-divider" />
              <div className="navbar__dropdown-item">Sign out of Netflix</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
