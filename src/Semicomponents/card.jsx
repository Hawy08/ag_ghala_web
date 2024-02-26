// import React from "react";

function Card(props) {
  return (
    <div className="md:w-1/3 bg-white rounded-[20px] shadow flex justify-center flex-col items-center gap-4 mt-12 ">
      <div className="w-[60px] h-[60px] bg-green-500 rounded-full flex justify-center items-center">
        <img src={props.image} className="w-1/2 h-1/2"/>
      </div>
      <div className=" text-center text-black text-[40px] font-light font-['Inria Sans']">
        {props.product}
      </div>
      <div className=" text-center text-black text-xl font-light font-['Inria Sans'] mb-12 py-4">
        {props.description}
      </div>
    </div>
  );
}

export default Card;
