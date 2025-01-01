import React from "react";
import { motion } from "framer-motion";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiReact, SiTypescript } from "react-icons/si";
import Section from "./Section";

const AboutMe: React.FC = () => {
  // Define animation variants
  const iconVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <Section>
      <motion.div
        className="flex flex-col justify-center items-center text-center md:text-left w-full h-full md:w-2/3 m-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
          Hi, I'm BONGBUIN CYRIL
        </h2>
        <p className="text-white/80 text-xl sm:text-2xl md:text-3xl font-bold text-center">
          I'm a Full-stack developer specializing in React, TypeScript, Express,
          and MongoDB. I focus on building dynamic, scalable web applications
          with a strong emphasis on performance and user experience.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* Icons with animation */}
          {[
            { Icon: BiLogoMongodb, label: "MongoDB" },
            { Icon: SiExpress, label: "Express" },
            { Icon: SiReact, label: "React" },
            { Icon: RiNodejsLine, label: "Node.js" },
            { Icon: SiTypescript, label: "TypeScript" },
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={label}
              className="text-center border rounded p-4 border-red-100"
              variants={iconVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
            >
              <Icon size="clamp(50px, 10vw, 100px)" />
              <p className="text-sm md:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutMe;
