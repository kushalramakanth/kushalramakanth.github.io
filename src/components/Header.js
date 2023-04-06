import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kushal Ramakanth
        </Typography>
        <Typography variant="body1" component="div">
          kushalramakanth1@gmail.com
        </Typography>
        <Typography variant="body1" component="div" sx={{ ml: 2 }}>
          (925) 804-1340
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="github"
          href="https://github.com/kushalramakanth"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
        >
          <GitHub />
        </IconButton>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="github"
          href="https://www.linkedin.com/in/kushalramakanth/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }}
        >
          <LinkedIn />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
