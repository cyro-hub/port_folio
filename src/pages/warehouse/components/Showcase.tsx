import AnimatedButton from "@/pages/components/AccentButton";
import { motion } from "framer-motion";

const WMSShowcase = () => {
  return (
    <div className="p-8 lg:p-16">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Showcasing My WMS Software
      </motion.h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Software Image */}
        <motion.div
          className="relative w-full h-64 lg:h-96"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/wms-software.jpg"
            alt="WMS Software"
            className="object-contain w-full h-full rounded-lg shadow-md"
          />
        </motion.div>

        {/* Software Features */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700 text-lg mb-4">
            My custom-built WMS software is designed to revolutionize inventory
            workflows with features like:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Real-time inventory updates</li>
            <li>Barcode and QR code scanning</li>
            <li>Order and shipment tracking</li>
            <li>Custom reporting tools</li>
          </ul>
          <AnimatedButton
            buttonText="Learn More About My Software"
            cn="px-6 py-3 bg-blue-600 text-white mt-4"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WMSShowcase;
