import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const reels = [
  {
    title: "Testing a new Eureka Grinder",
    description:
      "Exploring the features of the Eureka Grinder for a more consistent grind.",
    image:
      "https://images.pexels.com/photos/5825362/pexels-photo-5825362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image paths
    video:
      "https://www.tiktok.com/@cyrilmentan/video/7461938455128460551?is_from_webapp=1&sender_device=pc",
  },
  {
    title: "Getting perfect espresso shot",
    description:
      "Mastering the art of pulling a perfect espresso shot for a rich crema.",
    image:
      "https://images.pexels.com/photos/16704791/pexels-photo-16704791/free-photo-of-coffee-in-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video:
      "https://www.tiktok.com/@cyrilmentan/video/7466785011585404168?is_from_webapp=1&sender_device=pc&web_id=7454972553682880005",
  },
];

const ReelsSection = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center p-8 pt-20 lg:p-16">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Coffee Reels
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore my coffee-making journey through TikTok and YouTube reels.
      </motion.p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl m-auto">
        {reels.map((reel, index) => (
          <motion.div
            key={index}
            className="border bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {reel.title}
            </h3>
            <div className="relative group">
              <LazyLoadImage
                alt={reel.title}
                src={reel.image}
                className="w-full h-64 object-cover rounded-lg"
                effect="black-and-white"
              />
              {/* <motion.a
                href={reel.video}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-black rounded-[4px] flex items-center justify-center text-yellow-400 text-xl font-semibold"
              /> */}
            </div>
            <p className="text-gray-300 text-lg mt-4">{reel.description}</p>
            <motion.a
              href={reel.video}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              Watch the full reel
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReelsSection;
