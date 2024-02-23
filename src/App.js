import React, { useEffect, useState } from 'react'
import cityLight from './assets/images/page/city-light.jpeg';
import './App.css'
import {
  Card, Container, Grid, Box, Typography, Link, Tooltip, Divider, Chip, Stack,
} from '@mui/material'
import { CircularProgress } from "@mui/material"
import { Icon } from '@iconify/react'

// section
import Introduction from './section/home/introduction';
import Journey from './section/home/journey'
import ProjectSection from './section/home/project'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import SocialMedia from './section/home/socialmedia';

// ------------------ End of Import ------------------

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
    if (!loading) {
      scrollAnimation();
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [loading]);

  const scrollAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

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
              <Parallax speed={10} className='hidden'>
                <Box sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "90vh",
                  padding: 2,
                  backgroundImage: `url(${cityLight})`,
                  backgroundSize: 'cover',
                  backgroundPositionY: windowHeight < windowWidth ? `${(scrollPosition / 20)}vh` : `${scrollPosition / 10}vh`,
                  backgroundPositionX: 'center',
                  backgroundRepeat: 'no-repeat',
                  color: 'white',
                }}>
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(0,0,0, 0.9), rgba(24,7,51, 0.4))',
                    }}
                  ></div>
                  <Stack spacing={2} direction={'row'}
                    alignItems={'center'} alignContent={'center'}
                    sx={{
                      margin: 2
                    }}>
                    <Icon icon="logos:google-developers" style={{ zIndex: 2 }}
                      fontSize={45}
                    />
                    <Typography variant='h3' sx={{
                      zIndex: 3,
                      textAlign: { xs: 'center', md: 'left' },
                      fontFamily: 'Rajdhani',
                      fontSize: windowHeight > windowWidth ? '5vh' : '4vw',
                    }}>
                      <strong>HELLO!</strong> I'M YOSEF ADRIAN
                    </Typography>
                  </Stack>
                  <Typography variant="h5" sx={{
                    textAlign: { xs: 'center', md: 'center' },
                    fontFamily: 'Rajdhani',
                    zIndex: 3,
                    fontSize: windowHeight > windowWidth ? '2.5vh' : '2vw',
                    marginBottom: 2,
                    marginLeft: 5,
                    marginRight: 5,
                  }}>
                    I'm a passionate <strong style={{
                      color: '#B991F5'
                    }}>Fullstack and Game Developer </strong>
                    with a solid foundation in
                    <strong style={{
                      color: '#B991F5'
                    }}> Computer Science</strong>
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
              <SocialMedia />
            </Container>
          </>
        )
      }
    </>
  );
}

export default App;
