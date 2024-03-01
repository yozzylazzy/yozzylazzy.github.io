import {
    Card, Box, Grid, Typography, Icon, Chip, CardContent,
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
        description: 'Remaking Student Portal Academic from JS to PHP using Laravel-Filament Name Nexus.',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['web', 'php', 'laravel', 'portal', 'monolithic'],
    },
    {
        title: 'Forum API (Dicoding BE Expert Project)',
        description: 'Final Project from Dicoding Back-End Expert Class. Implement Automation Testing, CI/CD, and Test Driven Development',
        link_image: forum_api,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['backend', 'commonJS', 'HapiJS', 'authentication', 'automation testing', 'deploy', 'github workflow',
            'JWT Token'],
    },
    {
        title: 'Recommend Restaurant App',
        description: 'Final Project from Dicoding Flutter Intermediate Class. Implement MediaQuery, Provider, and Automate Testing.',
        link_image: restaurant_app,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['flutter', 'mobile', 'iOS', 'web', 'automation testing', 'responsive design'],
    },
    {
        title: 'International News App',
        description: 'Project from Dicoding Flutter Intermediate Class. An App with News from newsapi.org,',
        link_image: daily_news_app,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['flutter', 'mobile', 'iOS', 'web', 'responsive design'],
    },
    {
        title: 'OpenMusic API (Dicoding Intermediate)',
        description: 'Final Project from Dicoding Back-End Intermediate Class. Implement authentication (JWT Token) and deployment.',
        link_image: openmusic_api,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['backend', 'commonJS', 'HapiJS', 'authentication', 'deploy', 'JWT Token'],
    },
    {
        title: 'Nexus (STMIK LIKMI Student Portal Academic)',
        description: 'A Microservice project for the new student academic portal using Next.JS and Mali.JS (gRPC) built in docker.',
        link_image: nexus_nextjs,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['full-stack', 'maliJS', 'NextJS', 'authentication', 'microservice', 'docker'],
    },
    {
        title: 'Garuda Laptop Website',
        description: 'A Project of e-commerce gadget for Garuda Laptop. Implement authentication, crud, token, and data analytic for admin.',
        link_image: garuda_laptop,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['full-stack', 'php', 'authentication', 'laravel', 'crud'],
    },
    {
        title: 'Digital Library App',
        description: 'Flutter project for mobile library which user can borrow/put back the book with QR Code Scanner, make it more tracked who the last borrow it.',
        link_image: not_added,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['flutter', 'mobile', 'iOS', 'web', 'responsive design', 'QR code', 'role-based application'],
    },
    {
        title: 'Happy New Year 2022 2D Game',
        description: 'Simple 2d game made using Unity Engine for celebrating New Year 2022. The concept of the game is 2D Shooter, player shooting the corona viruses.',
        link_image: new_year_2022,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['game', '2d', 'unity', '2d-shooter'],
    },
    {
        title: 'Lunatics (Ongoing Project)',
        description: 'A big project for SoftArts (Small Circle Indie Game Dev) for open world rpg game with some culture from Indonesia especially song, dress, and traditional weapon.',
        link_image: lunatic,
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />,
        tag: ['game', '3d', 'unity', 'open-world RPG', 'blender', 'indonesian culture'],
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
                                    <Typography variant='body1' textAlign='justify' sx={{
                                    }}>
                                        {data.description}
                                    </Typography>
                                    <Grid container spacing={1}
                                        alignContent={'start'} alignItems={'start'}>
                                        <Grid item>
                                            {
                                                data.tag.map((tags) => {
                                                    return (
                                                        <Chip label={tags.toUpperCase()} sx={{
                                                            fontWeight: 'bold',
                                                            color: '#7741FF',
                                                            borderColor: '#7741FF',
                                                            fontFamily: 'Rajdhani',
                                                            fontSize: '0.6em',
                                                            margin: 0.3,
                                                            borderRadius: 2.5,
                                                        }} variant='outlined' />
                                                    )
                                                })}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <div className='card-back'>
                                    <Box sx={{
                                        height: 250,
                                        display: 'flex',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}
                                        key={`box-${data.title}`}>
                                        <img
                                            style={{
                                                objectFit: 'cover',
                                                maxWidth: '100%',
                                                maxHeight: '100%',
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