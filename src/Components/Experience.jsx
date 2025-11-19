import { CheckCircle } from "lucide-react";

const data = [
  {
    country: "Spain",
    tag: "$500k-800k",
    sector: "Chemical & Textile",
    description:
      "Successfully facilitated two major deals worth 500k-800k USD each, connecting Spanish importers with certified chemical and textile manufacturers in Jiangsu province.",
  },
  {
    country: "Thailand",
    tag: "$1M+",
    sector: "Cross-border E-commerce",
    description:
      "Managed comprehensive sourcing operations for Thai e-commerce platforms with total trade volume exceeding 1M USD across consumer electronics and home goods.",
  },
  {
    country: "Germany, Argentina, Italy & Colombia",
    tag: "100+ Factories",
    sector: "Multi-sector",
    description:
      "Compiled and delivered verified factory lists across machinery, food processing, packaging, and consumer goods sectors for clients in four countries.",
  },
  {
    country: "International",
    tag: "100+ Clients",
    sector: "Trade Exhibitions",
    description:
      "Provided professional services to 100+ international clients at Canton Fair, CIIE, and Digital Trade Expo including translation, logistics, and business matchmaking.",
  },
];

function Experience() {
  return (
    <div className="w-full h-screen max-lg:h-full py-20 px-4 bg-gradient-to-b from-blue-700 to-blue-600 flex flex-col items-center">
      
      <h1 className="text-4xl font-bold text-white text-center">
        PROVEN EXPERIENCE
      </h1>
      <p className="text-blue-100 text-lg mt-2 text-center max-w-2xl">
        Track record of successful partnerships across multiple industries and countries
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#4e79ddb4] hover:bg-[#5181f1] cursor-pointer backdrop-blur-lg shadow-xl rounded-2xl px-6 py-12 border border-blue-400/30 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-2 flex-wrap ">
              <CheckCircle className="text-green-300" size={22} />
              <h2 className="text-white font-semibold text-xl">{item.country}</h2>
              <span className="bg-blue-300 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {item.tag}
              </span>
            </div>

            <p className="text-blue-200 mt-2 text-md font-semibold ml-7">{item.sector}</p>

            <p className="text-blue-100 mt-4 leading-relaxed text-[15px] ml-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;