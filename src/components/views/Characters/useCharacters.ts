import {
  DELAY,
  PAGE_DEFAULT,
  SEARCH_DEFAULT,
} from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import characterServices from "@/services/character.services";
import { ICharacter } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

const useCharacters = () => {
  const router = useRouter();
  const debounce = useDebounce();

  const currentPage = router.query.page || PAGE_DEFAULT;
  const currentSearch = router.query.search || SEARCH_DEFAULT;

  const setUrl = () => {
    router.replace({
      query: {
        page: currentPage,
        search: currentSearch,
      },
    });
  };

  const handleChangePage = (page: number) => {
    router.replace({
      query: {
        ...router.query,
        page,
      },
    });
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      const search = e.target.value;
      router.replace({
        query: {
          ...router.query,
          search,
          page: PAGE_DEFAULT,
        },
      });
    }, DELAY);
  };

  const getCharacters = async (): Promise<{
    pagination: { items: { count: number; total: number; per_page: number } };
    data: ICharacter[];
  }> => {
    const params = `limit=24&order_by=favorites&sort=desc&page=${currentPage}&q=${currentSearch}`;
    const { data } = await characterServices.getCharacters(params);
    return data;
  };

  const { data: characters, isLoading: isLoadingCharacters } = useQuery({
    queryKey: ["getCharacters", currentPage, currentSearch],
    queryFn: getCharacters,
    refetchOnWindowFocus: false,
  });

  return {
    currentPage,
    currentSearch,
    handleChangePage,
    handleChangeSearch,
    setUrl,

    characters,
    isLoadingCharacters,
  };
};

export default useCharacters;
