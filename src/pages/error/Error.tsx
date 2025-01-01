import { Link } from "react-router";
import { motion } from "framer-motion";
import Section from "../home/components/Section";

function Error() {
  return (
    <Section bgImage="no-image">
      <div className="w-full h-screen flex flex-col justify-center items-center text-center">
        {/* Animated Error Icon */}
        <motion.div
          className="mb-8"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <img
            src="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with a suitable error icon
            alt="Error Icon"
            className="w-40 h-32"
          />
        </motion.div>

        {/* Error Message */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Oops! Something Went Wrong.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
          The page you're looking for doesn't exist, or an error occurred. But
          don't worry, we've got your back!
        </p>

        {/* Interactive Buttons */}
        <div className="flex space-x-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500"
            >
              Go Home
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-md hover:bg-gray-200"
            >
              Contact Support
            </motion.button>
          </Link>
        </div>

        {/* Animated Decorative Element */}
        <motion.div
          className="absolute bottom-8 w-24 h-24 bg-blue-500 rounded-full blur-lg opacity-40"
          animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
      </div>
    </Section>
  );
}

export default Error;
