const AnimeDetailInformationSkeleton = () => {
  return (
    <>
      {/* Anime Title Skeleton */}
      <div className="rounded w-full md:w-3/4 h-12 skeleton" />

      <div className="flex xl:flex-row flex-col items-start gap-3 md:gap-10 mt-5">
        <div className="flex md:flex-row flex-col gap-5 w-full xl:w-3/4">
          {/* Anime Image Skeleton*/}
          <div className="rounded w-full md:w-[300px] h-[430px] skeleton" />

          {/* Anime information Skeleton*/}
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="w-32 h-6 skeleton" />
                <div className="gap-3 grid grid-cols-2">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={`info-skeleton-${i}`}
                        className="h-5 skeleton"
                      />
                    ))}
                </div>
              </div>

              {/*  Trailer Skeleton MD */}
              <div className="hidden xl:hidden md:flex flex-col-reverse gap-2">
                <div className="w-[325px]">
                  <div className="mb-2 w-24 h-6 skeleton" />
                  <div className="rounded w-full h-[180px] skeleton" />
                </div>

                {/* Genre skeleton MD */}
                <div className="flex flex-col gap-1.5">
                  <div className="w-24 h-6 skeleton" />
                  <div className="flex flex-wrap gap-2">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={`genre-skel-${i}`}
                          className="rounded-full w-20 h-6 skeleton"
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Mobile & XL Trailer skeleton */}
              <div className="md:hidden xl:block flex flex-col gap-1.5">
                <div className="w-24 h-6 skeleton" />
                <div className="rounded w-full h-[180px] skeleton" />
              </div>
            </div>
          </div>
        </div>

        {/* Synopsis Skeleton MD */}
        <div className="hidden xl:hidden md:flex flex-col gap-1.5 w-full">
          <div className="w-24 h-6 skeleton" />
          <div className="rounded w-full h-[180px] skeleton" />
        </div>

        <div className="mt-3 md:mt-0 w-full md:w-1/4">
          <div className="md:hidden xl:block flex flex-col gap-2">
            {/* Mobile & Large Synopsis skeleton */}
            <div className="w-full">
              <div className="mb-2 w-24 h-6 skeleton" />
              <div className="rounded w-full h-[180px] skeleton" />
            </div>
            {/* Mobile & Large genre skeleton */}
            <div className="flex flex-col gap-1.5 mt-1.5">
              <div className="w-24 h-6 skeleton" />
              <div className="flex flex-wrap gap-2">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={`genre-xl-skel-${i}`}
                      className="rounded-full w-20 h-6 skeleton"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailInformationSkeleton;
