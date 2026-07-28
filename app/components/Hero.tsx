import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-[600px] pt-24">
      <Image
        src="/images/hero.jpg"
        alt="Restaurant"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-pink-900/50 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-6xl font-bold text-white">
          Delicious Meals Made With Love
        </h2>

        <p className="mt-6 text-xl text-pink-100 max-w-2xl">
          Fresh ingredients, unforgettable flavours, and a warm atmosphere.
          Welcome to Pink Spoon Restaurant.
        </p>

        <a
  href="#menu"
  className="mt-8 inline-block bg-pink-500 hover:bg-pink-700 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold"
>
  View Menu
</a>
      </div>
    </section>
  );
}