"use client";

import SearchEngineOptimizationSection from "./SearchEngineOptimizationSection";

const sectionTitle =
  "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.";
const sectionText =
  "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]";

export default function SearchEngineOptimization() {
  return (
    <section className="seo__section" id="faq">
      <div className="seo__section-container">
        <div className="flex justify-between items-start gap-4 max-w-7xl">
          <SearchEngineOptimizationSection
            title={sectionTitle}
            text={sectionText}
          />
          <SearchEngineOptimizationSection
            title={sectionTitle}
            text={sectionText}
          />
        </div>
      </div>
    </section>
  );
}
