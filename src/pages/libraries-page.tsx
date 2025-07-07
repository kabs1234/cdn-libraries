import { useState, type ReactElement } from 'react';
import LibrariesList from '../components/libraries-list';
import { useLibraries } from '../hooks/hooks';
import Pagination from '../components/pagination';
import { LIBRARIES_TO_SHOW_COUNT, PAGINATION_SIBLINGS_COUNT } from '../const';
import { useParams } from 'react-router';
import Loading from '../components/loading';
import ErrorComponent from '../components/error';

export default function LibrariesPage(): ReactElement {
  const { pageNumber } = useParams();
  const { isPending, error, data } = useLibraries();
  const [currentPage, setCurrentPage] = useState<number>(Number(pageNumber));

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
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
