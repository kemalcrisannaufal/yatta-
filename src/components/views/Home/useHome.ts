import animeServices from "@/services/anime.services";
import { IAnime, ICharacter } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";

const useHome = () => {
  const getSeasonNowAnime = async (): Promise<IAnime[]> => {
    const { data } = await animeServices.getSeasonNowAnime();
    return data.data.slice(0, 8);
  };

  const { data: seasonNowAnimeData, isLoading: isLoadingSeasonNowAnimeData } =
    useQuery({
      queryKey: ["getSeasonNowAnime"],
      queryFn: getSeasonNowAnime,
      refetchOnWindowFocus: false,
    });

  const getPopularAnime = async (): Promise<IAnime[]> => {
    const { data } = await animeServices.getPopularAnime();
    return data.data.slice(0, 8);
  };

  const { data: popularAnimeData, isLoading: isLoadingPopularAnimeData } =
    useQuery({
      queryKey: ["getPopularAnime"],
      queryFn: getPopularAnime,
      refetchOnWindowFocus: false,
    });

  const getTopCharactersData = async (): Promise<ICharacter[]> => {
    const { data } = await animeServices.getTopCharacters();
    return data.data.slice(0, 8);
  };

  const { data: topCharactersData, isLoading: isLoadingTopCharactersData } =
    useQuery({
      queryKey: ["getTopCharactersData"],
      queryFn: getTopCharactersData,
      refetchOnWindowFocus: false,
    });

  return {
    popularAnimeData,
    seasonNowAnimeData,
    topCharactersData,
    isLoadingPopularAnimeData,
    isLoadingSeasonNowAnimeData,
    isLoadingTopCharactersData,
  };
};

export default useHome;
