import { IAnime } from "@/types/anime";
import Image from "next/image";
import Link from "next/link";

interface Proptypes {
  anime: IAnime;
  isLoading: boolean;
}

const AnimeCard = (props: Proptypes) => {
  const { anime, isLoading } = props;
  return (
    <>
      {!isLoading ? (
        <Link
          href={`/anime/${anime?.mal_id}`}
          className={"block relative rounded w-full  h-[235px] overflow-hidden"}
        >
          <Image
            src={anime?.images?.jpg?.image_url}
            alt={`image ${anime?.title}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <div className="bottom-0 left-0 absolute flex flex-col justify-center items-start bg-gradient-to-b from-transparent to-[var(--color-primary)] backdrop-blur-[1px] p-2 w-full h-[65px]">
            <span className="font-medium text-white line-clamp-2">
              {anime?.title}
            </span>
          </div>
        </Link>
      ) : (
        <div
          aria-label="skeleton-anime-card"
          className={"rounded w-full  h-[235px] skeleton"}
        />
      )}
    </>
  );
};

export default AnimeCard;
