import React from 'react';
import { Container, Typography, Box, Paper, Grid, styled } from '@mui/material';

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
    <Box bgcolor="#f6faff" py={1}>
      <Container maxWidth="md">
        <ShinyPaper>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography variant="body1">
                Hi, I am Kushal Ramakanth
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
              I am a highly motivated software engineer with a passion for crafting cutting-edge solutions. 
              Leveraging my Bachelor of Engineering and Master of Science in Computer Science, I specialize in developing advanced applications for vehicle tracking, ride-sharing, and machine learning. 
              My recent role as a Machine Learning Engineer at California State University Chico has equipped me with hands-on experience in spearheading the creation of independent Large Language Models (LLMs).
              With a strong foundation in deep neural networks, NLP, and various other technologies, I am committed to pushing the boundaries of innovation in software engineering.
              </Typography>
            </Grid>
          </Grid>
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default Home;
