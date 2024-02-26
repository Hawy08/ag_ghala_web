// import React from 'react'
import download from '../assets/Google Play.png'
import banner from '../assets/smartmockups_lrlucjc5-removebg-preview.png'

function Hero() {
  return (
    <div className="md:flex">
      <div className="  flex flex-col py-4 my-4">
        <h2 className="text-black text-[40px] md:text-left font-light font-['Inria Sans']">
          We are your go to Agricultural{" "}
          <span className="text-green-500 text-[40px] font-light font-['Inria Sans']">
            Companions.
          </span>
        </h2>
        <p className="text-black text-[19px] md:text-left font-['Inria Sans']  font-light my-4 py-4">
          AgroGhala is your one stop app for everything agriculture. It provides
          you with the knowledge you need to make sure you benefit as a farmer.
        </p>
        <div className="my-4 py-4 flex justify-center md:justify-start">
          <img src={download} />
        </div>
      </div>
      <div className="">
        <img
          src={banner}
          className="w-full h-full object-cover hidden md:flex"
        />
      </div>
    </div>
  );
}

export default Hero