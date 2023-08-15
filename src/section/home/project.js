import {
    Card, Box, Grid, Typography, Link, Tooltip, Icon,
} from '@mui/material'

// ------------------ End of Import ------------------

const dataProject = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
]

export default function ProjectSection() {
    return (
        <Grid container spacing={2} sx={{
            marginTop: 3,
            marginBottom: 3,
        }}>
            {
                dataProject.map((data, index) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Card sx={{
                                color: 'black',
                                borderRadius: 3,
                                boxShadow: 5,
                                display: "flex",
                                float: "center",
                                justifyContent: "center",
                                padding: 10,
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}>
                                <Typography variant='h5' sx={{
                                    fontFamily: 'Rajdhani',
                                    marginBottom: 2
                                }}>
                                    {data.title}
                                </Typography>
                                <Typography variant='body1' sx={{
                                    marginBottom: 2
                                }}>
                                    {data.description}
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Tooltip title='Github Yozzy Lazzy'
                                        placement="bottom"
                                        arrow>
                                        <Link href={data.link_image}>
                                            {data.icon}
                                        </Link>
                                    </Tooltip>
                                </Box>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}