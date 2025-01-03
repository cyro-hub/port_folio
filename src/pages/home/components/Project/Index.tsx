import imageUrl from "@/assets/about-me-image.jpg";
import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Project from "./components/Project";
import ActionButton from "@/pages/components/ActionButton";
import generateSeriesOfNumbers from "@/utils/generateArrayOfNumbers";
import projects from "@/data/projects";
import IProject from "@/@types/project";
import SomeErrorCorrector from "@/pages/components/SomeErrorCorrector";

const Projects = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [positionIndexes, setPositionIndexes] = useState(
    generateSeriesOfNumbers(projects.length)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positionIndexes.length
      );
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map(
        (prevIndex) =>
          (prevIndex + positionIndexes.length - 1) % positionIndexes.length
      );
    });
  };

  useEffect(() => {
    generateSeriesOfNumbers(projects.length);
  }, [projects]);

  return (
    <section
      ref={ref}
      className="relative h-screen max-w-[1500px] m-auto flex items-center justify-center scroll-snap-align-start snap-center"
    >
      <div
        className="section-content rounded-2xl bg-cover bg-center bg-no-repeat w-full h-full relative flex items-center justify-center"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15, 23, 42.5,0.6 ) 0%, rgba(15, 23, 42,0.9) 30%, rgb(15, 23, 42) 60%),url(${imageUrl})`,
        }}
      >
        <motion.div
          className="relative flex w-full h-full justify-center items-center cursor-grab m-auto"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 50) {
              handleBack();
            } else if (info.offset.x < -50) {
              handleNext();
            }
          }}
        >
          {projects.map((project: IProject, index: number) => (
            <Project
              positionIndexes={positionIndexes}
              setPositionIndexes={setPositionIndexes}
              index={index}
              project={project}
              key={index}
            />
          ))}
        </motion.div>
        <div className="flex flex-row gap-3 absolute bottom-10">
          <ActionButton buttonText="Prev" onClick={handleBack} />
          <ActionButton buttonText="Next" onClick={handleNext} />
        </div>
      </div>
      <SomeErrorCorrector />
    </section>
  );
});

export default Projects;
