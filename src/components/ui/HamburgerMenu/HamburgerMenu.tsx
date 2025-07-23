import cn from "@/utils/cn";
import { Dispatch, SetStateAction } from "react";

interface Proptypes {
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = (props: Proptypes) => {
  const { className, isOpen, setIsOpen } = props;
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("block relative w-10 h-7", className)}
      >
        <span
          className={cn(
            "top-1 left-0 absolute bg-white w-full h-1 transition-all duration-500",
            isOpen && "rotate-45 top-2.5"
          )}
        />
        <span
          className={cn(
            "top-5 left-0 absolute bg-white w-full h-1 transition-all duration-500",
            isOpen && "-rotate-45 top-2.5"
          )}
        />
      </button>
    </>
  );
};

export default HamburgerMenu;
