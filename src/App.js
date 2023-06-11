import React, { useRef, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import anime from 'animejs';
import {
  Card, Container, Grid, Box, Typography
} from '@mui/material';
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Menggeser Gambar ke Kiri dan Tulisan ke Atas
  }, []);

  return (
    <>
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
            <Box sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              padding: 2,
              backgroundColor: "#282c34",
              color: 'white'
            }}>
              <Grid container>
                <Grid item xs={12} md={4} sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <AnimeImage />
                </Grid>
                <Grid item xs={12} md={8} sx={{
                  display: { md: "flex" },
                  alignItems: { md: "center" },
                }}>
                  <div>
                    <Typography variant="h3" sx={{
                      marginTop: 2,
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                    >
                      <strong>Selamat Datang</strong></Typography>
                    <Typography variant="h5" sx={{
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                    >
                      Website Ini Berisi Mengenai Diri Saya dan Project yang Saya Kerjakan
                      <span role="img" aria-label="emoji">😊</span>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Box>
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
