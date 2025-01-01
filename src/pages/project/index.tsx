// import { useLocation } from "react-router";
// import Section from "../home/components/Section";
// import AnimatedButton from "../components/AccentButton";
// import ClearButton from "../components/ClearButton";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";

// function Project() {
//   const location = useLocation();

//   console.log(location);
//   return (
//     <div className="w-full h-[100vh] scroll-snap-y snap-mandatory snap-y overflow-y-scroll">
//       <Section>
//         <Nav />
//         <div className="flex flex-col mt-20 md:flex-row w-full h-full gap-4 items-center">
//           {/* Left Section */}
//           <div className="flex flex-1 flex-col items-start p-12 gap-6 text-2xl  text-center md:text-left mx-auto md:m-0">
//             <h2 className="text-lg md:text-xl font-bold mb-4">Title</h2>
//             <div className="mb-4 text-sm md:text-base">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Architecto dolorem quis similique reiciendis! Recusandae nostrum
//               saepe totam eius consequatur tempora.
//             </div>
//             <div className="flex justify-around w-full md:w-auto gap-4">
//               <AnimatedButton buttonText="Live" cn={`py-2 px-6`} />
//               <ClearButton buttonText="Code" cn={`py-2 px-6`} />
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex-1 flex items-center justify-center h-full w-full">
//             <Carousel
//               opts={{
//                 align: "start",
//               }}
//               className="w-full max-w-sm md:max-w-md lg:max-w-lg"
//             >
//               <CarouselContent className="flex w-full h-full">
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="flex-shrink-0 w-1 md:w-1/2 lg:w-1/3 p-2"
//                   >
//                     <Card>
//                       <CardContent className="flex items-center justify-center p-4">
//                         <span className="text-xl md:text-2xl lg:text-3xl font-semibold">
//                           {index + 1}
//                         </span>
//                       </CardContent>
//                     </Card>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <CarouselPrevious />
//               <CarouselNext />
//             </Carousel>
//           </div>
//         </div>
//       </Section>
//       <Footer />
//     </div>
//   );
// }

// export default Project;

import { useLocation } from "react-router";
import Section from "../home/components/Section";
import AnimatedButton from "../components/AccentButton";
import ClearButton from "../components/ClearButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Project() {
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="w-full h-[100vh] snap-y snap-mandatory overflow-y-scroll">
      <Section>
        <Nav />
        <div className="flex flex-col mt-20 md:flex-row w-full h-full gap-8 items-center">
          {/* Left Section */}
          <div className="flex flex-1 flex-col items-start p-8 lg:p-12 gap-4 md:gap-6 text-center md:text-left mx-auto md:m-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Title
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto dolorem quis similique reiciendis! Recusandae nostrum
              saepe totam eius consequatur tempora.
            </div>
            <div className="flex justify-around w-full md:w-auto gap-4">
              <AnimatedButton
                buttonText="Live"
                cn="py-2 px-4 md:py-3 md:px-6"
              />
              <ClearButton buttonText="Code" cn="py-2 px-4 md:py-3 md:px-6" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-center h-full w-full">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            >
              <CarouselContent className="flex w-full h-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 p-2"
                  >
                    <Card>
                      <CardContent className="flex items-center justify-center p-4">
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default Project;
