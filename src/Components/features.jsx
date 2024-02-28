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
        "Secure storage for your harvest. Local facilities. Zero losses.",
    },
    {
      image: feat2,
      product: "Sokos",
      description: "Agripreneurs, rejoice! Fair prices. Happy pockets.",
    },
    {
      image: feat3,
      product: "Blogs",
      description: "Stay informed. Trends, tips, and ag-tech updates.",
    },
    {
      image: feat4,
      product: "AgriTech",
      description: "Tech-powered farming. Precision meets success.",
    },
  ],
};

function Features() {
  return (
    <div>
      <div className="md:text-center text-green-500 text-[40px] font-semibold mt-12">
        Excellent features we Deliver
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
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
