import React from 'react';
import HomeImg from '/1.webp';

function Home() {
  return (
    <div className='w-full h-screen px-24 max-xl:px-12 max-lg:px-6 py-24 flex items-center justify-center gap-6 max-lg:flex-col max-lg:h-full'>
        <div className='w-2/4 max-lg:w-full flex flex-col items-start gap-5'>
            <span className='bg-[#DBEAFE] rounded-full py-2 px-6 text-[#1E40AF] font-semibold text-[0.9rem]'>Global Vision · China Resources · Efficient Connection</span>
            <h1 className='text-[3.5rem] font-bold leading-15 max-xl:text-[2.5rem] max-xl:leading-10'>Your Trusted Partner for China Sourcing & Trade</h1>
            <p className='text-[1.3rem] text-gray-700 max-xl:text-[1rem]'>Welcome to JU GLOBAL, your trusted sourcing and trade service partner in China. Based in Shanghai, we connect international buyers with verified Chinese factories through efficient, transparent, and reliable supply chain solutions.</p>
            <div className='flex items-center gap-6 mt-4 max-sm:gap-2'>
                <button className='bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 px-8 relative hover:bottom-2 cursor-pointer rounded-full font-semibold text-xl shadow-xl shadow-blue-200 max-sm:py-3 max-sm:px-6'>Get Started</button>
                <button  className='border-2 hover:bg-zinc-200 transition-all text-blue-500 py-4 px-8 relative cursor-pointer rounded-full font-semibold text-xl max-sm:py-3 max-sm:px-6'>Our Services</button>
            </div>
        </div>
        <img src={HomeImg} alt="Home" className='w-2/4 max-lg:w-full h-[80%]  max-lg:h-full object-cover rounded-2xl shadow-2xl' />
    </div>
  )
}

export default Home