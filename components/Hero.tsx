import Image from "next/image";

import CustomButton from "./CustomButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex-1 py-[120px] padding-x">
        <h1 className="hero__title">SPRZEDAJEMY SAMOCHODY Z EUROPY</h1>
        <p className="hero__subtitle">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <div className="flex gap-6 z-10 relative">
          <Link
            href="#discover"
            className="bg-primary-blue text-white rounded-md mt-10 px-6 py-3"
          >
            Zobacz zdjęcia
          </Link>
          <CustomButton
            title="Zadzwoń do nas"
            containerStyles="border-2 border-primary-blue text-primary-blue rounded-md mt-10 px-5 py-3"
          />
        </div>
      </div>
      <div className="hero__images-container">
        <div className="hero__subtract hidden lg:block">
          <Image
            src="/subtract.png"
            alt="Subtract"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image">
          <Image
            src="/group.png"
            alt="Hero image - 3 cars"
            width={1064}
            height={404}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
