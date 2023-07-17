import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <Home />
        <Education />
        <WorkExperience />
        <Project />
        <Skills />
        <Footer />
      </div>
  );
}

export default App;
