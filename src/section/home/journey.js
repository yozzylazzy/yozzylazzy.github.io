import {
    Grid, Typography
} from '@mui/material';
import {
    Timeline, TimelineItem, TimelineSeparator,
    TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

// ------------------ End of Import ------------------

export default function Journey() {
    return (
        <>
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
                                    Certification Foundation - Certificate Name (2022)
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
                                    Certification Foundation - Certificate Name (2023)
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </>
    )
}