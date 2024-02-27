import {
    Card, Box, Grid, Typography, Link, Tooltip, Icon, Chip, Stack,
} from '@mui/material';
import './Project.css';
import cityNight from '../../assets/images/page/city-dark.jpg';
import { useEffect } from 'react';

// ------------------ End of Import ------------------

const dataProject = [
    {
        title: 'Garuda Laptop Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "yozzylazzy.github.com",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Digital Library App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Happy New Year 2022 2D Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Lunatics (Ongoing Project)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
]

export default function ProjectSection() {

    useEffect(() => {
        projectScrollAnimationDelay();
    });

    const projectScrollAnimationDelay = () => {
        const projects = document.querySelectorAll('.project');
        projects.forEach((project, index) => {
            const delay = (index + 1) * 100 + 'ms';
            if (delay < 700) {
                project.style.transitionDelay = delay;
            }
            project.style.transitionDelay = '700ms';
        });
    };

    return (
        <Grid container spacing={2} sx={{
            marginTop: 3,
            marginBottom: 3,
        }} className='hidden'>
            {
                dataProject.map((data, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} className='project hidden'
                            key={`project-${index}`}>
                            <Card sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                padding: 4,
                                height: 250,
                            }} className='flippable-card'>
                                <div className="card-front">
                                    <Typography variant='h5' sx={{
                                        fontFamily: 'Rajdhani',
                                        fontWeight: 'bold',
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: 'vertical',
                                        marginBottom: 1,
                                    }}>
                                        {data.title}
                                    </Typography>
                                    <Typography variant='body1' sx={{
                                    }}>
                                        {data.description}
                                    </Typography>
                                    <Stack direction={'row'} spacing={1}
                                        alignContent={'start'} alignItems={'start'}>
                                        <Chip label='2020' sx={{
                                            fontWeight: 'bold',
                                            color: '#7741FF',
                                            borderColor: '#7741FF',
                                            fontFamily: 'Rajdhani',
                                        }} variant='outlined' />
                                        <Chip label='Game' sx={{
                                            fontWeight: 'bold',
                                            color: '#7741FF',
                                            borderColor: '#7741FF',
                                            fontFamily: 'Rajdhani',
                                        }} variant='outlined' />
                                        <Chip label='2D' sx={{
                                            fontWeight: 'bold',
                                            color: '#7741FF',
                                            borderColor: '#7741FF',
                                            fontFamily: 'Rajdhani',
                                        }} variant='outlined' />
                                    </Stack>
                                </div>
                                <div className='card-back'>
                                    <Box sx={{
                                        backgroundImage: `url(${cityNight})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}>
                                        <Typography variant='h5' sx={{
                                            fontFamily: 'Rajdhani',
                                            marginBottom: 2,
                                            fontWeight: 'bold',
                                        }}>
                                            {data.title}
                                        </Typography>
                                        <Typography variant='body1' sx={{
                                        }}>
                                            {data.description}
                                        </Typography>
                                        <Tooltip title='Github Yozzy Lazzy'
                                            placement="bottom"
                                            arrow>
                                            <Link href={data.link_image}>
                                                {data.icon}
                                            </Link>
                                        </Tooltip>
                                    </Box>
                                </div>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}