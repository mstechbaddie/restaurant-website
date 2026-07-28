export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-10">
          We'd love to hear from you! Visit us or get in touch.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-pink-700">📍 Address</h3>
            <p className="mt-3 text-gray-600">
              123 Food Street, Lagos, Nigeria
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-pink-700">📞 Phone</h3>
            <p className="mt-3 text-gray-600">
              +234 800 123 4567
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-pink-700">✉️ Email</h3>
            <p className="mt-3 text-gray-600">
              info@pinkspoon.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}