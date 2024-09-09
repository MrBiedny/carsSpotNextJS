"use client";

import FooterSection from "./SearchEngineOptimizationSection";

const sectionTitle =
  "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.";
const sectionText =
  "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]";

export default function SearchEngineOptimization() {
  return (
    <section className="flex flex-col bg-black-100 items-center" id="faq">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 mt-[88px] max-w-[1440px]">
        <div className="flex justify-between items-start gap-4 max-w-7xl">
          <FooterSection title={sectionTitle} text={sectionText} />
          <FooterSection title={sectionTitle} text={sectionText} />
        </div>
      </div>
    </section>
  );
}
