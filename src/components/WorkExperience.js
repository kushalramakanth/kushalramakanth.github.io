import React from 'react';
import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemText, ListItemIcon, Divider, styled } from '@mui/material';
import { Work } from '@mui/icons-material';

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

const WorkExperience = () => {
  return (
    <Box bgcolor="#f6faff" py={6}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Work Experience
        </Typography>
        <ShinyPaper>
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
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default WorkExperience;
