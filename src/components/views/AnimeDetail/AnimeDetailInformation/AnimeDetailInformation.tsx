import { IAnime } from "@/types/anime";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaFilm, FaRegClock, FaStar } from "react-icons/fa";
import { MdOutlineVideoLibrary, MdVerifiedUser } from "react-icons/md";
import AnimeDetailInformationSkeleton from "./AnimeDetailInformationSkeleton";

interface Proptypes {
  anime: IAnime | undefined;
  isLoading: boolean;
}

const AnimeDetailInformation = (props: Proptypes) => {
  const { anime, isLoading } = props;
  return (
    <>
      {isLoading ? (
        <AnimeDetailInformationSkeleton />
      ) : (
        <>
          <h1 className="font-bold text-3xl">
            {anime?.title} ({anime?.title_japanese})
          </h1>
          <div className="flex xl:flex-row flex-col items-start gap-3 md:gap-10 mt-5">
            <div className="flex md:flex-row flex-col gap-5 w-full xl:w-3/4">
              <Image
                src={anime?.images.jpg.large_image_url || "/placeholder.jpg"}
                alt={`${anime?.title}`}
                width={300}
                height={430}
                className="rounded w-full md:w-[300px] md:h-[430px] object-cover"
              />

              <div className="w-full">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-semibold text-lg">Information</h2>
                    <div className="gap-y-2 grid grid-cols-2 text-gray-200 text-sm">
                      <div className="flex items-center gap-2">
                        <FaFilm className="text-white text-xl" />
                        <p>Type: {anime?.type}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegClock className="text-green-600 text-xl" />
                        <p>Duration: {anime?.duration}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdOutlineVideoLibrary className="text-red-500 text-xl" />
                        <p>Episodes: {anime?.episodes}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <p>Score: {anime?.score}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CiCalendar className="text-blue-500 text-xl" />
                        <p>Aired: {anime?.aired.string}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdVerifiedUser className="text-indigo-500 text-xl" />
                        <p>Rating: {anime?.rating}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden xl:hidden md:flex flex-col-reverse gap-2">
                    <div className="w-[325px]">
                      <h2 className="mb-1.5 font-semibold text-lg">Trailer</h2>
                      {anime?.trailer?.embed_url ? (
                        <iframe
                          src={anime.trailer.embed_url}
                          className="rounded-lg w-full aspect-video"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex justify-center items-center bg-secondary p-3 rounded h-[180px] text-center">
                          <p className="text-gray-300">Trailer not available</p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h2 className="font-semibold text-lg">Genres</h2>
                      <div className="flex flex-wrap gap-2">
                        {anime?.genres?.map((genre) => (
                          <div
                            key={genre.mal_id}
                            className="bg-secondary px-3 py-1 border border-gray-700 rounded-full text-sm"
                          >
                            {genre.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden xl:block flex flex-col gap-1.5">
                    <h2 className="font-semibold text-lg">Synopsis</h2>
                    <p className="text-gray-200 text-sm text-justify leading-relaxed">
                      {anime?.synopsis}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:hidden md:flex flex-col gap-1.5 w-full">
              <h2 className="font-semibold text-lg">Synopsis</h2>
              <p className="text-gray-200 text-sm text-justify leading-relaxed">
                {anime?.synopsis}
              </p>
            </div>

            <div className="mt-3 md:mt-0 w-full md:w-1/4">
              <div className="md:hidden xl:block flex flex-col gap-2">
                <div className="w-full">
                  <h2 className="mb-1.5 font-semibold text-lg">Trailer</h2>
                  {anime?.trailer?.embed_url ? (
                    <iframe
                      src={anime.trailer.embed_url}
                      className="rounded-lg w-full aspect-video"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex justify-center items-center bg-secondary p-3 rounded h-[180px] text-center">
                      <p className="text-gray-300">Trailer not available</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1.5 mt-1.5">
                  <h2 className="font-semibold text-lg">Genres</h2>
                  <div className="flex flex-wrap gap-2">
                    {anime?.genres?.map((genre) => (
                      <div
                        key={genre.mal_id}
                        className="bg-secondary px-3 py-1 border border-gray-700 rounded-full text-sm"
                      >
                        {genre.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AnimeDetailInformation;
