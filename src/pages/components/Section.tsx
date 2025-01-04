import React, { useEffect, useState } from "react";
import imageUrl from "@/assets/about-me-image.jpg";
import SomeErrorCorrector from "./SomeErrorCorrector";

const Section: React.FC<{ children: React.ReactNode; bgImage?: string }> = ({
  children,
  bgImage,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage || imageUrl;
    img.onload = () => setLoaded(true);
  }, [imageUrl]);

  return (
    <section className="relative h-screen max-w-[1500px] m-auto flex items-center justify-center scroll-snap-align-start snap-center">
      <div
        className="section-content rounded-2xl bg-cover bg-center bg-no-repeat w-full h-full relative"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15, 23, 42.5,0.6 ) 0%, rgba(15, 23, 42,0.9) 30%, rgb(15, 23, 42) 60%),url(${
            loaded && (bgImage || imageUrl)
          })`,
        }}
      >
        {children}
        {/* Closing component */}
        <SomeErrorCorrector />
      </div>
    </section>
  );
};

export default Section;
