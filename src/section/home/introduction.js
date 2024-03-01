import {
    Typography, Grid, List, ListItem, Card, Avatar
} from '@mui/material';
import userCurious from '../../assets/images/user/user-curious.jpeg';

// ------------------ End of Import ------------------

export default function Introduction() {
    return (
        <Card>
            <Grid container spacing={3} padding={3}>
                <Grid item xs={12} lg={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Avatar
                        src={userCurious}
                        sx={{
                            width: '30vh',
                            height: '30vh',
                            backgroundSize: 'cover',
                        }}
                    />
                </Grid>
                <Grid item xs={12} lg={9} >
                    <List sx={{
                        marginBottom: 1
                    }}>
                        <ListItem>
                            <Typography variant='h5' sx={{
                                textAlign: 'justify',
                                fontFamily: 'Rajdhani',
                            }}>
                                I'm an <strong
                                    style={{
                                        color: '#6D1EEB'
                                    }}>Informatics Engineering</strong> graduate who builds engaging web and mobile applications.
                                I focus on creating user-friendly interfaces, robust backends,
                                and efficient mobile experiences.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='h5' sx={{
                                textAlign: 'justify',
                                fontFamily: 'Rajdhani',
                            }}>
                                Fuelled by a <strong style={{
                                    color: '#6D1EEB'
                                }}>constant desire to learn and adapt</strong>, I delve into Blockchain,
                                AI, and Game Development, exploring their potential to shape the future.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='h5' sx={{
                                textAlign: 'justify',
                                fontFamily: 'Rajdhani',
                            }}>
                                As a team player, I excel at <strong style={{
                                    color: '#6D1EEB'
                                }}>communication and collaboration</strong>,
                                effectively delegating tasks and resolving conflicts to ensure project success.
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Card>
    )
}