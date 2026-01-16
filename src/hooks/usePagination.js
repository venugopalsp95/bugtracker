import { useMemo, useState } from "react";

const usePagination = (data, itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      return setCurrentPage(page);
    }
  };
  return { currentPage, totalPages, paginatedData, goToPage };
};

export default usePagination;
