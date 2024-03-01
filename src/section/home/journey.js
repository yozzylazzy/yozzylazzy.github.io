import {
    Card,
    CardContent,
    Chip,
    Grid, Stack, Typography
} from '@mui/material';
import { Icon } from '@iconify/react';
import './journey.css';

// ------------------ End of Import ------------------

const dataPekerjaan = [
    {
        'tempat': 'STMIK LIKMI',
        'tahun': '2023 - 2024',
        'role': 'Junior Fullstack Web Developer',
        'deskripsi': `Contributing making the new academic system name Nexus (Next Gen Campus) using Next.js and Mali.js
        with Microservices Architecture`,
    },
    {
        'tempat': 'FREELANCE',
        'tahun': '2023',
        'role': 'Graphic Designer',
        'deskripsi': `Edit foto on Photoshop and make video animation in After Effect`,
    },
    {
        'tempat': 'FREELANCE',
        'tahun': '2022',
        'role': 'Web Fundamental Teacher',
        'deskripsi': `Teaching Web Fundamental like HTML, CSS, JS (DOM), PHP, and Bootstrap`,
    },
];

const dataEdukasi = [
    {
        'tempat': 'STMIK LIKMI',
        'tahun': '2020 - 2024',
        'jenjang': 'Bachelor',
        'deskripsi':
            <>
                Complete a <strong style={{ color: '#6D1EEB' }}>Bachelor's degree </strong>in Computer Science
                with a GPA of 4.00 and 145 out of 144 required credits within 3.5 years.
            </>,
        'proyekakhir': `Fake News Detection on Indonesian Language Using Passive Aggressive Classifier`,
    },
];

export default function Journey() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={4} className='edu hidden'>
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
                        {
                            dataEdukasi.map((pendidikan) => {
                                return (
                                    <>
                                        <Stack direction={'row'} spacing={3}
                                            alignContent={'center'} alignItems={'center'}>
                                            <Icon icon="mdi:academic-cap-outline" fontSize={35} />
                                            <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 1.5, xs: 0.05 }}
                                                alignContent={'center'} alignItems={{ md: 'center', xs: 'start' }}>
                                                <Typography variant='h5' sx={{
                                                    fontFamily: 'Rajdhani',
                                                    fontWeight: 'bold',
                                                    textTransform: 'capitalize',
                                                }}>
                                                    {pendidikan.tempat}
                                                </Typography>
                                                <Chip label={pendidikan.tahun} sx={{
                                                    fontWeight: 'bold',
                                                    color: '#7741FF',
                                                    borderColor: '#7741FF',
                                                    fontFamily: 'Rajdhani',
                                                    borderRadius: 3,
                                                }} variant='outlined' />
                                            </Stack>
                                        </Stack>
                                        <Typography variant='h6' sx={{
                                            fontFamily: 'Rajdhani',
                                            textAlign: 'justify',
                                            marginLeft: 7.5,
                                        }}>
                                            {pendidikan.deskripsi}
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Rajdhani',
                                            textAlign: 'justify',
                                            marginLeft: 7.5,
                                            marginTop: 2.5,
                                            marginBottom: 5,
                                        }}>
                                            Final Project: <i>{pendidikan.proyekakhir}</i>
                                        </Typography>
                                    </>
                                );
                            })
                        }
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} lg={8} className='work hidden'>
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
                        {
                            dataPekerjaan.map((pekerjaan) => {
                                return (
                                    <>
                                        <Stack direction={'row'} spacing={3}
                                            alignContent={'center'} alignItems={'center'}>
                                            <Icon icon="fluent-mdl2:work" fontSize={35} />
                                            <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 1.5, xs: 0.05 }}
                                                alignContent={'center'} alignItems={{ md: 'center', xs: 'start' }}>
                                                <Typography variant='h5' sx={{
                                                    fontFamily: 'Rajdhani',
                                                    fontWeight: 'bold',
                                                }}>
                                                    {pekerjaan.tempat}
                                                </Typography>
                                                <Chip label={pekerjaan.tahun} sx={{
                                                    fontWeight: 'bold',
                                                    color: '#7741FF',
                                                    borderColor: '#7741FF',
                                                    fontFamily: 'Rajdhani',
                                                    borderRadius: 3,
                                                }} variant='outlined' />
                                            </Stack>
                                        </Stack>
                                        <Typography variant='h6' sx={{
                                            fontFamily: 'Rajdhani',
                                            textAlign: 'justify',
                                            marginLeft: 7.5,
                                        }}>
                                            Role: <strong style={{
                                                color: '#6D1EEB'
                                            }}>{pekerjaan.role}</strong>
                                        </Typography>
                                        <Typography variant='h6' sx={{
                                            fontFamily: 'Rajdhani',
                                            textAlign: 'justify',
                                            marginLeft: 7.5,
                                            marginBottom: 3,
                                        }}>
                                            {pekerjaan.deskripsi}
                                        </Typography>
                                    </>
                                );
                            })
                        }
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}