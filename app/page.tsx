import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedMenu from "./components/FeaturedMenu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
  <Navbar />
<Hero />
      
      <FeaturedMenu />
      <About />
<Testimonials />
<Reservation />
<Contact />
<Footer />
    </main>
  );
}