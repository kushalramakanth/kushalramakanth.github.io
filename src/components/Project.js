import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, ListItemIcon, Divider, styled } from '@mui/material';
import { Folder } from '@mui/icons-material';

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

const Projects = () => {
  return (
    <Box bgcolor="#f6faff" py={6}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <ShinyPaper>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText
                primary="Geo-Tagged Social Media App"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      In collaboration with a team, a Flutter and Firebase powered social media app was developed, showcasing skills in collaborative, user-focused app development through multimedia sharing and location-based filtering.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Flutter, Dart, Firebase Storage and Firestore, Git, Github, RESTful APIs, JSON, Agile/Scrum, Android, iOS
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
                primary="Inventory Management Website"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      Developed a full-stack website to streamline inventory management for bookstores with PayPal for secure payments.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Angular, TypeScript, Bootstrap, NodeJS, ExpressJS, hosted on AWS S3 cloud and AWS EC2, unit tested on Jest.
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
                      Built a custom Convolutional Neural Network (CNN) model interfaced as a Flask web-app which detects bacterial and viral pneumonia using chest X-Ray images.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Python, Numpy, Matplotlib, TensorFlow, Flask for back-end
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
                      Designed an intelligent machine learning model using KDTree algorithm for recommending restaurants to users based on their likes and dislikes using Collaborative Filtering.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Python, Numpy, Matplotlib, TensorFlow
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
                primary="Road Damage Detection using CNNs"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      Developed a custom Convolutional Neural Network (CNN) model to identify road damage, such as potholes and cracks, in road images. Performance was compared with pre-trained models like VGG16 and ResNet50.
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Technologies: Python, TensorFlow, Matplotlib, Seaborn, Scikit Learn
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default Projects;
