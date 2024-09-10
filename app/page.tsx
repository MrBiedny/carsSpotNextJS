import Link from "next/link";

import Hero from "@/components/Hero";
import CarouselCars from "@/components/CarouselCars";
import SearchEngineOptimization from "@/components/SearchEngineOptimization";

export default function Home() {
  const renderLink = function (text: string, href: string) {
    return (
      <Link href={href} className="home__links">
        {text}
      </Link>
    );
  };

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
            {renderLink("Samochody osobowe", "#discover")}
            {renderLink("Samochody dostawcze", "#discover")}
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
