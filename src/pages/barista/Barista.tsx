import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { useRef } from "react";
import RecipeSection from "./components/Recipes";
import ReelsSection from "./components/Reels";
import CoffeeShowcase from "./components/Showcase";

function Barista() {
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav refFooter={scrollToFooter} />
      {/* Hero Section */}

      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div className="relative flex flex-col items-center justify-center mt-24 text-center p-8 lg:p-16 bg-gradient-to-b from-brown-200 via-brown-100 to-white h-[92%]">
          {/* Hero Content */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10">
            Welcome to Barista
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
            Discover the art of coffee, one cup at a time.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="py-3 px-6 hover:bg-yellow-500/50 bg-yellow-500 text-slate-900 rounded-[2px] hover:bg-brown-700 transition duration-200">
              View My Recipes
            </button>
            <button className="py-3 px-6 bg-transparent border-2 border-yellow-500 text-brown-600 rounded-[2px] hover:bg-brown-600 hover:text-white text-yellow-500 transition duration-200">
              Watch My Reels
            </button>
          </div>
        </div>
      </Section>

      {/* Coffee Showcase Section */}
      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <CoffeeShowcase />
      </Section>

      {/* Reels Section */}
      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <ReelsSection />
      </Section>

      {/* Call to Action Section */}
      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <RecipeSection />
      </Section>
      <Footer ref={footerRef} />
    </div>
  );
}

export default Barista;
