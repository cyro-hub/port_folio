import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { motion } from "framer-motion";

const initial = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const initial1 = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function Home() {
  return (
    <>
      <div className="home-container">
        <Nav active="home" />
        <div className="welcome">
          <motion.div
            variants={initial}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 1 }}
            className="intro">
            <h1>Hi, I'm CHRIS BARTLEY</h1>
            <h3>Web Developer</h3>
            <p>
              I'm Chris Bartley, a skilled web developer proficient in HTML,
              CSS, React JS, C#, and SQL. With a passion for creating dynamic
              and user-friendly web applications, I'm committed to delivering
              exceptional results for your project.
            </p>
            <div className="actions">
              <a href="mailto: bartleyc935@gmail.com" className="action-hire">
                Hire me
              </a>
              <Link to="/contact" className="action-talk">
                Let's talk
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={initial1}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 1 }}
            className="image-cover"></motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

export const Footer = () => {
  return (
    <div className="footer">
      {/* <a href="" target="blank">
        <FaFacebookF size={18} />
      </a> */}
      <a
        href="https://www.linkedin.com/in/chris-bartley-11750b274/"
        target="blank">
        <FaLinkedinIn size={18} />
      </a>
      <a href="https://github.com/cyro-hub" target="blank">
        <FaGithub size={18} />
      </a>
      {/* <a href="" target="blank">
        <FaInstagram size={18} />
      </a> */}
    </div>
  );
};

export const Nav = ({ active }) => {
  const [size, setSize] = useState(window.innerWidth);

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const sizeChecker = () => setSize(window.innerWidth);

  const handleShowMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    window.addEventListener("resize", sizeChecker);

    return () => window.removeEventListener("resize", sizeChecker);
  });
  return (
    <div className="nav">
      <h3 onClick={() => navigate("/")}>Bartley</h3>
      {size > 645 ? (
        <div className="nav-links">
          <Link to="/" className={active === "home" ? "active" : null}>
            Home
          </Link>
          <Link to="/about" className={active === "about" ? "active" : null}>
            About
          </Link>
          {/* <Link to='/services' className={active==='services'?'active':null}>Services</Link> */}
          <Link
            to="/projects"
            className={active === "projects" ? "active" : null}>
            Projects
          </Link>
          <Link
            to="/contact"
            className={active === "contact" ? "active" : null}>
            Contact
          </Link>
        </div>
      ) : (
        <>
          {showMenu ? (
            <>
              <motion.div
                variants={initial}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: 1 }}
                className="nav-links-hamburger">
                <Link to="/" className={active === "home" ? "active" : null}>
                  Home
                </Link>
                <Link
                  to="/about"
                  className={active === "about" ? "active" : null}>
                  About
                </Link>
                {/* <Link to='/services' className={active==='services'?'active':null}>Services</Link> */}
                <Link
                  to="/projects"
                  className={active === "project" ? "active" : null}>
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className={active === "contact" ? "active" : null}>
                  Contact
                </Link>
              </motion.div>
              <BiExit size={22} className="exit" onClick={handleShowMenu} />
            </>
          ) : (
            <>
              <BiExit size={22} className="reverse" onClick={handleShowMenu} />
            </>
          )}
        </>
      )}
    </div>
  );
};
