// import React from "react";
import tick from "../assets/299110_check_sign_icon.png"

function Card(props) {
  return (
    <div className="md:w-2/3 bg-white rounded-[20px] md:flex gap-4 mt-12 ">
      <div className="flex items-center justify-center md:w-1/2 bg-green-500 h-48">
        <img src={props.image} className="object-cover w-full h-full" />
      </div>
      <div className="md:w-1/2 p-2 text-left">
        <div className="h-4 w-4  rounded-full">
          
        <img src={tick}  className="object-cover h-full w-full" />
        </div>

        <div className="text-black text-[20px] font-semibold font-['Inria Sans']">
          {props.product}
        </div>
        <div className="text-black text-md font-light font-['Inria Sans']">
          {props.description}
        </div>
        <button className="bg-green-500 text-white font-thin px-2 pb-1 my-4 rounded-full text-sm">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Card;
