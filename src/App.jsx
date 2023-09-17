//import { useState } from 'react'

import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Works from "./components/Works";

import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("/assets/bg.jpeg");

  &::-webkit-scrollbar {
    display: none;
  }
`;



function App() {
  return (
    <>
      <Navbar />
      <Container> 
          <Hero />
          <Who />
          <Skills />
          <SoftSkills />
          <Works />
          <Contact />
       </Container> 
    </>
    
  );
}

export default App;