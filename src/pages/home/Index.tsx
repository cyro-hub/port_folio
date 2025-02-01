import { useRef } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Project/Index";
import Testinomial from "./components/Testinomial";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-[100vh] scroll-snap-y snap-mandatory snap-y overflow-y-scroll">
      <Nav refContact={scrollToContact} refFooter={scrollToFooter} />
      <HeroSection refFn={scrollToProjects} />
      <AboutMe />
      <Projects ref={projectRef} />
      <Testinomial />
      <Contact ref={contactRef} />
      <Footer ref={footerRef} />
    </div>
  );
}
