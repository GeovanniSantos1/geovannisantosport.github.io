import React from 'react';
import About from '../../components/about/About';
import Navbar from '../../components/navbar/Navbar';
import Projects from '../../components/projects/Projects';
import Resume from '../../components/resume/Resume';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Resume />
      <Projects />
      <About />
    </div>
  )
}

export default Home
