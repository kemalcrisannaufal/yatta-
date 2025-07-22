import { ICharacter } from "@/types/anime";
import Image from "next/image";
import Link from "next/link";

interface Proptypes {
  character: ICharacter;
  isLoading: boolean;
}

const CharacterCard = (props: Proptypes) => {
  const { character, isLoading } = props;
  return (
    <>
      {!isLoading ? (
        <Link
          href={`/characters/${character?.mal_id}`}
          key={`character-${character?.mal_id}`}
          className="relative rounded overflow-hidden"
        >
          <Image
            src={character?.images?.jpg?.image_url}
            alt={`${character?.name}`}
            width={150}
            height={200}
            className="w-full h-[200px] object-cover"
          />

          <div className="bottom-0 left-0 absolute bg-black/30 backdrop-blur-xs p-2 w-full h-[45px]">
            <span className="font-medium text-white line-clamp-1">
              {character?.name}
            </span>
          </div>
        </Link>
      ) : (
        <div
          aria-label="skeleton-character-card"
          className="bg-slate-300 rounded w-full h-[200px]"
        />
      )}
    </>
  );
};

export default CharacterCard;
