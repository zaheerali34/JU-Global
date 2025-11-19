import React from 'react';
import Home from '../Components/Home';
import Offer from '../Components/Offer';
import About from '../Components/About';
import Services from '../Components/Services';
import Experience from '../Components/Experience';
import WhyChooseUs from '../Components/WhyChooseUs';
import Contact from '../Components/Contact';

function LandingPage() {
  return (
    <div className='w-full h-full bg-[#F4F9FF] '>
      <Home />
      <Offer />
      <About />
      <Services />
      <Experience />  
      <WhyChooseUs />
      <Contact />
    </div>
  )
}

export default LandingPage;