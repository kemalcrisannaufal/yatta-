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
          key={`anime-${anime?.mal_id}`}
          className="relative rounded overflow-hidden"
        >
          <Image
            src={anime?.images?.jpg?.image_url}
            alt={`image ${anime?.title}`}
            width={150}
            height={200}
            className="w-full h-[200px] object-cover"
          />

          <div className="bottom-0 left-0 absolute flex flex-col justify-center items-start bg-black/30 backdrop-blur-xs p-2 w-full h-[65px]">
            <span className="font-medium text-white line-clamp-2">
              {anime?.title}
            </span>
          </div>
        </Link>
      ) : (
        <div
          aria-label="skeleton-anime-card"
          className="bg-slate-300 rounded w-full h-[200px]"
        />
      )}
    </>
  );
};

export default AnimeCard;
