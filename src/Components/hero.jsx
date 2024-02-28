// import React from 'react'
// import download from '../assets/Google Play.png'
import Application from "../assets/app.apk";
import banner from '../assets/smartmockups_lrlucjc5-removebg-preview.png'

function Hero() {
  return (
    <div className="flex items-center justify-center bg-red-40">
      <div className="md:flex md:w-2/3">
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
          <div className="my-4 py-4 flex justify-center md:justify-start">
            <div className=" px-6 py-1 bg-green-500 rounded-[22px] justify-center items-center  md:inline-flex">
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
        <div className="">
          <img
            src={banner}
            className="w-full h-full object-cover hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero