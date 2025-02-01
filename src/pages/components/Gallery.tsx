import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-[45%] "
    >
      <CarouselContent className="mt-1 h-full w-full ">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/1"
          >
            <Card className="bg-transparent">
              <CardContent className="flex items-center justify-center w-full h-full">
                <img
                  src={image}
                  alt={image}
                  className="h-[200px] object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
