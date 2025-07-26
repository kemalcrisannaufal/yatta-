import { CHARACTER_ROLES } from "@/constants/list.constants";
import useAnimeDetailCharacters from "./useAnimeDetailCharacters";
import cn from "@/utils/cn";
import CharacterCard from "@/components/ui/CharacterCard";
import { ICharacter } from "@/types/anime";
import { motion } from "framer-motion";

const AnimeDetailCharacters = () => {
  const { isLoadingCharacters, role, setRole, selectedCharacters } =
    useAnimeDetailCharacters();

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg">Characters </h2>
        <div className="flex gap-2">
          {CHARACTER_ROLES.map((characterRole) => (
            <button
              key={`characterRole-${characterRole}`}
              className={cn(
                "bg-secondary px-4 py-1 border border-[var(--color-neon)] rounded-full hover:text-neon text-xs md:text-sm transition-all duration-300 cursor-pointer",
                characterRole === role && "bg-neon text-black hover:text-black"
              )}
              onClick={() => setRole(characterRole)}
            >
              {characterRole}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="gap-2 grid xl:grid-cols-8 xl:grid-flow-row grid-flow-col auto-cols-max mt-3 overflow-x-auto xl:overflow-x-hidden hide-scrollbar">
          {!isLoadingCharacters
            ? selectedCharacters?.map((character) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key={`character-${character.character.mal_id}`}
                >
                  <CharacterCard
                    character={character.character}
                    isLoading={isLoadingCharacters}
                    fullWidth
                  />
                </motion.div>
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <CharacterCard
                  key={`character-skeleton-${index}`}
                  character={{} as ICharacter}
                  isLoading
                  fullWidth
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailCharacters;
