// import React from 'react'
// import download from '../assets/Google Play.png'
import Application from "../assets/app.apk";
import banner from '../assets/smart-agriculture.webp'

function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className=" md:flex md:w-4/5">
        <div className="flex flex-col md:py-4 md:my-4">
          <h2 className="text-black text-[40px] md:text-left font-semibold font-['Inria Sans'] my-8 py-6">
            We are your go to Agricultural{" "}
            <span className="text-green-500 text-[40px] font-['Inria Sans']">
              Companions.
            </span>
          </h2>
          <p className="text-black text-[19px] md:text-left font-['Inria Sans']  font-light my-4 py-4">
            AgroGhala is your one stop app for everything agriculture. It
            provides you with the knowledge you need to make sure you benefit as
            a farmer.
          </p>
          <div className="flex justify-center py-4 my-4 md:justify-start">
            <div className="items-center justify-center p-4 bg-green-500 rounded-md md:inline-flex">
              <div className="text-white text-base font-bold font-['Inter']">
                <a
                  href={Application}
                  download="Appfile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Download</p>
                </a>
              </div>
            </div>
            {/* <img src={download} /> */}
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="absolute overflow-hidden bg-gray-400 rounded-md bottom-2 h-1/3">
            {" "}
            <img
              src={banner}
              className="hidden object-cover w-full h-full md:flex"
            />
          </div>
          <div className="w-1/2 overflow-hidden bg-gray-400 rounded-md h-1/3">
            {" "}
            <img
              src={banner}
              className="hidden object-cover w-full h-full shadow-md md:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero