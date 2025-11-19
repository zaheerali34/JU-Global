import React, { useState } from 'react';
import { TextAlignJustify } from 'lucide-react';
import { motion } from "motion/react"

function Header() {
  const [Menu, setMenu] = useState(false);
  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Why Choose Us", id: "whychooseus" }
  ];

  const headler = () => {
    setMenu(!Menu);
  };

  const handleNavClick = (id) => {
    setMenu(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}

    className='w-full py-4 px-28 bg-[#ffffff88] drop-shadow-md fixed top-0 left-0 right-0 flex items-center justify-between z-50 max-lg:px-6 backdrop-blur-sm'>
      <h1 className='text-2xl font-bold uppercase cursor-pointer'>My App</h1>

      <nav className='flex items-center gap-10 max-md:hidden'>
        <ul className='flex items-center gap-8 text-gray-800 cursor-pointer'>
          {links.map((item) => (
            <li
              key={item.id}
              className='hover:text-blue-500 transition-colors duration-300'
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      <button className='bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 rounded-full cursor-pointer max-md:hidden'>Contact Us</button>

      <button onClick={headler} className='cursor-pointer hidden max-md:block'><TextAlignJustify /></button>

      {Menu && (
        <div className='w-full h-[30vh] py-2 px-6 bg-[#f1f4f8] fixed top-16 left-0 right-0 flex flex-col items-start justify-center gap-3 z-50'>
          {links.map((item) => (
            <li
              key={item.id}
              className='hover:text-blue-500 transition-colors duration-300 cursor-pointer list-none'
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </li>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Header;