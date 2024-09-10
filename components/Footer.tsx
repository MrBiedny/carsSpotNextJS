import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__border" />
      <div className="footer__links">
        <Link href="#top" className="footer__link font-bold">
          Cars Spot
        </Link>
        <Link href="#top" className="footer__link border-b-[1px] border-white ">
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
