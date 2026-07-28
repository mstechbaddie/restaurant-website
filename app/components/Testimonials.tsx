export default function Testimonials() {
  return (
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
  );
}