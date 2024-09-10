import { CarouselCarsDotsProps } from "@/types";

export default function CarouselCarsDots({
  selectedIndex,
  onDotClick,
  count,
}: CarouselCarsDotsProps) {
  return (
    <div className="carousel__dots-container">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`carousel__dot ${
            selectedIndex === index ? "bg-primary-blue" : "bg-gray-300"
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
