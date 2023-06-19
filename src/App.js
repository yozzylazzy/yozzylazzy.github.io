import React, { useRef, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import anime from 'animejs';
import {
  Card, Container, Grid, Box, Typography, Link, List, ListItem
} from '@mui/material';
import { CircularProgress } from "@mui/material";
import { Icon } from '@iconify/react';

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
                  <AnimeImage />
                </Grid>
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
              </Grid>
              <Typography variant="h5" sx={{
                textAlign: { xs: 'center', md: 'left' },
                fontFamily: 'Rajdhani',
                marginTop: { xs: 3, md: 15 }
              }}
              >
                FEEL FREE TO CONTACT ME :
              </Typography>
            </Box>
            {/* Buat ROunded Rectangle FLoating */}
            <Card sx={{
              borderRadius: 5,
              boxShadow: 10,
              display: "flex",
              float: "center",
              justifyContent: "center",
              marginTop: -8,
              height: { xs: 220, sm: 220, md: 100 },
              padding: 2,
              backgroundColor: "white",
              color: 'black',
              width: { xs: "80%", sm: '60%', md: '60%', lg: '50%', xl: '40%' },
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Grid container spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Grid item xs={4} sm={3} md={2}>
                  <Link href="https://github.com/yozzylazzy">
                    <Icon icon="jam:github"
                      width='100' color='#4800DE' />
                  </Link>
                </Grid>
                <Grid item xs={4} sm={3} md={2}>
                  <Link href="mailto:kristian_yosef@yahoo.com">
                    <Icon icon="jam:yahoo-square"
                      width='100' color='#4800DE' />
                  </Link>
                </Grid>
                <Grid item xs={4} sm={3} md={2}>
                  <Link href="https://www.instagram.com/yosef_adrian/">
                    <Icon icon="jam:instagram"
                      width='100' color='#4800DE' />
                  </Link>
                </Grid>
                <Grid item xs={4} sm={3} md={2}>
                  <Link href="https://twitter.com/YozzyLazzy">
                    <Icon icon="jam:twitter"
                      width='100' color='#4800DE' />
                  </Link>
                </Grid>
                <Grid item xs={4} sm={3} md={2}>
                  <Link href="https://www.linkedin.com/in/yosef-adrian-aa8344194/">
                    <Icon icon="jam:linkedin"
                      width='100' color='#4800DE' />
                  </Link>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                  <Link href="https://discord.gg/user/Yosef Adrian#1866">
                    <Icon icon="jam:discord"
                      width='100' color='#4800DE' />
                  </Link>
                </Grid>
              </Grid>
            </Card>
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
              <Card sx={{
                borderRadius: 10,
                boxShadow: 3,
                width: '100%',
              }}>
                <img src={require('./test-asset-image/maintheme.gif')} alt="maintheme"
                  width="100%" />
                <Typography variant='h3' sx={{
                  textAlign: 'center',
                  fontFamily: 'Rajdhani',
                  marginTop: 3,
                  marginBottom: 1
                }}>
                  Hello, I'm Yosef Adrian
                </Typography>
                <Grid container spacing={3} sx={{
                  marginBottom: 3
                }}>
                  <Grid item xs={12} md={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <List>
                      <ListItem>
                        <Icon icon="icon-park:web-page" width='45' color='#4800DE' />
                        Fullstack Web Developer
                      </ListItem>
                      <ListItem>
                        <Icon icon="icon-park:phone" width='45' color='#4800DE' />
                        Mobile Developer
                      </ListItem>
                      <ListItem>
                        <Icon icon="fluent:card-ui-20-regular" width='45' color='#4800DE' />
                        UI/UX Designer
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography variant='h5' sx={{
                      textAlign: 'justify',
                      fontFamily: 'Rajdhani',
                      marginTop: 3,
                      marginBottom: 1, marginRight: 4
                    }}>
                      I'm a <strong>Fullstack Developer</strong> majoring in <strong>Computer Science</strong> and currently working on my Final Project for <strong>Bachelor</strong> degree.
                      <br />
                      My speciality is in <strong>web, mobile, and game</strong> development.
                      <br/>
                      I also have a strong interest and expertise in <i><strong>Artificial Intelligence, Blockchain, Web 3.0, and UI/UX Design</strong></i>
                    </Typography>
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
