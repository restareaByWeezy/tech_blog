import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleLeftIcon,
  DoubleRightIcon,
} from '@/assets/svgs';
import { cx } from '@/styles/classNames';
import { range } from '@/utils';

import type { PaginationProps } from './pagination';
import * as styles from './Pagination.css';
import usePagination from './usePagination';

export function Pagination({
  activePage = 1,
  totalItemCount = 0,
  pageRangeDisplayed,
  onChangePage,
  itemCountPerPage,
  className,
}: PaginationProps) {
  const {
    firstPage,
    rangeLastPage,
    totalLastPage,
    prevPage,
    nextPage,
    isPrevPageDisabled,
    isNextPageDisabled,
    isFirstPageDisabled,
    isLastPageDisabled,
  } = usePagination({
    activePage,
    totalItemCount,
    pageRangeDisplayed,
    itemCountPerPage,
  });

  const onClickPrevPage = () => onChangePage(prevPage);
  const onClickNextPage = () => onChangePage(nextPage);
  const onClickFirstPage = () => onChangePage(1);
  const onClickLastPage = () => onChangePage(totalLastPage);

  const onClickPage = (page: number) => onChangePage(page);

  return (
    <nav
      className={cx(styles.paginationContainer, className)}
      role="navigation"
      aria-label="페이지네이션"
    >
      <button
        className={styles.pageButton}
        disabled={isFirstPageDisabled}
        onClick={onClickFirstPage}
        aria-label="첫 페이지로 이동"
      >
        <DoubleLeftIcon aria-hidden="true" />
      </button>
      <button
        className={styles.pageButton}
        disabled={isPrevPageDisabled}
        onClick={onClickPrevPage}
        aria-label="이전 페이지로 이동"
      >
        <ChevronLeftIcon aria-hidden="true" />
      </button>
      <div className={styles.pages}>
        {range(firstPage, rangeLastPage)?.map(_page => (
          <div key={_page}>
            <button
              data-selected={_page === activePage}
              className={styles.pageButton}
              onClick={() => onClickPage(_page)}
              aria-label={`페이지 ${_page}`}
            >
              {_page}
            </button>
          </div>
        ))}
      </div>
      <button
        className={styles.pageButton}
        disabled={isNextPageDisabled}
        onClick={onClickNextPage}
        aria-label="다음 페이지로 이동"
      >
        <ChevronRightIcon aria-hidden="true" />
      </button>
      <button
        className={styles.pageButton}
        disabled={isLastPageDisabled}
        onClick={onClickLastPage}
        aria-label="마지막 페이지로 이동"
      >
        <DoubleRightIcon aria-hidden="true" />
      </button>
    </nav>
  );
}
