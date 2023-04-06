import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Education = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Education
        </Typography>
        <Paper sx={{ p: 4 }}>
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
        </Paper>
      </Box>
    </Container>
  );
};

export default Education;
