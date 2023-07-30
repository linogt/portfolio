import React from 'react';
import Header from './components/sections/Header/';
import Apresentation from './components/sections/Apresentation/';
import Experience from './components/sections/Experience/';
import Education from './components/sections/Education';
import Footer from './components/sections/Footer';
import Project from './components/sections/Project'
import About from './components/sections/About'

function App() {
  return (
    <>
      <Header />
      <Apresentation />
      <About />
      <Experience />
      <Education />
      <Project/>
      <Footer />
    </>
    
  );
}

export default App;
