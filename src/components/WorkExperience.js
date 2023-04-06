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
import { Work } from '@mui/icons-material';

const WorkExperience = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Work Experience
        </Typography>
        <Paper sx={{ p: 4 }}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText
                primary="Infotrack Telematics"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      Software Engineer
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Sep 2019 – Jul 2021
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText
                primary="Higin Esports"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      Backend Development Intern
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Jan 2019 – Apr 2019
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

export default WorkExperience;