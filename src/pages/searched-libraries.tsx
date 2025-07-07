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
import Loading from '../components/loading';

export default function SearchedLibraries(): ReactElement {
  const { query } = useParams();
  const { isPending, error, data } = useSearchedLibraries(query as string);
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION_PAGE_DEFAULT_COUNT
  );

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return data.results.length !== 0 ? (
    <>
      <p className="px-6 pt-3 text-2xl font-semibold tracking-wide transition-all duration-200 ">
        {`Search results on ${query}: ${data.total}`}
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
  ) : (
    <>
      <div className="px-6 pt-3 space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium max-w-md">
          <span className="text-indigo-500 dark:text-indigo-400">Oops!</span> We
          couldn't find any matches. Try searching for something different or
          check your spelling.
        </p>

        <p>
          Search results for "
          <span className="text-indigo-600 dark:text-indigo-400">{query}</span>
          ":
          <span className="text-rose-500 dark:text-rose-400 ml-2">0</span>
        </p>
      </div>
    </>
  );
}
