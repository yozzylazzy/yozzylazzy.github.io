import * as React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import anime from 'animejs/lib/anime.es.js';
import logo from '../../logo.svg';

function NavbarTop() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const animateLogo = () => {
        // anime({
        //     targets: '.logo',
        //     scale: [
        //         { value: 1, duration: 500 },
        //         { value: 1.1, duration: 500 },
        //         { value: 1, duration: 500 }
        //     ],
        //     easing: 'easeInOutSine'
        // });
        anime({
            targets: '.logo',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 500,
        });
    };

    const AnimeImage = () => {
        const imageRef = React.useRef(null);
        React.useEffect(() => {
            const imageAnimation = anime({
                targets: imageRef.current,
                loop: true,
                easing: 'linear',
                opacity: [
                    { value: 0.8, duration: 1000 },
                    { value: 0.3, duration: 2000 },
                    { value: 0.8, duration: 1000 }
                ],
                scale: [
                    { value: 1.05, duration: 100 },
                    { value: 1.1, duration: 200 },
                    { value: 1, duration: 200 }
                ],
                rotate: [
                    { value: '1turn', duration: 3000 },
                    { value: '0turn', duration: 3000 }
                ]
            });

            return () => {
                imageAnimation.pause();
            }
        }, []);

        return (
            <img src={logo} alt="logo" ref={imageRef}
            />
        );
    }

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: 'rgba(61,0,173,0.8)',
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{
                    flexGrow: 1,
                    padding: 1
                }}>
                    <Button className="logo" color="inherit" onClick={animateLogo}>
                        <AnimeImage />
                        YOZZY
                    </Button>
                </Typography>

                <Button color="inherit">Profile</Button>
                <Button color="inherit">Project</Button>
                <Button color="inherit">Gallery</Button>

                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Project</MenuItem>
                    <MenuItem onClick={handleClose}>Gallery</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarTop;
