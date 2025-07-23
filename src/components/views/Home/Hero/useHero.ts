import { useRouter } from "next/router";
import { useRef } from "react";

const useHero = () => {
  const { push } = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const search = inputRef.current.value;
      push(`/anime?q=${search}`);
    }
  };

  return { inputRef, handleSearch };
};

export default useHero;
