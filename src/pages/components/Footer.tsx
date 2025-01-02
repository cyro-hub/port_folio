import { Github01Icon, Linkedin01Icon } from "hugeicons-react";
import { motion } from "framer-motion";
import Section from "./Section";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section bgImage="hj">
      <footer className="w-full lg:w-[80%] h-full flex text-gray-400 mt-auto mx-auto">
        <div className="relative bg-white/5 container mt-auto mx-auto p-8 px-12 justify-between items-center space-y-10">
          {/* <div className="bg-white/5 absolute h-full w-full"></div> */}
          <motion.div
            className="text-white mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Experience Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <ul className="text-gray-400 space-y-1 text-md">
                  <li>4+ years in Web Development</li>
                  <li>Expertise in WMS and CMS systems</li>
                  <li>Proven track record in React and TypeScript</li>
                  <li>API integrations for seamless workflows</li>
                </ul>
              </motion.div>

              {/* FAQs Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">FAQs</h3>
                <ul className="text-gray-400 space-y-1 text-md">
                  <li>
                    <strong>Q:</strong> Do you work with teams?
                    <br />
                    <strong>A:</strong> Yes, I thrive in collaborative
                    environments.
                  </li>
                  <li>
                    <strong>Q:</strong> What technologies do you specialize in?
                    <br />
                    <strong>A:</strong> React, TypeScript, Node.js, and MongoDB.
                  </li>
                  <li>
                    <strong>Q:</strong> Are you available for freelance
                    projects?
                    <br />
                    <strong>A:</strong> Yes, feel free to contact me for
                    opportunities.
                  </li>
                </ul>
              </motion.div>

              {/* About Me Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">About Me</h3>
                <p className="text-gray-400 space-y-1 text-md">
                  I'm a passionate developer with a focus on creating scalable
                  and user-friendly software solutions. From warehouse
                  management to interactive web applications, I aim to deliver
                  exceptional results.
                </p>
              </motion.div>
            </div>
          </motion.div>
          {/* Animated Logo */}
          <div className="w-full h-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
              <a
                href="https://www.linkedin.com/in/bongbuin-cyril-mentan-11750b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className=" hover:text-blue-500"
                target="_blanc"
              >
                <Linkedin01Icon size={24} />
              </a>
              <a
                href="https://github.com/cyro-hub"
                className=" hover:text-blue-500"
                target="blanc"
              >
                <Github01Icon />
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
