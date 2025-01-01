import { motion } from "framer-motion";
import IButton from "../../@types/button";
import { UseFormReturn } from "react-hook-form";

const ClearButton = ({
  buttonText,
  cn,
  form,
  onClick: fn,
}: IButton & {
  form?: UseFormReturn<any>;
}) => {
  const buttonAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.6, duration: 0.5 },
  };

  function handleClear() {
    form?.reset();
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      {...buttonAnimation}
      className={`relative rounded inline-block px-6 py-3 text-white bg-transparent overflow-hidden group ${cn}`}
      type="button"
      onClick={form ? handleClear : fn}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute inset-0 border-2 border-white/5 rounded group-hover:border-slate-700 transition-colors duration-300"></span>
      <span className="relative flex items-center justify-center gap-2">
        {buttonText}
      </span>
    </motion.button>
  );
};

export default ClearButton;
