import React from "react";

function Contact() {
  return (
    <section id="contact" className="w-full h-screen max-lg:h-full bg-[url('/pexels-photo-2159065.jpeg')] bg-cover bg-center ">
      <div className="w-full h-full bg-black/50 mx-auto px-24 max-xl:px-12 max-lg:px-6 py-8">
        <div className="w-full h-full flex items-center justify-center max-lg:flex-col gap-8">
          <div className="w-1/2 text-white max-lg:w-full">
            <h1 className="text-3xl max-md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Comprehensive Car Care Solutions - Because Your Ride Deserves the
              Best!
            </h1>
            <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl leading-relaxed">
              Experience top-notch car services tailored to meet your vehicle's
              every need. From routine maintenance to complex repairs, we ensure
              your car stays in peak condition for every journey.
            </p>

            <button className="inline-block border-2 border-white text-white py-2 px-6 rounded-full font-semibold hover:bg-white/10 transition cursor-pointer">
              Mehr Lesen
            </button>
          </div>

          <div className="w-1/2 flex max-lg:w-full">
            <form className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Its Time to Get Generate Lead
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Experience top-notch car services tailored to meet your
                vehicle's every need.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="col-span-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Number"
                  className="col-span-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>

              <label className="flex items-start gap-3 text-xs text-gray-600 mb-6">
                <input type="checkbox" className="mt-1" />
                <div>
                  <div className="font-semibold text-gray-800">
                    Data Privacy Agreement
                  </div>
                  <div className="text-xs text-gray-500 max-w-xs">
                    Mit dem Absenden meiner Anfrage willige ich ein, dass meine
                    Daten zur Kontaktaufnahme verarbeitet und gespeichert
                    werden. Die Datenschutzbestimmungen findest du auf unserer
                    Website.
                  </div>
                </div>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
