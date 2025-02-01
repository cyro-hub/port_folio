import IProject from "@/@types/project";
import AnimatedButton from "@/pages/components/AccentButton";
import ClearButton from "@/pages/components/ClearButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ChildProps = {
  positionIndexes: number[];
  setPositionIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  project: IProject;
  index: number;
};

function Project({ positionIndexes, project, index }: ChildProps) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleScreenSizeChanges = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleScreenSizeChanges);

    return () => window.removeEventListener("resize", handleScreenSizeChanges);
  });

  const positions = ["center", "left1", "left", "right", "right1"];
  const positionsSm = ["center", "left", "right", "right", "left"];

  const positionsForLessThanFourProject = ["center", "left", "right"];

  const imageVariantsSm = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-30%", scale: 0.7, zIndex: 3 },
    left1: { x: "-30%", scale: 0.7, zIndex: 3 },
    right: { x: "30%", scale: 0.7, zIndex: 3 },
    right1: { x: "30%", scale: 0.7, zIndex: 3 },
  };

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-45%", scale: 0.7, zIndex: 3 },
    left: { x: "-80%", scale: 0.5, zIndex: 2 },
    right: { x: "80%", scale: 0.5, zIndex: 1 },
    right1: { x: "45%", scale: 0.7, zIndex: 3 },
  };

  return (
    <motion.div
      className="rounded-[10px] bg-cover bg-center bg-no-repeat absolute border border-slate-700/60 shadow-lg bg-slate-700/30 backdrop-blur-md flex"
      initial="center"
      animate={
        screenSize > 1000
          ? positionIndexes.length < 4
            ? positionsForLessThanFourProject[positionIndexes[index]]
            : positions[positionIndexes[index]]
          : positionIndexes.length < 4
          ? positionsForLessThanFourProject[positionIndexes[index]]
          : positionsSm[positionIndexes[index]]
      }
      variants={screenSize > 1000 ? imageVariants : imageVariantsSm}
      transition={{ duration: 0.5 }}
      style={{
        width: `${screenSize > 1000 ? "40%" : "70%"}`,
        height: "70%",
        backgroundImage: `radial-gradient(circle, rgba(15, 23, 42.5,0.2 ) 0%, rgba(15, 23, 42,0.8) 60%),url(${project.images[0]})`,
      }}
    >
      <div className="flex justify-around mt-auto w-full p-4 absolute bottom-[10px]">
        <a href={project.view} target="_blanc">
          <AnimatedButton buttonText="Live" cn={`py-1 px-4`} />
        </a>
        <a href={project.code} target="_blanc">
          <ClearButton buttonText="Code" cn={`py-1 px-4`} />
        </a>
      </div>
    </motion.div>
  );
}

export default Project;
