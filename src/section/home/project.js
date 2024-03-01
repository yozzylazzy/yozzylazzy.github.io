import {
    Card, Box, Grid, Typography, Icon, Chip, Stack, CardContent,
} from '@mui/material';
import './Project.css';
import {
    daily_news_app,
    forum_api,
    lunatic,
    restaurant_app,
    new_year_2022,
    garuda_laptop,
    nexus_nextjs,
    openmusic_api,
    not_added
} from '../../assets/images/project';
import { useEffect } from 'react';

// ------------------ End of Import ------------------

const dataProject = [
    {
        title: 'Nexus (Migration Tech)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Forum API (Dicoding BE Expert Project)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: forum_api,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Recommend Restaurant App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: restaurant_app,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'International News App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: daily_news_app,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'OpenMusic API (Dicoding Intermediate)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: openmusic_api,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Nexus (STMIK LIKMI Student Portal Academic)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: nexus_nextjs,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Garuda Laptop Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: garuda_laptop,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Digital Library App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: not_added,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Happy New Year 2022 2D Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: new_year_2022,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Lunatics (Ongoing Project)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: lunatic,
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
                            }} className='flippable-card'
                                key={`card-${data.title}`}>
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
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}
                                        key={`box-${data.title}`}>
                                        <img
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                            alt={data.title}
                                            width={400}
                                            height={300}
                                            src={data.link_image.length < 1 ? not_added : data.link_image}
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