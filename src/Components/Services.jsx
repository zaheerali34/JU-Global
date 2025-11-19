import React from "react";
import Data from "../utils/Data.json";

function Services() {
  return (
    <div className="w-full h-full px-24 max-xl:px-12 max-lg:px-6 py-20 flex items-center justify-center flex-col ">
      <h1 className="text-3xl font-bold mb-4 text-zinc-900 text-center">OUR SERVICES</h1>

      <p className="w-full md:w-1/2 mb-8 text-center text-gray-600 text-lg md:text-xl">
        Comprehensive end-to-end solutions for international buyers seeking
        reliable Chinese manufacturing partners
      </p>

      {Data.map((item) => {
        return (
          <div
            key={item.id}
            className={`
              w-full max-w-6xl flex items-center justify-between gap-6 mt-14 
              ${item.layout === "left" ? "md:flex-row" : "md:flex-row-reverse"} 
              flex-col
            `}
          >
            <img
              src={item.imageOne}
              alt="Service"
              className="
                w-full 
                md:w-[25%] 
                h-[25vh] md:h-[30vh] 
                rounded-lg 
                object-cover
                max-md:h-[40vh]
              "
            />

            <div className="w-full md:w-1/4 text-center md:text-left max-md:text-start">
              <h2 className="text-lg font-bold">{item.title}</h2>

              <p className="text-sm py-2 text-gray-600">
                {item.description}
              </p>

              <button className="
                border-2 
                hover:bg-zinc-200 
                transition-all 
                text-blue-500 
                py-3 px-6 
                cursor-pointer 
                rounded-full 
                font-semibold 
                text-md 
                mt-2
              ">
                Learn More
              </button>
            </div>

            <img
              src={item.imageTwo}
              alt="Service"
              className="
                w-full 
                md:w-[45%] 
                h-[25vh] md:h-[30vh] 
                rounded-xl 
                object-cover
                max-md:hidden
              "
            />
          </div>
        );
      })}
    </div>
  );
}

export default Services;
