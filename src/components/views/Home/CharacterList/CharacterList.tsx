import CharacterCard from "@/components/ui/CharacterCard";
import { ICharacter } from "@/types/anime";

interface Proptypes {
  characters: ICharacter[] | undefined;
  isLoading: boolean;
  title: string;
}

const CharacterList = (props: Proptypes) => {
  const { characters, isLoading, title } = props;

  return (
    <>
      <div className="mt-8 px-5">
        <h2 className="font-semibold text-gray-900 text-xl">{title}</h2>

        <div className="gap-2 grid xl:grid-cols-8 grid-flow-col auto-cols-max mt-2 overflow-x-auto hide-scrollbar">
          {!isLoading
            ? characters?.map((character) => (
                <CharacterCard
                  key={`character-${character.mal_id}`}
                  character={character}
                  fullWidth
                  isLoading={isLoading}
                />
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <CharacterCard
                  key={`skeleton-character-${index}`}
                  character={{} as ICharacter}
                  isLoading={true}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default CharacterList;
