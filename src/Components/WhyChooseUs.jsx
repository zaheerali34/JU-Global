import React from "react";
import {
  Globe,
  Shield,
  BadgeDollarSign,
  BadgeCheck,
  SendToBack,
} from "lucide-react";
import { motion } from "motion/react";

const data = [
  {
    id: 1,
    icon: <SendToBack color="#2563EB" />,
    title: "China Supply Chain Expertise",
    description:
      "Deep knowledge of Chinese manufacturing landscape with established relationships across key industrial regions.",
  },
  {
    id: 2,
    icon: <Globe color="#2563EB" />,
    title: "Multilingual Team",
    description:
      "Professional team fluent in English, Chinese, Spanish, and Thai ensuring smooth cross-cultural communication.",
  },
  {
    id: 3,
    icon: <Shield color="#2563EB" />,
    title: "End-to-End Sourcing Support",
    description:
      "Comprehensive service from initial sourcing to final delivery, including quality control and logistics coordination.",
  },
  {
    id: 4,
    icon: <BadgeDollarSign color="#2563EB" />,
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing structure with no hidden fees. You always know exactly what you're paying for.",
  },
  {
    id: 5,
    icon: <BadgeCheck color="#2563EB" />,
    title: "Verified Factory Network",
    description:
      "Extensive database of pre-vetted manufacturers with verified credentials and production capabilities.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="w-full h-screen max-md:h-full px-24 max-xl:px-12 max-lg:px-6 py-24 flex flex-col items-center justify-center bg-white"
    >
      <h1 className="text-4xl font-extrabold text-zinc-900 text-center">
        WHY CHOOSE US
      </h1>
      <p className="text-gray-600 text-lg mt-3 text-center w-[90%] md:w-[50%]">
        Your success in China sourcing depends on having the right partner.
        Here's what sets us apart.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 cursor-pointer">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="text-4xl bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-[0.95rem] leading-6">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
