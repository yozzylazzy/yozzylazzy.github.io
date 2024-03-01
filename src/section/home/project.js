import {
    Card, Box, Grid, Typography, Link, Tooltip, Icon, Chip, Stack, CardContent, IconButton, ImageList, ImageListItem,
} from '@mui/material';
import './Project.css';
import cityNight from '../../assets/images/page/city-dark.jpg';
import { useEffect } from 'react';
import { Image } from '@mui/icons-material';

// ------------------ End of Import ------------------

const dataProject = [
    {
        title: 'Nexus (Migration Tech)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Forum API (Dicoding BE Expert Project)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Recommend Restaurant App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'International News App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'OpenMusic API (Dicoding Intermediate)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Nexus (STMIK LIKMI Student Portal Academic)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Garuda Laptop Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Digital Library App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Happy New Year 2022 2D Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Lunatics (Ongoing Project)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "../../assets/images/project/forum_api.png",
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
                                height: 250,
                            }} className='flippable-card'>
                                <CardContent className='card-front'>
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
                                </CardContent>
                                <div className='card-back'>
                                    <Box sx={{
                                        height: 250,
                                    }}>
                                        <img
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                            src={data.link_image}
                                            loading='lazy'
                                        />
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