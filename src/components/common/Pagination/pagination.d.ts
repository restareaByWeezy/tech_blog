export interface PaginationProps {
  itemCountPerPage: number;
  pageRangeDisplayed: number;
  totalItemCount?: number;
  activePage?: number;
  onChangePage: (page: number) => void;
  className?: string;
}

export type PaginationItems = Required<
  Pick<
    PaginationProps,
    'itemCountPerPage' | 'pageRangeDisplayed' | 'totalItemCount' | 'activePage'
  >
>;
