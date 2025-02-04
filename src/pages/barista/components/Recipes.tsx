import { useState } from "react";
import { motion } from "framer-motion";

const recipes = [
  {
    title: "Espresso",
    description:
      "A rich and bold shot of coffee. Made by forcing hot water through finely-ground coffee beans, creating a concentrated and intense flavor.",
    image:
      "https://images.pexels.com/photos/30461243/pexels-photo-30461243/free-photo-of-minimalist-workspace-with-coffee-and-keyboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Cappuccino",
    description:
      "A perfect balance of espresso, steamed milk, and foam. This classic Italian coffee drink has a creamy texture and rich taste, making it a favorite for coffee lovers.",
    image:
      "https://images.pexels.com/photos/11901524/pexels-photo-11901524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Cold Brew",
    description:
      "Smooth and refreshing iced coffee. Made by steeping coarsely ground coffee in cold water for 12-24 hours, producing a less acidic and naturally sweet coffee.",
    image:
      "https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function RecipeSection() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center p-8 pt-20 lg:p-16">
      <h2 className="text-3xl font-semibold">Recipes</h2>
      <p className="text-lg text-gray-400 mb-12">
        Discover my favorite coffee recipes and learn how to make them yourself.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl m-auto"
      >
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </motion.div>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: (typeof recipes)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="border rounded-lg shadow-md p-4 flex flex-col items-center min-h-[340px] bg-gray-800"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">{recipe.title}</h3>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-[180px] object-cover rounded-[4px] mb-4"
      />
      {/* Text Block with Expandable Animation */}
      <motion.div
        className="flex flex-col justify-between flex-grow"
        initial={{ height: "auto" }}
        animate={{ height: expanded ? "auto" : "60px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="text-gray-300 text-center">
          {expanded
            ? recipe.description
            : `${recipe.description.slice(0, 60)}...`}
        </p>
      </motion.div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-500 font-semibold mt-2"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </motion.div>
  );
}
