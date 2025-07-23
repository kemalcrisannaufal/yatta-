/* eslint-disable react-hooks/exhaustive-deps */
import AnimeCard from "@/components/ui/AnimeCard";
import useAnime from "./useAnime";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LIMIT } from "@/constants/list.constants";
import Pagination from "@/components/ui/Pagination";
import Select from "@/components/ui/Select";
import { IAnime } from "@/types/anime";
import AnimeFilter from "./AnimeFilter";
import { CiSearch } from "react-icons/ci";

const Anime = () => {
  const router = useRouter();

  const {
    currentLimit,
    currentPage,

    setUrl,
    handleChangeLimit,
    handleChangePage,
    handleChangeSearch,

    data,
    isLoading,
  } = useAnime();

  useEffect(() => {
    if (router.isReady) {
      setUrl();
    }
  }, []);

  return (
    <div className="flex xl:flex-row flex-col gap-5 px-4 py-5">
      <AnimeFilter count={Number(data?.pagination?.items?.total)} />

      <div className="xl:w-3/4">
        <div className="flex justify-between items-center">
          <p className="hidden xl:block font-medium text-gray-700">
            {data?.pagination?.items?.total} Results
          </p>
          <div className="flex items-center gap-2 shadow-md px-3 border border-gray-300 rounded-xl w-full xl:w-1/2">
            <input
              aria-label="search input"
              type="text"
              className="bg-white px-2 py-2 focus:outline-none w-full"
              placeholder="Search"
              onChange={handleChangeSearch}
            />
            <CiSearch className="text-xl" />
          </div>
        </div>

        <div className="gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5">
          {!isLoading
            ? data?.data?.map((anime) => (
                <AnimeCard
                  key={`anime-${anime.mal_id}`}
                  anime={anime}
                  fullWidth
                  isLoading={isLoading}
                />
              ))
            : Array.from({ length: 24 }).map((_, index) => (
                <AnimeCard
                  key={`anime-skeleton${index}`}
                  anime={{} as IAnime}
                  isLoading
                />
              ))}
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-5 mt-5">
          <Select
            defaultValue={`${currentLimit}`}
            name="limit"
            onChange={handleChangeLimit}
            options={LIMIT}
            startContent={<p>Limit:</p>}
          />

          <Pagination
            initialPage={Number(currentPage) | 1}
            totalPage={Number(data?.pagination?.items?.total) | 100}
            onPageChange={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Anime;
