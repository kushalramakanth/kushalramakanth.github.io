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

const Education = () => {
  return (
    <Box bgcolor="#f6faff" py={6}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Education
        </Typography>
        <ShinyPaper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h3" gutterBottom>
                Master of Science in Computer Science
              </Typography>
              <Typography>California State University, Chico</Typography>
              <Typography>Expected Graduation: May 2023</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h3" gutterBottom>
                Bachelor of Engineering in Computer Science
              </Typography>
              <Typography>Visvesvaraya Technological University</Typography>
              <Typography>Graduated: June 2019</Typography>
            </Grid>
          </Grid>
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default Education;
