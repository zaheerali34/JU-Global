import React from 'react';
import Home from '../Components/Home';
import Offer from '../Components/Offer';
import About from '../Components/About';

function LandingPage() {
  return (
    <div className='w-full h-full px-28 bg-[#F4F9FF] max-xl:px-12 max-lg:px-6'>
      <Home />
      <Offer />
      <About />
    </div>
  )
}

export default LandingPage;