import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-pink-600 text-white">
        <h1 className="text-3xl font-bold">🌸 Pink Spoon</h1>

        <ul className="hidden md:flex gap-8 font-medium">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Menu</a></li>
  <li><a href="#">Contact</a></li>
</ul>

<button className="md:hidden text-3xl">
  ☰
</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px]">
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

          <button className="mt-8 bg-pink-500 hover:bg-pink-700 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold">
  View Menu
</button>
        </div>
      </section>
      {/* Featured Menu */}
<section className="py-20 px-8 bg-white">
  <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
    Our Popular Dishes
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
  <Image
    src="/images/chicken.jpg"
    alt="Grilled Chicken"
    width={500}
    height={300}
    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
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

    <div className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
  <Image
    src="/images/pasta.jpg"
    alt="Creamy Pasta"
    width={500}
    height={300}
    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
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

    <div className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
  <Image
    src="/images/cake.jpg"
    alt="Chocolate Cake"
    width={500}
    height={300}
    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
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
{/* About Section */}
<section className="bg-pink-100 py-20 px-8">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-pink-700 mb-6">
      About Pink Spoon
    </h2>

    <p className="text-lg text-gray-700 leading-8">
      At Pink Spoon Restaurant, we believe that every meal should be a memorable
      experience. Our chefs prepare every dish using fresh ingredients, rich
      flavours, and a touch of love. Whether you're enjoying a family dinner,
      celebrating a special occasion, or simply craving a delicious meal, we're
      here to make every visit unforgettable.
    </p>
  </div>
</section>
{/* Testimonials */}
<section className="py-20 bg-white px-8">
  <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
    What Our Customers Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-pink-50 p-8 rounded-xl shadow-lg">
      <p className="text-gray-700 italic">
        "Absolutely amazing food! The atmosphere is beautiful, and the staff are
        incredibly friendly."
      </p>

      <h4 className="mt-6 font-bold text-pink-600">
        ⭐⭐⭐⭐⭐ Sarah Johnson
      </h4>
    </div>

    <div className="bg-pink-50 p-8 rounded-xl shadow-lg">
      <p className="text-gray-700 italic">
        "One of the best restaurants I've ever visited. Every dish was full of
        flavour!"
      </p>

      <h4 className="mt-6 font-bold text-pink-600">
        ⭐⭐⭐⭐⭐ Michael Brown
      </h4>
    </div>

    <div className="bg-pink-50 p-8 rounded-xl shadow-lg">
      <p className="text-gray-700 italic">
        "Perfect place for family dinners. Beautiful environment and excellent
        customer service."
      </p>

      <h4 className="mt-6 font-bold text-pink-600">
        ⭐⭐⭐⭐⭐ Emily Davis
      </h4>
    </div>
  </div>
</section>
{/* Reservation */}
<section className="bg-pink-100 py-20 px-8">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-pink-700 mb-10">
      Reserve a Table
    </h2>

    <form className="space-y-6">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-lg border"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 rounded-lg border"
      />

      <input
        type="date"
        className="w-full p-4 rounded-lg border"
      />

      <textarea
        placeholder="Special Requests"
        rows={4}
        className="w-full p-4 rounded-lg border"
      />

      <button className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700">
        Book Now
      </button>
    </form>
  </div>
</section>
{/* Contact Section */}
<section className="py-20 bg-white px-8">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-pink-600 mb-6">
      Contact Us
    </h2>

    <p className="text-gray-600 mb-10">
      We'd love to hear from you! Visit us or get in touch.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-pink-50 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-pink-700">📍 Address</h3>
        <p className="mt-3 text-gray-600">
          123 Food Street, Lagos, Nigeria
        </p>
      </div>

      <div className="bg-pink-50 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-pink-700">📞 Phone</h3>
        <p className="mt-3 text-gray-600">
          +234 800 123 4567
        </p>
      </div>

      <div className="bg-pink-50 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-pink-700">✉️ Email</h3>
        <p className="mt-3 text-gray-600">
          info@pinkspoon.com
        </p>
      </div>
    </div>
  </div>
</section>
<footer className="bg-pink-700 text-white py-8 text-center">
  <h3 className="text-2xl font-bold font-semibold">
    🌸 Pink Spoon Restaurant
  </h3>

  <p className="mt-3">
    Serving delicious meals with love every day.
  </p>

  <p className="mt-2">
    © 2026 Pink Spoon Restaurant. All Rights Reserved.
  </p>
</footer>
    </main>
  );
}