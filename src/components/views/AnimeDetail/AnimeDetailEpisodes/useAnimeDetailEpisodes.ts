import { PAGE_DEFAULT } from "@/constants/list.constants";
import animeServices from "@/services/anime.services";
import { IEpisode } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useAnimeDetailEpisodes = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(PAGE_DEFAULT);
  const [selectedEpisode, setSelectedEpisode] = useState<number>(0);

  const handleChangePage = (type: "prev" | "next") => {
    if (type === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  const getAnimeEpisodes = async (): Promise<{
    pagination: { has_next_page: boolean };
    data: IEpisode[];
  }> => {
    const { data } = await animeServices.getAnimeEpisodes(
      `${router.query.id}`,
      page
    );
    return data;
  };

  const getAnimeEpisodeDetail = async (): Promise<IEpisode> => {
    const { data } = await animeServices.getAnimeEpisodeDetail(
      `${router.query.id}`,
      selectedEpisode
    );
    return data.data;
  };

  const { data: episodes, isLoading: isLoadingEpisodes } = useQuery({
    queryKey: ["getAnimeEpisodes", page],
    queryFn: getAnimeEpisodes,
    enabled: router.isReady && !!router.query.id,
  });

  const { data: episodeDetail, isLoading: isLoadingEpisodeDetail } = useQuery({
    queryKey: ["getAnimeEpisodeDetail", selectedEpisode],
    queryFn: getAnimeEpisodeDetail,
    enabled: router.isReady && !!router.query.id && selectedEpisode !== 0,
  });

  return {
    episodes,
    episodeDetail,
    handleChangePage,
    isLoadingEpisodes,
    isLoadingEpisodeDetail,
    selectedEpisode,
    setSelectedEpisode,
    page,
  };
};

export default useAnimeDetailEpisodes;
