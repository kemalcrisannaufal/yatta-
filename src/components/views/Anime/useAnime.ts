import {
  DELAY,
  LIMIT_DEFAULT,
  ORDER_BY_DEFAULT,
  PAGE_DEFAULT,
  SEARCH_DEFAULT,
  SFW_DEFAULT,
  SORT_DEFAULT,
  TYPE_DEFAULT,
} from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import animeServices from "@/services/anime.services";
import { IAnime } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

const standardizeFilter = (selected: string) => {
  if (selected === "all") {
    return "";
  }

  return selected;
};

const useAnime = () => {
  const router = useRouter();
  const debounce = useDebounce();

  const currentLimit = router.query.limit || LIMIT_DEFAULT;
  const currentPage = router.query.page || PAGE_DEFAULT;
  const currentSearch = router.query.q || SEARCH_DEFAULT;
  const currentType = router.query.type || standardizeFilter(TYPE_DEFAULT);
  const currentOrderBy = router.query.order_by || ORDER_BY_DEFAULT;
  const currentSort = router.query.sort || SORT_DEFAULT;
  const currentSFW = router.query.sfw || standardizeFilter(SFW_DEFAULT);

  const setUrl = () => {
    router.replace({
      query: {
        limit: currentLimit,
        page: currentPage,
        q: currentSearch,
        type: currentType,
        order_by: currentOrderBy,
        sort: currentSort,
        sfw: currentSFW,
      },
    });
  };

  const handleChangeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    const limit = e.target.value;

    router.replace({
      query: {
        ...router.query,
        limit,
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
      const q = e.target.value;
      router.replace({
        query: {
          limit: currentLimit,
          page: currentPage,
          q,
        },
      });
    }, DELAY);
  };

  const handleChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    router.replace({
      query: {
        ...router.query,
        type: standardizeFilter(type),
        page: PAGE_DEFAULT,
      },
    });
  };

  const handleChangeOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const order_by = e.target.value;
    router.replace({
      query: {
        ...router.query,
        order_by,
        page: PAGE_DEFAULT,
      },
    });
  };

  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    router.replace({
      query: {
        ...router.query,
        sort,
        page: PAGE_DEFAULT,
      },
    });
  };

  const handleChangeSFW = (e: ChangeEvent<HTMLSelectElement>) => {
    const sfw = e.target.value;

    router.replace({
      query: {
        ...router.query,
        sfw: standardizeFilter(sfw),
        page: PAGE_DEFAULT,
      },
    });
  };

  const getAnime = async (): Promise<{
    pagination: {
      current_page: number;
      items: {
        count: number;
        total: number;
        per_page: number;
      };
    };
    data: IAnime[];
  }> => {
    const params = `limit=${currentLimit}&page=${currentPage}&type=${currentType}&q=${currentSearch}&order_by=${currentOrderBy}&sort=${currentSort}&sfw=${currentSFW}`;
    const { data } = await animeServices.getAnime(params);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: [
      "getAnime",
      currentLimit,
      currentPage,
      currentType,
      currentSearch,
      currentOrderBy,
      currentSort,
      currentSFW,
    ],
    queryFn: getAnime,
    refetchOnWindowFocus: false,
  });

  return {
    currentLimit,
    currentPage,
    currentSearch,
    currentType,
    currentOrderBy,
    currentSort,
    currentSFW,

    setUrl,
    handleChangeLimit,
    handleChangePage,
    handleChangeSearch,
    handleChangeType,
    handleChangeOrderBy,
    handleChangeSort,
    handleChangeSFW,

    data,
    isLoading,
  };
};

export default useAnime;
