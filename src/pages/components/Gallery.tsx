import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[500px] m-auto">
      {/* Main Image Gallery */}
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/1">
              <Card
                className="bg-transparent border-none cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <CardContent className="relative flex items-center justify-center">
                  <div className="w-full h-full">
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-contain rounded-[4px] transition-transform hover:scale-150"
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-black/30 rounded-[4px]"></div> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Full-screen modal */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={() => setSelectedIndex(null)}
      >
        <DialogContent className="flex items-center border-none justify-center w-[95%] h-[95%] bg-black/80">
          {/* Image Carousel inside Modal */}
          <Carousel
            opts={{ align: "center", loop: true }}
            className="w-[80vw] max-w-[1280px] h-[90vh] max-h-[1000px] flex items-center justify-center"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Full-size Image ${index + 1}`}
                    className="w-[90vw] h-[90vh] object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
