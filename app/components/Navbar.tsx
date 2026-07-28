export default function Navbar() {
  return (
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
  );
}