import cn from "@/utils/cn";
import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = (props: Proptypes) => {
  const {
    children,
    className,
    disabled = false,
    fullWidth = false,
    onClick,
    type = "button",
  } = props;
  return (
    <button
      type={type}
      className={cn(
        "bg-neon hover:opacity-80 disabled:opacity-50 px-3 py-2 rounded w-max text-black transition-all duration-300 cursor-pointer disabled:cursor-default",
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
