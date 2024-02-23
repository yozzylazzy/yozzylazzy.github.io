import {
    Card,
    CardContent,
    Chip,
    Grid, Stack, Typography
} from '@mui/material';
import { Icon } from '@iconify/react';

// ------------------ End of Import ------------------

export default function Journey() {
    return (
        <Grid container spacing={2} className='hidden'>
            <Grid item xs={12} lg={4}>
                <Card sx={{
                    padding: 3
                }}>
                    <Typography variant='h4' sx={{
                        textAlign: 'left',
                        fontFamily: 'Rajdhani',
                        fontWeight: 'bold',
                    }}>
                        EDUCATION
                    </Typography>
                    <CardContent>
                        <Stack direction={'row'} spacing={3}
                            alignContent={'center'} alignItems={'center'}>
                            <Icon icon="mdi:academic-cap-outline" fontSize={35} />
                            <Typography variant='h5' sx={{
                                fontFamily: 'Rajdhani',
                                fontWeight: 'bold',
                            }}>
                                STMIK LIKMI &nbsp;<Chip label='(2020-2024)' variant='outlined' color='success' />
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{
                            fontFamily: 'Rajdhani',
                            textAlign: 'justify',
                            marginLeft: 7.5,
                        }}>
                            Complete a Bachelor's degree in Computer Science
                            with a GPA of 4.00 and 145 out of 144 required credits within 3.5 years.
                        </Typography>
                        <Typography variant='h6' sx={{
                            fontFamily: 'Rajdhani',
                            textAlign: 'justify',
                            marginLeft: 7.5,

                        }}>
                            Final Project: <i>Fake News Detection on Indonesian Language Using Passive Aggressive Classifier</i>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Card sx={{
                    padding: 3
                }}>
                    <Typography variant='h4' sx={{
                        textAlign: 'left',
                        fontFamily: 'Rajdhani',
                        fontWeight: 'bold',
                    }}>
                        WORKING EXPERIENCE
                    </Typography>
                    <CardContent>
                        <Stack direction={'row'} spacing={3}
                            alignContent={'center'} alignItems={'center'}>
                            <Icon icon="fluent-mdl2:work" fontSize={35} />
                            <Typography variant='h5' sx={{
                                fontFamily: 'Rajdhani',
                                fontWeight: 'bold',
                            }}>
                                STMIK LIKMI &nbsp;<Chip label='(2023-2024)' variant='outlined' color='success' />
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{
                            fontFamily: 'Rajdhani',
                            textAlign: 'justify',
                            marginLeft: 7.5,
                        }}>
                            Role: Junior Fullstack Web Developer
                        </Typography>
                        <Typography variant='h6' sx={{
                            fontFamily: 'Rajdhani',
                            textAlign: 'justify',
                            marginLeft: 7.5,

                        }}>
                            Contributing making the new academic system name <strong><i>Nexus (Next Gen Campus)</i></strong> using Next.js and Mali.js
                            with Microservices Architecture
                        </Typography>
                        <Stack direction={'row'} spacing={3}
                            alignContent={'center'} alignItems={'center'}
                            sx={{ marginTop: 3 }}>
                            <Icon icon="fluent-mdl2:work" fontSize={35} />
                            <Typography variant='h5' sx={{
                                fontFamily: 'Rajdhani',
                                fontWeight: 'bold',
                            }}>
                                FREELANCE &nbsp;<Chip label='(2023)' variant='outlined' color='success' />
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{
                            fontFamily: 'Rajdhani',
                            textAlign: 'justify',
                            marginLeft: 7.5,
                        }}>
                            Role: Junior Fullstack Web Developer
                        </Typography>
                        <Typography variant='h6' sx={{
                            fontFamily: 'Rajdhani',
                            textAlign: 'justify',
                            marginLeft: 7.5,

                        }}>
                            Contributing making the new academic system name <strong><i>Nexus (Next Gen Campus)</i></strong> using Next.js and Mali.js
                            with Microservices Architecture
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}