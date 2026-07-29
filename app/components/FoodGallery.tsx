import Image from "next/image";

export default function FoodGallery() {
  const dishes = [
  "Grilled Chicken",
  "Creamy Pasta",
  "Blueberry Layer Cake",
  "Margherita Pizza",
  "Gourmet Burger",
  "Grilled Steak",
];

const images = [
  "/images/chicken.jpg",
  "/images/pasta.jpg",
  "/images/cake.jpg",
  "/images/pizza.jpg",
  "/images/burger.jpg",
  "/images/steak.jpg",
];
  return (
    <section className="py-20 bg-white px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          Food Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A glimpse of our delicious dishes prepared with love.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
  key={index}
  className="relative overflow-hidden rounded-2xl shadow-lg group"
>
              <Image
  src={image}
  alt={dishes[index]}
  width={500}
  height={400}
  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
/>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
  <h3 className="text-white text-2xl font-bold">
    {dishes[index]}
  </h3>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}