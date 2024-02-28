// import React from "react";
import tick from "../assets/299110_check_sign_icon.png"

// Card.js

import React from 'react';

const Card = ({ image, product, description, imagePosition }) => {
  const cardStyles = {
    display: 'flex',
    flexDirection: imagePosition === 'right' ? 'row-reverse' : 'row',
    // Add other styling properties as needed
  };

  return (
    <div className="md:w-4/5 bg-white rounded-[20px] md:flex gap-24 my-12 " style={cardStyles}>
      <div className="flex items-center justify-center md:w-1/2">
        <img src={image} alt={product} className="object-cover w-full h-full rounded-lg hover:brightness-105 duration-200 ease-in-out" />
      </div>
      <div className="md:w-1/2 p-2 text-left">
        <div className="h-4 w-4 rounded-full">
          {/* <img src={tick} alt="Checkmark" className="object-cover h-full w-full" /> */}
        </div>
        <div className="text-black text-[80px] font-semibold font-['Inria Sans'] my-8">
          {product}
        </div>
        <div className="text-black text-lg font-light tracking-wide my-8">
          {description}
        </div>
        <button className="bg-green-500 text-white font-thin p-4 my-8 rounded-md text-sm hover:opacity-90 duration-300 transition-all">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Card;

