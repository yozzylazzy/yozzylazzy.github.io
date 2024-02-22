import React, { useRef, useEffect, useState } from 'react'
import logo from './logo.png'
import cityLight from './assets/images/page/city-light.jpeg';
import './App.css'
import anime from 'animejs'
import {
  Card, Container, Grid, Box, Typography, Link, Tooltip, Divider, Stack,
} from '@mui/material'
import { CircularProgress } from "@mui/material"
import { Icon } from '@iconify/react'

// section
import Introduction from './section/home/introduction';
import Journey from './section/home/journey'
import ProjectSection from './section/home/project'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

// ------------------ End of Import ------------------

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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
            <ParallaxProvider>
              <Parallax speed={10}>
                <Box sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: windowHeight < windowWidth ? "90vh" : "90vh",
                  padding: 2,
                  backgroundImage: `url(${cityLight})`,
                  backgroundSize: 'cover',
                  backgroundPositionY: windowHeight < windowWidth ? `${(-90) + (scrollPosition / 5)}vh` : `${scrollPosition / 10}vh`,
                  backgroundPositionX: 'center',
                  backgroundRepeat: 'no-repeat',
                  color: 'white',
                }}>
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(24,7,51, 0.9), rgba(65,54,81, 0.1))',
                    }}
                  ></div>
                  <Typography variant='h3' sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    zIndex: 3,
                    textAlign: { xs: 'center', md: 'left' },
                    fontFamily: 'Rajdhani'
                  }}>
                    <strong>HELLO!</strong> I'M YOSEF ADRIAN👋
                  </Typography>
                  <Typography variant="h5" sx={{
                    textAlign: { xs: 'center', md: 'center' },
                    fontFamily: 'Rajdhani',
                    zIndex: 3,
                  }}>
                    I'm a <strong>Fullstack Developer</strong> majoring in <strong>Computer Science</strong> and currently working on my Final Project for <strong>Bachelor</strong> degree.
                    <br></br>
                    <br></br>
                    My speciality is in <strong>web, mobile, and game</strong> development.
                  </Typography>
                </Box>
              </Parallax>
            </ParallaxProvider>
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
              <Introduction />
              <Divider
                sx={{
                  marginTop: 5,
                  marginBottom: 5,
                }} />
              <Journey />
              <Divider
                sx={{
                  marginTop: 5,
                  marginBottom: 5,
                }}
              />
              <Typography variant='h4' sx={{
                textAlign: 'center',
                fontFamily: 'Rajdhani',
                fontWeight: 'bold',
              }}>
                PROJECT AND WORK
              </Typography>
              <ProjectSection />
              <Divider sx={{
                marginTop: 5,
                marginBottom: 5,
              }} />
              <Card sx={{
                display: "flex",
                float: "center",
                justifyContent: "center",
                padding: 10,
                color: 'black',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <Grid container spacing={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Grid item xs={4} sm={3} md={2}>
                    <Tooltip title='Github Yozzy Lazzy'
                      placement="bottom"
                      arrow>
                      <Link href="https://github.com/yozzylazzy">
                        <Icon icon="jam:github"
                          width='100'
                          //  color='#0BDEA0'
                          color='black'
                          onMouseEnter={({ target }) => {
                            target.style.scale = 1.1
                            target.style.transition = 'all 0.4s ease'
                          }}
                          onMouseLeave={({ target }) =>
                            target.style.scale = 1.0} />
                      </Link>
                    </Tooltip>

                  </Grid>
                  <Grid item xs={4} sm={3} md={2}>
                    <Tooltip title='kristian_yosef@yahoo.com'
                      placement="bottom"
                      arrow>
                      <Link href="mailto:kristian_yosef@yahoo.com">
                        <Icon icon="jam:yahoo-square"
                          width='100' color='black'
                          onMouseEnter={({ target }) => {
                            target.style.scale = 1.1
                            target.style.transition = 'all 0.4s ease'
                          }}
                          onMouseLeave={({ target }) =>
                            target.style.scale = 1.0} />
                      </Link>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} sm={3} md={2}>
                    <Tooltip title='@yosef_adrian'
                      placement="bottom"
                      arrow>
                      <Link href="https://www.instagram.com/yosef_adrian/">
                        <Icon icon="jam:instagram"
                          width='100' color='black'
                          onMouseEnter={({ target }) => {
                            target.style.scale = 1.1
                            target.style.transition = 'all 0.4s ease'
                          }}
                          onMouseLeave={({ target }) =>
                            target.style.scale = 1.0} />
                      </Link>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} sm={3} md={2}>
                    <Tooltip title='@YozzyLazzy'
                      placement="bottom"
                      arrow>
                      <Link href="https://twitter.com/YozzyLazzy">
                        <Icon icon="jam:twitter"
                          width='100' color='black'
                          onMouseEnter={({ target }) => {
                            target.style.scale = 1.1
                            target.style.transition = 'all 0.4s ease'
                          }}
                          onMouseLeave={({ target }) =>
                            target.style.scale = 1.0} />
                      </Link>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} sm={3} md={2}>
                    <Tooltip title='Yosef Adrian'
                      placement="bottom"
                      arrow>
                      <Link href="https://www.linkedin.com/in/yosef-adrian-aa8344194/">
                        <Icon icon="jam:linkedin"
                          width='100' color='black'
                          onMouseEnter={({ target }) => {
                            target.style.scale = 1.1
                            target.style.transition = 'all 0.4s ease'
                          }}
                          onMouseLeave={({ target }) =>
                            target.style.scale = 1.0} />
                      </Link>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={4} sm={2} md={2}>
                    <Tooltip title='#yosefadrian'
                      placement="bottom"
                      arrow>
                      <Link href="https://discord.gg/user/Yosef Adrian#1866">
                        <Icon icon="jam:discord"
                          width='100' color='black'
                          onMouseEnter={({ target }) => {
                            target.style.scale = 1.1
                            target.style.transition = 'all 0.4s ease'
                          }}
                          onMouseLeave={({ target }) =>
                            target.style.scale = 1.0} />
                      </Link>
                    </Tooltip>
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
