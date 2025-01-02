import { Link } from "react-router"; // Updated to match your setup
import { motion } from "framer-motion";
import Section from "../components/Section";

function Error() {
  return (
    <Section>
      <section className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Hero Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Icon */}
          <motion.div
            className="mb-8"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <img
              src="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Error Icon"
              className="w-40 h-32 mx-auto"
            />
          </motion.div>

          {/* Main Message */}
          <h1 className="text-5xl font-bold text-gray-300 mb-4">Oops!</h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Something went wrong. It seems the page you're looking for doesn't
            exist or is currently unavailable.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500"
            >
              Go to Homepage
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>

        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        >
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl top-10 left-10 opacity-20"></div>
          <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl bottom-20 right-20 opacity-20"></div>
        </motion.div>

        {/* Animated Decorative Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg
            className="absolute w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="#9CA3AF"
              strokeWidth="0.5"
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke="#9CA3AF"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </section>
    </Section>
  );
}

export default Error;
