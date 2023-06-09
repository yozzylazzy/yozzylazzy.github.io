import React, { useRef, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import NavbarTop from './component/navbar/Navbar-top';
import NavbarBottom from './component/navbar/Navbar-bottom';
import anime from 'animejs';
import { Card, Container, Grid } from '@mui/material';
import { CircularProgress } from "@mui/material";

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
      ],
      onScroll: true,
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
  const animeImageRef = useRef(null);
  const welcomeTextRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const animeImage = animeImageRef.current;
    const welcomeText = welcomeTextRef.current;

    // Menggeser Gambar ke Kiri dan Tulisan ke Atas
    if (animeImage && welcomeText) {
      anime({
        targets: animeImage,
        translateX: -500,
        duration: 1000,
        easing: 'easeInOutSine',
        delay: 10,
      });

      anime({
        targets: welcomeText,
        translateY: -250,
        duration: 1000,
        easing: 'easeInOutSine',
        delay: 10,
      });
    }
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
          <>
            <div className="App">
              <body className="App-header">
                <div ref={animeImageRef} className="anime-image"> <AnimeImage /></div>
                <h1 ref={welcomeTextRef} className="welcome-text">Selamat Datang</h1>
              </body>
            </div>
            <Container sx={{ marginTop: 10 }}>
              <Card sx={{
                borderRadius: 10,
                boxShadow: 3,
                width: '100%',
              }}>
                <img src={require('./test-asset-image/maintheme.gif')} alt="maintheme"
                  css={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto'
                  }} />
                <AnimeImage key={'top-image'} />
                <Grid container spacing={3}>
                  <Grid item xs={3} md={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <animate />
                  </Grid>
                  <Grid item xs={9} md={10}>
                    <p>
                      Portofolio Web On Development
                    </p>
                  </Grid>
                </Grid>
              </Card>
            </Container>
          </>
        )
      }
    </>
  );
}

export default App;
