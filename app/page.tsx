import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedMenu from "./components/FeaturedMenu";
export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
  <Navbar />
<Hero />
      
      <FeaturedMenu />
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