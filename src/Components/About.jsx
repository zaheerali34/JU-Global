import React from "react";
import AboutImg from "/about.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="about"
      className="w-full h-screen px-24 max-xl:px-12 max-lg:px-6 flex items-center py-16 bg-gray-50 max-lg:h-full"
    >
      <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="w-full h-2/4 rounded-2xl p-10 max-lg:p-0 flex items-center justify-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            src={AboutImg}
            alt="JU GLOBAL logo"
            className="w-full h-full rounded-2xl object-contain"
          />
        </div>

        <div className="w-full flex flex-col justify-between h-full">
          <div>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
            >
              ABOUT JU GLOBAL
            </motion.h2>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              JU GLOBAL is a Shanghai-based international trade and sourcing
              service provider with an offshore branch in Hong Kong. We bridge
              global buyers and verified Chinese manufacturers through efficient
              communication, supplier verification, and full process trade
              support.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed"
            >
              Our team combines deep understanding of Chinese business culture
              with international trade expertise, providing seamless
              cross-border commerce solutions. From initial sourcing to final
              delivery, we ensure quality, transparency, and reliability at
              every step.
            </motion.p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl p-6 flex flex-col items-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-blue-600">
                100+
              </span>
              <span className="text-sm text-gray-500 mt-2">
                Trade Show Clients
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl p-6 flex flex-col items-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-blue-600">
                10+
              </span>
              <span className="text-sm text-gray-500 mt-2">
                Countries Served
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
