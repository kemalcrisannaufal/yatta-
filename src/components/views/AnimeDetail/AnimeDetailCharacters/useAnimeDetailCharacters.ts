import { CHARACTER_ROLE_DEFAULT } from "@/constants/list.constants";
import animeServices from "@/services/anime.services";
import { ICharacter } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const useAnimeDetailCharacters = () => {
  const router = useRouter();

  const getAnimeCharacters = async (): Promise<
    { character: ICharacter; role: string }[]
  > => {
    const { data } = await animeServices.getAnimeCharacters(
      `${router.query.id}`
    );
    return data.data;
  };

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
    isLoadingCharacters,
    role,
    setRole,
    selectedCharacters,
  };
};

export default useAnimeDetailCharacters;
