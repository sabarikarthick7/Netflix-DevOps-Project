import React from 'react';
import './Footer.css';

const FOOTER_LINKS = [
  ['Audio Description', 'Help Center', 'Gift Cards', 'Media Center'],
  ['Investor Relations', 'Jobs', 'Terms of Use', 'Privacy'],
  ['Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us']
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__social-text">Questions? Call 1-800-Netflix</p>

        <div className="footer__links">
          {FOOTER_LINKS.map((col, i) =>
            col.map((link, j) => (
              <a key={`${i}-${j}`} href="#/" className="footer__link">{link}</a>
            ))
          )}
        </div>

        <div className="footer__lang">
          <select>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        <p className="footer__copy">Netflix Clone · DevOps Project · Built with React + Docker + Kubernetes + Jenkins</p>
      </div>
    </footer>
  );
}

export default Footer;
