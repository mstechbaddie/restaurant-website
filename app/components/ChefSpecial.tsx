import Image from "next/image";

export default function ChefSpecial() {
  return (
    <section className="py-20 bg-pink-50 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <Image
          src="/images/chicken.jpg"
          alt="Chef Special"
          width={600}
          height={500}
          className="rounded-2xl shadow-2xl object-cover hover:scale-105 transition-all duration-300"
        />

        <div>
          <p className="text-pink-600 font-semibold uppercase">
            Chef's Recommendation
          </p>

          <h2 className="text-5xl font-bold mt-3 text-gray-800">
            Signature Grilled Chicken
          </h2>

          <p className="text-yellow-500 text-2xl mt-4">
            ★★★★★
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Tender grilled chicken marinated with our secret herbs and spices,
            served with roasted vegetables and creamy mashed potatoes.
            A customer favourite prepared fresh every day.
          </p>

          <p className="mt-8 text-4xl font-bold text-pink-600">
            $22
          </p>

          <button className="mt-8 bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 hover:scale-105 transition-all duration-300">
            Order Now
          </button>
        </div>

      </div>
    </section>
  );
}