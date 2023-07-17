import React from 'react';
import { Container, Typography, Box, Paper, Grid, Chip, styled } from '@mui/material';

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

const Skills = () => {
  const skills = [
    'Kotlin',
    'Java',
    'Python',
    'C',
    'C++',
    'C#',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'Node.js',
    'ReactJS',
    'AngularJS',
    'ExpressJS',
    'Django',
    'TypeScript',
    'NumPy',
    'Pandas',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Matplotlib',
    'Android',
    'iOS',
    'Flutter',
    'Retrofit',
    'Volley',
    'Kubernetes',
    'Docker',
    'GCP',
    'AWS',
    'Azure',
    'MVC',
    'MVVM',
    'Git',
    'GitHub',
    'REST APIs',
    'Agile',
    'Bootstrap',
  ];

  return (
    <Box bgcolor="#f6faff" py={6}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Skills
        </Typography>
        <ShinyPaper>
          <Grid container spacing={2} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#1976d2',
                      color: 'white',
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default Skills;
