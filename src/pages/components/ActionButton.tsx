import IButton from "@/@types/button";
import { motion } from "framer-motion";

function ActionButton({ animation, buttonText, cn, onClick: fn }: IButton) {
  return (
    <motion.button
      aria-label="Action Button"
      className={`bg-slate-900 text-white px-6 py-3 rounded-xl shadow-[6px_6px_12px_#0a1120,-6px_-6px_12px_#141c34] hover:shadow-[8px_8px_16px_#0a1120,-8px_-8px_16px_#141c34] transition-all duration-300 transform hover:scale-105 ${
        cn || ""
      } font-bold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-500`}
      {...(animation || {})}
      onClick={fn}
    >
      {buttonText}
    </motion.button>
  );
}

export default ActionButton;
