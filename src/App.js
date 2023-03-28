import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CarousellImage from './section/home/carousell-image';
import SvgLineDrawing from './VirtualCharaDrawed';

function App() {
  return (
    <div className="App">
      <CarousellImage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SvgLineDrawing />
        <p>
          Portofolio Web On Development
        </p>
      </header>
    </div>
  );
}

export default App;
