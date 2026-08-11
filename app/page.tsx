import About from "./components/About";
import Categories from "./components/Categories";
import CTA from "./components/CTA";
import FeaturedCakes from "./components/FeaturedCakes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <FeaturedCakes />

      <Categories />

      <About />

      <CTA />

      <Footer />
    </main>
  );
}