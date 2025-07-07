import { useState, type ReactElement } from 'react';
import LibrariesList from '../components/libraries-list';
import { useSearchedLibraries } from '../hooks/hooks';
import { useParams } from 'react-router';
import Pagination from '../components/pagination';
import {
  PAGINATION_PAGE_DEFAULT_COUNT,
  LIBRARIES_TO_SHOW_COUNT,
  PAGINATION_SIBLINGS_COUNT as PAGINATION_SIBLINGS_COUNT,
} from '../const';

export default function SearchedLibraries(): ReactElement {
  const { query } = useParams();
  const { isPending, error, data } = useSearchedLibraries(query as string);
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION_PAGE_DEFAULT_COUNT
  );

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      <p className="px-6 pt-3 text-2xl font-semibold tracking-wide transition-all duration-200 ">
        {`Search results on ${query}:`}
      </p>

      <LibrariesList libraries={data} currentPage={currentPage} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        siblingCount={PAGINATION_SIBLINGS_COUNT}
        pageSize={LIBRARIES_TO_SHOW_COUNT}
        totalCount={data.available}
        onPageChange={onPageChange}
      />
    </>
  );
}
