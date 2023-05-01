import React, { useEffect, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { Footer, Nav } from "../Home/Home";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PropagateLoader from "react-spinners/PropagateLoader";
import Alert from "@mui/material/Alert";

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

var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const [isSucceed, setIsSucceed] = useState(false);
  const [isInputting, setIsInputting] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleOnFocusInput = (e) => {
    setIsInputting({ ...isInputting, [e.target.name]: false });
  };

  const handleOnBlurInput = (e) => {
    setIsInputting({ ...isInputting, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in contact) {
      if (contact[key] == "") {
        setWarning(`Fill in you ${key}`);
        return;
      }
    }

    if (!contact.email.match(emailPattern)) {
      setWarning("Your email is in an incorrect format");
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_4739ts3",
        "template_n0t4tca",
        { ...contact },
        "Lu_0VagJieN825LLE"
      )
      .then(
        ({ status, text }) => {
          if (status == 200 && text == "OK") {
            setIsSucceed(true);
          }
          setIsLoading(false);
          setContact({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsLoading(false);
          setWarning(error.message);
        }
      );
  };

  const clear = () => setContact({ name: "", email: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarning("");
      setIsSucceed(false);
    }, 4000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="contact-container">
        <Nav active="contact" />
        <main>
          <motion.form
            variants={initial}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 1 }}>
            <motion.div
              className="input-container"
              animate={{ y: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{
                duration: 2,
                type: "bounce",
              }}>
              <h2>Contact Bartley</h2>
            </motion.div>
            <motion.div
              className="input-container"
              animate={{ y: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{
                duration: 2,
                type: "bounce",
              }}>
              {warning && (
                <motion.p
                  variants={initial}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="warning">
                  {warning}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              className="input-container"
              animate={{ y: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{
                duration: 2,
                type: "bounce",
              }}>
              {isInputting?.email && (
                <motion.p
                  variants={initial}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeInOut", duration: 1 }}>
                  Email
                </motion.p>
              )}
              <div className="input">
                <input
                  type="text"
                  name="email"
                  onFocus={handleOnFocusInput}
                  onBlur={handleOnBlurInput}
                  value={contact.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </motion.div>
            <motion.div
              className="input-container"
              animate={{ y: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{
                duration: 2,
                type: "bounce",
              }}>
              {isInputting?.name && (
                <motion.p
                  variants={initial}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeInOut", duration: 1 }}>
                  Name
                </motion.p>
              )}
              <div className="input">
                <input
                  type="text"
                  name="name"
                  onFocus={handleOnFocusInput}
                  onBlur={handleOnBlurInput}
                  value={contact.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </motion.div>
            <motion.div
              className="input-container"
              animate={{ y: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{
                duration: 2,
                type: "bounce",
              }}>
              {isInputting?.message && (
                <motion.p
                  variants={initial}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeInOut", duration: 1 }}>
                  Message
                </motion.p>
              )}
              <div className="input">
                <textarea
                  name="message"
                  cols="35"
                  rows="10"
                  value={contact.message}
                  onChange={handleChange}
                  onFocus={handleOnFocusInput}
                  onBlur={handleOnBlurInput}></textarea>
              </div>
            </motion.div>
            <motion.div
              className="input-container"
              animate={{ y: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{
                duration: 2,
                type: "bounce",
              }}>
              <div className="actions">
                <Link
                  to=""
                  className="action-hire"
                  onClick={isLoading ? null : handleSubmit}>
                  {isLoading ? (
                    <span>
                      <PropagateLoader
                        color={"rgb(0, 26, 44)"}
                        loading={true}
                        size={5}
                      />
                    </span>
                  ) : (
                    <span>Send</span>
                  )}
                </Link>
                <Link to="" className="action-talk" onClick={clear}>
                  <span>Clear</span>
                </Link>
              </div>
            </motion.div>
          </motion.form>
          <motion.div
            variants={initial1}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 1 }}
            className="image-cover"></motion.div>
        </main>
        <Footer />
        {isSucceed ? (
          <div className="alert">
            <Alert severity="success">
              Thank you for you feedback. nice day!!!
            </Alert>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Contact;
