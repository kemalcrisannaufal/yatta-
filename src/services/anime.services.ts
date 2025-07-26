import instance from "@/lib/axios/instance";

const animeServices = {
  getAnime: (params?: string) => instance.get(`/anime?${params}`),
  getAnimeById: (id: string) => instance.get(`/anime/${id}`),
  getAnimeEpisodes: (animeId: string, page: number = 1) =>
    instance.get(`/anime/${animeId}/episodes?page=${page}`),
  getAnimeEpisodeDetail: (animeId: string, episode: number) =>
    instance.get(`/anime/${animeId}/episodes/${episode}`),
  getAnimeCharacters: (animeId: string) =>
    instance.get(`/anime/${animeId}/characters`),

  getSeasonNowAnime: () => instance.get("/seasons/now"),
  getPopularAnime: () => instance.get("/top/anime"),
  getTopCharacters: () => instance.get("/top/characters"),
};

export default animeServices;
