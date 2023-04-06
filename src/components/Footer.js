import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', py: 3 }}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center" color="text.primary" sx={{ color: 'white' }}>
          Kushal Ramakanth
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          <Link href="mailto:kushalramakanth1@gmail.com" sx={{ color: 'white' }}>
            kushalramakanth1@gmail.com
          </Link>
          {' | '}
          <Link href="tel:+19258041340" sx={{ color: 'white' }}>
            (925) 804-1340
          </Link>
          {' | '}
          <Link href="https://github.com/kushalramakanth" target="_blank" rel="noopener" sx={{ color: 'white' }}>
            github.com/kushalramakanth
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
