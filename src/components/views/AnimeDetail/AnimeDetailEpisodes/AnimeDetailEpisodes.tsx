import { CiStar } from "react-icons/ci";
import useAnimeDetailEpisodes from "./useAnimeDetailEpisodes";
import Button from "@/components/ui/Button";
import { FaChevronLeft, FaChevronRight, FaRegFileAlt } from "react-icons/fa";
import Modal from "@/components/ui/Modal";

interface Proptypes {
  animeType: string;
  totalEpisodes: number;
}

const AnimeDetailEpisodes = (props: Proptypes) => {
  const { animeType, totalEpisodes } = props;
  const {
    episodes,
    episodeDetail,
    handleChangePage,
    isLoadingEpisodes,
    isLoadingEpisodeDetail,
    selectedEpisode,
    setSelectedEpisode,
    page,
  } = useAnimeDetailEpisodes();

  const showEpisodes = animeType !== "Movie" && totalEpisodes > 0;
  const showPrevNextButton =
    (page === 1 && episodes?.pagination.has_next_page) || page > 1;

  return (
    <>
      {showEpisodes && (
        <div>
          <h2 className="font-semibold text-lg">Episodes</h2>

          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3">
            {!isLoadingEpisodes
              ? episodes?.data?.map((episode, index) => (
                  <div
                    key={`episode-${episode.mal_id}`}
                    className="relative flex gap-2 bg-secondary p-2 rounded w-full"
                  >
                    <div className="flex justify-center items-center p-1 border border-[var(--color-neon)] rounded-full w-9 h-9">
                      <div className="flex justify-center items-center border border-[var(--color-neon)] rounded-full w-7 h-7">
                        <span className="text-xs">
                          {(page - 1) * 100 + index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col w-full text-sm">
                      <div className="flex-grow">
                        <p className="mb-1 line-clamp-1">
                          {episode.title_japanese}
                        </p>
                        <p className="line-clamp-2">{episode.title}</p>
                      </div>
                      <div className="flex justify-between items-center gap-2 mt-1">
                        <div className="flex items-center gap-2 mt-1">
                          <CiStar className="text-yellow-400 text-xl" />
                          <p>Score: {episode?.score}</p>
                        </div>

                        <Button
                          className="bg-primary rounded-full"
                          onClick={() =>
                            setSelectedEpisode(Number(episode?.mal_id))
                          }
                          aria-label="View Synopsis"
                        >
                          <FaRegFileAlt className="text-white text-lg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              : Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={`episode-skeleton-${index}`}
                    aria-label="skeleton episodes"
                    className="rounded w-full h-[140px] skeleton"
                  />
                ))}
          </div>

          {showPrevNextButton && (
            <div className="flex justify-end items-center gap-2 mt-5">
              <Button
                aria-label="prev-button"
                disabled={page === 1}
                onClick={() => handleChangePage("prev")}
              >
                <FaChevronLeft />
              </Button>
              <Button
                aria-label="next-button"
                disabled={episodes?.pagination?.has_next_page === false}
                onClick={() => handleChangePage("next")}
              >
                <FaChevronRight />
              </Button>
            </div>
          )}
        </div>
      )}

      <Modal
        onClose={() => setSelectedEpisode(0)}
        isOpen={selectedEpisode !== 0}
        title="Synopsis"
      >
        {!isLoadingEpisodeDetail ? (
          <div>
            <p className="text-sm text-justify leading-relaxed">
              {episodeDetail?.synopsis || "Synopsis is not available."}
            </p>
          </div>
        ) : (
          <div className="rounded w-full h-20 skeleton" />
        )}
      </Modal>
    </>
  );
};

export default AnimeDetailEpisodes;
