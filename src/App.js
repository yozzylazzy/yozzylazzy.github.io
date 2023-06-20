import React, { useRef, useEffect } from 'react'
import logo from './logo.png'
import './App.css'
import anime from 'animejs'
import {
  Card, Container, Grid, Box, Typography, Link, List, ListItem, Tooltip, Divider
} from '@mui/material'
import { CircularProgress } from "@mui/material"
import { Icon } from '@iconify/react'
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
            </Box>
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
              <Typography variant='h3' sx={{
                textAlign: 'center',
                fontFamily: 'Rajdhani',
                marginTop: 4,
                marginBottom: 1
              }}>
                HELLO, I'M YOSEF ADRIAN
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
                  <Icon icon="material-symbols:developer-mode-tv-outline-sharp" width='210' color='#0BDEA0' />
                </Grid>
                <Grid item xs={12} md={9} >
                  <List sx={{
                    marginBottom: 1, marginRight: 4
                  }}>
                    <ListItem>
                      <Typography variant='h5' sx={{
                        textAlign: 'justify',
                        fontFamily: 'Rajdhani',
                      }}>
                        I'm a <strong>Fullstack Developer</strong> majoring in <strong>Computer Science</strong> and currently working on my Final Project for <strong>Bachelor</strong> degree.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='h5' sx={{
                        textAlign: 'justify',
                        fontFamily: 'Rajdhani',
                      }}>
                        My speciality is in <strong>web, mobile, and game</strong> development.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='h5' sx={{
                        textAlign: 'justify',
                        fontFamily: 'Rajdhani',
                      }}>
                        I also have a strong interest and expertise in <i><strong>Artificial Intelligence, Blockchain, Web 3.0, and UI/UX Design</strong></i>
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Divider />

              {/* Perjalanan Karir dan Pendidikan */}
              <Typography variant='h3' sx={{
                textAlign: 'center',
                fontFamily: 'Rajdhani',
                marginTop: 3,
                marginBottom: 2
              }}>
                MY TIMEWORK JOURNEY
              </Typography>
              <Grid container spacing={2} sx={{
                marginBottom: 3,
              }}>
                <Grid item xs={12} md={4}>
                  <Timeline position="alternate">
                    {/* Pendidikan */}
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" color="textSecondary">
                          Pendidikan
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          STMIK LIKMI - Sarjana Komputer (2020-2023)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          SMA Trinitas - Sekolah Menengah Atas (2017-2020)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          SMP Waringin - Sekolah Menengah Pertama (2014-2017)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          SD Dwisakti - Sekolah Dasar (2008-2014)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
                <Grid item xs={12} md={4} >
                  <Timeline position='alternate'>
                    {/* Pengalaman Kerja */}
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" color="textSecondary">
                          Pekerjaan
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          STMIK LIKMI - Junior Fullstack Dev (2023-2026)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          Freelance - Website Fundamental Teacher (2022)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
                <Grid item xs={12} md={4} >
                  <Timeline position='alternate'>
                    {/* Belajar Untuk Sertifikasi */}
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color='success'>
                          <CheckCircleOutlineIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" color="textSecondary">
                          Sertifikasi
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          STMIK LIKMI - Junior Fullstack Dev (2023-2026)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1">
                          Freelance - Website Fundamental Teacher (2022)
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
              </Grid>
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
              <Divider />

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
