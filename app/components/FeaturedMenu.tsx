import Image from "next/image";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
        Our Popular Dishes
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Chicken */}
        <div className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
          <Image
            src="/images/chicken.jpg"
            alt="Grilled Chicken"
            width={500}
            height={300}
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-pink-700">
              Grilled Chicken
            </h3>

            <p className="mt-3 text-gray-600">
              Juicy grilled chicken served with fresh vegetables.
            </p>

            <p className="mt-4 text-pink-600 font-bold">$15</p>
          </div>
        </div>

        {/* Pasta */}
        <div className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
          <Image
            src="/images/pasta.jpg"
            alt="Creamy Pasta"
            width={500}
            height={300}
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-pink-700">
              Creamy Pasta
            </h3>

            <p className="mt-3 text-gray-600">
              Rich, creamy pasta topped with parmesan cheese.
            </p>

            <p className="mt-4 text-pink-600 font-bold">$12</p>
          </div>
        </div>

        {/* Cake */}
        <div className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
          <Image
            src="/images/cake.jpg"
            alt="Chocolate Cake"
            width={500}
            height={300}
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-pink-700">
              Chocolate Cake
            </h3>

            <p className="mt-3 text-gray-600">
              Soft chocolate cake with a delicious strawberry topping.
            </p>

            <p className="mt-4 text-pink-600 font-bold">$8</p>
          </div>
        </div>

      </div>
    </section>
  );
}