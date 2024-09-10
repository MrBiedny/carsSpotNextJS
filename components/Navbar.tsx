import Image from "next/image";
import Link from "next/link";

import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="navbar">
        <Link href="/">
          <Image
            src="/carsSpot.png"
            alt="Cars Spot Logo"
            width={153}
            height={33}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-6 max-[600px]:gap-0">
          <Link href="#discover">Galeria zdjęć</Link>
          <Link href="#faq">FaQ</Link>
        </div>
        <CustomButton
          title="Zadzwoń do nas"
          containerStyles="bg-primary-blue text-white rounded-md min-w-[158px] px-3 py-3"
        />
      </nav>
    </header>
  );
}
