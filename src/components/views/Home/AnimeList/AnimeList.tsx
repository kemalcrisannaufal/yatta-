import AnimeCard from "@/components/ui/AnimeCard";
import { IAnime } from "@/types/anime";

interface Proptypes {
  data: IAnime[] | undefined;
  isLoading: boolean;
  title: string;
}

const AnimeList = (props: Proptypes) => {
  const { data, isLoading, title } = props;

  return (
    <>
      <div className="mt-8 px-5">
        <h2 className="font-semibold text-gray-900 text-xl">{title}</h2>

        <div className="gap-2 grid xl:grid-cols-10 grid-flow-col auto-cols-max mt-2 overflow-x-auto">
          {!isLoading
            ? data?.map((anime) => (
                <AnimeCard
                  key={`anime-${anime.mal_id}`}
                  anime={anime}
                  isLoading={isLoading}
                />
              ))
            : Array.from({ length: 10 }).map((_, index) => (
                <AnimeCard
                  key={`skeleton-anime-${index}`}
                  anime={{} as IAnime}
                  isLoading={true}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default AnimeList;
