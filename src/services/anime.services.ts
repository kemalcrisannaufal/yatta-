import instance from "@/lib/axios/instance";
import ENDPOINT from "./endpoint.constants";

const animeServices = {
  getAnime: (params?: string) => instance.get(`${ENDPOINT.ANIME}?${params}`),
  getAnimeById: (id: string) => instance.get(`${ENDPOINT.ANIME}/${id}`),
  getAnimeEpisodes: (animeId: string, page: number = 1) =>
    instance.get(`${ENDPOINT.ANIME}/${animeId}/episodes?page=${page}`),
  getAnimeEpisodeDetail: (animeId: string, episode: number) =>
    instance.get(`${ENDPOINT.ANIME}/${animeId}/episodes/${episode}`),
  getAnimeCharacters: (animeId: string) =>
    instance.get(`${ENDPOINT.ANIME}/${animeId}/characters`),

  getSeasonNowAnime: () => instance.get("/seasons/now"),
  getPopularAnime: () => instance.get("/top/anime"),
  getTopCharacters: () => instance.get("/top/characters"),
};

export default animeServices;
