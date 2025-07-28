import characterServices from "@/services/character.services";
import { ICharacter } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useCharacterDetail = () => {
  const router = useRouter();

  const getCharacter = async (): Promise<ICharacter> => {
    const { data } = await characterServices.getCharacter(`${router.query.id}`);
    return data.data;
  };

  const { data: character, isLoading: isLoadingCharacter } = useQuery({
    queryKey: ["getCharacter"],
    queryFn: getCharacter,
    enabled: router.isReady && !!router.query.id,
    refetchOnWindowFocus: false,
  });

  return { character, isLoadingCharacter };
};

export default useCharacterDetail;
