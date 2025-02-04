import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const coffeeShowcase = [
  {
    title: "Latte Art Creations",
    description:
      "Crafting intricate latte art, from hearts to intricate rosettas and tulip designs.",
    image:
      "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image paths
    video: null,
  },
  {
    title: "Perfect Espresso Shots",
    description:
      "Mastering the art of pulling the perfect espresso shot with a rich crema.",
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video: null,
  },
];

const CoffeeShowcase = () => {
  //   const { images } = useGetImages("barista latte arts");
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center p-8 pt-20 lg:p-16">
      <h2 className="text-3xl font-semibold">Coffee Showcase</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl overflow-y-auto m-auto">
        {coffeeShowcase?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border min-w-[210px] max-h-[500px] rounded-lg shadow-md p-6 flex flex-col"
          >
            <LazyLoadImage
              alt={item.title}
              src={item.image}
              className="w-full h-64 object-cover rounded-lg mb-4"
              effect="black-and-white"
              height={200} // Define image height for proper loading
            />
            <h3 className="text-2xl font-semibold mb-4 text-white/90">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xl mb-4 overflow-hidden text-ellipsis">
              {item.description}
            </p>

            <motion.button
              className="py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            //   onClick={() => alert(`Exploring ${item.title}!`)}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShowcase;
