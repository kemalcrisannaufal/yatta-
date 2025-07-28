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
          className={"relative rounded  w-full  h-[235px] overflow-hidden"}
        >
          <Image
            src={character?.images?.jpg?.image_url}
            alt={`${character?.name}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <div className="bottom-0 left-0 z-30 absolute flex flex-col justify-center items-start bg-gradient-to-b from-transparent to-[var(--color-primary)] backdrop-blur-[1px] p-2 w-full h-[65px]">
            <span className="font-medium text-white line-clamp-1">
              {character?.name}
            </span>
          </div>
        </Link>
      ) : (
        <div
          aria-label="skeleton-character-card"
          className="rounded w-full h-[230px] skeleton"
        />
      )}
    </>
  );
};

export default CharacterCard;
