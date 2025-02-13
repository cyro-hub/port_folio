import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AccentButton";
import Section from "../components/Section";
import { useRef } from "react";
import TestimonialsSection from "./components/Testimonials";
import { motion } from "framer-motion";
import WMSShowcase from "./components/Showcase";

function Warehouse() {
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav refFooter={scrollToFooter} />

      {/* Hero Section */}
      <Section>
        <div className="relative h-full flex flex-col items-center justify-center text-center p-8 lg:p-16">
          <motion.h2
            className="text-6xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Warehouse Work Experience
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-400 mb-12 max-w-[500px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Over 4 years of hands-on experience in warehouse management,
            logistics, and operations, with expertise in streamlining inventory
            workflows and leveraging WMS technology.
          </motion.p>
          <AnimatedButton
            buttonText="Contact Me for Opportunities"
            cn="px-6 py-3 bg-blue-600 text-white"
          />
        </div>
      </Section>

      {/* About Experience Section */}
      <Section>
        <div className="p-8 lg:p-16 flex w-full h-full justify-center items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-200">
              4+ Years in Warehouse Operations
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              My journey in warehouse management began with a passion for
              optimizing processes and ensuring seamless logistics. From
              handling inventory to overseeing shipments, I’ve developed
              expertise in:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-lg">
              <li>Inventory tracking and stock accuracy</li>
              <li>Team supervision and training</li>
              <li>Efficient pallet management</li>
              <li>Order processing</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-64 lg:h-96">
            <img
              src="https://images.pexels.com/photos/2701434/pexels-photo-2701434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with a warehouse-related image
              alt="Warehouse Experience"
              className="object-cover w-full h-full rounded-[4px] shadow-md"
            />
            <div className="absolute bg-black/20 w-full h-full top-0 rounded-[4px] hover:bg-black/5 transition-colors duration-500"></div>
          </div>
        </div>
      </Section>

      {/* WMS Software Showcase */}
      <Section>
        <WMSShowcase />
      </Section>

      {/* Testimonials Section */}
      <Section>
        <TestimonialsSection />
      </Section>

      <Footer ref={footerRef} />
    </div>
  );
}

export default Warehouse;
