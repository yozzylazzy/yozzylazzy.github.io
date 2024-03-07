import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../App';

const ThemeSwitch = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'right',
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
      color: 'text.primary',
      borderRadius: 4,
      pt: 1,
      pb: 1,
      pl: 2,
      pr: 2,
      position: 'fixed',
      top: 20,
      right: 20,
      zIndex: 5,
      boxShadow: 3,
    }}>
      <IconButton onClick={toggleColorMode} color="inherit" >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default ThemeSwitch;
