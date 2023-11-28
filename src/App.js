import React, { useRef, useEffect } from 'react'
import logo from './logo.png'
import './App.css'
import anime from 'animejs'
import {
  Card, Container, Grid, Box, Typography, Link, Tooltip, Divider
} from '@mui/material'
import { CircularProgress } from "@mui/material"
import { Icon } from '@iconify/react'

import CarousellImage from './section/home/carousell-image'
// section
import Introduction from './section/home/introduction'
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
                  height: "80vh",
                  padding: 2,
                  backgroundColor: "#282c34",
                  color: 'white'
                }}>
                  <Grid container spacing={{ md: 10 }}>
                    <Grid item xs={12} md={5} sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "right" },
                      alignItems: "center",
                    }}>
                      <Parallax
                        translateX={['0px', '-480px']}
                        scale={[0.75, 1]}
                        rotate={[-180, 0]}
                        easing="easeInExpo">
                        <AnimeImage />
                      </Parallax>
                    </Grid>
                    <Parallax
                      translateX={['0px', '-480px']}
                        scale={[1, 0.2]}
                        rotate={[0, -180]}
                        easing="easeInExpo">
                      <Grid item xs={12} md={7} sx={{
                        display: { md: "flex" },
                        alignItems: { md: "center" },
                        marginTop: { xs: 3, md: 0 }
                      }}>
                        <div>
                          <Typography variant="h3" sx={{
                            marginTop: 2,
                            textAlign: { xs: 'center', md: 'left' },
                            fontFamily: 'Rajdhani'
                          }}
                          >
                            <strong>Hi! </strong>Nice to see you👋</Typography>
                          <Typography variant="h5" sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            fontFamily: 'Rajdhani'
                          }}
                          >
                            I will tell you about myself and my work in this website
                            <span role="img" aria-label="emoji">😊</span>
                          </Typography>
                        </div>
                      </Grid>
                    </Parallax>
                  </Grid>
                </Box>
              </Parallax>
            </ParallaxProvider>
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
              <Introduction />
              <Divider />
              {/* Perjalanan Karir dan Pendidikan */}
              <Journey />
              <Divider />

              {/* Proyek dan Kerjaan */}
              <Typography variant='h3' sx={{
                textAlign: 'center',
                fontFamily: 'Rajdhani',
                marginTop: 3,
                marginBottom: 2
              }}>
                MY PROJECT AND WORK
              </Typography>
              <CarousellImage />
              <ProjectSection />
              <Divider sx={{ marginTop: 5 }} />

              {/* Follow Social Media saya */}
              <Typography variant='h3' sx={{
                textAlign: 'center',
                fontFamily: 'Rajdhani',
                marginTop: 3,
                marginBottom: 2
              }}>
                FELL FREE TO CONTACT ME
              </Typography>
              <Card sx={{
                borderRadius: 0,
                boxShadow: 10,
                display: "flex",
                float: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "#4800DE",
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
                          width='100' color='#0BDEA0' onMouseEnter={({ target }) => {
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
                          width='100' color='#0BDEA0' onMouseEnter={({ target }) => {
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
                          width='100' color='#0BDEA0' onMouseEnter={({ target }) => {
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
                          width='100' color='#0BDEA0' onMouseEnter={({ target }) => {
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
                          width='100' color='#0BDEA0' onMouseEnter={({ target }) => {
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
                          width='100' color='#0BDEA0' onMouseEnter={({ target }) => {
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
