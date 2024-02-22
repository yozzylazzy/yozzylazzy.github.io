import {
    Typography, Grid, List, ListItem, Card, Avatar
} from '@mui/material';
import userCurious from '../../assets/images/user/user-curious.jpeg';

// ------------------ End of Import ------------------

export default function Introduction() {
    return (
        <>
            <Card>
                <Grid container spacing={3} padding={3}>
                    <Grid item xs={12} md={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Avatar
                            src={userCurious}
                            sx={{
                                width: '35vh',
                                height: '35vh',
                                backgroundSize: 'cover',
                            }}
                        />
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
            </Card>
        </>
    )
}