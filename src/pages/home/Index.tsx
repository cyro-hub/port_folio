import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Project/Index";
import Testinomial from "./components/Testinomial";

export default function Home() {
  return (
    <div className="w-full h-[100vh] scroll-snap-y snap-mandatory snap-y overflow-y-scroll">
      <Nav />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Testinomial />
      <Contact />
      <Footer />
    </div>
  );
}
