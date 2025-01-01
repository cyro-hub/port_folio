import { Facebook01Icon, Github01Icon } from "hugeicons-react";
import { motion } from "framer-motion";
import Section from "../home/components/Section";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section bgImage="some text">
      <footer className="w-full h-full flex text-gray-400 mt-auto">
        <div className="container mt-auto mx-auto p-8 px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-4xl">B</span>ONGSCO
          </motion.div>

          {/* Animated Year Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className=" text-sm">
              {currentYear} - Bongs'co, All rights reserved
            </p>
          </motion.div>

          {/* Animated Social Icons */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#" className=" hover:text-blue-500">
              <Facebook01Icon size={24} />
            </a>
            <a href="#" className=" hover:text-blue-500">
              <Github01Icon />
            </a>
          </motion.div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
