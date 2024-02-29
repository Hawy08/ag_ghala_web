import React from "react";
import quatation from "../assets/speech.png";

function Testimonialcard(props) {
  return (
    <div className="p-4 m-4 bg-white md:w-1/2">
      <div>
        <div>
          <img src={quatation} />
        </div>
        <p className="  text-black font-light font-['Inria Sans'] leading-normal text-left my-4">
          {props.testimony}
        </p>
      </div>
      <div className="text-left">
        <h2 className="font-semibold">{props.name}</h2>
        <p>{props.company}</p>
      </div>
    </div>
  );
}

export default Testimonialcard;
