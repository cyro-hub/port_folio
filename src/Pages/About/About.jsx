/** @format */

import React from "react";
import { Footer, Nav } from "../Home/Home";
import "./about.scss";
import { motion } from "framer-motion";

const initial = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function About() {
  return (
    <div className='about-container'>
      <Nav active='about' />
      <motion.div
        className='details'
        variants={initial}
        initial='hidden'
        animate='visible'
        transition={{ ease: "easeInOut", duration: 1 }}>
        <p>
          I am a skilled web developer with a passion for creating dynamic and
          engaging web applications. With expertise in{" "}
          <strong>
            HTML, CSS, Javascript, Typescript, React JS, Express js for backend
            and mongodb for database. Git for version control
          </strong>
          , I am committed to working and learning on my own.
        </p>
        <p>
          My interest in web development started during my college years, where
          I studied computer science and discovered my love for coding. Since
          then, I kept working and trying to produce websites, ranging from
          building real estate websites to expense tracking app.
        </p>
        <p>
          Besides my technical skills, I pride myself on being an excellent
          communicator and collaborator. My ability to explain technical
          concepts in plain language helps in making other people around me to
          understand
        </p>
        <p>
          When I'm not coding, I enjoy playing sports, traveling, and reading.
          I'm always looking for new ways to challenge myself and learn new
          skills, both personally and professionally.
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}

export default About;
