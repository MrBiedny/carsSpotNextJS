import { CarouselCarsDotsProps } from "@/types";

export default function CarouselCarsDots({
  selectedIndex,
  onDotClick,
  count,
}: CarouselCarsDotsProps) {
  return (
    <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
            selectedIndex === index ? "bg-primary-blue" : "bg-gray-300"
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
