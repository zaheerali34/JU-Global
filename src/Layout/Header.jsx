import React, { useState } from 'react';
import { TextAlignJustify } from 'lucide-react';

function Header() {
  const Link = ["Home", "Services", "About", "Experience", "Why Choose Us"]
  const [Menu, setMenu] = useState(false);

  const headler = ()=> {
    setMenu(!Menu);
  }

  return (
    <div className='w-full py-4 px-28 bg-[#ffffff88] drop-shadow-md fixed top-0 left-0 right-0 flex items-center justify-between z-50 max-lg:px-6 backdrop-blur-sm'>
      <h1 className='text-2xl font-bold uppercase'>My App</h1>

      <nav className='flex items-center gap-10 max-md:hidden'>
        <ul className='flex items-center gap-8 text-gray-800 cursor-pointer'>
          {
            Link.map((item)=> (
              <li key={item} className='hover:text-blue-500 transition-colors duration-300'>{item}</li>
            ))
          }
        </ul>
      </nav>

      <button className='bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 rounded-full cursor-pointer max-md:hidden'>Contact Us</button>

       <button onClick={headler} className='cursor-pointer hidden max-md:block'><TextAlignJustify/></button>


       {Menu && (<div className='w-full h-[30vh] py-2 px-12 bg-white fixed top-16 left-0 right-0 flex flex-col items-start justify-center gap-2 z-50'>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
       </div>)}
    </div>
  )
}

export default Header