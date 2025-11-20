import React from 'react'
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Logo from '/logo.jpg';

function Footer() {
  return (
    <footer className="w-full h-full bg-[#0f1724] text-gray-300 py-12 mt-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="JU GLOBAL Logo" className='w-12 object-cover rounded-md shadow-2xl' />
              <span className="text-white font-semibold">JU GLOBAL</span>
            </div>
            <p className="text-gray-400 max-w-xs">Your trusted sourcing and trade service partner in China</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Experience</li>
              <li className="hover:text-white cursor-pointer">Why Choose Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Industry Solutions</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Chemical & Textile</li>
              <li className="hover:text-white cursor-pointer">Consumer Electronics</li>
              <li className="hover:text-white cursor-pointer">Home Goods</li>
              <li className="hover:text-white cursor-pointer">Machinery</li>
              <li className="hover:text-white cursor-pointer">Food Processing</li>
              <li className="hover:text-white cursor-pointer">Packaging</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400"><MapPin/></span>
                <span>Century Avenue 100, IFC, Pudong<br/>Shanghai</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400"><Phone /></span>
                <span>+8613162555370</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400"><Mail /></span>
                <span>juglobal2022@gmail.com</span>
              </li>

              <li className="flex items-center gap-3 mt-6">
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 text-white cursor-pointer"><Facebook /></button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 text-white cursor-pointer"><Linkedin  /></button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 text-white cursor-pointer"><Twitter /></button>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-sm text-gray-500">
          © 2025 JU GLOBAL. All rights reserved. | Global Vision · China Resources · Efficient Connection
        </div>
      </div>
    </footer>
  )
}

export default Footer