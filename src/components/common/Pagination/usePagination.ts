import { useMemo } from 'react';

import type { PaginationItems } from './pagination';

function usePagination({
  itemCountPerPage,
  pageRangeDisplayed,
  totalItemCount,
  activePage,
}: PaginationItems) {
  const buffer = activePage % pageRangeDisplayed === 0 ? 1 : 0;

  const firstPage = Math.max(
    1,
    Math.floor(activePage / pageRangeDisplayed - buffer) * pageRangeDisplayed +
      1,
  );

  const totalPages = Math.ceil(totalItemCount / itemCountPerPage);

  const rangeLastPage = useMemo(
    () =>
      Math.min(
        totalPages,
        Math.ceil(activePage / pageRangeDisplayed) * pageRangeDisplayed,
      ),
    [activePage, pageRangeDisplayed, totalPages],
  );

  const totalLastPage = useMemo(
    () => (!totalItemCount ? 1 : Math.ceil(totalItemCount / itemCountPerPage)),
    [totalItemCount, itemCountPerPage],
  );

  const prevPage = firstPage - 1;
  const nextPage = rangeLastPage + 1;

  const isPrevPageDisabled = prevPage < 1;
  const isNextPageDisabled = nextPage > totalPages;

  const isFirstPageDisabled = activePage === 1;
  const isLastPageDisabled = activePage === totalLastPage;

  return {
    firstPage,
    rangeLastPage,
    totalLastPage,
    totalPages,
    prevPage,
    nextPage,
    isPrevPageDisabled,
    isNextPageDisabled,
    isFirstPageDisabled,
    isLastPageDisabled,
  };
}
export default usePagination;
