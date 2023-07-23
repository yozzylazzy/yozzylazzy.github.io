import {
    Typography, Grid, List, ListItem
} from '@mui/material';
import { Icon } from '@iconify/react';

// ------------------ End of Import ------------------

export default function Introduction() {
    return (
        <>
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
        </>
    )
}