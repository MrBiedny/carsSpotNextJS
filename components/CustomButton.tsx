import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  containerStyles,
  onClick,
}: CustomButtonProps) {
  return (
    <button className={`custom-btn ${containerStyles}`} onClick={onClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
