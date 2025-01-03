import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AccentButton";
import { Link } from "react-router";

interface NavProps {
  refFn?: () => void;
}

const Nav: React.FC<NavProps> = ({ refFn }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    { name: "Services", uri: "/services" },
    { name: "Blogs", uri: "/blogs" },
    { name: "About", uri: "/about" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <motion.nav
      className="p-4 fixed top-6 left-0 w-[100vw] z-50 bg-transparent"
      variants={navVariants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-blue-400"
          whileHover={{
            scale: 1.1, // Slight zoom effect
            rotate: 2, // Slight rotation
            transition: { duration: 0.3 }, // Smooth hover transition
          }}
        >
          <Link to="/">
            <span className="text-4xl">B</span>ONGSCO
          </Link>
        </motion.div>

        {/* Menu Items - Desktop */}
        <ul className="hidden md:flex gap-8 text-sm uppercase font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.uri}>
                <motion.div
                  className="hover:text-blue-400 cursor-pointer"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }} // Hover animation for menu items
                >
                  {item.name}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-blue-400 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <AnimatedButton
          animation={buttonAnimation}
          buttonText="Contact"
          cn="hidden md:flex py-2 px-4"
          onClick={refFn && (() => refFn())} // Call refFn without passing a ref
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-center mt-4 text-sm uppercase font-medium p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/4 backdrop-blur-lg border border-white/20">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.uri}>
                <div
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu after selection
                >
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
          <AnimatedButton
            buttonText="Contact"
            onClick={refFn && (() => refFn())} // Call refFn without passing a ref
          />
        </ul>
      )}
    </motion.nav>
  );
};

export default Nav;
