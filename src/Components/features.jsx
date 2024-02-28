import Card from "../Semicomponents/card";
import feat1 from "../assets/ALP-2_1-scaled-2000x733.jpg";
import feat2 from "../assets/axi-12284732.jpg";
import feat3 from "../assets/bg-1.jpg";
import feat4 from "../assets/Blog2-3.jpg";

const data = {
  properties: [
    {
      image: feat1,
      product: "Ghalas",
      description:
        "Linking you to affordable and quality Storage facilities in your locality.",
    },
    {
      image: feat2,
      product: "Sokos",
      description: "Be in the know on the current market trends and prices",
    },
    {
      image: feat3,
      product: "Blogs",
      description: "Stay informed. Trends, tips, and ag-tech updates.",
    },
    {
      image: feat4,
      product: "AgriTech",
      description: "Technology powered farming.",
    },
  ],
};

function Features() {
  return (
    <div>
      <div className="md:text-center text-green-500 text-[40px] font-semibold mt-12">
        Excellent features we Deliver
      </div>
      <div className="flex flex-col items-center justify-center">
        {data.properties.map((feature, index) => (
          <Card
            key={index}
            image={feature.image}
            product={feature.product}
            description={feature.description}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
