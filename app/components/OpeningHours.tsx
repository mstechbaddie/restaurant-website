export default function OpeningHours() {
  return (
    <section className="bg-pink-50 py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">
          Opening Hours
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>Monday - Friday</span>
            <span>9:00 AM - 10:00 PM</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Saturday</span>
            <span>10:00 AM - 11:00 PM</span>
          </div>

          <div className="flex justify-between">
            <span>Sunday</span>
            <span>12:00 PM - 9:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}