"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import CarouselCarsDots from "./CarouselCarsDots";

export default function CarouselCars() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
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
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section className="relative pb-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-0 flex-[0_0_auto] w-1/2 px-2">
            <Image
              src="/alfaRomeo.png"
              alt="Image 1"
              width={600}
              height={446}
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-[0_0_auto] w-1/2 px-2">
            <Image
              src="/maserati.png"
              alt="Image 2"
              width={600}
              height={446}
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-[0_0_auto] w-1/2 px-2">
            <Image
              src="/audi.png"
              alt="Image 3"
              width={600}
              height={446}
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-[0_0_auto] w-1/2 px-2">
            <Image
              src="/alfaRomeo.png"
              alt="Image 1"
              width={600}
              height={446}
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-[0_0_auto] w-1/2 px-2">
            <Image
              src="/maserati.png"
              alt="Image 2"
              width={600}
              height={446}
              className="object-cover"
            />
          </div>
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
