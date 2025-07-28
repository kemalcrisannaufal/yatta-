import instance from "@/lib/axios/instance";

const characterServices = {
  getCharacters: (params?: string) => instance.get(`/characters?${params}`),
};

export default characterServices;
