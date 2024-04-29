import React, { useState } from 'react';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';
import { Typography, Avatar, IconButton, Snackbar } from '@mui/material';

function Header() {
  const [copiedMessage, setCopiedMessage] = useState('');

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

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/kushalramakanth", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/kushalramakanth", "_blank");
  };

  return (
    <header style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 0', display: 'flex', alignItems: 'center' }}>
        <Avatar src="/profile.jpeg" alt="Profile" style={{ width: '64px', height: '64px', cursor: 'pointer' }} />
        <Typography variant="h6" component="div" style={{ color: '#374151', marginLeft: '16px' }}>
          Kushal Ramakanth
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <IconButton color="inherit" aria-label="email" onClick={handleEmailClick}>
            <Email fontSize="large" />
          </IconButton>
          <IconButton color="inherit" aria-label="phone" onClick={handlePhoneClick}>
            <Phone fontSize="large" />
          </IconButton>
          <IconButton color="inherit" aria-label="github" onClick={handleGitHubClick}>
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton color="inherit" aria-label="linkedin" onClick={handleLinkedInClick}>
            <LinkedIn fontSize="large" />
          </IconButton>
        </div>
      </div>
      <Snackbar open={Boolean(copiedMessage)} autoHideDuration={2000} onClose={handleSnackbarClose} message={copiedMessage} />
    </header>
  );
}

export default Header;
