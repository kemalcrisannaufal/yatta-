import Image from "next/image";
import useCharacterDetail from "./useCharacterDetail";
import AnimeCard from "@/components/ui/AnimeCard";
import { IAnime } from "@/types/anime";
import cn from "@/utils/cn";

const CharacterDetail = () => {
  const { character, isLoadingCharacter } = useCharacterDetail();

  return (
    <div className="flex md:flex-row flex-col gap-1 md:gap-8 px-5 xl:px-10 py-6 w-full min-h-screen">
      <div className="md:top-24 relative md:sticky mt-5 w-full md:w-1/3 xl:w-1/4 h-max">
        {!isLoadingCharacter ? (
          <>
            <Image
              src={character?.images?.jpg?.image_url || "/"}
              alt={`${character?.name}`}
              width={500}
              height={500}
              className="rounded w-full object-cover"
            />
            <div className="bottom-0 left-0 absolute bg-gradient-to-b from-transparent via-[var(--color-primary)] to-[var(--color-primary)] p-4 md:p-4 pb-1 pl-0 w-full">
              <span className="font-medium text-neon text-3xl">
                {character?.name}{" "}
                <span className="text-lg">({character?.name_kanji})</span>
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-[50vh] md:h-[30vh] xl:h-[70vh] skeleton" />
        )}
      </div>

      <div className="w-full md:w-2/3 xl:w-3/4">
        {!isLoadingCharacter ? (
          <div>
            <h1 className="hidden md:block font-bold text-3xl">
              {character?.name} ({character?.name_kanji})
            </h1>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {character?.nicknames.map((nickname) => (
                <div
                  key={`${nickname}`}
                  className="bg-secondary px-3 py-1 border rounded-full text-neon text-sm"
                >
                  {nickname}
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-200 text-sm text-justify leading-relaxed">
              {character?.about}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-3 w-3/4 h-12 skeleton" />
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={`about-skeleton-${index}`}
                className={cn(
                  "mb-1.5 w-full h-6 skeleton",
                  index % 5 === 0 && "mt-3"
                )}
              />
            ))}
          </>
        )}

        <div className="mt-5">
          <h2 className="mb-3 font-bold text-xl">Anime List</h2>
          <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {!isLoadingCharacter
              ? character?.anime?.map((anime) => (
                  <AnimeCard
                    key={`anime-${anime.anime.mal_id}`}
                    anime={anime.anime}
                    isLoading={isLoadingCharacter}
                  />
                ))
              : Array.from({ length: 12 }).map((_, index) => (
                  <AnimeCard
                    key={`character-anime-skeleton${index}`}
                    anime={{} as IAnime}
                    isLoading
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
