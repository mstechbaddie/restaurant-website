export default function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold">🌸 Pink Spoon</h3>
          <p className="text-pink-100 mt-2">
            Delicious meals made with love.
          </p>
        </div>

        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-pink-200">Facebook</a>
          <a href="#" className="hover:text-pink-200">Instagram</a>
          <a href="#" className="hover:text-pink-200">X</a>
        </div>
      </div>

      <p className="text-center text-pink-200 mt-8">
        © 2026 Pink Spoon Restaurant. All rights reserved.
      </p>
    </footer>
  );
}