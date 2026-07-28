export default function Reservation() {
  return (
    <section id="reservation" className="bg-pink-100 py-20 px-8">
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
<input
  type="time"
  className="w-full p-4 rounded-lg border"
/>

<select className="w-full p-4 rounded-lg border">
  <option>Number of Guests</option>
  <option>1 Guest</option>
  <option>2 Guests</option>
  <option>3 Guests</option>
  <option>4 Guests</option>
  <option>5 Guests</option>
  <option>6+ Guests</option>
</select>
          <textarea
            placeholder="Special Requests"
            rows={4}
            className="w-full p-4 rounded-lg border"
          />

          <button
  className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700 hover:scale-105 transition-all duration-300 font-semibold"
>
  Book Now
</button>
        </form>
      </div>
    </section>
  );
}