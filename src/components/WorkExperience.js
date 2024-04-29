import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, styled } from '@mui/material';

// Import your images
// import infotrackImage from './infotrack.png';
// import higinImage from './higin.jpg';

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

const CustomListItem = styled(ListItem)`
  display: flex;
  position: relative;
  align-items: flex-start;
  margin-left: 70px; /* Add left margin of 75 pixels */

  &::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: #1976d2;
  }

  .dates {
    position: absolute;
    left: -80px; 
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .date-item {
    margin-bottom: 8px;
  }

  .image {
    width: 100px; /* Adjust the width of the image */
    height: auto; /* Maintain aspect ratio */
    margin-right: 20px; /* Add margin to separate image from text */
  }
`;

const WorkExperience = () => {
  return (
    <Box bgcolor="#f6faff" py={6}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          History
        </Typography>
        <ShinyPaper>
          <List>

          <CustomListItem alignItems="flex-start">
              <img src="/chico.jpeg" alt="CSU Chico" className="image" />
              <ul className="dates">
                <li className="date-item">
                  <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                    Current
                  </Typography>
                </li>
              </ul>
              <ListItemText
                primary="California State University, Chico"
                secondary={
                  <>
                    <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                      Machine Learning Engineer
                    </Typography>
                    <Typography variant="body2" component="div">
                      <ul>
                        <li>
                        Spearheaded the creation of an independent Large Language Model (LLM) to support student needs. 
                        </li>
                        <li>
                        Devised a Python-based LLM from the ground up, employing streamlined tokenization methods. 
                        </li>
                        <li>
                        Utilized web scraping to gather data and utilized the Chroma vector database for storing and preparing data. 
                        </li>
                        <li>
                        Enhanced an existing LLM through QLoRa-based fine-tuning, optimizing time and computational efficiency. 
                        </li>
                      </ul>
                    </Typography>
                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                      Technologies Used: Python, Pytorch, Vector Database, Chroma, CUDA, Self-Attention, SoftMax, Deep Neural Networks, LLM, NLP

                    </Typography>
                    <ul className="dates">
                      <li className="date-item">
                        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                          Jan 2024
                        </Typography>

                      </li>
                    </ul>
                  </>
                }
              />
              
            </CustomListItem>
            <Divider />

          <CustomListItem alignItems="flex-start">
              <img src="/chico.jpeg" alt="CSU Chico" className="image" />
              <ul className="dates">
                <li className="date-item">
                  <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                    Dec 2023
                  </Typography>
                </li>
              </ul>
              <ListItemText
                primary="California State University, Chico"
                secondary={
                  <>
                    <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                      Student
                    </Typography>
                    <Typography variant="body2" component="div">
                      <ul>
                        <li>
                        MS in Computer Science at the California State University Chico.
                        </li>
                      </ul>
                    </Typography>
                    <ul className="dates">
                      <li className="date-item">
                        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                          Aug 2021
                        </Typography>
                      </li>
                    </ul>
                  </>
                }
              />

            </CustomListItem>
            <Divider />

            <CustomListItem alignItems="flex-start">
              <img src="/infotrack.png" alt="Infotrack Telematics" className="image" />
              <ul className="dates">
                <li className="date-item">
                  <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                    Jul 2021
                  </Typography>
                </li>
              </ul>
              <ListItemText
                primary="Infotrack Telematics"
                secondary={
                  <>
                    <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                      Software Engineer
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
                    <ul className="dates">
                      <li className="date-item">
                        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                          Sep 2019
                        </Typography>

                      </li>
                    </ul>
                  </>
                }
              />

            </CustomListItem>
            <Divider />
    
           
            <CustomListItem alignItems="flex-start">
              <img src="/vtu.png" alt="VTU" className="image" />
              <ul className="dates">
                <li className="date-item">
                  <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                    Jul 2019
                  </Typography>
                </li>
              </ul>
              <ListItemText
                primary="Visvesvaraya Technological University (VTU)"
                secondary={
                  <>
                    <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                      Student
                    </Typography>
                    <Typography variant="body2" component="div">
                      <ul>
                        <li>
                        BE in Computer Science at Visvesvaraya Technological University (VTU). This is where I first got into deep learning, web and mobile app development.
                        </li>
                      </ul>
                    </Typography>
                 
                    <ul className="dates">
                      <li className="date-item">
                        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                          Aug 2015
                        </Typography>
                      </li>
                    </ul>
                  </>
                }
              />



            </CustomListItem>
            <Divider />

            <CustomListItem alignItems="flex-start">
              <img src="/higin.png" alt="Higin Esports" className="image" />
              <ul className="dates">
                <li className="date-item">
                  <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                    Apr 2019

                  </Typography>

                </li>
              </ul>
              <ListItemText
                primary="Higin Esports"
                secondary={
                  <>
                    <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                      Backend Development Intern
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
                    <ul className="dates">
                      <li className="date-item">
                        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
                          Jan 2019

                        </Typography>

                      </li>
                    </ul>
                  </>
                }
              />
            </CustomListItem>
          </List>
        </ShinyPaper>
      </Container>
    </Box>
  );
};

export default WorkExperience;
