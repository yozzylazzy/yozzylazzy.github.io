import {
    Box,
    Card,
    Grid, Typography
} from '@mui/material';
import {
    Timeline, TimelineItem, TimelineSeparator,
    TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'

// ------------------ End of Import ------------------

export default function Journey() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
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
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card sx={{
                    padding: 3
                }}>
                    <Typography variant='h4' sx={{
                        textAlign: 'left',
                        fontFamily: 'Rajdhani',
                        fontWeight: 'bold',
                    }}>
                        MY TIMELINE JOURNEY
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    )
}