// src/App.js
import React from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="content-container">
      <div className="background-container"></div>
      <div className="text-container">

      <Weather />
    </div>
    </div>
  );
}

export default App;