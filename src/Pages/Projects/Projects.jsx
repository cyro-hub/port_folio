import React, { useState } from "react";
import { Footer, Nav } from "../Home/Home";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import background from "../../assets/Background/background.png";
import "./projects.scss";
import "@splidejs/react-splide/css";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import ProjectData from "../Data/Projects";
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

function Projects() {
  const [projectNumber, setProjectNumber] = useState(1);
  return (
    <div className="project-container">
      <Nav active="projects" />
      <div className="projects">
        <Project {...ProjectData[projectNumber - 1]} />
      </div>
      <CustomizedPagination
        count={ProjectData?.length}
        onChange={(e, v) => setProjectNumber(v)}
        page={projectNumber}
        color="primary"
        sx={{ marginInline: "auto" }}
      />
      <Footer />
    </div>
  );
}

export default Projects;

const Project = ({ title, description, view, code, images }) => {
  return (
    <>
      <div className="project">
        <motion.div
          variants={initial}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
          className="details">
          <h3>{title}</h3>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="actions">
            <a href={view} className="action-hire" target="_blank">
              View Live
            </a>
            <a href={code} className="action-talk" target="_blank">
              Code
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={initial1}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
          className="project-images">
          <Splide
            options={{
              rewind: true,
              perPage: 1,
              gap: "1rem",
              arrows: false,
              drag: "free",
              cancelable: false,
            }}>
            {images?.map((url, i) => (
              <SplideSlide key={i}>
                <Image url={url} />
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </div>
    </>
  );
};

const Image = ({ url }) => {
  return (
    <>
      <img src={url} alt="background" />
      <div className="image-cover"></div>
    </>
  );
};

export const CustomizedPagination = styled(Pagination)`
  margin: 1em auto;
  button {
    color: #ffffffbf;
    border-color: #ffffffbf;
  }

  button:hover {
    color: #ffffff80;
  }
`;
