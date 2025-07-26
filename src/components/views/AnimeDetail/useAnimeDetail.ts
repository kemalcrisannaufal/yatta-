import { CHARACTER_ROLE_DEFAULT } from "@/constants/list.constants";
import animeServices from "@/services/anime.services";
import { IAnime, ICharacter, IEpisode } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const useAnimeDetail = () => {
  const router = useRouter();

  const getAnimeDetail = async (): Promise<IAnime> => {
    const { data } = await animeServices.getAnimeById(`${router.query.id}`);
    return data.data;
  };

  const getAnimeEpisodes = async (): Promise<IEpisode[]> => {
    const { data } = await animeServices.getAnimeEpisodes(`${router.query.id}`);
    return data.data;
  };

  const getAnimeCharacters = async (): Promise<
    { character: ICharacter; role: string }[]
  > => {
    const { data } = await animeServices.getAnimeCharacters(
      `${router.query.id}`
    );
    return data.data;
  };

  const { data: anime, isLoading: isLoadingAnime } = useQuery({
    queryKey: ["getAnimeDetail"],
    queryFn: getAnimeDetail,
    enabled: router.isReady && !!router.query.id,
  });

  const { data: episodes, isLoading: isLoadingEpisodes } = useQuery({
    queryKey: ["getAnimeEpisodes"],
    queryFn: getAnimeEpisodes,
    enabled: router.isReady && !!router.query.id,
  });

  const { data: characters, isLoading: isLoadingCharacters } = useQuery({
    queryKey: ["getAnimeCharacters"],
    queryFn: getAnimeCharacters,
    enabled: router.isReady && !!router.query.id,
  });

  const [role, setRole] = useState<string>(CHARACTER_ROLE_DEFAULT);

  const selectedCharacters = useMemo(() => {
    if (role === "All") {
      return characters;
    } else {
      return characters?.filter((character) => character.role === role);
    }
  }, [characters, role]);

  return {
    anime,
    characters,
    episodes,
    isLoadingAnime,
    isLoadingCharacters,
    isLoadingEpisodes,

    selectedCharacters,

    role,
    setRole,
  };
};

export default useAnimeDetail;
