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
  ListItemIcon,
  Divider,
} from '@mui/material';
import { Folder } from '@mui/icons-material';

const Projects = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Paper sx={{ p: 4 }}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText
                primary="Inventory Management Website"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      A full stack website for managing the inventory of a bookstore.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Angular, Bootstrap, NodeJS, ExpressJS, hosted on AWS S3 and AWS EC2
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText
                primary="Movie Ticket Booking"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      A website template for an online movie ticket booking system.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: HTML, CSS, Javascript, Bootstrap, Python, and Django
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText
                primary="Chest X-Ray Pneumonia Detector"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      A custom Convolutional Neural Network (CNN) model interfaced as a Flask web-app which detects bacterial and viral pneumonia using chest X-Ray images.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Python, Numpy, Matplotlib, TensorFlow, and Flask for back-end
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText
                primary="Restaurant Recommender"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      A machine learning model (KDTree) used to recommend restaurants to users based on their likes and dislikes using Collaborative Filtering.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Python, Numpy, Matplotlib, and TensorFlow
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Projects;
