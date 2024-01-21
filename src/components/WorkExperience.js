import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, ListItemIcon, Divider, styled } from '@mui/material';
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
                      <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                        Software Engineer
                      </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Sep 2019 – Jul 2021
                    </Typography>
                    <Typography variant="body2" component="div">
                      <ul>
                        <li>
                          Led the development of sophisticated applications for location-based tracking, targeting trucks and school buses.
                        </li>
                        <li>
                          Pioneered a ride-sharing app for Android, iOS, and Flutter, contributing to a substantial customer growth of 8,000 to 10,000 users.
                        </li>
                        <li>
                          Developed an innovative app to assess driving performance based on tracking data, specifically tailored for the insurance industry.
                        </li>
                        <li>
                          Mastered technologies such as the Android Biometric API and constructed a bespoke facial authentication system for in-house products.
                        </li>
                      </ul>
                    </Typography>
                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                      Technologies Used: Android, iOS, Flutter, APIs, Retrofit, RxJava/RxKotlin, Machine Learning libraries for facial recognition
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
                    <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                      Backend Development Intern
                    </Typography>
                    <Typography component="span" variant="body2" sx={{ display: 'block' }}>
                      Jan 2019 – Apr 2019
                    </Typography>
                    <Typography variant="body2" component="div">
                      <ul>
                        <li>
                          Part of the core team that developed the initial implementation of the company’s back-end website design.
                        </li>
                        <li>
                          Engineered a soccer tournament match-making feature in collaboration with colleagues.
                        </li>
                        <li>
                          Integrated a seamless payment gateway, streamlining user payments for esports tournament registrations.
                        </li>
                        <li>
                          Demonstrated a high level of proficiency working with technologies such as NodeJS, ExpressJS, ReactJS.
                        </li>
                      </ul>
                    </Typography>
                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                      Technologies Used: NodeJS, ExpressJS, ReactJS
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
