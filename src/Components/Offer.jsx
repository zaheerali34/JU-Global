import React from "react";
import { ShoppingCart, Factory, Users  } from "lucide-react";
import { motion } from "motion/react";

function Offer() {
  return (
    <div className="w-full py-10 px-24 max-xl:px-12 max-lg:px-6 flex items-center justify-center gap-10 max-lg:flex-col">
      <div className="w-[30%] flex flex-col items-start gap-4 max-lg:w-full max-lg:items-center">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center uppercase"
        >
          What We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-500"
        >
          Comprehensive sourcing and trade solutions tailored to your needs
        </motion.p>
      </div>

      <div className="w-full flex items-center justify-center gap-4 max-lg:flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-full py-8 px-4 bg-white shadow-lg rounded-lg flex flex-col items-start gap-4 hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-2xl"
        >
          <ShoppingCart color="#2563EB" size={32} />
          <h2 className="text-[1.2rem] font-bold pt-2">International Trade</h2>
          <h4 className="text-blue-500 font-bold text-[0.9rem]">
            Buying Agent Service
          </h4>
          <p className="text-zinc-500">
            Complete sourcing and procurement services connecting you with
            verified Chinese manufacturers. We handle negotiation, quality
            control, and logistics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-full py-8 px-4 bg-white shadow-lg rounded-lg flex flex-col items-start gap-4 hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-2xl"
        >
          <Factory color="#2563EB" size={32} />
          <h2 className="text-[1.2rem] font-bold pt-2">Factory Sourcing</h2>
          <h4 className="text-blue-500 font-bold text-[0.9rem]">
            & Verification
          </h4>
          <p className="text-zinc-500">
            Access our network of pre-vetted factories across China. We conduct
            thorough verification including business licenses, production
            capacity, and quality standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-full py-11 px-4 bg-white shadow-lg rounded-lg flex flex-col items-start gap-4 hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-2xl"
        >
          <Users color="#2563EB" size={32} />
          <h2 className="text-[1.2rem] font-bold pt-2">B2B Business Matching</h2>
          <h4 className="text-blue-500 font-bold text-[0.9rem]">
            & Exhibition Assistance
          </h4>
          <p className="text-zinc-500">
            Professional support for trade shows including Canton Fair, CIIE,
            and Digital Trade Expo. We provide translation, logistics, and
            business matchmaking.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Offer;
