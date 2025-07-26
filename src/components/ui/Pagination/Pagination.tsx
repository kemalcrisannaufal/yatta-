import cn from "@/utils/cn";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Proptypes {
  totalPage: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

const Pagination = (props: Proptypes) => {
  const { totalPage, initialPage = 1, onPageChange } = props;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const generatePages = () => {
    const pages = [];

    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPage - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      pages.push(totalPage);
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="disabled:opacity-50 px-3 py-1 rounded w-10 h-10 cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      {generatePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && goToPage(page)}
          className={cn(
            "flex justify-center items-center px-3 py-1 rounded min-w-10 h-10 cursor-pointer",
            currentPage === page && "bg-neon text-black  font-semibold"
          )}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPage}
        onClick={() => goToPage(currentPage + 1)}
        className="disabled:opacity-50 px-3 py-1 rounded w-10 h-10 cursor-pointer"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
