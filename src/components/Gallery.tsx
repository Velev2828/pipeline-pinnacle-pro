import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const images = Array(7).fill(null).map((_, index) => ({
    id: index + 1,
    alt: `Project ${index + 1}`,
    placeholder: `gallery-image-${index + 1}`
  }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Реални Снимки</h2>
          <p className="text-xl text-muted-foreground">Галерия от снимки от нашите проекти.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="relative overflow-hidden rounded-xl bg-muted h-96 shadow-card hover:shadow-glow transition-smooth cursor-pointer group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    <div className="flex items-center justify-center h-full text-muted-foreground group-hover:text-white transition-smooth">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 bg-muted-foreground/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-smooth">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                          </svg>
                        </div>
                        <p className="text-lg font-medium">{image.placeholder}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">Slide {current} of {images.length}.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;