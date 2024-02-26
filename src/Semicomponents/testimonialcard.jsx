import React from "react";
import quatation from "../assets/speech.png";

function Testimonialcard(props) {
  return (
    <div className="md:w-1/2 p-4 m-4 bg-white">
      <div>
        <div>
          <img src={quatation} />
        </div>
        <p className="  text-black font-light font-['Inria Sans'] leading-normal text-left my-4">
          {props.testimony}
        </p>
      </div>
      <div className="text-left">
        <h2>{props.name}</h2>
        <p>{props.company}</p>
      </div>
    </div>
  );
}

export default Testimonialcard;
