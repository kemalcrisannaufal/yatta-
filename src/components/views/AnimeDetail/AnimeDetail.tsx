import useAnimeDetail from "./useAnimeDetail";
import AnimeDetailCharacters from "./AnimeDetailCharacters";
import AnimeDetailEpisodes from "./AnimeDetailEpisodes";
import AnimeDetailInformation from "./AnimeDetailInformation";

const AnimeDetail = () => {
  const { anime, isLoadingAnime } = useAnimeDetail();

  return (
    <div className="flex flex-col gap-4 px-5 xl:px-10 py-6">
      <AnimeDetailInformation anime={anime} isLoading={isLoadingAnime} />
      <AnimeDetailCharacters />
      <AnimeDetailEpisodes
        animeType={`${anime?.type}`}
        totalEpisodes={Number(anime?.episodes)}
      />
    </div>
  );
};

export default AnimeDetail;
