import Link from "next/link";

import Hero from "@/components/Hero";
import CarouselCars from "@/components/CarouselCars";
import SearchEngineOptimization from "@/components/SearchEngineOptimization";

export default function Home() {
  return (
    <main className="overflow-hidden" id="top">
      <Hero />
      <div className="mt-20 padding-x max-width" id="discover">
        <div className="flex flex-col gap-6">
          <div className="home__text-container">
            <h3 className="text-primary-blue font-roboto-condensed text-xl">
              Prezentacja firmy
            </h3>
            <p className="text-[40px] leading-[48px] uppercase font-bebas">
              zobacz naszą galerię zdjęć
            </p>
          </div>
          <div className="flex gap-12">
            <Link
              href="#discover"
              className="hover:text-primary-blue hover:underline hover:font-semibold"
            >
              Samochody osobowe
            </Link>
            <Link
              href="#discover"
              className="hover:text-primary-blue hover:underline hover:font-semibold"
            >
              Samochody dostawcze
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 padding-x pb-20 max-width">
        <CarouselCars />
      </div>
      <SearchEngineOptimization />
    </main>
  );
}
