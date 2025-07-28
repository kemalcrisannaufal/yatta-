import instance from "@/lib/axios/instance";
import ENDPOINT from "./endpoint.constants";

const characterServices = {
  getCharacters: (params?: string) =>
    instance.get(`${ENDPOINT.CHARACTER}?${params}`),
  getCharacter: (id: string) =>
    instance.get(`${ENDPOINT.CHARACTER}/${id}/full`),
};

export default characterServices;
