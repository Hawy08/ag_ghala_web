import Card from "../Semicomponents/card";
import feat1 from "../assets/Frame (3).png";
import feat2 from "../assets/Vector (5).png";
import feat3 from "../assets/Group 6.png";

const data = {
  properties: [
    {
      image: feat1,
      product: "Ghalas",
      description:
        "We connect farmers to storage facilities in their locality.",
    },
    {
      image: feat2,
      product: "Sokos",
      description: "Sell your products at market friendly prices.",
    },
    {
      image: feat3,
      product: "Blogs",
      description:
        "Get to know what is trending in the agricultural market around you",
    },
  ],
};

function Features() {
  return (
    <div>
      <div className="text-center text-green-500 text-[40px] font-light font-['Inria Sans'] mt-12">
        Excellent features we Deliver
      </div>
      <div className="md:flex gap-8">
        {data.properties.map((feature, index) => (
          <Card
            key={index}
            image={feature.image}
            product={feature.product}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
