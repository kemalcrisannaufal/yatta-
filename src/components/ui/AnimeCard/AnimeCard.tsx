import { IAnime } from "@/types/anime";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

interface Proptypes {
  anime: IAnime;
  fullWidth?: boolean;
  isLoading: boolean;
}

const AnimeCard = (props: Proptypes) => {
  const { anime, fullWidth = false, isLoading } = props;
  return (
    <>
      {!isLoading ? (
        <Link
          href={`/anime/${anime?.mal_id}`}
          className={cn(
            "relative rounded w-[165px] md:w-[175px] h-[235px] overflow-hidden",
            fullWidth && "w-full"
          )}
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
          className={cn("rounded w-[165px] md:w-[175px] h-[235px] skeleton")}
        />
      )}
    </>
  );
};

export default AnimeCard;
