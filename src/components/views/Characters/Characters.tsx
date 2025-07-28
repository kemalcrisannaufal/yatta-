import { useEffect } from "react";
import useCharacters from "./useCharacters";
import CharacterCard from "@/components/ui/CharacterCard";
import Pagination from "@/components/ui/Pagination";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";
import { ICharacter } from "@/types/anime";

const Characters = () => {
  const router = useRouter();

  const {
    currentPage,
    currentSearch,
    handleChangePage,
    handleChangeSearch,
    setUrl,

    characters,
    isLoadingCharacters,
  } = useCharacters();

  useEffect(() => {
    if (router.isReady) {
      setUrl();
    }
  }, [router.isReady]);

  return (
    <div className="px-4 py-5">
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
        <h1 className="font-bold text-3xl">Characters</h1>
        <div className="flex items-center gap-2 bg-secondary shadow-md px-3 border rounded-xl w-full md:w-1/2">
          <input
            aria-label="search input"
            defaultValue={currentSearch}
            type="text"
            className="bg-secondary px-2 py-2 focus:outline-none w-full"
            placeholder="Search"
            onChange={handleChangeSearch}
          />
          <CiSearch className="text-2xl" />
        </div>
      </div>

      <div className="gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-5">
        {!isLoadingCharacters
          ? characters?.data?.map((character) => (
              <CharacterCard
                key={`character-${character.mal_id}`}
                character={character}
                isLoading={isLoadingCharacters}
              />
            ))
          : Array.from({ length: 24 }).map((_, index) => (
              <CharacterCard
                key={`character-skeleton${index}`}
                character={{} as ICharacter}
                isLoading
              />
            ))}
      </div>

      <div className="flex justify-end mt-5">
        <Pagination
          initialPage={Number(currentPage)}
          onPageChange={handleChangePage}
          totalPage={
            Math.ceil(
              Number(characters?.pagination?.items?.total) /
                Number(characters?.pagination?.items?.per_page)
            ) | 0
          }
        />
      </div>
    </div>
  );
};

export default Characters;
