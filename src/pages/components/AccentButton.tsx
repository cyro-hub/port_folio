import { motion } from "framer-motion";
import IButton from "../../@types/button";

const AnimatedButton = ({ buttonText, cn, onClick: fn }: IButton) => {
  const buttonAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.6, duration: 0.5 },
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={fn}
      {...buttonAnimation}
      className={`relative rounded inline-block px-6 py-3 font-bold text-slate-700 bg-yellow-400 overflow-hidden group ${cn}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute inset-0 border-2 border-yellow-500 rounded group-hover:border-slate-700 transition-colors duration-300"></span>
      <span className="relative">{buttonText}</span>
    </motion.button>
  );
};

export default AnimatedButton;
