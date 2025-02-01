import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AccentButton";
import Section from "../components/Section";
import { useRef } from "react";
import useGetImages from "@/hooks/useGetImages";
import Gallery from "../components/Gallery";
// import TikTokEmbed from "react-tiktok-embed";

function Barista() {
  const coffeeShowcase = [
    {
      title: "Latte Art Creations",
      description:
        "Crafting intricate latte art, from hearts to intricate rosettas and tulip designs.",
      image: "/images/latte-art.jpg", // Replace with your image paths
      video: null,
    },
    {
      title: "Perfect Espresso Shots",
      description:
        "Mastering the art of pulling the perfect espresso shot with a rich crema.",
      image: "/images/espresso-shot.jpg",
      video: null,
    },
  ];

  const reels = [
    {
      platform: "TikTok",
      embedUrl:
        "https://www.tiktok.com/@cyrilmentan/video/7461938455128460551?is_from_webapp=1&sender_device=pc",
    },
    {
      platform: "YouTube",
      embedUrl: "https://www.youtube.com/embed/sampleVideo2", // Replace with YouTube embed links
    },
  ];

  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { images } = useGetImages("barista latte arts");

  // console.log(images);

  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav refFooter={scrollToFooter} />
      {/* Hero Section */}

      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div className="relative flex flex-col items-center justify-center mt-24 text-center p-8 lg:p-16 bg-gradient-to-b from-brown-200 via-brown-100 to-white h-[92%]">
          {/* Hero Content */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10">
            Welcome to Barista
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
            Discover the art of coffee, one cup at a time.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="py-3 px-6 hover:bg-yellow-500/50 bg-yellow-500 text-slate-900 rounded-[2px] hover:bg-brown-700 transition duration-200">
              View My Recipes
            </button>
            <button className="py-3 px-6 bg-transparent border-2 border-yellow-500 text-brown-600 rounded-[2px] hover:bg-brown-600 hover:text-white text-yellow-500 transition duration-200">
              Watch My Reels
            </button>
          </div>
        </div>
      </Section>

      {/* Coffee Showcase Section */}
      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div className="flex flex-col h-full w-full items-center text-center p-8 lg:p-16">
          <h2 className="text-3xl font-semibold mb-8">Coffee Showcase</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            {coffeeShowcase?.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-6 flex flex-col"
              >
                {/* {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md mb-4 h-48 w-full object-cover"
                  />
                  )} */}
                <Gallery images={images}/>
                {/* {item.video && (
                  <iframe
                    className="rounded-md mb-4 w-full aspect-video"
                    src={item.video}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )} */}
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {/* <AnimatedButton
                  buttonText="Learn More"
                  cn="py-2 px-4 text-white"
                  onClick={() => alert(`Exploring ${item.title}!`)}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Reels Section */}
      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div className="flex flex-col items-center text-center p-8 lg:p-16">
          <h2 className="text-3xl font-semibold mb-8">Reels</h2>
          <p className="text-lg text-gray-600 mb-12">
            Explore my coffee-making journey through TikTok and YouTube reels.
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
            {reels.map((reel, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {reel.platform} Reel
                </h3>
                <iframe
                  className="rounded-md w-full aspect-video"
                  src={
                    "https://www.tiktok.com/@cyrilmentan/video/7014473101433949441?is_from_webapp=1&sender_device=pc&web_id=7454972553682880005"
                  }
                  title={`${reel.platform} Reel`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section bgImage="https://images.pexels.com/photos/12438912/pexels-photo-12438912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div className="flex flex-col items-center text-center p-8 lg:p-16 bg-gray-100">
          <h2 className="text-3xl font-semibold mb-8">Ready to Collaborate?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's create something amazing together. Whether it's a private
            coffee workshop, a custom recipe, or an event, I'm here to brew the
            perfect experience.
          </p>
          <AnimatedButton buttonText="Get in Touch" cn="py-3 px-6 text-white" />
        </div>
      </Section>
      <Footer ref={footerRef} />
    </div>
  );
}

export default Barista;
