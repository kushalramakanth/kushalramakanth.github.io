import React from 'react';
import { Container, Typography, Box, Paper, Grid, styled } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ShinyPaper = styled(Paper)`
  padding: 32px;
  border: 2px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border: 2px solid #1976d2;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Home = () => {
  return (
    <Box bgcolor="#f6faff" py={6}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Introduction
        </Typography>
        <ShinyPaper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>
                <EmailIcon /> Email: <a href="mailto:kushalramakanth1@gmail.com">kushalramakanth1@gmail.com</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography><PhoneIcon /> Phone: (925) 804-1340</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <GitHubIcon /> GitHub:{' '}
                <a
                  href="https://github.com/kushalramakanth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/kushalramakanth
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <LinkedInIcon /> LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/kushalramakanth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/kushalramakanth
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                I am a highly motivated software engineer with experience in developing advanced applications
                for location-based tracking of trucks and school buses, as well as engineering a ride-sharing app
                on Android, iOS, and Flutter. I have a strong background in computer science, having completed
                my Bachelor of Engineering and have completed my Master of Science in Computer Science.
              </Typography>
            </Grid>
          </Grid>
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default Home;
