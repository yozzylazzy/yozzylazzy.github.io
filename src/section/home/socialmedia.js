import {
  Card, Grid, Link, Tooltip,
} from '@mui/material'
import { Icon } from '@iconify/react'
import './Socialmedia.css';

// ------------------ End of Import ------------------

const dataSocial = [

];

export default function SocialMedia() {
  return (
    <Card sx={{
      display: "flex",
      float: "center",
      justifyContent: "center",
      padding: 7,
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
        <Grid item xs={6} sm={3} md={2} className='logo hidden'>
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
        <Grid item xs={6} sm={3} md={2} className='logo hidden'>
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
        <Grid item xs={6} sm={3} md={2} className='logo hidden'>
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
        <Grid item xs={6} sm={3} md={2} className='logo hidden'>
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
        <Grid item xs={6} sm={3} md={2} className='logo hidden'>
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
        <Grid item xs={6} sm={2} md={2} className='logo hidden'>
          <Tooltip title='#yosefadrian'
            placement="bottom"
            arrow>
            <Link href="#1866">
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
  );
}