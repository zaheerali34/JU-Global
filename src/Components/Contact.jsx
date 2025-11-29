import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React from "react";

function Contact() {
  return (
    <section id="contact" className="w-full h-screen max-lg:h-full bg-[url('/pexels-photo-2159065.jpeg')] bg-cover bg-center ">
      <div className="w-full h-full bg-black/60 mx-auto px-24 max-xl:px-12 max-lg:px-6 py-8">
        <h1 className='text-4xl text-white font-bold text-center'>GET IN TOUCH</h1>
        <p className='text-md text-white pt-2 text-center'>Ready to start your China sourcing journey? Contact us today for a consultation.</p>
        <div className="w-full h-full flex items-center justify-center max-lg:flex-col gap-8">
          <div className="w-1/2 text-white max-lg:w-full flex flex-col items-start gap-8">
            <div className="flex items-center gap-4">
              <span className='bg-blue-400 p-4 rounded-xl'><MapPin /></span>
              <div>
                <h2 className="text-xl font-bold ">Address</h2>
                <p className='text-md text-gray-200'>Century Avenue 100, IFC, Pudong Shanghai</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className='bg-blue-400 p-4 rounded-xl'><PhoneCall /></span>
              <div>
                <h2 className="text-xl font-bold ">Phone</h2>
                <p className='text-md text-gray-200'>+86 189 1690 9892</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className='bg-blue-400 p-4 rounded-xl'><Mail /></span>
              <div>
                <h2 className="text-xl font-bold ">Email</h2>
                <p className='text-md text-gray-200'>juglobal2022@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex max-lg:w-full">
            <form className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send us a message
              </h3>
          
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
                  placeholder="Watsapp Number"
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
