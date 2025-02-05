import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AccentButton";
import Section from "../components/Section";
import { useRef } from "react";
import TestimonialsSection from "./components/Testimonials";
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
        <div className="relative flex flex-col items-center justify-center text-center p-8 lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Warehouse Work Experience
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mb-12">
            Over 4 years of hands-on experience in warehouse management,
            logistics, and operations, with expertise in streamlining inventory
            workflows and leveraging WMS technology.
          </p>
          <AnimatedButton
            buttonText="Contact Me for Opportunities"
            cn="px-6 py-3 bg-blue-600 text-white"
          />
        </div>
      </Section>

      {/* About Experience Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 p-8 lg:p-16">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              4+ Years in Warehouse Operations
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              My journey in warehouse management began with a passion for
              optimizing processes and ensuring seamless logistics. From
              handling inventory to overseeing shipments, I’ve developed
              expertise in:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>Inventory tracking and stock accuracy</li>
              <li>Team supervision and training</li>
              <li>Efficient pallet management</li>
              <li>Order processing and shipping coordination</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-64 lg:h-96">
            <img
              src="/images/warehouse.jpg" // Replace with a warehouse-related image
              alt="Warehouse Experience"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
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
