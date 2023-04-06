import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
} from '@mui/material';

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
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Skills
        </Typography>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item key={index}>
                <Chip label={skill} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Skills;
