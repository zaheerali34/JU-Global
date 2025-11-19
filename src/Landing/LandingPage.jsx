import React from 'react';
import Home from '../Components/Home';
import Offer from '../Components/Offer';
import About from '../Components/About';
import Services from '../Components/Services';
import Experience from '../Components/Experience';

function LandingPage() {
  return (
    <div className='w-full h-full bg-[#F4F9FF] '>
      <Home />
      <Offer />
      <About />
      <Services />
      <Experience />  
    </div>
  )
}

export default LandingPage;