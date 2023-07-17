import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, styled, Dialog, DialogTitle, DialogContent, DialogContentText, Snackbar } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)`
  background-color: #1976d2;
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState('');

  const handleAvatarClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailClick = () => {
    const email = 'kushalramakanth1@gmail.com';
    navigator.clipboard.writeText(email);
    setCopiedMessage('Email Copied to Clipboard');
  };

  const handlePhoneClick = () => {
    const phoneNumber = '(925) 804-1340';
    navigator.clipboard.writeText(phoneNumber);
    setCopiedMessage('Phone Number Copied to Clipboard');
  };

  const handleSnackbarClose = () => {
    setCopiedMessage('');
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Avatar src="/profile.jpeg" alt="Profile" sx={{ width: 36, height: 36, marginRight: 2, cursor: 'pointer' }} onClick={handleAvatarClick} />
        <StyledTypography variant="h6" component="div">
          Kushal Ramakanth
        </StyledTypography>
        <Typography variant="body1" component="div" sx={{ marginRight: 2 }}>
          <span onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            kushalramakanth1@gmail.com
          </span>
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginRight: 2 }}>
          <span onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
            (925) 804-1340
          </span>
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="github"
          href="https://github.com/kushalramakanth"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginRight: 1 }}
        >
          <GitHub />
        </IconButton>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="linkedin"
          href="https://www.linkedin.com/in/kushalramakanth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Profile Picture</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Avatar src="/profile.jpeg" alt="Profile" sx={{ width: '100%', height: 'auto' }} />
            </DialogContentText>
          </DialogContent>
        </Dialog>

        <Snackbar open={Boolean(copiedMessage)} autoHideDuration={2000} onClose={handleSnackbarClose} message={copiedMessage} />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
