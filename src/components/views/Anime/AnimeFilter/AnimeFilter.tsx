import Select from "@/components/ui/Select";
import useAnime from "../useAnime";
import { ORDER_BY, SFW, SORT, TYPE } from "@/constants/list.constants";
import { CiSliderHorizontal } from "react-icons/ci";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

interface Proptypes {
  count: number;
}

const AnimeFilter = (props: Proptypes) => {
  const { count } = props;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isXL, setIsXL] = useState(false);

  const {
    currentType,
    currentOrderBy,
    currentSort,
    currentSFW,

    handleChangeType,
    handleChangeOrderBy,
    handleChangeSort,
    handleChangeSFW,
  } = useAnime();

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth > 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showFilter = isXL || isFilterOpen;

  return (
    <>
      {!isXL && (
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-700">{count || 0} Results</p>
          <button
            className="flex items-center gap-2 shadow px-4 py-1.5 border border-gray-300 rounded-full font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filter
            <CiSliderHorizontal />
          </button>
        </div>
      )}

      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "top" }}
            className={cn(
              "xl:top-24 xl:sticky flex flex-col gap-2 shadow-lg p-5 border border-gray-300 rounded-lg xl:w-1/4 h-max"
            )}
          >
            <h2 className="font-semibold text-primary text-xl">Filter</h2>
            <Select
              defaultValue={`${currentType}`}
              label="Type"
              name="type"
              onChange={handleChangeType}
              options={TYPE}
              variant="white"
              fullWidth
            />

            <Select
              defaultValue={`${currentOrderBy}`}
              label="Order By"
              name="order_by"
              onChange={handleChangeOrderBy}
              options={ORDER_BY}
              variant="white"
              fullWidth
            />

            <Select
              defaultValue={`${currentSort}`}
              label="Sort"
              name="sort"
              onChange={handleChangeSort}
              options={SORT}
              variant="white"
              fullWidth
            />

            <Select
              defaultValue={`${currentSFW}`}
              label="Safe for Work"
              name="sfw"
              onChange={handleChangeSFW}
              options={SFW}
              variant="white"
              fullWidth
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimeFilter;
