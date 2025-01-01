import React, { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading: React.FC = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === 3 ? 0 : prevDots + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-500 select-none">
      <div className="spinner gap-4 flex flex-col items-center justify-center">
        <AiOutlineLoading size={50} className="spin-animation" />
        <span>Loading {".".repeat(dots)}</span>
      </div>
    </div>
  );
};

export default Loading;
