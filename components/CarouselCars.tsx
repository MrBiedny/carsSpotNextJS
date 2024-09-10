"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import CarouselCarsDots from "./CarouselCarsDots";

export default function CarouselCars() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(
    function () {
      const onSelect = () => {
        if (emblaApi) {
          setSelectedIndex(emblaApi.selectedScrollSnap());
        }
      };

      if (emblaApi) {
        emblaApi.on("select", onSelect);
        onSelect();
      }

      return () => {
        if (emblaApi) {
          emblaApi.off("select", onSelect);
        }
      };
    },
    [emblaApi]
  );

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const renderImage = function (src: string, alt: string) {
    return (
      <div className="carousel__image-container">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={446}
          className="object-cover"
        />
      </div>
    );
  };

  return (
    <section className="relative pb-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {renderImage("/alfaRomeo.png", "Alfa Romeo")}
          {renderImage("/maserati.png", "Maserati")}
          {renderImage("/audi.png", "Audi")}
          {renderImage("/alfaRomeo.png", "Alfa Romeo")}
          {renderImage("/maserati.png", "Maserati")}
        </div>
      </div>
      <CarouselCarsDots
        selectedIndex={selectedIndex}
        onDotClick={scrollTo}
        count={5}
      />
    </section>
  );
}
