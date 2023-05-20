import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CarousellImage from './section/home/carousell-image';
import SvgLineDrawing from './VirtualCharaDrawed';
import NavbarTop from './component/navbar/Navbar-top';
import NavbarBottom from './component/navbar/Navbar-bottom';
import anime from 'animejs';
import { Container } from '@mui/material';
import { CircularProgress } from "@mui/material";
import animate from './Modelling';

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
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <NavbarTop />
      {
        loading ? (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Container>
        ) : (
          <div className="App">
            <body className="App-header">
              {/* <CarousellImage /> */}
              <AnimeImage />
              <animate />
              <p>
                Portofolio Web On Development
              </p>
            </body>
          </div>
        )
      }
    </>
  );
}

export default App;
