import React from 'react';
import './Footer.css'; // For styling

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; 2025 My Restaurant App. All rights reserved.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;