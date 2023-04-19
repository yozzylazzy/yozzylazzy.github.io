import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CarousellImage from './section/home/carousell-image';
import SvgLineDrawing from './VirtualCharaDrawed';
import anime from 'animejs';

const AnimeImage = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const imageAnimation = anime({
      targets: imageRef.current,
      loop: true,
      easing: 'linear',
      opacity: [
        { value: 0.8, duration: 100 },
        { value: 0.3, duration: 200 },
        { value: 0.8, duration: 200 }
      ],
      scale: [
        { value: 1.05, duration: 100 },
        { value: 1.1, duration: 200 },
        { value: 1, duration: 200 }
      ]
    });

    return () => {
      imageAnimation.pause();
    }
  }, []);

  return (
    <img src={logo} className="App-logo" alt="logo" ref={imageRef} />
  );
}

function App() {
  return (
    <div className="App">
      <CarousellImage />
      <header className="App-header">
        <AnimeImage/>
        <p>
          Portofolio Web On Development
        </p>
      </header>
    </div>
  );
}

export default App;
