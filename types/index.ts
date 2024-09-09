export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  onClick?: () => void;
}

export interface CarouselCarsDotsProps {
  selectedIndex: number;
  onDotClick: (index: number) => void;
  count: number;
}

export interface SearchEngineOptimizationProps {
  title: string;
  text: string;
}
