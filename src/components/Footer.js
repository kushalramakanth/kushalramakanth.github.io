import React from 'react';
import { Container, Typography, Box, Link, styled } from '@mui/material';

const StyledBox = styled(Box)`
  background-color: #1976d2;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  color: #ffffff;
  margin-bottom: 8px;
`;

const Footer = () => {
  return (
    <StyledBox>
      <Container maxWidth="md">
        <StyledTypography variant="body1" align="center">
          Kushal Ramakanth
        </StyledTypography>
        <Typography variant="body2" align="center" color="text.secondary">
          <Link href="mailto:kushalramakanth1@gmail.com" underline="none" color="white">
            kushalramakanth1@gmail.com
          </Link>
          {' | '}
          <Link href="tel:+19258041340" underline="none" color="white">
            (925) 804-1340
          </Link>
          {' | '}
          <Link href="https://github.com/kushalramakanth" target="_blank" rel="noopener" underline="none" color="white">
            github.com/kushalramakanth
          </Link>
        </Typography>
      </Container>
    </StyledBox>
  );
};

export default Footer;
