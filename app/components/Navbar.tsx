"use client";
import { useState } from "react";
export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false); 
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-pink-600 text-white shadow-lg">
      <h1 className="text-3xl font-bold">🌸 Pink Spoon</h1>

      <div className="hidden md:flex items-center gap-8">

  <ul className="flex gap-8 font-medium">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <a
    href="#reservation"
    className="bg-white text-pink-600 px-5 py-2 rounded-full font-semibold hover:bg-pink-100 transition"
  >
    Book a Table
  </a>

</div>

      <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-3xl"
>
  ☰
</button>
{isOpen && (
  <ul className="absolute top-20 left-0 w-full bg-pink-600 text-white flex flex-col items-center gap-6 py-6 md:hidden shadow-lg">
    <li>
      <a href="#home" onClick={() => setIsOpen(false)}>
        Home
      </a>
    </li>

    <li>
      <a href="#about" onClick={() => setIsOpen(false)}>
        About
      </a>
    </li>

    <li>
      <a href="#menu" onClick={() => setIsOpen(false)}>
        Menu
      </a>
    </li>

    <li>
      <a href="#contact" onClick={() => setIsOpen(false)}>
        Contact
      </a>
    </li>
  </ul>
)}
    </nav>
  );
}