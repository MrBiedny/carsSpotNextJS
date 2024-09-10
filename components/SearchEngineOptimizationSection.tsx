"use client";

import { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

import CustomButton from "./CustomButton";
import { SearchEngineOptimizationProps } from "@/types";

export default function SearchEngineOptimizationSection({
  title,
  text,
}: SearchEngineOptimizationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="seo__title">{title}</h2>
      <p className="seo__text">{text}</p>
      <div
        className={`duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[80px]" : "max-h-0"
        }`}
      >
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          maiores odit quam tenetur, quisquam quibusdam est expedita odio animi
          dignissimos, in labore vel inventore magni possimus eaque omnis quod.
          Ad.
        </p>
      </div>
      <div className="seo__expand-button">
        <CustomButton
          title={isExpanded ? "Zwiń" : "Rozwiń"}
          containerStyles="pb-[6px] text-white font-roboto-condensed"
          onClick={toggleExpand}
        />
        <ArrowDownIcon
          className={`size-5 transition text-white ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
