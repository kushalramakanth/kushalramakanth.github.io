import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Introduction
        </Typography>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" component="h3">
                Kushal Ramakanth
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                Email: <a href="mailto:kushalramakanth1@gmail.com">kushalramakanth1@gmail.com</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Phone: (925) 804-1340</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                GitHub:{' '}
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
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/kushal-ramakanth" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/kushal-ramakanth
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                I am a highly motivated software engineer with experience in developing advanced applications
                for location-based tracking of trucks and school buses, as well as engineering a ride-sharing app
                on Android, iOS, and Flutter. I have a strong background in computer science, having completed
                my Bachelor of Engineering and currently pursuing my Master of Science in Computer Science.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
