import AnimeList from "./AnimeList/AnimeList";
import CharacterList from "./CharacterList";
import Hero from "./Hero";
import useHome from "./useHome";

const Home = () => {
  const {
    popularAnimeData,
    seasonNowAnimeData,
    topCharactersData,
    isLoadingPopularAnimeData,
    isLoadingSeasonNowAnimeData,
    isLoadingTopCharactersData,
  } = useHome();
  return (
    <div className="w-full">
      <Hero />
      <AnimeList
        data={seasonNowAnimeData}
        isLoading={isLoadingSeasonNowAnimeData}
        title="Airing This Season"
      />
      <AnimeList
        data={popularAnimeData}
        isLoading={isLoadingPopularAnimeData}
        title="Popular Anime"
      />
      <CharacterList
        characters={topCharactersData}
        isLoading={isLoadingTopCharactersData}
        title="Top Characters"
      />
    </div>
  );
};

export default Home;
