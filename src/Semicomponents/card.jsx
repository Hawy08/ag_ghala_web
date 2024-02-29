// import React from "react";
import tick from "../assets/299110_check_sign_icon.png"

// Card.js

import React from 'react';

const Card = ({ image, product, description, imagePosition }) => {
  const cardStyles = {
    flexDirection: imagePosition === 'right' ? 'row-reverse' : 'row',
    // Add other styling properties as needed
  };

  return (
    <div
      className="md:w-4/5 bg-white md:rounded-[20px] md:flex md:gap-24 md:my-12 "
      style={cardStyles}
    >
      <div className="items-center justify-center md:flex md:w-1/2">
        <img
          src={image}
          alt={product}
          className="object-cover w-full h-full duration-200 ease-in-out md:rounded-lg hover:brightness-105"
        />
      </div>
      <div className="p-2 text-left md:w-1/2">
        <div className="w-4 h-4 rounded-full">
          {/* <img src={tick} alt="Checkmark" className="object-cover w-full h-full" /> */}
        </div>
        <div className="text-black md:text-[80px] text-[40px] font-semibold font-['Inria Sans'] md:my-8">
          {product}
        </div>
        <div className="text-lg font-light tracking-wide text-black md:my-8">
          {description}
        </div>
        <button className="p-4 my-8 text-sm font-thin text-white transition-all duration-300 bg-green-500 rounded-md hover:opacity-90">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Card;

