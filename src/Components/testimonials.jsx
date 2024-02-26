// import React from 'react'
import Testimonialcard from "../Semicomponents/testimonialcard";

const testimonialData = [
  {
    name: "IBM Developer Staff",
    company: "IBM",
    testimony:
      "It was built to provide a platform that could more directly connect local farmers to afforadable storage warehouses with available space. It also provides farmers with transparent, direct-sale options rather than having to go through third parties. With better storage options, farmers are not forced to sell off their crops early and potentially lose profits. Less food is lost to spoilage, so more people can eat.",
  },
  {
    name: "Grace Wangari",
    company: "Farmer, Juja",
    testimony:
      "I cannot express how much your app has transformed my farming experience. The firsthand information provided has been invaluable in making informed decisions for my crops. The detailed insights on weather conditions, soil health, and crop management have significantly improved my yield. Thank you for creating such a user-friendly and impactful tool that has made a positive difference in my farming journey.",
  },
];

function Testimonials() {
  return (
    <div className="md:flex my-12">
      <div className="flex justify-center">
        <h1 className="text-green-500 text-6xl font-light font-['Inria Sans'] leading-[72px]">
          Testimonials
        </h1>
      </div>
      <div className="md:flex ">
        {testimonialData.map((data, index) => (
          <Testimonialcard
            key={index}
            testimony={data.testimony}
            name={data.name}
            company={data.company}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
