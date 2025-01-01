import { motion } from "framer-motion";
import AnimatedButton from "@/pages/components/AccentButton";
import Section from "./Section";

const HeroSection = () => {
  return (
    <Section>
      {" "}
      <motion.div
        className="flex flex-col justify-center text-center m-auto h-full max-w-screen-lg px-6 md:px-12"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I'm a
        </motion.h1>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          FULL STACK SOFTWARE DEVELOPER
        </motion.h1>
        <AnimatedButton
          buttonText="Projects"
          cn={`max-w-60 mx-auto w-60 text-[1.25em]`}
        />
      </motion.div>
    </Section>
  );
};

export default HeroSection;
