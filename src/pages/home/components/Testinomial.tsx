import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imageUrl from "@/assets/about-me-image.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, ABC Corp",
    text: "An absolute pleasure to work with! Delivered beyond expectations.",
  },
  {
    name: "Sarah Smith",
    role: "Manager, XYZ Ltd",
    text: "Highly skilled and professional. Made the entire process seamless!",
  },
  {
    name: "David Brown",
    role: "Founder, StartUp Inc",
    text: "Incredible attention to detail and top-notch service. Highly recommend!",
  },
];

function Testinomial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen max-w-[1500px] m-auto flex items-center justify-center scroll-snap-align-start snap-center">
      <div
        className="section-content rounded-2xl bg-cover bg-center bg-no-repeat w-full h-full relative flex items-center justify-center flex-col"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15, 23, 42.5,0.6 ) 0%, rgba(15, 23, 42,0.9) 30%, rgb(15, 23, 42) 60%),url(${imageUrl})`,
        }}
      >
        <motion.div
          className="w-full max-w-2xl p-8 rounded shadow-lg bg-slate-700/30 backdrop-blur-md border border-white/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg text-yellow-400 text-bold pb-4">
            What Clients Say
          </h2>
          <FaQuoteLeft className="text-4xl text-blue-100 mb-4" />
          <p className="text-lg text-gray-400">{testimonials[index].text}</p>
          <div className="mt-4 font-semibold text-yellow-400/50">
            {testimonials[index].name}
          </div>
          <div className="text-gray-500 text-sm">
            {testimonials[index].role}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testinomial;
