import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen__logo">NETFLIX</div>

      <div className="loading-screen__bar">
        <div className="loading-screen__progress" />
      </div>
    </div>
  );
}

export default LoadingScreen;