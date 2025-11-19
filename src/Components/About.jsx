import React from 'react';
import AboutImg from '/about.jpg';

function About() {
  return (
    <section className="w-full h-screen px-24 max-xl:px-12 max-lg:px-6 flex items-center py-16 bg-gray-50 max-lg:h-full">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="w-full h-2/4 rounded-2xl p-10 max-lg:p-0 flex items-center justify-center">
          <img
            src={AboutImg}
            alt="JU GLOBAL logo"
            className="w-full h-full rounded-2xl object-contain"
          />
        </div>

        <div className="w-full flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">ABOUT JU GLOBAL</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              JU GLOBAL is a Shanghai-based international trade and sourcing service provider with an
              offshore branch in Hong Kong. We bridge global buyers and verified Chinese manufacturers
              through efficient communication, supplier verification, and full process trade support.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team combines deep understanding of Chinese business culture with international trade
              expertise, providing seamless cross-border commerce solutions. From initial sourcing to
              final delivery, we ensure quality, transparency, and reliability at every step.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl p-6 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-blue-600">100+</span>
              <span className="text-sm text-gray-500 mt-2">Trade Show Clients</span>
            </div>

            <div className="bg-white rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl p-6 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-blue-600">10+</span>
              <span className="text-sm text-gray-500 mt-2">Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;