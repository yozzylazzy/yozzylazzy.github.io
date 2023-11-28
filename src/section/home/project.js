import {
    Card, Box, Grid, Typography, Link, Tooltip, Icon,
} from '@mui/material'

// ------------------ End of Import ------------------

const dataProject = [
    {
        title: 'Garuda Laptop Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Digital Library App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Happy New Year 2022 2D Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, tin',
        link_image: "",
        icon: <Icon icon="akar-icons:github-fill" color="#000" width="1.5em" height="1.5em" />
    },
    {
        title: 'Lunatics (Ongoing Project)',
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
                                borderRadius: 2,
                                boxShadow: 3,
                                display: "flex",
                                float: "center",
                                justifyContent: "center",
                                padding: 4,
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