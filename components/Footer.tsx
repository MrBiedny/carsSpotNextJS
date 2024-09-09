import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black-100 items-center w-full">
      <div className="w-full border-t border-gray-100 mt-[88px]" />
      <div className="w-full max-w-[1440px] flex justify-between items-center sm:px-20 px-6 py-6">
        <Link
          href="#top"
          className="text-white font-bold text-base font-roboto-condensed"
        >
          Cars Spot
        </Link>
        <Link
          href="#top"
          className="text-white border-b-[1px] text-base border-white font-roboto-condensed"
        >
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
