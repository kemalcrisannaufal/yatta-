import instance from "@/lib/axios/instance";

const animeServices = {
  getAnime: (params?: string) => instance.get(`/anime?${params}`),

  getSeasonNowAnime: () => instance.get("/seasons/now"),
  getPopularAnime: () => instance.get("/top/anime"),
  getTopCharacters: () => instance.get("/top/characters"),
};

export default animeServices;
