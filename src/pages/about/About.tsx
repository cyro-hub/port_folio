import { motion } from "framer-motion";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useNavigate } from "react-router";
import { useRef } from "react";

function About() {
  const contactRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const scrollToSection = () => {
    navigate("/", { replace: true, state: { contactRef } }); // Navigate to home page
  };

  return (
    <div className="w-full h-[100vh] scroll-snap-y snap-mandatory snap-y overflow-y-scroll">
      {/* Introduction Section */}
      <Nav refFn={scrollToSection} />
      <Section>
        <div className="text-white m-auto h-full flex flex-col justify-center max-w-4xl p-6 lg:p-12 text-center">
          {/* Heading */}
          <motion.h1
            className="text-4xl lg:text-5xl font-bold flex flex-col gap-4 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm
            <span className="text-yellow-400 text-5xl">
              BONGBUIN CYRIL MENTAN
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A passionate software developer with over 4 years of experience in
            web development, WMS, and creating user-friendly digital solutions.
          </motion.p>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <div className="text-white max-w-6xl p-6 lg:p-12 m-auto h-full flex flex-col justify-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg lg:text-xl mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I started my career as a warehouse assistant, where I became
            fascinated with improving efficiency through software solutions.
            Over the years, I’ve mastered WMS, built full-stack web
            applications, and led projects to enhance inventory management.
          </motion.p>

          {/* Animated Timeline */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              className="p-4 border-l-4 border-blue-600 bg-gray-800 rounded-md"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className="font-bold text-lg">2018</h3>
              <p>
                Started as a warehouse assistant, gaining hands-on experience in
                inventory management.
              </p>
            </motion.div>
            <motion.div
              className="p-4 border-l-4 border-blue-600 bg-gray-800 rounded-md"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className="font-bold text-lg">2020</h3>
              <p>
                Developed custom WMS software to streamline warehouse
                operations.
              </p>
            </motion.div>
            <motion.div
              className="p-4 border-l-4 border-blue-600 bg-gray-800 rounded-md"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className="font-bold text-lg">2022</h3>
              <p>
                Transitioned into full-time software development, building web
                and mobile apps with React, Node.js, and more.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <div className="text-white max-w-4xl p-6 lg:p-12 m-auto h-full flex flex-col justify-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What I Bring to the Table
          </motion.h2>

          {/* Animated Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              "Web Development",
              "WMS & CMS Expertise",
              "API Integration",
              "React & TypeScript",
              "Performance Optimization",
              "Team Collaboration",
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="p-4 border border-gray-500 rounded-lg text-center"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
